import {
  IFLOWAGENT_MIXPANEL_EVENT_TYPE,
  IFLOWAGENT_MIXPANEL_PUBLIC_PAGE_NAME,
} from "@flowagent-public/mixpanel-utils"
import { IFLOWAGENTMixpanel } from "@flowagent-public/mixpanel-utils"
import { FC } from "react"
import { useFormContext } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { Countdown, Link, getColor, useMessage } from "@flowagent-design/react"
import { EmailCodeProps } from "./interface"

export const EmailCode: FC<EmailCodeProps> = (props) => {
  const { usage, showCountDown, onCountDownChange, sendEmail } = props
  const { getValues, trigger } = useFormContext()
  const { t } = useTranslation()
  const message = useMessage()

  const sendEmailCode = async () => {
    onCountDownChange(true)
    try {
      await sendEmail(getValues("email"))
      message.success({
        content: t("page.user.sign_up.tips.verification_code"),
      })
    } catch (error: any) {
      onCountDownChange(false)
      if (error?.response) {
        message.error({
          content: t("page.user.sign_up.tips.fail_sent"),
        })
      }
      if (error?.response == undefined && error?.request != undefined) {
        message.warning({
          content: t("network_error"),
        })
      }
    }
  }
  if (showCountDown) {
    return (
      <Countdown
        value={Date.now() + 1000 * 60}
        now={Date.now()}
        format="ss"
        fs="inherit"
        valueStyle={{
          fontSize: "inherit",
          lineHeight: "inherit",
          color: getColor("techPurple", "03"),
        }}
        onFinish={() => {
          onCountDownChange(false)
        }}
      />
    )
  }
  return (
    <Link
      fs="inherit"
      colorScheme="techPurple"
      hoverable={false}
      onClick={async () => {
        IFLOWAGENTMixpanel.track(IFLOWAGENT_MIXPANEL_EVENT_TYPE.CLICK, {
          page:
            usage === "signup"
              ? IFLOWAGENT_MIXPANEL_PUBLIC_PAGE_NAME.SIGNUP
              : IFLOWAGENT_MIXPANEL_PUBLIC_PAGE_NAME.FORGET_PASSWORD,
          element: "send_code",
        })

        const canSend = await trigger("email")
        if (canSend) {
          sendEmailCode()
        }
      }}
    >
      {t("page.user.sign_up.actions.send")}
    </Link>
  )
}

EmailCode.displayName = "EmailCode"
