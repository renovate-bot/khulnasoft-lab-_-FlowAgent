import { FLOWAGENTFileInfo } from "@/services/drive"

export interface FolderListProps {
  listData: FLOWAGENTFileInfo[]
  updateListData: (page: number, path: string) => void
}
