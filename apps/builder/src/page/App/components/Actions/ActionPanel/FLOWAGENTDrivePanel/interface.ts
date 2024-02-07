import { FLOWAGENTDriveActionTypeContent } from "@flowagent-public/public-types"

export interface FLOWAGENTDriveActionPartProps {
  commandArgs: FLOWAGENTDriveActionTypeContent
  handleOptionsValueChange: (name: string, value: string | boolean) => void
}
