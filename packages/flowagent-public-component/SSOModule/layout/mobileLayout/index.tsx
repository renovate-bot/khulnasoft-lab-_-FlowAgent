import {
  FLOWAGENT_MIXPANEL_EVENT_TYPE,
  MixpanelTrackContext,
} from "@flowagent-public/mixpanel-utils"
import { DOC_PREFIX } from "@flowagent-public/public-configs"
import { TextLink } from "@flowagent-public/text-link"
import { isCloudVersion } from "@flowagent-public/utils"
import { FC, useContext } from "react"
import { Trans, useTranslation } from "react-i18next"
import { LayoutProps } from "../interface"
import { contentStyle, layoutStyle, policyStyle } from "./style"

export const MobileUserLayout: FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation()
  const { track } = useContext(MixpanelTrackContext)

  const handleLinkOpenClick = (link: string) => {
    if (isCloudVersion) {
      track?.(FLOWAGENT_MIXPANEL_EVENT_TYPE.CLICK, {
        element: /privacy/.test(link) ? "privacy" : "terms",
      })
      window.open(DOC_PREFIX + link, "_blank")
    } else {
      window.open(link, "_blank")
    }
  }

  return (
    <div css={layoutStyle}>
      <div css={contentStyle}>{children}</div>
      <div css={policyStyle}>
        <Trans
          i18nKey="page.user.policy"
          t={t}
          components={[
            <TextLink
              key="text-link"
              onClick={() => {
                handleLinkOpenClick("/privacy-policy")
              }}
            />,
            <TextLink
              key="text-link"
              onClick={() => {
                handleLinkOpenClick("/terms-of-service")
              }}
            />,
          ]}
        />
      </div>
    </div>
  )
}

MobileUserLayout.displayName = "MobileUserLayout"
