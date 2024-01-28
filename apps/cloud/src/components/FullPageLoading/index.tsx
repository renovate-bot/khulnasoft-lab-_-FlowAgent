import { FC } from "react"
import { Loading } from "@flowagent-design/react"
import { fullPageLoadingWrapperStyle } from "./style"

export const FullPageLoading: FC = () => {
  return (
    <div css={fullPageLoadingWrapperStyle}>
      <Loading colorScheme="techPurple" />
    </div>
  )
}

FullPageLoading.displayName = "FullPageLoading"
