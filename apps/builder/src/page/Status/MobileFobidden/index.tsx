import {
  FLOWAGENT_MIXPANEL_EVENT_TYPE,
  FLOWAGENT_MIXPANEL_PUBLIC_PAGE_NAME,
} from "@flowagent-public/mixpanel-utils"
import { FC, useEffect } from "react"
import { useTranslation } from "react-i18next"
import LaptopIcon from "@/assets/laptop.svg?react"
import {
  contentStyle,
  contentWrapperStyle,
  iconWrapperStyle,
  wrapperStyle,
} from "@/page/Status/MobileFobidden/style"
import { track } from "@/utils/mixpanelHelper"

export const MobileForbidden: FC = () => {
  const { t } = useTranslation()
  useEffect(() => {
    track(
      FLOWAGENT_MIXPANEL_EVENT_TYPE.VISIT,
      FLOWAGENT_MIXPANEL_PUBLIC_PAGE_NAME.MOBILE_FORBIDDEN,
    )
  }, [])
  return (
    <div css={wrapperStyle}>
      <div css={contentWrapperStyle}>
        <div css={iconWrapperStyle}>
          <LaptopIcon />
        </div>
        <span css={contentStyle}>{t("status.mobile_forbidden")}</span>
      </div>
    </div>
  )
}

MobileForbidden.displayName = "MobileForbidden"

export default MobileForbidden
