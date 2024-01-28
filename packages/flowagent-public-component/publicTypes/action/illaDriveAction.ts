import { EXPIRATION_TYPE, UPLOAD_FILE_STATUS } from "../drive"

export enum IFLOWAGENT_DRIVE_ACTION_REQUEST_TYPE {
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

export enum IFLOWAGENT_DRIVE_FILTER_TYPE {
  NONE = "none",
  BY_ID = "byID",
  BY_NAME = "byName",
}

export enum IFLOWAGENT_DRIVE_UPLOAD_FILE_TYPE {
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

export interface IFLOWAGENTDriveListAllContent {
  filterType: IFLOWAGENT_DRIVE_FILTER_TYPE
  search: string
  fileID: string
  path: string
  expirationType: EXPIRATION_TYPE
  expiry: string
  hotlinkProtection: boolean
  limit: string
  page: string
}

export interface IFLOWAGENTDriveUploadOneContent {
  overwriteDuplicate: boolean
  fileData: string
  fileName: string
  fileType: IFLOWAGENT_DRIVE_UPLOAD_FILE_TYPE
  path: string
}

export interface IFLOWAGENTDriveUploadMultipleContent {
  overwriteDuplicate: boolean
  fileNameArray: string
  fileDataArray: string
  fileTypeArray: string
  path: string
}

export interface IFLOWAGENTDriveDownloadOneContent {
  fileID: string
}

export interface IFLOWAGENTDriveDownloadMultipleContent {
  fileIDs: string
}

export interface IFLOWAGENTDriveDeleteOneContent {
  fileID: string
}

export interface IFLOWAGENTDriveDeleteMultipleContent {
  fileIDs: string
}

export interface IFLOWAGENTDriveUpdateContent {
  fileID: string
  fileName: string
}

export type IFLOWAGENTDriveActionTypeContent =
  | IFLOWAGENTDriveListAllContent
  | IFLOWAGENTDriveDownloadOneContent
  | IFLOWAGENTDriveDownloadMultipleContent
  | IFLOWAGENTDriveDeleteOneContent
  | IFLOWAGENTDriveDeleteMultipleContent
  | IFLOWAGENTDriveUploadOneContent
  | IFLOWAGENTDriveUploadMultipleContent
  | IFLOWAGENTDriveUpdateContent

export interface IFLOWAGENTDriveAction<T> {
  operation: IFLOWAGENT_DRIVE_ACTION_REQUEST_TYPE
  commandArgs: T
}

export interface IFLOWAGENTDriveUpdateStatusAction {
  operation: IFLOWAGENT_DRIVE_ACTION_REQUEST_TYPE.UPDATE_FILE_STATUS
  fileID: string
  status: UPLOAD_FILE_STATUS
}
