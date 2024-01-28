import { Loading } from "@flowagent-design/react"
import { loadingStyle } from "./style"

export const CreateLoading = () => (
  <div css={loadingStyle}>
    <Loading colorScheme="techPurple" />
  </div>
)
