import {
  EXPIRATION_TYPE,
  IFLOWAGENTDriveAction,
  IFLOWAGENTDriveDeleteMultipleContent,
  IFLOWAGENTDriveDeleteOneContent,
  IFLOWAGENTDriveDownloadMultipleContent,
  IFLOWAGENTDriveDownloadOneContent,
  IFLOWAGENTDriveListAllContent,
  IFLOWAGENTDriveUpdateContent,
  IFLOWAGENTDriveUploadMultipleContent,
  IFLOWAGENTDriveUploadOneContent,
  IFLOWAGENT_DRIVE_ACTION_REQUEST_TYPE,
  IFLOWAGENT_DRIVE_FILTER_TYPE,
  IFLOWAGENT_DRIVE_UPLOAD_FILE_TYPE,
} from "@flowagent-public/public-types"

export const IFLOWAGENTDriveListAllContentInitial: IFLOWAGENTDriveListAllContent = {
  filterType: IFLOWAGENT_DRIVE_FILTER_TYPE.NONE,
  search: "",
  fileID: "",
  path: "",
  expirationType: EXPIRATION_TYPE.PERSISTENT,
  hotlinkProtection: true,
  expiry: "",
  limit: "{{20}}",
  page: "{{1}}",
}

export const IFLOWAGENTDriveUploadOneContentInitial: IFLOWAGENTDriveUploadOneContent = {
  overwriteDuplicate: false,
  fileData: "",
  fileName: "",
  fileType: IFLOWAGENT_DRIVE_UPLOAD_FILE_TYPE.AUTO,
  path: "",
}

export const IFLOWAGENTDriveUploadMultipleContentInitial: IFLOWAGENTDriveUploadMultipleContent =
  {
    overwriteDuplicate: false,
    fileNameArray: "",
    fileDataArray: "",
    fileTypeArray: "",
    path: "",
  }

export const IFLOWAGENTDriveDownloadOneContentInitial: IFLOWAGENTDriveDownloadOneContent = {
  fileID: "",
}

export const IFLOWAGENTDriveDownloadMultipleContentInitial: IFLOWAGENTDriveDownloadMultipleContent =
  {
    fileIDs: "",
  }

export const IFLOWAGENTDriveDeleteOneContentInitial: IFLOWAGENTDriveDeleteOneContent = {
  fileID: "",
}

export const IFLOWAGENTDriveDeleteMultipleContentInitial: IFLOWAGENTDriveDeleteMultipleContent =
  {
    fileIDs: "",
  }

export const IFLOWAGENTDriveUpdateContentInitial: IFLOWAGENTDriveUpdateContent = {
  fileID: "",
  fileName: "",
}

export const IFLOWAGENTDriveActionInitial: IFLOWAGENTDriveAction<IFLOWAGENTDriveListAllContent> =
  {
    operation: IFLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.LIST,
    commandArgs: IFLOWAGENTDriveListAllContentInitial,
  }

export const IFLOWAGENT_DRIVE_ROOT_PATH = "root"
