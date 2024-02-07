import { SerializedStyles } from "@emotion/react"
import { GCS_OBJECT_TYPE } from "@flowagent-public/public-types"
import {
  FLOWAGENT_DRIVE_OBJECT_TYPE,
  getFileTypeByContentType,
} from "@flowagent-public/utils"
import { ReactNode } from "react"
import {
  FileDefaultIcon,
  FileExcelIcon,
  FileMusicIcon,
  FilePPTIcon,
  FilePdfIcon,
  FilePictureIcon,
  FileVideoIcon,
  FileWordIcon,
} from "@flowagent-design/react"
import { AnonymousIcon, FolderIcon, ZipIcon } from "."

export const getFileIconByFLOWAGENTFileType = (
  type: FLOWAGENT_DRIVE_OBJECT_TYPE,
  iconStyle?: SerializedStyles,
) => {
  switch (type) {
    case FLOWAGENT_DRIVE_OBJECT_TYPE.IMAGE:
      return <FilePictureIcon css={iconStyle} />
    case FLOWAGENT_DRIVE_OBJECT_TYPE.VIDEO:
      return <FileVideoIcon css={iconStyle} />
    case FLOWAGENT_DRIVE_OBJECT_TYPE.AUDIO:
      return <FileMusicIcon css={iconStyle} />
    case FLOWAGENT_DRIVE_OBJECT_TYPE.PDF:
      return <FilePdfIcon css={iconStyle} />
    case FLOWAGENT_DRIVE_OBJECT_TYPE.WORD:
      return <FileWordIcon css={iconStyle} />
    case FLOWAGENT_DRIVE_OBJECT_TYPE.EXCEL:
      return <FileExcelIcon css={iconStyle} />
    case FLOWAGENT_DRIVE_OBJECT_TYPE.PPT:
      return <FilePPTIcon css={iconStyle} />
    case FLOWAGENT_DRIVE_OBJECT_TYPE.FOLDER:
      return <FolderIcon css={iconStyle} />
    case FLOWAGENT_DRIVE_OBJECT_TYPE.ZIP:
      return <ZipIcon css={iconStyle} />
    case FLOWAGENT_DRIVE_OBJECT_TYPE.ANONYMOUS_FOLDER:
      return <AnonymousIcon css={iconStyle} />
    default:
      return <FileDefaultIcon css={iconStyle} />
  }
}

export const getFileIconByContentType = (
  type: GCS_OBJECT_TYPE,
  contentType?: string,
  iconStyle?: SerializedStyles,
): ReactNode => {
  const flowagentFileType = getFileTypeByContentType(type, contentType)
  return getFileIconByFLOWAGENTFileType(flowagentFileType, iconStyle)
}
