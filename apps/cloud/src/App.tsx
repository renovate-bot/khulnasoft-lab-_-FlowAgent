import createCache from "@emotion/cache"
import { CacheProvider, Global } from "@emotion/react"
import { px2Rem } from "@flowagent-public/styleis-plugin"
import { getCurrentTranslateLanguage } from "@flowagent-public/user-data"
import { FC, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { MessageGroup, ModalGroup } from "@flowagent-design/react"
import { getLocalLanguage } from "@/i18n"
import { FLOWAGENTRoute } from "@/router"
import { globalStyles, messageStyle } from "./style"

const App: FC = () => {
  const currentLanguage =
    useSelector(getCurrentTranslateLanguage) || getLocalLanguage()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (currentLanguage && currentLanguage !== i18n.language) {
      i18n.changeLanguage(currentLanguage)
    }
  }, [currentLanguage, i18n])

  let cache = createCache({
    key: "css",
    stylisPlugins: [
      px2Rem({
        unit: "rem",
        remSize: 100,
      }),
    ],
  })

  return (
    <CacheProvider value={cache}>
      <Global styles={globalStyles} />
      <MessageGroup _css={messageStyle} />
      <ModalGroup />
      <RouterProvider router={FLOWAGENTRoute} />
    </CacheProvider>
  )
}

export default App
