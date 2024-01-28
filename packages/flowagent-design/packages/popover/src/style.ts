import { css } from "@emotion/react"
import { TriggerColorScheme } from "@flowagent-design/trigger"
import { globalColor, flowagentPrefix } from "@flowagent-design/theme"

export const applyTypographyContainer = css`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
`

export function applyTitleColor(colorScheme: TriggerColorScheme) {
  const textColor =
    colorScheme == "white"
      ? globalColor(`--${flowagentPrefix}-grayBlue-02`)
      : globalColor(`--${flowagentPrefix}-white-02`)
  return css`
    color: ${textColor};
  `
}

export const applyCloseButton = css`
  margin-top: 4px;
  align-self: end;
`
