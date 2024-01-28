import { css, SerializedStyles } from "@emotion/react"
import { globalColor, flowagentPrefix } from "@flowagent-design/theme"

export function applyEmptyContainerStyle(
  paddingVertical: string,
): SerializedStyles {
  return css`
    padding: ${paddingVertical} 0;
    vertical-align: middle;
    text-align: center;
  `
}

export function applyDescriptionStyle(divideSize: string): SerializedStyles {
  return css`
    margin-top: ${divideSize}px;
    color: ${globalColor(`--${flowagentPrefix}-grayBlue-04`)};
    font-size: 14px;
  `
}
