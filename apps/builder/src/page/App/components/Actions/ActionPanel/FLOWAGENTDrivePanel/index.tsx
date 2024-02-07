import {
  FLOWAGENTDriveDeleteMultipleContentInitial,
  FLOWAGENTDriveDeleteOneContentInitial,
  FLOWAGENTDriveDownloadMultipleContentInitial,
  FLOWAGENTDriveDownloadOneContentInitial,
  FLOWAGENTDriveListAllContentInitial,
  FLOWAGENTDriveUpdateContentInitial,
  FLOWAGENTDriveUploadMultipleContentInitial,
  FLOWAGENTDriveUploadOneContentInitial,
} from "@flowagent-public/public-configs"
import {
  ActionItem,
  FLOWAGENTDriveAction,
  FLOWAGENTDriveActionTypeContent,
  FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE,
} from "@flowagent-public/public-types"
import { FC, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import FolderOperateModal from "@/components/FolderOperateModal"
import { SingleTypeComponent } from "@/page/App/components/Actions/ActionPanel/SingleTypeComponent"
import { TransformerComponent } from "@/page/App/components/Actions/ActionPanel/TransformerComponent"
import {
  getCachedAction,
  getSelectedAction,
} from "@/redux/config/configSelector"
import { configActions } from "@/redux/config/configSlice"
import { PathSelectProvider } from "./provider"
import { actionItemContainer } from "./style"
import { getInputBody } from "./utils"

const FLOWAGENTDrivePanel: FC = () => {
  const { t } = useTranslation()
  const cachedAction = useSelector(getCachedAction) as ActionItem<
    FLOWAGENTDriveAction<FLOWAGENTDriveActionTypeContent>
  >
  const selectedAction = useSelector(getSelectedAction)!
  const dispatch = useDispatch()
  let content =
    cachedAction.content as FLOWAGENTDriveAction<FLOWAGENTDriveActionTypeContent>

  const handleOptionsValueChange = useCallback(
    (name: string, value: string | boolean) => {
      dispatch(
        configActions.updateCachedAction({
          ...cachedAction,
          content: {
            ...cachedAction.content,
            commandArgs: {
              ...cachedAction.content.commandArgs,
              [name]: value,
            },
          },
        }),
      )
    },
    [cachedAction, dispatch],
  )

  const renderInputBody = getInputBody(content, handleOptionsValueChange)

  const handleActionChange = (value: FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE) => {
    let newCommandArgs: FLOWAGENTDriveActionTypeContent =
      FLOWAGENTDriveListAllContentInitial
    if (
      cachedAction.resourceID === selectedAction.resourceID &&
      (
        selectedAction.content as FLOWAGENTDriveAction<FLOWAGENTDriveActionTypeContent>
      ).operation === value
    ) {
      newCommandArgs = (
        selectedAction.content as FLOWAGENTDriveAction<FLOWAGENTDriveActionTypeContent>
      ).commandArgs
    } else {
      switch (value) {
        case FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.LIST:
          newCommandArgs = FLOWAGENTDriveListAllContentInitial
          break
        case FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.DOWNLOAD_ONE:
          newCommandArgs = FLOWAGENTDriveDownloadOneContentInitial
          break
        case FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.DOWNLOAD_MULTIPLE:
          newCommandArgs = FLOWAGENTDriveDownloadMultipleContentInitial
          break
        case FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.DELETE_ONE:
          newCommandArgs = FLOWAGENTDriveDeleteOneContentInitial
          break
        case FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.DELETE_MULTIPLE:
          newCommandArgs = FLOWAGENTDriveDeleteMultipleContentInitial
          break
        case FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.UPLOAD:
          newCommandArgs = FLOWAGENTDriveUploadOneContentInitial
          break
        case FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.UPLOAD_MULTIPLE:
          newCommandArgs = FLOWAGENTDriveUploadMultipleContentInitial
        case FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.UPDATE:
          newCommandArgs = FLOWAGENTDriveUpdateContentInitial
          break
      }
    }
    dispatch(
      configActions.updateCachedAction({
        ...cachedAction,
        content: {
          ...cachedAction.content,
          operation: value,
          commandArgs: newCommandArgs,
        },
      }),
    )
  }

  const FLOWAGENTDriveActionList = [
    {
      label: t("editor.action.panel.label.option.drive.method.list"),
      value: FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.LIST,
    },
    {
      label: t("editor.action.panel.label.option.drive.method.download"),
      value: FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.DOWNLOAD_ONE,
    },
    {
      label: t(
        "editor.action.panel.label.option.drive.method.download_multi_file",
      ),
      value: FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.DOWNLOAD_MULTIPLE,
    },
    {
      label: t("editor.action.panel.label.option.drive.method.delete"),
      value: FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.DELETE_ONE,
    },
    {
      label: t(
        "editor.action.panel.label.option.drive.method.delete_multi_file",
      ),
      value: FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.DELETE_MULTIPLE,
    },
    {
      label: t("editor.action.panel.label.option.drive.method.upload_file"),
      value: FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.UPLOAD,
    },
    {
      label: t(
        "editor.action.panel.label.option.drive.method.upload_multi_file",
      ),
      value: FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.UPLOAD_MULTIPLE,
    },
    {
      label: t("editor.action.panel.label.option.drive.method.update"),
      value: FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.UPDATE,
    },
  ]

  return (
    <PathSelectProvider handleOptionsValueChange={handleOptionsValueChange}>
      <div css={actionItemContainer}>
        <SingleTypeComponent
          title={t("editor.action.panel.label.drive.method")}
          tips={t("editor.action.panel.label.tips.drive.method")}
          componentType="select"
          value={content.operation}
          showSearch
          onChange={handleActionChange}
          options={FLOWAGENTDriveActionList}
        />
        {renderInputBody}
        <TransformerComponent />
      </div>
      <FolderOperateModal />
    </PathSelectProvider>
  )
}

FLOWAGENTDrivePanel.displayName = "FLOWAGENTDrivePanel"
export default FLOWAGENTDrivePanel
