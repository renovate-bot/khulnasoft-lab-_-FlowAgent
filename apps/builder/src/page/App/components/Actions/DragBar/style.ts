import { css } from "@emotion/react"
import { globalColor, flowagentPrefix } from "@flowagent-design/react"

export const actionEditorDragBarStyle = css`
  top: -5px;
  cursor: row-resize;
  width: 100%;
  position: absolute;
  transition: all 0.2s;
  height: 5px;
  z-index: 10;

  &:hover {
    background: ${globalColor(`--${flowagentPrefix}-grayBlue-08`)};
  }
`
