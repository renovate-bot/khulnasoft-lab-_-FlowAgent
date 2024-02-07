import { EXPIRATION_TYPE, UPLOAD_FILE_STATUS } from "../drive"

export enum FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE {
  LIST = "ListFiles",
  DOWNLOAD_ONE = "GetDownloadAddress",
  DOWNLOAD_MULTIPLE = "GetMultipleDownloadAddress",
  DELETE_ONE = "DeleteFile",
  DELETE_MULTIPLE = "DeleteMultipleFile",
  UPLOAD = "GetUploadAddress",
  UPLOAD_MULTIPLE = "GetMultipleUploadAddress",
  UPDATE = "RenameFile",
  UPDATE_FILE_STATUS = "UpdateFileStatus",
}

export enum FLOWAGENT_DRIVE_FILTER_TYPE {
  NONE = "none",
  BY_ID = "byID",
  BY_NAME = "byName",
}

export enum FLOWAGENT_DRIVE_UPLOAD_FILE_TYPE {
  AUTO = "auto",
  TXT = "txt",
  JPEG = "jpeg",
  PNG = "png",
  SVG = "svg",
  JSON = "json",
  CSV = "csv",
  TSV = "tsv",
  XLSX = "xlsx",
}

export interface FLOWAGENTDriveListAllContent {
  filterType: FLOWAGENT_DRIVE_FILTER_TYPE
  search: string
  fileID: string
  path: string
  expirationType: EXPIRATION_TYPE
  expiry: string
  hotlinkProtection: boolean
  limit: string
  page: string
}

export interface FLOWAGENTDriveUploadOneContent {
  overwriteDuplicate: boolean
  fileData: string
  fileName: string
  fileType: FLOWAGENT_DRIVE_UPLOAD_FILE_TYPE
  path: string
}

export interface FLOWAGENTDriveUploadMultipleContent {
  overwriteDuplicate: boolean
  fileNameArray: string
  fileDataArray: string
  fileTypeArray: string
  path: string
}

export interface FLOWAGENTDriveDownloadOneContent {
  fileID: string
}

export interface FLOWAGENTDriveDownloadMultipleContent {
  fileIDs: string
}

export interface FLOWAGENTDriveDeleteOneContent {
  fileID: string
}

export interface FLOWAGENTDriveDeleteMultipleContent {
  fileIDs: string
}

export interface FLOWAGENTDriveUpdateContent {
  fileID: string
  fileName: string
}

export type FLOWAGENTDriveActionTypeContent =
  | FLOWAGENTDriveListAllContent
  | FLOWAGENTDriveDownloadOneContent
  | FLOWAGENTDriveDownloadMultipleContent
  | FLOWAGENTDriveDeleteOneContent
  | FLOWAGENTDriveDeleteMultipleContent
  | FLOWAGENTDriveUploadOneContent
  | FLOWAGENTDriveUploadMultipleContent
  | FLOWAGENTDriveUpdateContent

export interface FLOWAGENTDriveAction<T> {
  operation: FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE
  commandArgs: T
}

export interface FLOWAGENTDriveUpdateStatusAction {
  operation: FLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.UPDATE_FILE_STATUS
  fileID: string
  status: UPLOAD_FILE_STATUS
}
