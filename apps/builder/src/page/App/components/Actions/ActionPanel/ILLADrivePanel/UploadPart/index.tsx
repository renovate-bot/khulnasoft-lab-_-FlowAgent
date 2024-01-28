import {
  FLOWAGENTDriveUploadOneContent,
  FLOWAGENT_DRIVE_UPLOAD_FILE_TYPE,
} from "@flowagent-public/public-types"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { CODE_LANG } from "@/components/CodeEditor/CodeMirror/extensions/interface"
import { InputEditor } from "@/page/App/components/Actions/InputEditor"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
import { SingleTypeComponent } from "../../SingleTypeComponent"
import FolderSelect from "../components/FolderSelect"
import { FLOWAGENTDriveActionPartProps } from "../interface"

export const UploadPart: FC<FLOWAGENTDriveActionPartProps> = (props) => {
  const { t } = useTranslation()
  const commandArgs = props.commandArgs as FLOWAGENTDriveUploadOneContent
  const { handleOptionsValueChange } = props

  const FileTypeOptions = [
    {
      label: t("editor.inspect.setter_option.file_download.auto"),
      value: FLOWAGENT_DRIVE_UPLOAD_FILE_TYPE.AUTO,
    },
    {
      label: t("editor.inspect.setter_option.file_download.plain_text"),
      value: FLOWAGENT_DRIVE_UPLOAD_FILE_TYPE.TXT,
    },
    {
      label: t("editor.inspect.setter_option.file_download.jpeg"),
      value: FLOWAGENT_DRIVE_UPLOAD_FILE_TYPE.JPEG,
    },
    {
      label: t("editor.inspect.setter_option.file_download.png"),
      value: FLOWAGENT_DRIVE_UPLOAD_FILE_TYPE.PNG,
    },
    {
      label: t("editor.inspect.setter_option.file_download.svg"),
      value: FLOWAGENT_DRIVE_UPLOAD_FILE_TYPE.SVG,
    },
    {
      label: t("editor.inspect.setter_option.file_download.json"),
      value: FLOWAGENT_DRIVE_UPLOAD_FILE_TYPE.JSON,
    },
    {
      label: t("editor.inspect.setter_option.file_download.csv"),
      value: FLOWAGENT_DRIVE_UPLOAD_FILE_TYPE.CSV,
    },
    {
      label: t("editor.inspect.setter_option.file_download.tsv"),
      value: FLOWAGENT_DRIVE_UPLOAD_FILE_TYPE.TSV,
    },
    {
      label: t("editor.inspect.setter_option.file_download.excel"),
      value: FLOWAGENT_DRIVE_UPLOAD_FILE_TYPE.XLSX,
    },
  ]

  return (
    <>
      <SingleTypeComponent
        title={t("editor.action.panel.label.drive.overwrite")}
        tips={t("editor.action.panel.label.tips.drive.overwrite")}
        value={commandArgs.overwriteDuplicate}
        componentType="switch"
        onChange={(value) =>
          handleOptionsValueChange("overwriteDuplicate", value)
        }
      />
      <InputEditor
        title={t("editor.inspect.setter_label.file_download.file_name")}
        tips={t("editor.inspect.setter_tips.file_download.file_name")}
        placeholder={t(
          "editor.inspect.setter.placeholder.file_download.file_name",
        )}
        mode={CODE_LANG.JAVASCRIPT}
        value={commandArgs.fileName}
        onChange={(value) => handleOptionsValueChange("fileName", value)}
        expectedType={VALIDATION_TYPES.STRING}
      />
      <InputEditor
        title={t("editor.inspect.setter_label.drive_builder.fileData")}
        tips={t("editor.inspect.setter_tips.drive_builder.fileData")}
        placeholder={t(
          "editor.inspect.setter.placeholder.drive_builder.fileData",
        )}
        mode={CODE_LANG.JAVASCRIPT}
        value={commandArgs.fileData}
        onChange={(value) => handleOptionsValueChange("fileData", value)}
        expectedType={VALIDATION_TYPES.STRING}
      />
      <SingleTypeComponent
        title={t("editor.inspect.setter_label.file_download.file_type")}
        tips={t("editor.inspect.setter_tips.file_download.file_type")}
        value={commandArgs.fileType}
        onChange={(value) => handleOptionsValueChange("fileType", value)}
        componentType="select"
        options={FileTypeOptions}
      />
      <FolderSelect value={commandArgs.path} />
    </>
  )
}

UploadPart.displayName = "UploadPart"
