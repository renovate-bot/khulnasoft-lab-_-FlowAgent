import { css } from "@emotion/react"
import { globalColor, flowagentPrefix } from "@flowagent-design/react"

export const errorPageStyle = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 30vh;
  font-size: 14px;
  color: ${globalColor(`--${flowagentPrefix}-grayBlue-02`)};
  font-weight: bold;
  line-height: 22px;
  span + span {
    font-weight: normal;
    color: ${globalColor(`--${flowagentPrefix}-grayBlue-03`)};
  }
`

export const iconStyle = css`
  height: 96px;
  width: 96px;
  border-radius: 50px;
  background-color: ${globalColor(`--${flowagentPrefix}-grayBlue-09`)};
  margin-bottom: 24px;
`

export const buttonStyle = css`
  margin-top: 24px;
  display: flex;
  gap: 8px;
`
