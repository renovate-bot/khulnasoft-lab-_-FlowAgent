import { SerializedStyles, css } from "@emotion/react"
import { globalColor, flowagentPrefix } from "@flowagent-design/react"

export const textLinkStyle: SerializedStyles = css`
  color: ${globalColor(`--${flowagentPrefix}-techPurple-03`)};
  cursor: pointer;
`
