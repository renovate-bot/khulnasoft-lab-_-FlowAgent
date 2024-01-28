import { css } from "@emotion/react"
import { getSpecialThemeColor } from "@flowagent-design/react"

export const bodySectionWrapperStyle = (background: string) => css`
  position: absolute;
  width: var(--flowagent-canvas-body-width, 100%);
  left: var(--flowagent-canvas-body-left, 0);
  top: var(--flowagent-canvas-body-top, 0);
  height: var(--flowagent-canvas-body-height);
  background: ${getSpecialThemeColor(background)};
`
