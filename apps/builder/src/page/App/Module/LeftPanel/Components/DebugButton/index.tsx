import IconHotSpot from "@flowagent-public/icon-hot-spot"
import { FLOWAGENT_MIXPANEL_EVENT_TYPE } from "@flowagent-public/mixpanel-utils"
import { t } from "i18next"
import { FC, memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Badge, BugIcon, Trigger, getColor } from "@flowagent-design/react"
import { isOpenDebugger } from "@/redux/config/configSelector"
import { configActions } from "@/redux/config/configSlice"
import { getExecutionDebuggerData } from "@/redux/currentApp/executionTree/executionSelector"
import { trackInEditor } from "@/utils/mixpanelHelper"

const DebugButton: FC = () => {
  const debuggerData = useSelector(getExecutionDebuggerData)
  const debuggerVisible = useSelector(isOpenDebugger)

  const debugMessageNumber = debuggerData
    ? Object.keys(debuggerData).length
    : undefined
  const dispatch = useDispatch()

  const handleClickDebuggerIcon = () => {
    trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.CLICK, {
      element: "debug",
      parameter2: debugMessageNumber ?? 0,
    })
    dispatch(configActions.updateDebuggerVisible(!debuggerVisible))
  }

  return (
    <Trigger position="right" content={t("flow.editor.app.tooltips.debug")}>
      <IconHotSpot onClick={handleClickDebuggerIcon}>
        <Badge count={debugMessageNumber}>
          <BugIcon color={getColor("grayBlue", "02")} />
        </Badge>
      </IconHotSpot>
    </Trigger>
  )
}

export default memo(DebugButton)
