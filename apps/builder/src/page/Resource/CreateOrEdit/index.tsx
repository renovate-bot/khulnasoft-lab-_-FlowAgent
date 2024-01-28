import {
  FLOWAGENT_MIXPANEL_BUILDER_PAGE_NAME,
  FLOWAGENT_MIXPANEL_EVENT_TYPE, // FLOWAGENT_MIXPANEL_EVENT_TYPE,
  MixpanelTrackProvider,
} from "@flowagent-public/mixpanel-utils"
import {
  ResourceCreatePanel,
  ResourceGeneratorProvider,
} from "@flowagent-public/resource-generator"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useMessage } from "@flowagent-design/react"
// import { useTranslation } from "react-i18next"
// import { useMessage } from "@flowagent-design/react"
import { getAllResources } from "@/redux/resource/resourceSelector"
import { track } from "@/utils/mixpanelHelper"
import { ResourceCreateOrEditPanelProps } from "./interface"

export const ResourceCreateOrEditPanel: FC<ResourceCreateOrEditPanelProps> = (
  props,
) => {
  const { resourceID, resourceType } = props

  const message = useMessage()
  const { t } = useTranslation()
  const resourceList = useSelector(getAllResources)

  const handleOnFinished = () => {
    track(
      FLOWAGENT_MIXPANEL_EVENT_TYPE.CLICK,
      FLOWAGENT_MIXPANEL_BUILDER_PAGE_NAME.RESOURCE_EDIT,
      {
        element: "resource_configure_save",
      },
    )
    message.info({
      content: t("dashboard.message.save_resource"),
    })
    setTimeout(() => {
      window.close()
    }, 3000)
  }

  const handleClickBack = () => {
    window.close()
  }

  return (
    <MixpanelTrackProvider
      basicTrack={track}
      pageName={FLOWAGENT_MIXPANEL_BUILDER_PAGE_NAME.RESOURCE_EDIT}
    >
      <ResourceGeneratorProvider
        allResource={resourceList}
        createOrUpdateResourceCallback={handleOnFinished}
      >
        <ResourceCreatePanel
          resourceID={resourceID}
          resourceType={resourceType}
          handleOnClickBack={handleClickBack}
        />
      </ResourceGeneratorProvider>
    </MixpanelTrackProvider>
  )
}
