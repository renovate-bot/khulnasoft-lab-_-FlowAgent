import { css } from "@emotion/react"
import { getColor, globalColor, flowagentPrefix } from "@flowagent-design/react"

export const applyItemStyle = css`
  display: flex;
  padding: 0 0 0 16px;
  height: 56px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  border: solid 1px ${globalColor(`--${flowagentPrefix}-grayBlue-08`)};
  position: relative;
  background-color: ${globalColor(`--${flowagentPrefix}-white-01`)};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 4px 10px 0 ${globalColor(`--${flowagentPrefix}-blackAlpha-07`)};
    background-color: ${globalColor(`--${flowagentPrefix}-techPurple-08`)};
    border-color: ${globalColor(`--${flowagentPrefix}-techPurple-03`)};
  }
`

export const nameStyle = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: ${getColor("grayBlue", "02")};
`

export const titleContainerStyle = css`
  display: inline-flex;
  flex-direction: column;
  margin-left: 12px;
`

export const subTitleStyle = css`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: ${getColor("grayBlue", "04")};
`
