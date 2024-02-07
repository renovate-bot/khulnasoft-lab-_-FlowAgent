import { css } from "@emotion/react"
import { flowagentPrefix, globalColor } from "@flowagent-design/react"

export const resourceChooseContainerStyle = css`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  width: 100%;
  overflow-x: auto;
  flex-direction: row;
`

export const spaceStyle = css`
  border-bottom: 1px solid ${globalColor(`--${flowagentPrefix}-grayBlue-08`)};
`

export const resourceTitleStyle = css`
  flex-grow: 1;
  font-size: 14px;
  font-weight: 500;
  color: ${globalColor(`--${flowagentPrefix}-grayBlue-02`)};
`

export const resourceEndStyle = css`
  justify-content: flex-end;
  flex-grow: 1;
  margin-left: 16px;
  display: flex;
  flex-shrink: 1;
  flex-direction: row;
`

export const itemContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
`

export const itemText = css`
  margin-left: 8px;
  flex-shrink: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  flex-grow: 1;
`
