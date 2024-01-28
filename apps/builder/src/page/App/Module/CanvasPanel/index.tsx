import { isCloudVersion } from "@flowagent-public/utils"
import { forwardRef, useSyncExternalStore } from "react"
import { useSelector } from "react-redux"
import { isObject } from "@flowagent-design/react"
import { DotPanel } from "@/page/App/components/DotPanel"
import {
  getIsFLOWAGENTEditMode,
  getIsFLOWAGENTPreviewMode,
} from "@/redux/config/configSelector"
import { getAppId } from "@/redux/currentApp/appInfo/appInfoSelector"
import { getExecutionResult } from "@/redux/currentApp/executionTree/executionSelector"
import { FLOWAGENTBuilderStorage } from "@/utils/storage"
import { UploadDetailButton } from "../UploadDetail"
import { updateFileDetailStore } from "../UploadDetail/store"
import BuildAppOnEmpty from "./Components/BuildAppOnEmpty"
import { SHOWN_BUILD_APP } from "./Components/BuildAppOnEmpty/constants"
import { CanvasPanelProps } from "./interface"
import { applyScaleContainerStyle } from "./style"

export const CanvasPanel = forwardRef<HTMLDivElement, CanvasPanelProps>(
  (props, ref) => {
    const { ...otherProps } = props

    const isEditMode = useSelector(getIsFLOWAGENTEditMode)
    const appID = useSelector(getAppId)
    const isEditPreviewMode = useSelector(getIsFLOWAGENTPreviewMode)
    const executionResult = useSelector(getExecutionResult)
    const uploadFiles = useSyncExternalStore(
      updateFileDetailStore.subscribe,
      updateFileDetailStore.getSnapshot,
    )
    const localShownBuildAppOnEmpty =
      FLOWAGENTBuilderStorage.getLocalStorage(SHOWN_BUILD_APP)

    const showBuildAppOnEmpty =
      isEditMode &&
      isCloudVersion &&
      (!isObject(localShownBuildAppOnEmpty) ||
        !localShownBuildAppOnEmpty[appID])

    if (!executionResult || !executionResult.root) {
      return null
    }

    return (
      <div
        {...otherProps}
        ref={ref}
        css={applyScaleContainerStyle(isEditPreviewMode, isEditMode)}
      >
        <DotPanel />
        {uploadFiles.length > 0 && <UploadDetailButton />}
        {showBuildAppOnEmpty && <BuildAppOnEmpty />}
      </div>
    )
  },
)

CanvasPanel.displayName = "CanvasPanel"
