import { css } from "@emotion/react"
import { getColor } from "@flowagent-design/react"
import { applyBarPointerShapeStyle } from "@/page/App/components/ScaleSquare/style"

export const containerStyle = css`
  height: 100%;
  width: 100%;
  border: 1px dashed ${getColor("techPink", "03")};
  padding: 2px;
  border-top: none;
  pointer-events: none;
`

export const containerBorderStyle = (
  position: "t" | "b" | "l" | "r",
  zIndex: number = -1,
) => {
  switch (position) {
    case "t":
      return css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(
          to right,
          ${getColor("techPink", "03")},
          ${getColor("techPink", "03")} 5px,
          transparent 5px,
          transparent
        );
        background-size: 10px 100%;
        z-index: ${zIndex};
      `
    case "b":
      return css`
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(
          to right,
          ${getColor("techPink", "03")},
          ${getColor("techPink", "03")} 5px,
          transparent 5px,
          transparent
        );
        background-size: 10px 100%;
      `
    case "l":
      return css`
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        height: 100%;
        background: linear-gradient(
          to bottom,
          ${getColor("techPink", "03")},
          ${getColor("techPink", "03")} 5px,
          transparent 5px,
          transparent
        );
        background-size: 100% 10px;
        z-index: ${zIndex};
      `
    case "r":
      return css`
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 100%;
        background: linear-gradient(
          to bottom,
          ${getColor("techPink", "03")},
          ${getColor("techPink", "03")} 5px,
          transparent 5px,
          transparent
        );
        background-size: 100% 10px;
        z-index: ${zIndex};
      `
  }
}

export const applyResizeBarPointStyle = css`
  ${applyBarPointerShapeStyle("b")}
  background-color: white;
  border: 1px solid ${getColor("techPink", "03")};
  :hover {
    background-color: ${getColor("techPink", "03")};
  }
  :active {
    background-color: ${getColor("techPink", "03")};
  }
`
