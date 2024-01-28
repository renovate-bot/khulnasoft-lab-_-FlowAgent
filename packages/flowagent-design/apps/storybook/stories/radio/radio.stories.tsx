import { Meta, StoryFn } from "@storybook/react"
import { Radio, RadioProps } from "@flowagent-design/react"
import { BsFacebook } from "react-icons/bs"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Radio",
  component: Radio,
} as Meta

const Template: StoryFn<RadioProps> = (args) => <Radio {...args}>IFLOWAGENT</Radio>

export const Basic = Template.bind({
  icon: <BsFacebook />,
})
