import { css } from "@emotion/react"
import { flowagentPrefix, globalColor } from "@flowagent-design/react"

export function applyRecordEditorContainerStyle(label: string) {
  return css`
    display: flex;
    padding-right: ${label !== "" ? "24px" : "0"};
    flex-direction: row;
    padding-left: 24px;
  `
}
export const recordEditorStyle = css`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

export const recordStyle = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  min-height: 48px;
  & > button {
    color: ${globalColor(`--${flowagentPrefix}-grayBlue-05`)};
    :hover {
      color: ${globalColor(`--${flowagentPrefix}-grayBlue-02`)};
      transition: color 200ms ease-in-out;
    }
  }
`

export const recordEditorLabelStyle = css`
  min-width: 160px;
  margin-left: 16px;
  margin-right: 16px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: ${globalColor(`--${flowagentPrefix}-grayBlue-02`)};
`
