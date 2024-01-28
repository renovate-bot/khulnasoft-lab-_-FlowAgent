import { GraphQLBasicAuth } from "@flowagent-public/public-types"
import { Control } from "react-hook-form"

export interface BasicAuthPanelProps {
  auth?: GraphQLBasicAuth
  control: Control
}
