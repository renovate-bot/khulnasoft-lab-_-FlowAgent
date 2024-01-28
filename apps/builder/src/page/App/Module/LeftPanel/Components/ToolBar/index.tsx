import { FC, memo } from "react"
import { useSelector } from "react-redux"
import { getIsFLOWAGENTGuideMode } from "@/redux/config/configSelector"
import DebugButton from "../DebugButton"
import HistoryButton from "../HistoryButton"
import MissingResourceButton from "../MissingResourceButton"
import MoreActionButton from "../MoreActionButton"
import { ToolBarContainerStyle } from "./style"

const ToolBar: FC = () => {
  const isGuideMode = useSelector(getIsFLOWAGENTGuideMode)

  return (
    <div css={ToolBarContainerStyle}>
      <MissingResourceButton />
      <DebugButton />
      {!isGuideMode && <HistoryButton />}
      {!isGuideMode && <MoreActionButton />}
    </div>
  )
}

export default memo(ToolBar)
