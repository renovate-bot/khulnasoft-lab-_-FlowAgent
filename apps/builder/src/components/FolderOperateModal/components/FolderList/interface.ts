import { IFLOWAGENTFileInfo } from "@/services/drive"

export interface FolderListProps {
  listData: IFLOWAGENTFileInfo[]
  updateListData: (page: number, path: string) => void
}
