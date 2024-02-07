import {
  EXPIRATION_TYPE,
  FLOWAGENTDriveAction,
  FLOWAGENTDriveDeleteMultipleContent,
  FLOWAGENTDriveDeleteOneContent,
  FLOWAGENTDriveDownloadMultipleContent,
  FLOWAGENTDriveDownloadOneContent,
  FLOWAGENTDriveListAllContent,
  FLOWAGENTDriveUpdateContent,
  FLOWAGENTDriveUploadMultipleContent,
  FLOWAGENTDriveUploadOneContent,
  FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE,
  FLOWAGENT_DRIVE_FILTER_TYPE,
  FLOWAGENT_DRIVE_UPLOAD_FILE_TYPE,
} from "@flowagent-public/public-types"

export const FLOWAGENTDriveListAllContentInitial: FLOWAGENTDriveListAllContent = {
  filterType: FLOWAGENT_DRIVE_FILTER_TYPE.NONE,
  search: "",
  fileID: "",
  path: "",
  expirationType: EXPIRATION_TYPE.PERSISTENT,
  hotlinkProtection: true,
  expiry: "",
  limit: "{{20}}",
  page: "{{1}}",
}

export const FLOWAGENTDriveUploadOneContentInitial: FLOWAGENTDriveUploadOneContent = {
  overwriteDuplicate: false,
  fileData: "",
  fileName: "",
  fileType: FLOWAGENT_DRIVE_UPLOAD_FILE_TYPE.AUTO,
  path: "",
}

export const FLOWAGENTDriveUploadMultipleContentInitial: FLOWAGENTDriveUploadMultipleContent =
  {
    overwriteDuplicate: false,
    fileNameArray: "",
    fileDataArray: "",
    fileTypeArray: "",
    path: "",
  }

export const FLOWAGENTDriveDownloadOneContentInitial: FLOWAGENTDriveDownloadOneContent = {
  fileID: "",
}

export const FLOWAGENTDriveDownloadMultipleContentInitial: FLOWAGENTDriveDownloadMultipleContent =
  {
    fileIDs: "",
  }

export const FLOWAGENTDriveDeleteOneContentInitial: FLOWAGENTDriveDeleteOneContent = {
  fileID: "",
}

export const FLOWAGENTDriveDeleteMultipleContentInitial: FLOWAGENTDriveDeleteMultipleContent =
  {
    fileIDs: "",
  }

export const FLOWAGENTDriveUpdateContentInitial: FLOWAGENTDriveUpdateContent = {
  fileID: "",
  fileName: "",
}

export const FLOWAGENTDriveActionInitial: FLOWAGENTDriveAction<FLOWAGENTDriveListAllContent> =
  {
    operation: FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.LIST,
    commandArgs: FLOWAGENTDriveListAllContentInitial,
  }

export const FLOWAGENT_DRIVE_ROOT_PATH = "root"
