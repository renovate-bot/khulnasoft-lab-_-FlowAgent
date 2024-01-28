import { css } from "@emotion/react"
import { globalColor, flowagentPrefix } from "@flowagent-design/react"

export const avatarContainerStyle = css`
  display: flex;
  position: relative;
  gap: 8px;
`

export const moreIconStyle = css`
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 50%;
  background-color: ${globalColor(`--${flowagentPrefix}-grayBlue-05`)};
  color: ${globalColor(`--${flowagentPrefix}-white-01`)};
  border: 1px solid ${globalColor(`--${flowagentPrefix}-white-01`)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & span {
    margin: 8px;
    font-size: 12px;
    line-height: 16px;
    vertical-align: middle;
  }
`

export const userInfoListContainerStyle = css`
  position: absolute;
  top: 3px;
  right: 0;
  width: 172px;
  max-height: 240px;
  overflow: auto;
  background-color: ${globalColor(`--${flowagentPrefix}-white-01`)};
  border-radius: 8px;
  border: 1px solid ${globalColor(`--${flowagentPrefix}-grayBlue-08`)};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  padding: 16px;
  z-index: 10;
`
