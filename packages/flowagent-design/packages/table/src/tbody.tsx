import { forwardRef } from "react"
import { TBodyProps } from "./interface"
import { css } from "@emotion/react"
import { applyBoxStyle, deleteCssProps } from "@flowagent-design/theme"

export const TBody = forwardRef<HTMLTableSectionElement, TBodyProps>(
  (props, ref) => {
    const { ...otherProps } = props
    return (
      <tbody
        css={css(applyBoxStyle(props))}
        ref={ref}
        {...deleteCssProps(otherProps)}
      />
    )
  },
)

TBody.displayName = "TBody"
