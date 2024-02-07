import { css } from "@emotion/react"
import { flowagentPrefix, globalColor } from "@flowagent-design/react"

export const invalidateMessageCss = css`
  display: flex;
  padding: 8px 0;
  width: 100%;
  align-items: center;
  color: ${globalColor(`--${flowagentPrefix}-orange-03`)};
  font-size: 14px;

  svg {
    margin-right: 8px;
  }
`
