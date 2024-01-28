import { css } from "@emotion/react"
import { globalColor, flowagentPrefix } from "@flowagent-design/theme"

export const applyCircleStatus = css`
  position: absolute;
  display: inline-flex;
  font-size: 16px;
`

export const applyProgressText = css`
  position: absolute;
  line-height: 22px;
  font-size: 14px;
  color: ${globalColor(`--${flowagentPrefix}-grayBlue-04`)};
`
