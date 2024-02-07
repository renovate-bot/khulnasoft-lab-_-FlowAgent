import { FLOWAGENTFileInfo } from "@/services/drive"

export type FileToPanel = Pick<
  FLOWAGENTFileInfo,
  "id" | "lastModifiedAt" | "name" | "size" | "type"
>
