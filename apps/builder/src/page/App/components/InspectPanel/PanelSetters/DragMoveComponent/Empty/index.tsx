import { FC } from "react"
import { Empty } from "@flowagent-design/react"
import { emptyBodyStyle } from "./style"

export const ColumnEmpty: FC = () => {
  return (
    <div css={emptyBodyStyle}>
      <Empty />
    </div>
  )
}
