import { FC, useCallback, useContext, useState } from "react"
import { useTranslation } from "react-i18next"
import {
  EyeOffIcon,
  EyeOnIcon,
  Trigger,
  flowagentPrefix,
  globalColor,
  useModal,
} from "@flowagent-design/react"
import DeleteIcon from "@/assets/delete-dataset-icon.svg?react"
import { DatasetsContext } from "@/page/App/components/InspectPanel/PanelSetters/ChartSetter/chartDatasetsSetter/datasetsContext"
import { ListItemProps } from "@/page/App/components/InspectPanel/PanelSetters/ChartSetter/chartDatasetsSetter/interface"
import {
  ListItemWrapperCss,
  applyColorToneStyle,
  applyListItemDataNameAreaStyle,
  applyListItemMethodAreaStyle,
  applySingleColorAreaStyle,
  baseIconStyle,
  colorToneWrapperStyle,
  eyeIconStyle,
  listItemActionAreaStyle,
  listItemInfoAreaStyle,
} from "@/page/App/components/InspectPanel/PanelSetters/ChartSetter/chartDatasetsSetter/style"
import { BaseModal } from "@/page/App/components/InspectPanel/PanelSetters/PublicComponent/Modal"

export const CHART_COLOR_TYPE_CONFIG = {
  "flowagent-preset": [
    "#165DFF",
    "#0FC6C2",
    "#BDFF00",
    "#FAC819",
    "#F18765",
    "#C465F1",
  ],
  "flowagent-purple": [
    `${globalColor(`--${flowagentPrefix}-techPurple-n-01`)}`,
    `${globalColor(`--${flowagentPrefix}-techPurple-01`)}`,
    `${globalColor(`--${flowagentPrefix}-techPurple-02`)}`,
    `${globalColor(`--${flowagentPrefix}-techPurple-03`)}`,
    `${globalColor(`--${flowagentPrefix}-techPurple-04`)}`,
    `${globalColor(`--${flowagentPrefix}-techPurple-06`)}`,
  ],
  "flowagent-pink": [
    `${globalColor(`--${flowagentPrefix}-techPink-n-01`)}`,
    `${globalColor(`--${flowagentPrefix}-techPink-01`)}`,
    `${globalColor(`--${flowagentPrefix}-techPink-02`)}`,
    `${globalColor(`--${flowagentPrefix}-techPink-03`)}`,
    `${globalColor(`--${flowagentPrefix}-techPink-04`)}`,
    `${globalColor(`--${flowagentPrefix}-techPink-06`)}`,
  ],
  "cyan-tone": [
    "#09A9AE",
    "#14C9C9",
    "#37D4CF",
    "#5EDFD6",
    "#89E9E0",
    "#BFF4EC",
  ],
  "green-tone": [
    "#009A29",
    "#00B42A",
    "#23C343",
    "#4CD263",
    "#7BE188",
    "#AFF0B5",
  ],
  "blue-tone": [
    "#104AE4",
    "#1657FF",
    "#4080FF",
    "#6AA1FF",
    "#94BFFF",
    "#BEDAFF",
  ],
  "orange-tone": [
    "#E5700E",
    "#FF7D00",
    "#FF9A2E",
    "#FFB65D",
    "#FFCF8B",
    "#FFE4BA",
  ],
  "yellow-tone": [
    "#E2A214",
    "#F7BA1E",
    "#F9CC45",
    "#FADC6D",
    "#FCE996",
    "#FDF4BF",
  ],
  "black-tone": [
    `${globalColor(`--${flowagentPrefix}-grayBlue-01`)}`,
    `${globalColor(`--${flowagentPrefix}-grayBlue-03`)}`,
    `${globalColor(`--${flowagentPrefix}-grayBlue-04`)}`,
    `${globalColor(`--${flowagentPrefix}-grayBlue-05`)}`,
    `${globalColor(`--${flowagentPrefix}-grayBlue-06`)}`,
    `${globalColor(`--${flowagentPrefix}-grayBlue-08`)}`,
  ],
}

