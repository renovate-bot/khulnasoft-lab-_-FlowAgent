import { FC, memo } from "react"
import { Loading } from "@flowagent-design/react"
import { widgetLoadingWrapperStyle } from "./style"

const WidgetLoading: FC = () => {
  return (
    <div css={widgetLoadingWrapperStyle}>
      <Loading colorScheme="techPurple" />
    </div>
  )
}

WidgetLoading.displayName = "WidgetLoading"

export default memo(WidgetLoading)
