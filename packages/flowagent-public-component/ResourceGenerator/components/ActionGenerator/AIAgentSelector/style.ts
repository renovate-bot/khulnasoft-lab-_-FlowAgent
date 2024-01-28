import { css } from "@emotion/react"
import { globalColor, flowagentPrefix } from "@flowagent-design/react"

export const containerStyle = css`
  display: flex;
  flex-direction: column;
`

export const bodyContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 16px;
`

export const resourceItemSelectedStyle = css`
  background: ${globalColor(`--${flowagentPrefix}-techPurple-08`)};
`

export const applyResourceItemStyle = (selected: boolean) => {
  return css`
    padding: 12px 0 12px 24px;
    display: flex;
    align-items: center;
    height: 48px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: ${globalColor(`--${flowagentPrefix}-grayBlue-09`)};
    }

    ${selected ? resourceItemSelectedStyle : ""};
  `
}

export const resourceItemTitleStyle = css`
  margin-left: 8px;
  flex: 1;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${globalColor(`--${flowagentPrefix}-grayBlue-02`)};
`

export const resourceItemTimeStyle = css`
  flex: 1;
  color: ${globalColor(`--${flowagentPrefix}-grayBlue-04`)};
`

export const headerContainerStyle = css`
  padding: 0 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
