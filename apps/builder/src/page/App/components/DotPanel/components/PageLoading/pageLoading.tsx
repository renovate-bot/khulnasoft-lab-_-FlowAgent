import { FC } from "react"
import { Loading } from "@flowagent-design/react"
import { pageLoadingStyle } from "./style"

export const PageLoading: FC = () => {
  return (
    <div css={pageLoadingStyle}>
      <Loading colorScheme="techPurple" />
    </div>
  )
}
