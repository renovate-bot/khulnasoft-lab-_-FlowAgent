import { css } from "@emotion/react"
import { TriggerColorScheme } from "@flowagent-design/trigger"
import { globalColor, flowagentPrefix } from "@flowagent-design/theme"

export const applyTypographyContainer = css`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  padding: 16px;
`

export const applyButtonGroupStyle = css`
  align-self: end;
`

export function applyHeaderStyle(colorScheme: TriggerColorScheme) {
  const textColor =
    colorScheme == "white"
      ? globalColor(`--${flowagentPrefix}-grayBlue-02`)
      : globalColor(`--${flowagentPrefix}-white-02`)
  return css`
    color: ${textColor};
    font-size: 16px;
    font-weight: 500;
  `
}
