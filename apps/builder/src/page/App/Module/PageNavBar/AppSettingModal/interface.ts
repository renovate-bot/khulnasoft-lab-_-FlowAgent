import { AppInfoShape } from "@flowagent-public/public-types"

export interface AppSettingModalProps {
  appInfo: AppInfoShape
  visible: boolean
  onVisibleChange: (visible: boolean) => void
  onSaveEvent: () => void
  onCloseEvent: () => void
}
