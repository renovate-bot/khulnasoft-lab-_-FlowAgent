import IconHotSpot from "@flowagent-public/icon-hot-spot"
import { FLOWAGENT_MIXPANEL_EVENT_TYPE } from "@flowagent-public/mixpanel-utils"
import { getDocLink } from "@flowagent-public/public-configs"
import { FC, useCallback, useContext } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { DocsIcon, Dropdown, MoreIcon } from "@flowagent-design/react"
import { EditableText } from "@/components/EditableText"
import { SelectedPanelContext } from "@/page/App/components/InspectPanel/context/selectedContext"
import { componentsActions } from "@/redux/currentApp/components/componentsSlice"
import { trackInEditor } from "@/utils/mixpanelHelper"
import { ActionMenu } from "../ActionMenu"
import { panelHeaderIconWrapperStyle, panelHeaderWrapperStyle } from "./style"

export const PanelHeader: FC = () => {
  const { widgetDisplayName, widgetType } = useContext(SelectedPanelContext)
  const dispatch = useDispatch()
  const docLink = getDocLink("widget", widgetType)

  const handleUpdateDisplayNameByBlur = useCallback(
    (newDisplayName: string) => {
      dispatch(
        componentsActions.updateComponentDisplayNameReducer({
          displayName: widgetDisplayName,
          newDisplayName,
        }),
      )
    },
    [dispatch, widgetDisplayName],
  )

  const onMouseHoverRename = useCallback(() => {
    trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.HOVER, {
      element: "component_rename",
      parameter1: widgetType,
    })
  }, [widgetType])

  const onMouseClickOnRename = useCallback(() => {
    trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.CLICK, {
      element: "component_rename",
      parameter1: widgetType,
    })
  }, [widgetType])

  const onBlurOnRename = useCallback(
    (value: string) => {
      trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.BLUR, {
        element: "component_rename",
        parameter1: widgetType,
        parameter3: value.length,
      })
    },
    [widgetType],
  )

  const onValidateOnRename = useCallback(
    (result: "suc" | "failed") => {
      trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.VALIDATE, {
        element: "component_rename",
        parameter1: widgetType,
        parameter3: result,
      })
    },
    [widgetType],
  )

  return (
    <div css={panelHeaderWrapperStyle}>
      <EditableText
        key={widgetDisplayName}
        displayName={widgetDisplayName}
        updateDisplayNameByBlur={handleUpdateDisplayNameByBlur}
        onMouseEnter={onMouseHoverRename}
        onClick={onMouseClickOnRename}
        onBlur={onBlurOnRename}
        onValidate={onValidateOnRename}
      />
      <div css={panelHeaderIconWrapperStyle}>
        {docLink && (
          <Link to={docLink} target="_blank">
            <IconHotSpot>
              <DocsIcon />
            </IconHotSpot>
          </Link>
        )}
        <Dropdown
          position="bottom-end"
          trigger="click"
          dropList={
            <ActionMenu
              widgetDisplayName={widgetDisplayName}
              componentType={widgetType}
            />
          }
          onVisibleChange={(visible) => {
            if (visible) {
              trackInEditor(FLOWAGENT_MIXPANEL_EVENT_TYPE.SHOW, {
                element: "component_management_left",
                parameter1: widgetType,
              })
            }
          }}
        >
          <IconHotSpot>
            <MoreIcon />
          </IconHotSpot>
        </Dropdown>
      </div>
    </div>
  )
}

PanelHeader.displayName = "PanelHeader"
