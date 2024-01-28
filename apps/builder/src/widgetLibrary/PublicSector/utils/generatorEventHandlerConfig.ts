import i18n from "@/i18n/config"
import { EventHandlerPanelConfig } from "@/page/App/components/InspectPanel/interface"
import { VALIDATION_TYPES } from "@/utils/validationFactory"

export const generatorEventHandlerConfig = (
  baseWidgetName: string,
  events: { label: string; value: string }[] = [],
  labelName: string = i18n.t("editor.inspect.setter_label.event_handler"),
  attrName: string = "events",
  defaultValue?: string,
  labelDesc?: string,
): EventHandlerPanelConfig => {
  return {
    id: `${baseWidgetName}-interaction-event-handler`,
    attrName: attrName,
    labelName: labelName,
    labelDesc: labelDesc,
    setterType: "EVENT_HANDLER_SETTER",
    useCustomLayout: true,
    defaultValue: defaultValue,
    eventHandlerConfig: { events, methods: [] },
    childrenSetter: [
      {
        id: `${baseWidgetName}-interaction-event-handler-event`,
        labelName: i18n.t("editor.inspect.setter_label.event"),
        setterType: "SEARCH_SELECT_SETTER",
        attrName: "eventType",
        options: events,
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-action`,
        labelName: i18n.t("editor.inspect.setter_label.action"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.action"),
        setterType: "EVENT_ACTION_SELECT_SETTER",
        attrName: "actionType",
        options: [
          {
            label: i18n.t("editor.inspect.setter_label.trigger_query"),
            value: "datasource",
          },
          {
            label: i18n.t("editor.inspect.setter_label.control_component"),
            value: "widget",
          },
          {
            label: i18n.t("editor.inspect.setter_label.run_script"),
            value: "script",
          },
          {
            label: i18n.t("editor.inspect.setter_label.go_to_url"),
            value: "openUrl",
          },
          {
            label: i18n.t("editor.inspect.setter_label.show_notification"),
            value: "showNotification",
          },
          {
            label: i18n.t("editor.inspect.setter_label.copy_to_clipboard"),
            value: "copyToClipboard",
          },
          {
            label: i18n.t("editor.inspect.setter_label.set_router"),
            value: "setRouter",
          },
          {
            label: i18n.t("editor.inspect.setter_label.save_to_drive"),
            value: "saveToFLOWAGENTDrive",
          },
          {
            label: i18n.t("editor.inspect.setter_label.download_from_drive"),
            value: "downloadFromFLOWAGENTDrive",
          },
          {
            label: i18n.t("editor.method.file_download.download"),
            value: "downloadFile",
          },
          {
            label: i18n.t("editor.method.setGlobalData"),
            value: "setGlobalState",
          },
          {
            label: i18n.t("editor.method.setLocalStorage"),
            value: "setLocalStorage",
          },
        ],
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-query`,
        labelName: i18n.t("editor.inspect.setter_label.action_name"),
        setterType: "EVENT_TARGET_ACTION_SELECT_SETTER",
        attrName: "queryID",
        bindAttrName: ["actionType"],
        shown: (type) => type === "datasource",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-actionMethod`,
        labelName: i18n.t("editor.inspect.setter_label.method"),
        setterType: "SEARCH_SELECT_SETTER",
        attrName: "widgetMethod",
        bindAttrName: ["queryID"],
        shown: (type) => type === "datasource",
        options: [{ label: "run", value: "executeAction" }],
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-component`,
        labelName: i18n.t("editor.inspect.setter_label.component"),
        setterType: "EVENT_TARGET_SELECT_SETTER",
        attrName: "widgetID",
        bindAttrName: ["actionType"],
        shown: (type) => type === "widget",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-Method`,
        labelName: i18n.t("editor.inspect.setter_label.method"),
        setterType: "EVENT_WIDGET_METHOD_SELECT_SETTER",
        attrName: "widgetMethod",
        bindAttrName: ["widgetID"],
        shown: (widgetID) => !!widgetID,
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-Value`,
        labelName: i18n.t("editor.inspect.setter_label.value"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setValue",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-start-value`,
        labelName: i18n.t(
          "editor.inspect.setter_label.range_slider.start_value",
        ),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setStartOfRange",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-end-value`,
        labelName: i18n.t("editor.inspect.setter_label.range_slider.end_value"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setEndOfRange",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-valueInArray`,
        labelName: i18n.t("editor.inspect.setter_label.value"),
        labelDesc: i18n.t(
          "editor.inspect.setter_tips.switch_group.default_value",
        ),
        placeholder: '{{["value1", "value2"]}}',
        isSetterSingleRow: true,
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setValueInArray",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-selectValue`,
        labelName: i18n.t("editor.inspect.setter_label.value"),
        placeholder: i18n.t(
          "editor.inspect.setter_placeholder.multiselect.value",
        ),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setSelectedValue",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-markers`,
        labelName: i18n.t("editor.inspect.setter_label.map.markers"),
        labelDesc: i18n.t("editor.inspect.setter_tips.map.markers"),
        setterType: "TABLE_MAPPED_VALUE_INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setMarkers",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-add-event`,
        labelName: i18n.t("editor.method.eventCalendar.addevent"),
        labelDesc: i18n.t(
          "editor.inspect.setter_tips.eventCalendar.event_value",
        ),
        placeholder: i18n.t(
          "editor.inspect.setter_label.eventCalendar.event_value",
        ),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "addEvent",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-delete-event`,
        labelName: i18n.t("editor.method.eventCalendar.deleteevent"),
        labelDesc: i18n.t("editor.inspect.setter_tips.eventCalendar.event_id"),
        placeholder: i18n.t(
          "editor.inspect.setter_label.eventCalendar.event_id",
        ),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "deleteEvent",
      },
      {
        // TODO: follow-up support @mengcheng
        id: `${baseWidgetName}-interaction-event-handler-setHidden`,
        labelName: i18n.t("editor.inspect.setter_label.hidden"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        attrName: "widgetSwitchTargetValue",
        bindAttrName: ["widgetMethod"],
        useCustomLayout: true,
        openDynamic: true,
        shown: (widgetMethod) => widgetMethod === "setHidden",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-setDisabled`,
        labelName: i18n.t("editor.inspect.setter_label.disabled"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        attrName: "widgetSwitchTargetValue",
        bindAttrName: ["widgetMethod"],
        useCustomLayout: true,
        openDynamic: true,
        shown: (widgetMethod) => widgetMethod === "setDisabled",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-startValue`,
        labelName: i18n.t("editor.inspect.setter_label.start_date"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setStartValue",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-endValue`,
        labelName: i18n.t("editor.inspect.setter_label.end_data"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setEndValue",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-startTime`,
        labelName: i18n.t("editor.inspect.setter_label.time_range.start_time"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setStartTime",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-endTime`,
        labelName: i18n.t("editor.inspect.setter_label.time_range.end_time"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setEndTime",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-setPrimaryValue`,
        labelName: i18n.t("editor.method.statistics.primary_value"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        placeholder: "{{ 1234 }}",
        // expectedType: VALIDATION_TYPES.NUMBER,
        shown: (widgetMethod) => widgetMethod === "setPrimaryValue",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-imageUrl`,
        labelName: i18n.t("editor.inspect.setter_label.value"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) =>
          widgetMethod === "setImageUrl" || widgetMethod === "setSrc",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-pageIndex`,
        labelName: i18n.t("editor.inspect.setter_label.range_slider.end_value"),
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.NUMBER,
        attrName: "pageIndex",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "selectPage",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-sortKey`,
        labelName: i18n.t("editor.inspect.setter_label.default_sort_key"),
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "sortKey",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setSort",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-sortOrder`,
        labelName: i18n.t("editor.inspect.setter_label.default_sort_order"),
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "sortOrder",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setSort",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-filters`,
        labelName: i18n.t("editor.inspect.setter_label.table.filters"),
        labelDesc: i18n.t("editor.inspect.setter_tips.table.filters"),
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.ARRAY,
        attrName: "filters",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setFilters",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-operator`,
        labelName: i18n.t("editor.inspect.setter_label.table.filter_mode"),
        labelDesc: i18n.t("editor.inspect.setter_tips.table.filter_mode"),
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "operator",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setFilters",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-rowSelection`,
        labelName: i18n.t(
          "editor.inspect.setter_label.table.default_selected_row",
        ),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "selectRow",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-copiedValue`,
        labelName: i18n.t("editor.inspect.setter_label.value"),
        setterType: "INPUT_SETTER",
        attrName: "copiedValue",
        bindAttrName: ["actionType"],
        shown: (widgetMethod) => widgetMethod === "copyToClipboard",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-fileUrl`,
        labelName: i18n.t("editor.inspect.setter_label.file_url"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setFileUrl",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-videoUrl`,
        labelName: i18n.t("editor.inspect.setter_label.video_url"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setVideoUrl",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-audioUrl`,
        labelName: i18n.t("editor.inspect.setter_label.audio.audio_url"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (widgetMethod) => widgetMethod === "setAudioUrl",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-speed`,
        labelName: i18n.t("editor.method.speed.speed"),
        placeholder: "{{ 1.5 }}",
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        // expectedType: VALIDATION_TYPES.NUMBER,
        shown: (widgetMethod) => widgetMethod === "setSpeed",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-volume`,
        labelName: i18n.t("editor.method.set_volume.volume"),
        placeholder: "{{ 0.5 }}",
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        // expectedType: VALIDATION_TYPES.NUMBER,
        shown: (widgetMethod) => widgetMethod === "setVolume",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-seekTo`,
        labelName:
          i18n.t("editor.method.seek_to.time") +
          i18n.t("editor.method.seek_to.unit"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        // expectedType: VALIDATION_TYPES.NUMBER,
        shown: (widgetMethod) => widgetMethod === "seekTo",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-loop`,
        labelName: i18n.t("editor.method.loop"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLayout: true,
        openDynamic: true,
        attrName: "widgetSwitchTargetValue",
        bindAttrName: ["widgetMethod"],
        // expectedType: VALIDATION_TYPES.BOOLEAN,
        shown: (widgetMethod) => widgetMethod === "setLoop",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-mute`,
        labelName: i18n.t("editor.method.mute"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLayout: true,
        openDynamic: true,
        attrName: "widgetSwitchTargetValue",
        bindAttrName: ["widgetMethod"],
        // expectedType: VALIDATION_TYPES.BOOLEAN,
        shown: (widgetMethod) => widgetMethod === "mute",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-showControls`,
        labelName: i18n.t("editor.method.show_controls"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        useCustomLayout: true,
        openDynamic: true,
        attrName: "widgetSwitchTargetValue",
        bindAttrName: ["widgetMethod"],
        // expectedType: VALIDATION_TYPES.BOOLEAN,
        shown: (widgetMethod) => widgetMethod === "showControls",
      },
      {
        id: `${baseWidgetName}-interaction-event-select-state`,
        labelName: i18n.t("editor.inspect.setter_label.name"),
        setterType: "EVENT_TARGET_STATE_SELECT_SETTER",
        attrName: "stateDisplayName",
        bindAttrName: ["actionType"],
        shown: (type) => type === "setGlobalState",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-state-method`,
        labelName: i18n.t("editor.inspect.setter_label.method"),
        setterType: "SEARCH_SELECT_SETTER",
        attrName: "globalStateMethod",
        bindAttrName: ["stateDisplayName"],
        shown: (stateDisplayName) => !!stateDisplayName,
        options: [
          {
            label: "Set In",
            value: "setIn",
          },
          {
            label: "Set Value",
            value: "setValue",
          },
        ],
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-stateKey`,
        labelName: i18n.t("editor.inspect.setter_label.variable.path_of_value"),
        labelDesc: i18n.t(
          "editor.inspect.setter_tips.variable.available_in_objects",
        ),
        setterType: "INPUT_SETTER",
        attrName: "globalStateKeyPath",
        bindAttrName: ["globalStateMethod"],
        shown: (globalStateMethod) => globalStateMethod === "setIn",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-stateValue`,
        labelName: i18n.t("editor.inspect.setter_label.value"),
        setterType: "INPUT_SETTER",
        attrName: "globalStateValue",
        bindAttrName: ["globalStateMethod"],
        shown: (globalStateMethod) =>
          globalStateMethod === "setValue" || globalStateMethod === "setIn",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-storage-method`,
        labelName: i18n.t("editor.inspect.setter_label.method"),
        setterType: "SEARCH_SELECT_SETTER",
        attrName: "localStorageMethod",
        bindAttrName: ["actionType"],
        shown: (type) => type === "setLocalStorage",
        options: [
          {
            label: "Clear",
            value: "clear",
          },
          {
            label: "Set Value",
            value: "setValue",
          },
        ],
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-localStorageKey`,
        labelName: i18n.t("editor.inspect.setter_label.key"),
        setterType: "INPUT_SETTER",
        attrName: "localStorageKey",
        bindAttrName: ["localStorageMethod"],
        shown: (localStorageMethod) => localStorageMethod === "setValue",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-localStorageValue`,
        labelName: i18n.t("editor.inspect.setter_label.value"),
        setterType: "INPUT_SETTER",
        attrName: "localStorageValue",
        bindAttrName: ["localStorageMethod"],
        shown: (localStorageMethod) => localStorageMethod === "setValue",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-disabled`,
        labelName: i18n.t("editor.inspect.setter_label.disabled"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        attrName: "disabled",
        bindAttrName: ["type"],
        useCustomLayout: true,
        openDynamic: true,
        shown: (type) => type === "widget",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-script`,
        setterType: "SCRIPT_INPUT_SETTER",
        attrName: "script",
        bindAttrName: ["actionType"],
        expectedType: VALIDATION_TYPES.STRING,
        shown: (type) => type === "script",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-URL`,
        labelName: "URL",
        setterType: "INPUT_SETTER",
        attrName: "url",
        bindAttrName: ["actionType"],
        expectedType: VALIDATION_TYPES.STRING,
        shown: (type) => type === "openUrl",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-newTab`,
        labelName: i18n.t("editor.inspect.setter_label.new_tab"),
        setterType: "DYNAMIC_SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        attrName: "newTab",
        bindAttrName: ["actionType"],
        useCustomLayout: true,
        openDynamic: true,
        shown: (type) => type === "openUrl",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-setCurrentViewKey`,
        labelName: i18n.t("editor.inspect.setter_label.key"),
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "key",
        bindAttrName: ["widgetMethod"],
        shown: (type) => type === "setCurrentViewKey",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-setCurrentViewIndex`,
        labelName: i18n.t("editor.inspect.setter_label.index"),
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.NUMBER,
        attrName: "index",
        bindAttrName: ["widgetMethod"],
        shown: (type) => type === "setCurrentViewIndex",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-showNextView`,
        labelName: i18n.t("editor.inspect.setter_label.loop_back_to_start"),
        setterType: "SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        attrName: "showNextViewLoopBack",
        bindAttrName: ["widgetMethod"],
        shown: (type) => type === "showNextView",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-showNextVisibleView`,
        labelName: i18n.t("editor.inspect.setter_label.loop_back_to_start"),
        setterType: "SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        attrName: "showNextVisibleViewLoopBack",
        bindAttrName: ["widgetMethod"],
        shown: (type) => type === "showNextVisibleView",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-showPreviousView`,
        labelName: i18n.t("editor.inspect.setter_label.loop_start_to_back"),
        setterType: "SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        attrName: "showPreviousViewLoopBack",
        bindAttrName: ["widgetMethod"],
        shown: (type) => type === "showPreviousView",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-showPreviousVisibleView`,
        labelName: i18n.t("editor.inspect.setter_label.loop_start_to_back"),
        setterType: "SWITCH_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        attrName: "showPreviousVisibleViewLoopBack",
        bindAttrName: ["widgetMethod"],
        shown: (type) => type === "showPreviousVisibleView",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-title`,
        labelName: i18n.t("editor.inspect.setter_label.title"),
        setterType: "INPUT_SETTER",
        attrName: "title",
        bindAttrName: ["actionType"],
        expectedType: VALIDATION_TYPES.STRING,
        shown: (type) => type === "showNotification",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-description`,
        labelName: i18n.t("editor.inspect.setter_label.description"),
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "description",
        bindAttrName: ["actionType"],
        shown: (type) => type === "showNotification",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-notification-type`,
        labelName: i18n.t("editor.inspect.setter_label.type"),
        setterType: "SEARCH_SELECT_SETTER",
        attrName: "notificationType",
        bindAttrName: ["actionType"],
        shown: (type) => type === "showNotification",
        options: [
          {
            label: i18n.t(
              "editor.inspect.setter_default_value.message_type.success",
            ),
            value: "success",
          },
          {
            label: i18n.t(
              "editor.inspect.setter_default_value.message_type.error",
            ),
            value: "error",
          },
          {
            label: i18n.t(
              "editor.inspect.setter_default_value.message_type.warning",
            ),
            value: "warning",
          },
          {
            label: i18n.t(
              "editor.inspect.setter_default_value.message_type.info",
            ),
            value: "info",
          },
        ],
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-page`,
        labelName: i18n.t("editor.inspect.setter_label.page"),
        setterType: "EVENT_TARGET_PAGE_SELECT_SETTER",
        placeholder: i18n.t(
          "editor.inspect.setter_content.select_page_setter.placeholder",
        ),
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "pagePath",
        bindAttrName: ["actionType"],
        shown: (type) => type === "setRouter",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-view-path`,
        labelName: i18n.t("editor.page.label_name.view_path"),
        placeholder: i18n.t(
          "editor.inspect.setter_content.select_view_setter.placeholder",
        ),
        setterType: "EVENT_TARGET_VIEW_PATH_SELECT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "viewPath",
        bindAttrName: ["actionType"],
        shown: (type) => type === "setRouter",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-duration`,
        labelName: `${i18n.t("editor.inspect.setter_label.duration")}(ms)`,
        setterType: "INPUT_SETTER",
        attrName: "duration",
        bindAttrName: ["actionType"],
        expectedType: VALIDATION_TYPES.NUMBER,
        placeholder: "{{4500}}",
        shown: (type) => type === "showNotification",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-fileName`,
        labelName: i18n.t(
          "editor.inspect.setter_label.file_download.file_name",
        ),
        placeholder: i18n.t(
          "editor.inspect.setter_placeholder.file_download.file_name",
        ),
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "fileName",
        bindAttrName: ["actionType"],
        shown: (type) => type === "downloadFile" || type === "saveToFLOWAGENTDrive",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-fileData`,
        labelName: i18n.t(
          "editor.inspect.setter_label.file_download.file_data",
        ),
        labelDesc: i18n.t("editor.inspect.setter_tips.file_download.file_data"),
        placeholder: i18n.t(
          "editor.inspect.setter_placeholder.file_download.file_data",
        ),
        setterType: "INPUT_SETTER",
        attrName: "fileData",
        bindAttrName: ["actionType"],
        shown: (type) => type === "downloadFile",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-download-from-flowagent-drive-file-data`,
        labelName: i18n.t(
          "editor.inspect.setter_label.file_download.file_data",
        ),
        labelDesc: i18n.t("editor.inspect.setter_tips.file_download.file_data"),
        placeholder: `{{filePicker1.value}}`,
        setterType: "INPUT_SETTER",
        attrName: "fileData",
        bindAttrName: ["actionType"],
        shown: (type) => type === "saveToFLOWAGENTDrive",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-fileType`,
        labelName: i18n.t(
          "editor.inspect.setter_label.file_download.file_type",
        ),
        setterType: "SEARCH_SELECT_SETTER",
        expectedType: VALIDATION_TYPES.STRING,
        attrName: "fileType",
        bindAttrName: ["actionType"],
        defaultValue: "auto",
        shown: (type) => type === "downloadFile" || type === "saveToFLOWAGENTDrive",
        options: [
          {
            label: i18n.t("editor.inspect.setter_option.file_download.auto"),
            value: "auto",
          },
          {
            label: i18n.t(
              "editor.inspect.setter_option.file_download.plain_text",
            ),
            value: "txt",
          },
          {
            label: i18n.t("editor.inspect.setter_option.file_download.jpeg"),
            value: "jpeg",
          },
          {
            label: i18n.t("editor.inspect.setter_option.file_download.png"),
            value: "png",
          },
          {
            label: i18n.t("editor.inspect.setter_option.file_download.svg"),
            value: "svg",
          },
          {
            label: i18n.t("editor.inspect.setter_option.file_download.json"),
            value: "json",
          },
          {
            label: i18n.t("editor.inspect.setter_option.file_download.csv"),
            value: "csv",
          },
          {
            label: i18n.t("editor.inspect.setter_option.file_download.tsv"),
            value: "tsv",
          },
          {
            label: i18n.t("editor.inspect.setter_option.file_download.excel"),
            value: "xlsx",
          },
        ],
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-allow-anonymous-use`,
        labelName: i18n.t(
          "editor.inspect.setter_label.drive_builder.allow_public_use",
        ),
        labelDesc: i18n.t(
          "editor.inspect.setter_tips.drive_builder.allow_public_use",
        ),
        setterType: "DYNAMIC_SWITCH_SETTER",
        attrName: "allowAnonymous",
        bindAttrName: ["actionType"],
        useCustomLayout: true,
        openDynamic: true,
        shown: (type) =>
          type === "downloadFromFLOWAGENTDrive" || type === "saveToFLOWAGENTDrive",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-folder-path`,
        labelName: i18n.t(
          "editor.inspect.setter_label.drive_builder.flowagent_drive_folder",
        ),
        labelDesc: i18n.t(
          "editor.inspect.setter_tips.drive_builder.flowagent_drive_folder",
        ),
        setterType: "INPUT_SETTER",
        attrName: "folder",
        placeholder: "folder/folder",
        bindAttrName: ["actionType", "allowAnonymous"],
        shown: (type, allowAnonymous) =>
          type === "saveToFLOWAGENTDrive" && !allowAnonymous,
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-duplication`,
        labelName: i18n.t(
          "editor.inspect.setter_label.drive_builder.file_name_duplicatio",
        ),
        labelDesc: i18n.t(
          "editor.inspect.setter_tips.drive_builder.file_name_duplicatio",
        ),
        setterType: "DYNAMIC_SWITCH_SETTER",
        attrName: "duplicationHandler",
        bindAttrName: ["actionType"],
        useCustomLayout: true,
        openDynamic: true,
        shown: (type) => type === "saveToFLOWAGENTDrive",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-download-info-with-drive`,
        labelName: i18n.t("editor.inspect.setter_label.drive_builder.fileData"),
        labelDesc: i18n.t("editor.inspect.setter_tips.drive_builder.fileData"),
        placeholder: `{{filePicker1.value}}`,
        setterType: "INPUT_SETTER",
        attrName: "downloadInfo",
        bindAttrName: ["actionType"],
        shown: (type) => type === "downloadFromFLOWAGENTDrive",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-as-zip-with-download`,
        labelName: i18n.t(
          "editor.inspect.setter_label.drive_builder.downloadZIP",
        ),
        labelDesc: i18n.t(
          "editor.inspect.setter_tips.drive_builder.downloadZIP",
        ),
        setterType: "DYNAMIC_SWITCH_SETTER",
        attrName: "asZip",
        bindAttrName: ["actionType"],
        useCustomLayout: true,
        openDynamic: true,
        shown: (type) => type === "downloadFromFLOWAGENTDrive",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-setFilterModel`,
        labelName: i18n.t("editor.inspect.setter_label.value"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (method) => method === "setFilterModel",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-setColumnVisibilityModel`,
        labelName: i18n.t("editor.inspect.setter_label.value"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (method) => method === "setColumnVisibilityModel",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-setPage`,
        labelName: i18n.t("editor.inspect.setter_label.value"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (method) => method === "setPage",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-setPageSize`,
        labelName: i18n.t("editor.inspect.setter_label.value"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (method) => method === "setPageSize",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-setRowSelection`,
        labelName: i18n.t("editor.inspect.setter_label.value"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        shown: (method) => method === "setRowSelection",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-enabled`,
        labelName: i18n.t("editor.inspect.setter_label.only_run_when"),
        labelDesc: i18n.t("editor.inspect.setter_tooltip.only_run_when"),
        setterType: "INPUT_SETTER",
        expectedType: VALIDATION_TYPES.BOOLEAN,
        attrName: "enabled",
      },
      {
        id: `${baseWidgetName}-interaction-event-handler-render`,
        labelName: i18n.t("editor.inspect.setter_label.value"),
        setterType: "INPUT_SETTER",
        attrName: "widgetTargetValue",
        bindAttrName: ["widgetMethod"],
        expectedType: VALIDATION_TYPES.STRING,
        shown: (method) => method === "renderEditor",
      },
    ],
  }
}

export const actionSuccessEventHandlerConfig = generatorEventHandlerConfig(
  "success-event",
  [
    {
      label: i18n.t(
        "editor.inspect.setter_content.widget_action_type_name.success",
      ),
      value: "success",
    },
  ],
  i18n.t("editor.inspect.setter_label.success"),
  "successEvent",
  "success",
)

export const actionFailedEventHandlerConfig = generatorEventHandlerConfig(
  "failed-event",
  [
    {
      label: i18n.t(
        "editor.inspect.setter_content.widget_action_type_name.fail",
      ),
      value: "fail",
    },
  ],
  i18n.t("editor.inspect.setter_label.failure"),
  "failedEvent",
  "fail",
)