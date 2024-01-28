import { ApiKeyAuth } from "@flowagent-public/public-types"
import { Control, FieldValues, UseFormWatch } from "react-hook-form"

export interface APIKeyAuthPanelProps {
  auth?: ApiKeyAuth
  control: Control
  watch: UseFormWatch<FieldValues>
}
