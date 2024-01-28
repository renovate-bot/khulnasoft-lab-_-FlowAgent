import { css } from "@emotion/react"
import { globalColor, flowagentPrefix } from "@flowagent-design/react"

const getLabelSizeFontStyle = (size: "big" | "small") => {
  switch (size) {
    case "big": {
      return css`
        font-size: 14px;
        color: ${globalColor(`--${flowagentPrefix}-grayBlue-02`)};
      `
    }
    case "small": {
      return css`
        font-size: 12px;
        color: ${globalColor(`--${flowagentPrefix}-grayBlue-03`)};
      `
    }
  }
}

export function labelStyle(size: "big" | "small", disabledTooltip: boolean) {
  const borderStyle = disabledTooltip
    ? null
    : css`
        border-bottom: 1px dashed ${globalColor(`--${flowagentPrefix}-grayBlue-03`)};
      `
  return css`
    font-weight: 500;
    height: 22px;
    line-height: 22px;
    ${borderStyle};
    ${getLabelSizeFontStyle(size)};
  `
}
