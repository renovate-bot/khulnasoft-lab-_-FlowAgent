import { Meta, StoryFn } from "@storybook/react"
import { Search, SearchProps } from "@flowagent-design/react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/Search",
  component: Search,
} as Meta

export const Basic: StoryFn<SearchProps> = (props) => {
  return <Search {...props} />
}
