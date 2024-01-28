import { css } from "@emotion/react"
import { globalColor, flowagentPrefix } from "@flowagent-design/react"

export const headerStyle = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  color: ${globalColor(`--${flowagentPrefix}-grayBlue-04`)};
  font-size: 16px;
  padding: 0 16px;
  font-weight: 500;

  span {
    display: flex;
    align-items: center;
  }
`

export const titleContainerStyle = css`
  flex-grow: 1;
  margin-right: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const modalHeaderText = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const closeIconStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  color: ${globalColor(`--${flowagentPrefix}-grayBlue-02`)};
  cursor: pointer;
`

export const modalWrapperStyle = css`
  width: 400px;
`
export const listWrapperStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 12px;
`
