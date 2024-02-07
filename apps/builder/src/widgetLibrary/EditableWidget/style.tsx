import { css } from "@emotion/react"
import { flowagentPrefix, globalColor } from "@flowagent-design/react"

export function applyTextCss(isPlaceHolder = false) {
  return css`
    width: 100%;
    height: 32px;
    max-height: 32px;
    padding: 0;
    display: inline-flex;
    font-size: 14px;
    align-items: center;
    box-sizing: border-box;
    max-lines: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 8px;
    color: ${!isPlaceHolder
      ? globalColor(`--${flowagentPrefix}-grayBlue-04`)
      : globalColor(`--${flowagentPrefix}-grayBlue-02`)};
    &:hover {
      background-color: ${globalColor(`--${flowagentPrefix}-grayBlue-09`)};
      cursor: pointer;
      padding-left: 16px;
      svg {
        opacity: 1;
      }
    }
    transition: all 200ms;
    svg {
      width: 14px;
      height: 14px;
      margin-left: 8px;
      opacity: 0;
      color: ${globalColor(`--${flowagentPrefix}-grayBlue-05`)};
      transition: all 200ms;
    }
  `
}
