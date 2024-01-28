import { UpgradeIcon } from "@flowagent-public/icon"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { Tag } from "@flowagent-design/react"
import {
  upgradeTagContainerStyle,
  upgradeTagContentStyle,
  upgradeTagIconStyle,
} from "./style"

export const UpgradeTag: FC = () => {
  const { t } = useTranslation()

  return (
    <Tag colorScheme="techPurple" css={upgradeTagContainerStyle}>
      <span css={upgradeTagContentStyle}>
        <span css={upgradeTagIconStyle}>
          <UpgradeIcon />
        </span>
        <span>{t("billing.homepage.upgrade")}</span>
      </span>
    </Tag>
  )
}
