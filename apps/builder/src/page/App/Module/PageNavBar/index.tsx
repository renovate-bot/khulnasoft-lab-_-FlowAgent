import { isFLOWAGENTAPiError } from "@flowagent-public/flowagent-net"
import { FLOWAGENT_MIXPANEL_EVENT_TYPE } from "@flowagent-public/mixpanel-utils"
import { useUpgradeModal } from "@flowagent-public/upgrade-modal"
import { getCurrentTeamInfo, getPlanUtils } from "@flowagent-public/user-data"
import {
  canUseUpgradeFeature,
  showShareAppModal,
} from "@flowagent-public/user-role-utils"
import {
  fromNow,
  getFLOWAGENTBuilderURL,
  getFLOWAGENTCloudURL,
  isCloudVersion,
} from "@flowagent-public/utils"
import { FC, useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import {
  Button,
  ExitIcon,
  FullScreenIcon,
  QuestionCircleIcon,
  getColor,
  useMessage,
  useModal,
} from "@flowagent-design/react"
import Logo from "@/assets/flowagent-logo.svg?react"
import SnowIcon from "@/assets/snow-icon.svg?react"
import { AppName } from "@/page/App/Module/PageNavBar/AppName"
import { AppSizeButtonGroup } from "@/page/App/Module/PageNavBar/AppSizeButtonGroup"
import { CollaboratorsList } from "@/page/App/Module/PageNavBar/CollaboratorsList"
import { DeployButtonGroup } from "@/page/App/Module/PageNavBar/DeloyButtonGroup"
import { ShareAppButton } from "@/page/App/Module/PageNavBar/ShareAppButton"
import { WindowIcons } from "@/page/App/Module/PageNavBar/WindowIcons"
import { PageNavBarProps } from "@/page/App/Module/PageNavBar/interface"
import {
  getIsFLOWAGENTEditMode,
  getIsFLOWAGENTGuideMode,
  getIsFLOWAGENTPreviewMode,
  getIsOnline,
} from "@/redux/config/configSelector"
import { configActions } from "@/redux/config/configSlice"
import { getHasMissingResourceAction } from "@/redux/currentApp/action/actionSelector"
import { getAppInfo } from "@/redux/currentApp/appInfo/appInfoSelector"
import { appInfoActions } from "@/redux/currentApp/appInfo/appInfoSlice"
import { fetchDeployApp, forkCurrentApp } from "@/services/apps"
import { trackInEditor } from "@/utils/mixpanelHelper"
import MissingResourceModal from "../../components/MissingRosourceModal"
import {
  buttonGroupStyle,
  descriptionStyle,
  informationStyle,
  logoCursorStyle,
  missingContentStyle,
  missingHeaderContainerStyle,
  missingResourceHeaderStyle,
  missingResourceModalContainerStyle,
  navBarStyle,
  rightContentStyle,
  rowCenter,
  saveFailedTipStyle,
  viewControlStyle,
} from "./style"

export const PageNavBar: FC<PageNavBarProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const message = useMessage()

  const { teamIdentifier } = useParams()

  const appInfo = useSelector(getAppInfo)
  const isOnline = useSelector(getIsOnline)
  const isEditMode = useSelector(getIsFLOWAGENTEditMode)
  const isPreviewMode = useSelector(getIsFLOWAGENTPreviewMode)
  const isGuideMode = useSelector(getIsFLOWAGENTGuideMode)
  const teamInfo = useSelector(getCurrentTeamInfo)!!
  const hasMissingResources = useSelector(getHasMissingResourceAction)
  const modal = useModal()

  const upgradeModal = useUpgradeModal()

  const [deployLoading, setDeployLoading] = useState<boolean>(false)
  const [shownMissingResource, setShownMissingResource] = useState(false)

  const canUseBillingFeature = canUseUpgradeFeature(
    teamInfo.myRole,
    getPlanUtils(teamInfo),
    teamInfo?.totalTeamLicense?.teamLicensePurchased,
    teamInfo?.totalTeamLicense?.teamLicenseAllPaid,
  )

  const deployApp = useCallback(
    async (
      appId: string,
      isPublic: boolean,
      onSuccess?: () => void,
      onFailed?: (error: unknown) => void,
    ) => {
      setDeployLoading(true)
      try {
        await fetchDeployApp(appId, isPublic)
        dispatch(appInfoActions.updateAppDeployedReducer(true))
        dispatch(appInfoActions.updateAppPublicReducer(isPublic))
        window.open(
          `${getFLOWAGENTBuilderURL()}/${teamIdentifier}/deploy/app/${appId}`,
          "_blank",
        )
        onSuccess?.()
      } catch (error) {
        message.error({
          content: t("editor.deploy.fail"),
        })
        onFailed?.(error)
      } finally {
        setDeployLoading(false)
      }
    },
    [dispatch, teamIdentifier, message, t],
  )

  const forkGuideAppAndDeploy = useCallback(
    async (appName: string) => {
      setDeployLoading(true)
      const appId = await forkCurrentApp(appName)
      await deployApp(appId, false)
      setDeployLoading(false)
    },
    [deployApp],
  )

  const handleClickDeploy = async () => {
    if (isGuideMode) {
      await forkGuideAppAndDeploy(appInfo.appName)
    } else {
      trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.CLICK, {
        element: "deploy",
      })
      if (hasMissingResources) {
        trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.SHOW, {
          element: "missing_resource_confirm_modal",
        })
        modal.show({
          children: (
            <div css={missingResourceModalContainerStyle}>
              <div css={missingHeaderContainerStyle}>
                <QuestionCircleIcon color={getColor("orange", "03")} />
                <h6 css={missingResourceHeaderStyle}>
                  {t(
                    "editor.action.panel.title.missing_resource.missing_resources",
                  )}
                </h6>
              </div>
              <p css={missingContentStyle}>
                {t(
                  "editor.action.panel.desc.missing_resource.some_resources_of_th",
                )}
              </p>
            </div>
          ),
          okText: t("editor.action.panel.button.missing_resource.deploy"),
          cancelText: t(
            "editor.action.panel.button.missing_resource.configure",
          ),
          maskClosable: false,
          okButtonProps: {
            colorScheme: "black",
          },
          w: "320px",
          minW: "320px",
          onOk: async () => {
            trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.CLICK, {
              element: "missing_resource_confirm_modal_deploy",
            })
            await deployApp(appInfo.appId, appInfo.config.public)
          },
          onCancel() {
            trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.CLICK, {
              element: "missing_resource_confirm_modal_configure",
            })
            setShownMissingResource(true)
          },
        })
        return
      }
      await deployApp(appInfo.appId, appInfo.config.public)
    }
  }

  const handleClickDeployMenu = useCallback(
    async (key: string | number) => {
      if (key === "public" && !canUseBillingFeature) {
        upgradeModal({
          modalType: "upgrade",
          from: "app_edit_deploy_public",
        })
      } else {
        trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.REQUEST, {
          element: "invite_modal_public_switch",
          parameter1: "deploy",
          parameter2: "trigger",
          parameter4: appInfo.config.public ? "on" : "off",
          parameter5: appInfo.appId,
        })
        await deployApp(
          appInfo.appId,
          key === "public",
          () => {
            trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.REQUEST, {
              element: "invite_modal_public_switch",
              parameter1: "deploy",
              parameter2: "suc",
              parameter4: appInfo.config.public ? "on" : "off",
              parameter5: appInfo.appId,
            })
          },
          (error) => {
            trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.REQUEST, {
              element: "invite_modal_public_switch",
              parameter1: "deploy",
              parameter2: "failed",
              parameter3: isFLOWAGENTAPiError(error)
                ? error?.data?.errorFlag
                : "unknown",
              parameter4: appInfo.config.public ? "on" : "off",
              parameter5: appInfo.appId,
            })
          },
        )
      }
    },
    [
      appInfo.appId,
      appInfo.config.public,
      canUseBillingFeature,
      deployApp,
      upgradeModal,
    ],
  )

  const handlePreviewButtonClick = useCallback(() => {
    if (isEditMode) {
      trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.CLICK, {
        element: "preview",
      })
      dispatch(configActions.updateIllaMode("preview"))
    } else {
      trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.CLICK, {
        element: "exit_preview",
      })
      dispatch(configActions.updateIllaMode("edit"))
    }
  }, [dispatch, isEditMode])

  const PreviewButton = (
    <Button
      colorScheme="grayBlue"
      leftIcon={isEditMode ? <FullScreenIcon /> : <ExitIcon />}
      variant="fill"
      bdRadius="8px"
      onClick={handlePreviewButtonClick}
    >
      {isEditMode ? t("preview.button_text") : t("exit_preview")}
    </Button>
  )

  const canShowShareAppModal = showShareAppModal(
    teamInfo,
    teamInfo.myRole,
    appInfo.config.public,
    appInfo.config.publishedToMarketplace,
    appInfo.deployed,
  )

  useEffect(() => {
    !isGuideMode &&
      canShowShareAppModal &&
      trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.SHOW, { element: "invite_entry" })
  }, [canShowShareAppModal, isGuideMode])

  return (
    <div className={className} css={navBarStyle}>
      <div css={rowCenter}>
        <Link to={getFLOWAGENTCloudURL()}>
          <Logo width="34px" css={logoCursorStyle} />
        </Link>

        <div css={informationStyle}>
          <AppName appInfo={appInfo} />
          {isOnline ? (
            <div css={descriptionStyle}>
              {t("edit_at") + " " + fromNow(appInfo?.updatedAt)}
            </div>
          ) : (
            <div css={saveFailedTipStyle}>
              <SnowIcon />
              <span> {t("edit_failed")}</span>
            </div>
          )}
        </div>
      </div>
      <div css={viewControlStyle()}>
        {isEditMode && <WindowIcons />}
        {isPreviewMode && <AppSizeButtonGroup />}
      </div>
      <div css={rightContentStyle}>
        {isEditMode ? (
          <div css={buttonGroupStyle}>
            {isCloudVersion && (
              <>
                <CollaboratorsList />
                {canShowShareAppModal && <ShareAppButton appInfo={appInfo} />}
              </>
            )}
            {PreviewButton}
            {/* {hasMissingResources && (
              <ResourceMissingTipButton ref={missingResourceButtonRef} />
            )} */}
            <DeployButtonGroup
              disPrivate={appInfo.config.publishedToMarketplace}
              loading={deployLoading}
              isPublic={appInfo.config.public}
              isGuideMode={isGuideMode}
              canUseBillingFeature={canUseBillingFeature}
              onClickDeploy={handleClickDeploy}
              onClickDeployMenu={handleClickDeployMenu}
            />
          </div>
        ) : (
          PreviewButton
        )}
      </div>
      <MissingResourceModal
        shown={shownMissingResource}
        changeShown={setShownMissingResource}
      />
    </div>
  )
}

PageNavBar.displayName = "PageNavBar"
