import { IFLOWAGENTFileInfo } from "@/services/drive"

export type FileToPanel = Pick<
  IFLOWAGENTFileInfo,
  "id" | "lastModifiedAt" | "name" | "size" | "type"
>
