import { Global } from "@emotion/react"
import {
  FLOWAGENT_MIXPANEL_EVENT_TYPE,
  FLOWAGENT_MIXPANEL_PUBLIC_PAGE_NAME,
} from "@flowagent-public/mixpanel-utils"
import { UpgradeModalGroup } from "@flowagent-public/upgrade-modal"
import { getCurrentTranslateLanguage } from "@flowagent-public/user-data"
import { useEffect, useMemo } from "react"
import { DndProvider } from "react-dnd"
import { TouchBackend } from "react-dnd-touch-backend"
import { HelmetProvider } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { RouterProvider } from "react-router-dom"
import {
  ConfigProvider,
  MessageGroup,
  ModalGroup,
  NotificationGroup,
  enUS,
  jaJP,
  koKR,
  zhCN,
} from "@flowagent-design/react"
import { flowagentCodeMirrorTooltipStyle } from "@/components/CodeEditor/CodeMirror/theme"
import { getIsFLOWAGENTProductMode } from "@/redux/config/configSelector"
import { FLOWAGENTRoute } from "@/router"
import { globalStyle } from "./style"
import { track } from "./utils/mixpanelHelper"

const dragOptions = {
  enableTouchEvents: true,
  enableMouseEvents: true,
}

function App() {
  const currentUserLanguage = useSelector(getCurrentTranslateLanguage)
  const configLanguage = useMemo(() => {
    switch (currentUserLanguage) {
      case "en-US":
        return enUS
      case "zh-CN":
        return zhCN
      case "ja-JP":
        return jaJP
      case "ko-KR":
        return koKR
      default:
        return enUS
    }
  }, [currentUserLanguage])
  const { i18n } = useTranslation()
  const isProductMode = useSelector(getIsFLOWAGENTProductMode)

  useEffect(() => {
    if (!!currentUserLanguage) {
      i18n.changeLanguage(currentUserLanguage)
    }
  }, [currentUserLanguage, i18n])

  useEffect(() => {
    track(
      FLOWAGENT_MIXPANEL_EVENT_TYPE.FLOWAGENT_ACTIVE,
      FLOWAGENT_MIXPANEL_PUBLIC_PAGE_NAME.PLACEHOLDER,
    )
  }, [])

  return (
    <HelmetProvider>
      <DndProvider backend={TouchBackend} options={dragOptions}>
        <ConfigProvider locale={configLanguage}>
          <Global styles={globalStyle} />
          <MessageGroup pt={!isProductMode ? "46px" : "0"} />
          <UpgradeModalGroup />
          <NotificationGroup pt={!isProductMode ? "46px" : "0"} />
          <ModalGroup />
          <RouterProvider router={FLOWAGENTRoute} />
          <div
            className="flowagentCodeMirrorWrapper"
            css={flowagentCodeMirrorTooltipStyle}
          />
        </ConfigProvider>
      </DndProvider>
    </HelmetProvider>
  )
}

export default App
