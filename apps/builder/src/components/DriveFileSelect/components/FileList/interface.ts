import { MutableRefObject } from "react"
import { FileToPanel } from "@/components/DriveFileSelect/interface"
import { FLOWAGENTFileInfo } from "@/services/drive"

export interface FileListProps {
  listData: FLOWAGENTFileInfo[]
  totalPath: string
  search?: MutableRefObject<string>
  selectItems: FileToPanel[]
  colorScheme: string
  singleSelect?: boolean
  getFileList: (currentPage: number, totalPath: string, search?: string) => void
  updatePath: (changedPath: string) => void
  onChange: (flag: boolean, item: FileToPanel) => void
  handleSingleChange: (item: FileToPanel) => void
}
