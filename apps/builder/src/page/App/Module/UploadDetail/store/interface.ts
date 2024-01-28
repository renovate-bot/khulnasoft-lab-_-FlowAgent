import { FILE_ITEM_DETAIL_STATUS_IN_UI } from "../components/DetailList/interface"

interface ISaveToFLOWAGENTDriveParams {
  fileData: File
  folder: string
  allowAnonymous: boolean
  replace: boolean
}
export interface FileDetailInfos {
  loaded: number
  total: number
  status: FILE_ITEM_DETAIL_STATUS_IN_UI
  fileName: string
  contentType: string
  queryID: string
  abortController?: AbortController
  saveToFLOWAGENTDriveParams?: ISaveToFLOWAGENTDriveParams
}
export interface IUploadDetailStore {
  fileDetailInfos: FileDetailInfos[]
  listeners: (() => void)[]
  subscribe: (onStoreChange: () => void) => () => void
  addFileDetailInfo: (fileDetailInfo: FileDetailInfos) => void
  updateFileDetailInfo: (
    queryID: string,
    fileDetailInfo: Partial<{
      loaded: number
      total: number
      status: FILE_ITEM_DETAIL_STATUS_IN_UI
      saveToFLOWAGENTDriveParams: ISaveToFLOWAGENTDriveParams
    }>,
  ) => void
  deleteFileDetailInfo: (queryID: string) => void
  retryUpload: (queryID: string) => void
  getSnapshot: () => FileDetailInfos[]
}
