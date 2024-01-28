import { css, SerializedStyles } from "@emotion/react"
import { globalColor, flowagentPrefix, zIndex } from "@flowagent-design/theme"
import { Variants } from "framer-motion"
import { DrawerPlacement } from "./interface"

export function applyDrawerStyle(
  w: string,
  h: string,
  placement: DrawerPlacement,
): SerializedStyles {
  return css`
    ${placement}: 0;
    width: ${w};
    height: ${h};
    position: absolute;
    background-color: ${globalColor(`--${flowagentPrefix}-white-01`)};
  `
}

export function applyDrawerWrapper(isFixed?: boolean): SerializedStyles {
  return css`
    position: ${isFixed ? "fixed" : "absolute"};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: ${zIndex.drawer};
  `
}

export const applyDrawerScroll = css`
  position: relative;
  overflow-y: auto;
  width: 100%;
  height: 100%;
`

export const applyDrawerMask = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${globalColor(`--${flowagentPrefix}-blackAlpha-04`)};
`

export const applyDrawerHeader = css`
  padding: 8px 24px;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 40px;
  box-sizing: border-box;
  border-bottom: 1px solid ${globalColor(`--${flowagentPrefix}-grayBlue-08`)};
  flex-shrink: 0;
  flex-grow: 0;
`

export const applyDrawerTitle = css`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  text-align: center;
  color: ${globalColor(`--${flowagentPrefix}-grayBlue-02`)};
`

export const applyDrawerCloseIcon = css`
  position: absolute;
  cursor: pointer;
  top: 18px;
  right: 20px;
  font-size: 8px;
  color: ${globalColor(`--${flowagentPrefix}-grayBlue-03`)};
  line-height: 0;
`

export const applyDrawerFooter = css`
  width: 100%;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  flex-shrink: 0;
  text-align: right;
  padding: 8px 24px;
  border-top: 1px solid ${globalColor(`--${flowagentPrefix}-grayBlue-08`)};
`

export const applyModalCancelBtn = css`
  margin-right: 8px;
`

export const maskAnimation: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

export function applyDrawerSlider(placement?: DrawerPlacement): Variants {
  let originX, originY
  switch (placement) {
    case "top":
      originY = "-100%"
      break
    case "bottom":
      originY = "100%"
      break
    case "left":
      originX = "-100%"
      break
    case "right":
      originX = "100%"
      break
  }

  return {
    initial: {
      x: `${originX}`,
      y: `${originY}`,
    },
    animate: {
      x: 0,
      y: 0,
    },
    exit: {
      x: `${originX}`,
      y: `${originY}`,
    },
  }
}

export const fullStyle = css`
  width: 100%;
  height: 100%;
`
