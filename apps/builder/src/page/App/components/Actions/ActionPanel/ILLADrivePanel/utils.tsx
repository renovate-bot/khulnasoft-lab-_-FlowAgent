import {
  FLOWAGENTDriveAction,
  FLOWAGENTDriveActionTypeContent,
  FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE,
} from "@flowagent-public/public-types"
import { DeleteMultiplePart } from "./DeleteMultiplePart"
import { DeleteOnePart } from "./DeleteOnePart"
import { DownloadMultiplePart } from "./DownloadMultiplePart"
import { DownloadOnePart } from "./DownloadOnePart"
import { ListAllPart } from "./ListAllPart"
import { UpdatePart } from "./UpdatePart"
import { UploadMultiplePart } from "./UploadMultiplePart"
import { UploadPart } from "./UploadPart"

export const getInputBody = (
  content: FLOWAGENTDriveAction<FLOWAGENTDriveActionTypeContent>,
  handleOptionsValueChange: (name: string, value: string | boolean) => void,
) => {
  switch (content.operation) {
    case FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.LIST:
      return (
        <ListAllPart
          handleOptionsValueChange={handleOptionsValueChange}
          commandArgs={content.commandArgs}
        />
      )
    case FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.DOWNLOAD_ONE:
      return (
        <DownloadOnePart
          handleOptionsValueChange={handleOptionsValueChange}
          commandArgs={content.commandArgs}
        />
      )
    case FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.DOWNLOAD_MULTIPLE:
      return (
        <DownloadMultiplePart
          commandArgs={content.commandArgs}
          handleOptionsValueChange={handleOptionsValueChange}
        />
      )
    case FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.DELETE_ONE:
      return (
        <DeleteOnePart
          handleOptionsValueChange={handleOptionsValueChange}
          commandArgs={content.commandArgs}
        />
      )
    case FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.DELETE_MULTIPLE:
      return (
        <DeleteMultiplePart
          commandArgs={content.commandArgs}
          handleOptionsValueChange={handleOptionsValueChange}
        />
      )
    case FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.UPLOAD:
      return (
        <UploadPart
          handleOptionsValueChange={handleOptionsValueChange}
          commandArgs={content.commandArgs}
        />
      )
    case FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.UPLOAD_MULTIPLE:
      return (
        <UploadMultiplePart
          commandArgs={content.commandArgs}
          handleOptionsValueChange={handleOptionsValueChange}
        />
      )
    case FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.UPDATE:
      return (
        <UpdatePart
          handleOptionsValueChange={handleOptionsValueChange}
          commandArgs={content.commandArgs}
        />
      )
    default:
      return <></>
  }
}
