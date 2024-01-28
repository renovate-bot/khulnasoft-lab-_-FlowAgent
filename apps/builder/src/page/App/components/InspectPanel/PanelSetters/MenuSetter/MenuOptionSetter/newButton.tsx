import { FC } from "react"
import { AddIcon, Button } from "@flowagent-design/react"
import { NewButtonProps } from "@/page/App/components/InspectPanel/PanelSetters/MenuSetter/MenuOptionSetter/interface"

export const NewButton: FC<NewButtonProps> = (props) => {
  const { title, ...otherProps } = props

  return (
    <Button
      pd={"1px 8px"}
      variant={"text"}
      colorScheme={"techPurple"}
      leftIcon={<AddIcon size={"14px"} />}
      {...otherProps}
    >
      {title}
    </Button>
  )
}

NewButton.displayName = "NewButton"
