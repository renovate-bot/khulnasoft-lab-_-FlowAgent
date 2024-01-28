import { css } from "@emotion/react"
import { globalColor, flowagentPrefix } from "@flowagent-design/react"

export const PagePanelWrapperStyle = css`
  border-top: 1px solid ${globalColor(`--${flowagentPrefix}-grayBlue-08`)};
  height: 100%;
  width: 100%;
  padding-bottom: 48px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const PageScrollContainerWrapperStyle = css`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`

export const headerWrapperStyle = css`
  display: flex;
  height: 48px;
  align-items: center;
  padding: 0 16px;
`

export const optionListWrapperStyle = css`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 6px;
`
