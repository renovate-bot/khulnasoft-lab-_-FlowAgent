import { ResourceType } from "@flowagent-public/public-types"
import { FC } from "react"
import { useParams } from "react-router-dom"
import { ResourceCreateOrEditPanel } from "../CreateOrEdit"

export const ResourceCreate: FC = () => {
  const { resourceType } = useParams()

  return (
    <ResourceCreateOrEditPanel resourceType={resourceType as ResourceType} />
  )
}
