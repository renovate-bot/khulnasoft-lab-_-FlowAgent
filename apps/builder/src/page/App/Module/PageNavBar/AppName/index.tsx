import { FLOWAGENT_MIXPANEL_EVENT_TYPE } from "@flowagent-public/mixpanel-utils"
import { FC, useState } from "react"
import { PenIcon } from "@flowagent-design/react"
import { AppSettingModal } from "@/page/App/Module/PageNavBar/AppSettingModal"
import { trackInEditor } from "@/utils/mixpanelHelper"
import { AppNameProps } from "./interface"
import { nameContainerStyle, nameStyle } from "./style"

export const AppName: FC<AppNameProps> = (props) => {
  const { appInfo } = props

  const [appSettingVisible, setAppSettingVisible] = useState(false)

  const trackHoverOnAppName = () => {
    trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.HOVER, {
      element: "app_rename",
    })
  }

  const handleOpenAppSettingModal = () => {
    setAppSettingVisible(true)
    trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.SHOW, {
      element: "app_setting_modal",
      parameter5: appInfo.appId,
    })
  }

  return (
    <>
      <div
        css={nameContainerStyle}
        onMouseEnter={trackHoverOnAppName}
        onClick={handleOpenAppSettingModal}
      >
        <span css={nameStyle}>{appInfo.appName}</span>
        <PenIcon size="16px" />
      </div>
      <AppSettingModal
        appInfo={appInfo}
        visible={appSettingVisible}
        onVisibleChange={(visible) => {
          setAppSettingVisible(visible)
        }}
        onSaveEvent={() => {
          trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.CLICK, {
            element: "app_setting_modal_save",
            parameter5: appInfo.appId,
          })
        }}
        onCloseEvent={() => {
          trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.CLICK, {
            element: "app_setting_modal_close",
            parameter5: appInfo.appId,
          })
        }}
      />
    </>
  )
}
