import { MicrosoftSqlActionType } from "@flowagent-public/public-types"

export interface MSSQLModeProps {
  modeContent: MicrosoftSqlActionType
  onChange: (value: string, name: string) => void
  resourceID?: string
}
