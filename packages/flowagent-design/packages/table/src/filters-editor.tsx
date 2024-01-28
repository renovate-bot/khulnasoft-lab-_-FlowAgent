import { FC, useMemo } from "react"
import { globalColor, flowagentPrefix } from "@flowagent-design/theme"
import { Button } from "@flowagent-design/button"
import { AddIcon, DeleteIcon } from "@flowagent-design/icon"
import { Select } from "@flowagent-design/select"
import { Input } from "@flowagent-design/input"
import { FilterFn, FilterOperator, FiltersEditorProps } from "./interface"
import {
  editorButtonStyle,
  editorStyle,
  filterLabelStyle,
  filterStyle,
} from "./style"
import { FilterOperatorOptions, FilterOptions } from "./utils"
import { isString } from "@flowagent-design/system"

export const FiltersEditor: FC<FiltersEditorProps> = (props) => {
  const {
    filterOperator,
    columnFilters,
    columnsOption,
    onDelete,
    onAdd,
    onChange,
    onChangeOperator,
    colorScheme,
  } = props

  const recordList = useMemo(() => {
    return (
      <>
        {columnFilters.map((filter, index) => {
          const { id, value, filterFn } = filter
          return (
            <div css={filterStyle} key={index}>
              <div css={filterLabelStyle}>
                {index === 0 ? (
                  "Where"
                ) : index === 1 ? (
                  <Select
                    w="86px"
                    colorScheme={colorScheme}
                    value={filterOperator}
                    options={FilterOperatorOptions}
                    onChange={(operator) => {
                      onChangeOperator(operator as FilterOperator)
                    }}
                  />
                ) : (
                  filterOperator
                )}
              </div>
              <Select
                w="200px"
                mg="8px 4px"
                colorScheme={colorScheme}
                value={id}
                options={columnsOption}
                onChange={(id) => {
                  onChange(index, { ...filter, id: id as string })
                }}
              />
              <Select
                w="200px"
                mg="8px 4px"
                colorScheme={colorScheme}
                value={filterFn as string}
                options={FilterOptions}
                onChange={(filterFn) => {
                  if (filterFn != null) {
                    let option = filterFn as FilterFn
                    onChange(index, {
                      ...filter,
                      filterFn: option,
                    })
                  }
                }}
              />
              <Input
                w="200px"
                mg="8px 4px"
                colorScheme={colorScheme}
                value={isString(value) ? value : undefined}
                disabled={
                  (filterFn as string) === "empty" ||
                  (filterFn as string) === "notEmpty"
                }
                onChange={(value) => {
                  onChange(index, { ...filter, value })
                }}
              />
              <Button
                variant="text"
                colorScheme="gray"
                onClick={() => {
                  onDelete(index, filter)
                }}
                leftIcon={
                  <DeleteIcon
                    color={globalColor(`--${flowagentPrefix}-grayBlue-06`)}
                  />
                }
              />
            </div>
          )
        })}
      </>
    )
  }, [
    colorScheme,
    columnFilters,
    columnsOption,
    filterOperator,
    onChange,
    onChangeOperator,
    onDelete,
  ])

  return (
    <div css={editorStyle}>
      {recordList}
      <span css={editorButtonStyle}>
        <Button
          pd="1px 8px"
          colorScheme={colorScheme}
          size="medium"
          variant="text"
          onClick={onAdd}
          leftIcon={
            <AddIcon
              color={globalColor(`--${flowagentPrefix}-techPurple-03`)}
            />
          }
        >
          New
        </Button>
      </span>
    </div>
  )
}

FiltersEditor.displayName = "FiltersEditor"
