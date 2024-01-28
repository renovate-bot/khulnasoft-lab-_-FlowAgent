import { COPY_STATUS, copyToClipboard } from "@flowagent-public/utils"
import { createMessage } from "@flowagent-design/react"
import i18n from "../i18n"

const message = createMessage()
export const copy = (value: string) => {
  const copyResult = copyToClipboard(value)
  switch (copyResult) {
    case COPY_STATUS.EMPTY: {
      message.warning({
        content: i18n.t("empty_copied_tips"),
      })

      break
    }
    case COPY_STATUS.SUCCESS: {
      message.success({
        content: i18n.t("copied"),
      })
      break
    }
    default: {
      message.error({
        content: i18n.t("failed_to_copy"),
      })
    }
  }
}
