import { createContext } from "react"
import { IFLOWAGENTFileInfo } from "@/services/drive"
import { FileToPanel } from "../interface"

interface Injected {
  modalVisible: boolean
  fileList: IFLOWAGENTFileInfo[]
  currentPath: string
  totalPath: string
  sizeType?: "kb" | "mb"
  minSize?: number
  maxSize?: number
  minFileNum?: number
  maxFileNum?: number
  colorScheme: string
  singleSelect?: boolean
  updatePath: (changedPath: string) => void
  submitSelect: (selectIds: FileToPanel[]) => Promise<unknown>
  setModalVisible: (visible: boolean) => void
  getFileList: (
    currentPage: number,
    totalPath: string,
    search?: string,
  ) => Promise<unknown>
  handleCloseModal: () => void
}

export const DriveFileSelectContext = createContext<Injected>({} as Injected)
