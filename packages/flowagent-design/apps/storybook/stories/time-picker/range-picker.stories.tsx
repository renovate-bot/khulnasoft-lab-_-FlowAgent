import { Meta, StoryFn } from "@storybook/react"
import {
  RangePicker as RangePickerInStory,
  RangePickerProps,
} from "@flowagent-design/react"

export default {
  title: "DATA INPUT/TimePicker",
  component: RangePickerInStory,
} as Meta

export const RangePickerStory: StoryFn<RangePickerProps> = (args) => {
  return <RangePickerInStory {...args} />
}
