import { FC } from "react"
import { Loading } from "@flowagent-design/react"
import { ComponentLoadingStyle } from "./style"

export const ComponentLoading: FC<{ themeColor?: string }> = ({
  themeColor,
}) => {
  return (
    <div css={ComponentLoadingStyle}>
      <Loading colorScheme={themeColor} />
    </div>
  )
}

ComponentLoading.displayName = "ComponentLoading"
