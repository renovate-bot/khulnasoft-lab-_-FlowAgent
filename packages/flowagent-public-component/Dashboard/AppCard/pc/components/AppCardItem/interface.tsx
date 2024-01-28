import { AppConfig } from "@flowagent-public/public-types"

export interface AppCardActionItemProps {
  appID: string
  appDeployed: boolean
  appName: string
  appConfig: AppConfig
}
