import { FC, memo } from "react"
import { Trigger } from "@flowagent-design/react"
import { FLOWAGENTMarkdown } from "@/components/FLOWAGENTMarkdown"
import { TooltipWrapperProps } from "./interface"

export const TooltipWrapper: FC<TooltipWrapperProps> = memo(
  (props: TooltipWrapperProps) => {
    const { children, tooltipText, tooltipDisabled } = props

    return (
      <Trigger
        content={<FLOWAGENTMarkdown textString={tooltipText} />}
        colorScheme="grayBlue"
        disabled={tooltipDisabled}
        position="top"
        autoFitPosition={false}
        trigger="hover"
      >
        {children}
      </Trigger>
    )
  },
)

TooltipWrapper.displayName = "TooltipWrapper"
