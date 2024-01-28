import { css, SerializedStyles } from "@emotion/react"
import { globalColor, flowagentPrefix } from "@flowagent-design/theme"

export function applyWrapStyle(paddingVertical: string) {
  return css`
    min-width: 450px;
    padding: ${paddingVertical} 0;
    display: inline-block;
    text-align: center;
  `
}

export const titleCss = css`
  margin-top: 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${globalColor(`--${flowagentPrefix}-grayBlue-02`)};
`

export const subTitleCss = css`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${globalColor(`--${flowagentPrefix}-grayBlue-03`)};
`

export const extraContainerStyle = css`
  margin-top: 24px;
`

export function applyIconContainer(status?: string): SerializedStyles {
  let iconColor
  switch (status) {
    case "success":
      iconColor = css`
        background-color: ${globalColor(`--${flowagentPrefix}-green-08`)};
        color: ${globalColor(`--${flowagentPrefix}-green-03`)};
        font-size: 14px;
      `
      break
    case "error":
      iconColor = css`
        background-color: ${globalColor(`--${flowagentPrefix}-red-08`)};
        color: ${globalColor(`--${flowagentPrefix}-red-03`)};
        font-size: 10px;
      `
      break
    case "info":
      iconColor = css`
        background-color: ${globalColor(`--${flowagentPrefix}-blue-08`)};
        color: ${globalColor(`--${flowagentPrefix}-blue-03`)};
      `
      break
    case "warning":
      iconColor = css`
        background-color: ${globalColor(`--${flowagentPrefix}-orange-08`)};
        color: ${globalColor(`--${flowagentPrefix}-orange-03`)};
      `
      break
    case "403":
    case "404":
    case "500":
      iconColor = css`
        width: 96px;
        height: 100%;
        background-color: ${globalColor(`--${flowagentPrefix}-grayBlue-09`)};

        & > svg {
          width: 96px;
          height: 100%;
        }
      `
      break
  }
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    ${iconColor};
  `
}
