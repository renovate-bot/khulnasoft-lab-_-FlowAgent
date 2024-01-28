import { getFLOWAGENTBuilderURL, getFLOWAGENTCloudURL } from "@flowagent-public/utils"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { Button, ExitIcon } from "@flowagent-design/react"
import Logo from "@/assets/flowagent-logo.svg?react"
import {
  informationStyle,
  logoCursorStyle,
  nameStyle,
  navBarStyle,
  rowCenter,
} from "@/page/App/Module/PageNavBar/style"
import { navDescStyle } from "@/page/History/components/HistoryNavBar/style"
import { getAppInfo } from "@/redux/currentApp/appInfo/appInfoSelector"

export const HistoryNavBar: FC = () => {
  const { teamIdentifier, appId } = useParams()
  const { t } = useTranslation()

  const appInfo = useSelector(getAppInfo)

  return (
    <div css={navBarStyle}>
      <div css={rowCenter}>
        <Link to={getFLOWAGENTCloudURL()}>
          <Logo width="34px" css={logoCursorStyle} />
        </Link>
        <div css={informationStyle}>
          <div css={nameStyle}>{appInfo.appName}</div>
        </div>
      </div>
      <span css={navDescStyle}>{t("editor.history.history_list.label")}</span>
      <Link to={`${getFLOWAGENTBuilderURL()}/${teamIdentifier}/app/${appId}`}>
        <Button minW="200px" colorScheme="techPurple" leftIcon={<ExitIcon />}>
          {t("exit_preview")}
        </Button>
      </Link>
    </div>
  )
}
