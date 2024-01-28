import {
  IFLOWAGENT_MIXPANEL_EVENT_TYPE,
  MixpanelTrackContext,
} from "@flowagent-public/mixpanel-utils"
import { getAuthToken, getIFLOWAGENTBuilderURL } from "@flowagent-public/utils"
import { FC, MouseEvent, useContext, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { Button, Space } from "@flowagent-design/react"
import { ActionButtonGroupProps } from "./interface"
import { appActionButtonStyle } from "./style"

export const ActionButtonGroup: FC<ActionButtonGroupProps> = (props) => {
  const { t } = useTranslation()
  const { appID, appDeployed, canEditApp } = props
  const { teamIdentifier } = useParams()
  const { track } = useContext(MixpanelTrackContext)

  const toDeployedApp = useMemo(
    () => (e: MouseEvent) => {
      e.stopPropagation()
      track?.(
        IFLOWAGENT_MIXPANEL_EVENT_TYPE.CLICK,
        {
          element: "app_launch",
          parameter5: appID,
        },
        "both",
      )
      window.open(
        `${getIFLOWAGENTBuilderURL()}/${teamIdentifier}/deploy/app/${appID}?token=${getAuthToken()}`,
        "_blank",
      )
    },
    [appID, teamIdentifier, track],
  )

  const toEditApp = useMemo(
    () => (e: MouseEvent) => {
      e.stopPropagation()
      track?.(
        IFLOWAGENT_MIXPANEL_EVENT_TYPE.CLICK,
        {
          element: "app_edit",
          parameter5: appID,
        },
        "both",
      )
      window.open(
        `${getIFLOWAGENTBuilderURL()}/${teamIdentifier}/app/${appID}?token=${getAuthToken()}`,
        "_blank",
      )
    },
    [appID, teamIdentifier, track],
  )

  return (
    <Space
      direction="horizontal"
      w="100%"
      justifyContent="end"
      size="8px"
      alignItems="center"
    >
      {appDeployed ? (
        <Button
          css={appActionButtonStyle}
          className="dashboardAppEditButton"
          variant="text"
          colorScheme="grayBlue"
          onClick={toDeployedApp}
        >
          {t("dashboard.common.launch")}
        </Button>
      ) : null}
      {canEditApp ? (
        <Button
          css={appActionButtonStyle}
          className="dashboardAppLaunchButton"
          variant="text"
          colorScheme="grayBlue"
          onClick={toEditApp}
        >
          {t("dashboard.common.edit")}
        </Button>
      ) : null}
    </Space>
  )
}