export const CHART__BASE_COLOR_TYPE_CONFIG = CHART_COLOR_TYPE_CONFIG[
  "flowagent-preset"
].concat([
  "#5343D0",
  "#C24499",
  "#09A9AE",
  "#009A29",
  "#104AE4",
  "#E5700E",
  "#E2A214",
  "#0B0C0F",
])

export const CHART_PRESET_COLOR = CHART_COLOR_TYPE_CONFIG["flowagent-preset"]
export const CHART_COLOR_TYPE_CONFIG_KEYS = Object.keys(CHART_COLOR_TYPE_CONFIG)

interface ColorAreaProps {
  color: keyof typeof CHART_COLOR_TYPE_CONFIG | string
}

export const ColorArea: FC<ColorAreaProps> = ({ color }) => {
  if (CHART_COLOR_TYPE_CONFIG_KEYS.includes(color)) {
    const colors =
      CHART_COLOR_TYPE_CONFIG[color as keyof typeof CHART_COLOR_TYPE_CONFIG]
    return (
      <div css={colorToneWrapperStyle}>
        {colors.map((c) => {
          return <div css={applyColorToneStyle(c)} key={c} />
        })}
      </div>
    )
  }
  return <div css={applySingleColorAreaStyle(color)} />
}

export const ListItem: FC<ListItemProps> = (props) => {
  const { color, isHidden, datasetName, datasetMethod, index } = props
  const [modalVisible, setModalVisible] = useState(false)
  const modal = useModal()
  const { t } = useTranslation()

  const handleCloseModal = useCallback(() => {
    setModalVisible(false)
  }, [])

  const {
    attrPath,
    widgetDisplayName,
    childrenSetter,
    handleHiddenDataset,
    handleDeleteDataSet,
  } = useContext(DatasetsContext)

  const handleDeleteClick = useCallback(() => {
    modal.show({
      id: "deleteDatasetItem",
      title: t("editor.component.delete_title", {
        displayName: datasetName,
      }),
      children: t("editor.component.delete_content"),
      cancelText: t("editor.component.cancel"),
      okText: t("editor.component.delete"),
      okButtonProps: {
        colorScheme: "red",
      },
      onOk: () => {
        handleDeleteDataSet(index)
      },
    })
  }, [datasetName, handleDeleteDataSet, index, modal, t])

  return (
    <Trigger
      withoutPadding
      colorScheme="white"
      popupVisible={modalVisible}
      content={
        <BaseModal
          title={datasetName}
          handleCloseModal={handleCloseModal}
          attrPath={`${attrPath}.${index}`}
          widgetDisplayName={widgetDisplayName}
          childrenSetter={childrenSetter}
        />
      }
      trigger="click"
      showArrow={false}
      position="left-start"
      clickOutsideToClose
      onVisibleChange={(visible) => {
        setModalVisible(visible)
      }}
    >
      <div css={ListItemWrapperCss}>
        <div css={listItemInfoAreaStyle}>
          <ColorArea color={color} />
          <span css={applyListItemDataNameAreaStyle(isHidden)}>
            {datasetName}
          </span>
          <span css={applyListItemMethodAreaStyle(isHidden)}>
            {datasetMethod}
          </span>
        </div>
        <div css={listItemActionAreaStyle}>
          {isHidden ? (
            <EyeOffIcon
              css={baseIconStyle}
              onClick={(e) => {
                e.stopPropagation()
                handleHiddenDataset(index)
              }}
            />
          ) : (
            <EyeOnIcon
              css={eyeIconStyle}
              id="eyeOnIcon"
              onClick={(e) => {
                e.stopPropagation()
                handleHiddenDataset(index)
              }}
            />
          )}
          <DeleteIcon
            css={baseIconStyle}
            onClick={(e) => {
              e.stopPropagation()
              handleDeleteClick()
            }}
          />
        </div>
      </div>
    </Trigger>
  )
}
