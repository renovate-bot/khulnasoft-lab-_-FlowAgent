import { publicHashtagRequest } from "@flowagent-public/flowagent-net"
import { FuzzySearchHashTag } from "./interface"

export const fetchFuzzySearchHashTag = (keyword: string) => {
  return publicHashtagRequest<FuzzySearchHashTag>({
    method: "GET",
    url: `/search?keyword=${keyword}`,
  })
}
