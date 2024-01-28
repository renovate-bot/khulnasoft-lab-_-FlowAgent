import AvatarPaddingIcon from "@/assets/chat/avatarPadding.svg?react"
import RadioIcon from "@/assets/radius-icon.svg?react"
import i18n from "@/i18n/config"
import { PanelConfig } from "@/page/App/components/InspectPanel/interface"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
import { CHAT_EVENT_HANDLER_CONFIG } from "@/widgetLibrary/ChatWidget/eventHandlerConfig"
import { generatorEventHandlerConfig } from "@/widgetLibrary/PublicSector/utils/generatorEventHandlerConfig"

const baseWidgetName = "chat"
export const CHAT_PANEL_CONFIG: PanelConfig[] = [
  {
    id: `${baseWidgetName}-data`,
    groupName: i18n.t("editor.inspect.setter_group.MESSAGE"),
    children: [
      {
        id: `${baseWidgetName}-data-source`,
        labelName: i18n.t("editor.inspect.setter_label.data_source"),
        attrName: "dataSources",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.ARRAY,
      },
      {
        id: `${baseWidgetName}-option-mapped-event`,
        labelName: i18n.t("editor.inspect.setter_label.mapped_option"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.map_data_option"),
        useCustomLayout: true,
        attrName: "mappedOption",
        setterType: "OPTION_MAPPED_SETTER",
        childrenSetter: [
          {
            id: `${baseWidgetName}-message-message_id`,
            labelName: i18n.t("editor.inspect.setter_label.message_id"),
            labelDesc: i18n.t("editor.inspect.setter_tooltip.message_id"),
            attrName: "messageIds",
            placeholder: "{{item.messageId}}",
            isSetterSingleRow: true,
            setterType: "OPTION_MAPPED_INPUT_SETTER",
            expectedType: VALIDATION_TYPES.ARRAY,
          },
          {
            id: `${baseWidgetName}-message-message`,
            labelName: i18n.t("editor.inspect.setter_label.message"),
            labelDesc: i18n.t("editor.inspect.setter_tooltip.message"),
            attrName: "messages",
            placeholder: "{{item.messages}}",
            isSetterSingleRow: true,
            setterType: "OPTION_MAPPED_INPUT_SETTER",
            expectedType: VALIDATION_TYPES.ARRAY,
          },
          {
            id: `${baseWidgetName}-message-message_type`,
            labelName: i18n.t("editor.inspect.setter_label.message_type"),
            labelDesc: i18n.t("editor.inspect.setter_tooltip.message_type"),
            attrName: "messageTypes",
            placeholder: "{{item.messageTypes}}",
            isSetterSingleRow: true,
            setterType: "OPTION_MAPPED_INPUT_SETTER",
            expectedType: VALIDATION_TYPES.ARRAY,
          },
          {
            id: `${baseWidgetName}-message-replayMessageId`,
            labelName: i18n.t("editor.inspect.setter_label.replayMessageId"),
            labelDesc: i18n.t("editor.inspect.setter_tooltip.replayMessageId"),
            attrName: "replyMessageIds",
            placeholder: "{{item.replyMessageIds}}",
            isSetterSingleRow: true,
            setterType: "OPTION_MAPPED_INPUT_SETTER",
            expectedType: VALIDATION_TYPES.ARRAY,
          },
          {
            id: `${baseWidgetName}-message-sendTime`,
            labelName: i18n.t("editor.inspect.setter_label.sendTime"),
            labelDesc: i18n.t("editor.inspect.setter_tooltip.sendTime"),
            attrName: "sendTimes",
            placeholder: "{{item.sendTimes}}",
            isSetterSingleRow: true,
            setterType: "OPTION_MAPPED_INPUT_SETTER",
            expectedType: VALIDATION_TYPES.ARRAY,
          },
          {
            id: `${baseWidgetName}-message-senderName`,
            labelName: i18n.t("editor.inspect.setter_label.senderName"),
            labelDesc: i18n.t("editor.inspect.setter_tooltip.senderName"),
            attrName: "senderNames",
            placeholder: "{{item.senderNames}}",
            isSetterSingleRow: true,
            setterType: "OPTION_MAPPED_INPUT_SETTER",
            expectedType: VALIDATION_TYPES.ARRAY,
          },
          {
            id: `${baseWidgetName}-message-senderId`,
            labelName: i18n.t("editor.inspect.setter_label.senderId"),
            labelDesc: i18n.t("editor.inspect.setter_tooltip.senderId"),
            attrName: "senderIds",
            placeholder: "{{item.senderIds}}",
            isSetterSingleRow: true,
            setterType: "OPTION_MAPPED_INPUT_SETTER",
            expectedType: VALIDATION_TYPES.ARRAY,
          },
          {
            id: `${baseWidgetName}-message-senderAvatar`,
            labelName: i18n.t("editor.inspect.setter_label.senderAvatar"),
            labelDesc: i18n.t("editor.inspect.setter_tooltip.senderAvatar"),
            attrName: "senderAvatars",
            placeholder: "{{item.senderAvatars}}",
            isSetterSingleRow: true,
            setterType: "OPTION_MAPPED_INPUT_SETTER",
            expectedType: VALIDATION_TYPES.ARRAY,
          },
        ],
      },
      {
        id: `${baseWidgetName}-message-timeFormat`,
        labelName: i18n.t("editor.inspect.setter_label.timeFormat"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.sendtimeFormatTime"),
        isSetterSingleRow: true,
        attrName: "timeFormat",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
      {
        id: `${baseWidgetName}-message-currentSenderId`,
        labelName: i18n.t("editor.inspect.setter_label.currentSenderId"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.currentSenderId"),
        isSetterSingleRow: true,
        attrName: "currentSenderId",
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
      },
    ],
  },
  {
    id: `${baseWidgetName}-interaction`,
    groupName: i18n.t("editor.inspect.setter_group.interaction"),
    children: [
      {
        ...generatorEventHandlerConfig(
          baseWidgetName,
          CHAT_EVENT_HANDLER_CONFIG.events,
        ),
      },
      {
        id: `${baseWidgetName}-message-receiving`,
        labelName: i18n.t("editor.inspect.setter_label.receiving"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.receiving"),
        attrName: "receiving",
        isSetterSingleRow: true,
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
    ],
  },
  {
    id: `${baseWidgetName}-toolbar`,
    groupName: i18n.t("editor.inspect.setter_group.Toolbar"),
    children: [
      {
        id: `${baseWidgetName}-toolbar-replay`,
        labelName: i18n.t("editor.inspect.setter_label.toolbar-replay"),
        labelDesc: i18n.t("editor.inspect.setter_tips.toolbar-replay"),
        attrName: "toolbarReply",
        setterType: "DYNAMIC_SWITCH_SETTER",
        placeholder: "false",
        useCustomLayout: true,
        openDynamic: true,
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
      {
        id: `${baseWidgetName}-toolbar-delete`,
        labelName: i18n.t("editor.inspect.setter_label.toolbar-delete"),
        labelDesc: i18n.t("editor.inspect.setter_tips.toolbar-delete"),
        attrName: "toolbarDelete",
        setterType: "DYNAMIC_SWITCH_SETTER",
        placeholder: "false",
        useCustomLayout: true,
        openDynamic: true,
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
    ],
  },
  {
    id: `${baseWidgetName}-layout`,
    groupName: i18n.t("editor.inspect.setter_group.layout"),
    children: [
      {
        id: `${baseWidgetName}-layout-showAvatar`,
        labelName: i18n.t("editor.inspect.setter_label.showAvatar"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.showAvatar"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        attrName: "showAvatar",
        placeholder: "false",
        useCustomLayout: true,
        openDynamic: true,
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
      {
        id: `${baseWidgetName}-layout-showName`,
        labelName: i18n.t("editor.inspect.setter_label.showName"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.showName"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        attrName: "showName",
        placeholder: "false",
        useCustomLayout: true,
        openDynamic: true,
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
      {
        id: `${baseWidgetName}-layout-showSendTime`,
        labelName: i18n.t("editor.inspect.setter_label.showSendTime"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.showSendTime"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        attrName: "showSendTime",
        placeholder: "false",
        useCustomLayout: true,
        openDynamic: true,
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
      {
        id: `${baseWidgetName}-layout-showFooter`,
        labelName: i18n.t("editor.inspect.setter_label.showFooter"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.showFooter"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        attrName: "showFooter",
        placeholder: "false",
        useCustomLayout: true,
        openDynamic: true,
        expectedType: VALIDATION_TYPES.BOOLEAN,
      },
    ],
  },
  {
    id: `${baseWidgetName}-style`,
    groupName: i18n.t("editor.inspect.setter_group.style"),
    children: [
      {
        id: `${baseWidgetName}-styles-border`,
        setterType: "BORDER_SETTER",
        useCustomLayout: true,
        attrName: "border",
      },
      {
        id: `${baseWidgetName}-colors`,
        setterType: "STYLE_CONTAINER_SETTER",
        labelName: i18n.t("editor.inspect.setter_label.colors"),
        attrName: "styles",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: `${baseWidgetName}-colors-color`,
            labelName: i18n.t("editor.inspect.setter_label.theme_color"),
            attrName: "backgroundColor",
            setterType: "COLOR_PICKER_SETTER",
            useCustomLayout: true,
            defaultValue: "blue",
          },
          {
            id: `${baseWidgetName}-colors-message-left-color`,
            labelName: i18n.t("editor.inspect.setter_label.leftMessageColor"),
            labelDesc: i18n.t("editor.inspect.setter_tips.leftMessageColor"),
            attrName: "leftMessageColor",
            setterType: "COLOR_PICKER_SETTER",
            useCustomLayout: true,
            defaultValue: "grayBlue",
          },
          {
            id: `${baseWidgetName}-colors-right-message-color`,
            labelName: i18n.t("editor.inspect.setter_label.rightMessageColor"),
            labelDesc: i18n.t("editor.inspect.setter_tips.rightMessageColor"),
            attrName: "rightMessageColor",
            setterType: "COLOR_PICKER_SETTER",
            useCustomLayout: true,
            defaultValue: "blue",
          },
        ],
      },
      {
        id: `${baseWidgetName}-styles-style`,
        setterType: "STYLE_CONTAINER_SETTER",
        labelName: i18n.t("editor.inspect.setter_label.style"),
        attrName: "style",
        useCustomLayout: true,
        childrenSetter: [
          {
            id: `${baseWidgetName}-style-radius`,
            labelName: i18n.t("editor.inspect.setter_label.radius"),
            attrName: "radius",
            setterType: "MEASURE_CHECK_INPUT_SETTER",
            useCustomLayout: true,
            icon: <RadioIcon />,
            defaultValue: "4px",
          },
          {
            id: `${baseWidgetName}-style-shadow`,
            labelName: i18n.t("editor.inspect.setter_label.shadow.shadow"),
            attrName: "shadow",
            setterType: "SHADOW_SELECT_SETTER",
            useCustomLayout: true,
            defaultValue: "small",
          },
          {
            id: `${baseWidgetName}-style-avatar-padding`,
            labelName: i18n.t("editor.inspect.setter_group.padding"),
            attrName: "avatarPadding",
            icon: <AvatarPaddingIcon />,
            setterType: "MEASURE_CHECK_INPUT_SETTER",
            useCustomLayout: true,
            defaultValue: "32px",
          },
        ],
      },
    ],
  },
]