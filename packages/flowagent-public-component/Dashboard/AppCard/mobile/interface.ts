import { EditorInfo } from "@flowagent-public/public-types"
import { ActivityInfo } from "@flowagent-public/public-types"

export interface MobileCardItemProps {
  appName: string
  appID: string
  appDeployed: boolean
  publishedToMarketplace: boolean
  appActivity: ActivityInfo
  description?: string
  editorInfo?: EditorInfo[]
  showLaunchButton?: boolean
}
