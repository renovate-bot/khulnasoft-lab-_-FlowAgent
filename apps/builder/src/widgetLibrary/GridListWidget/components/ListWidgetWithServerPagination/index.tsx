import { isEqual } from "lodash-es"
import { Resizable, ResizeCallback, ResizeStartCallback } from "re-resizable"
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import useMeasure from "react-use-measure"
import { Pagination } from "@flowagent-design/react"
import { LIST_ITEM_MARGIN_TOP } from "@/page/App/components/ScaleSquare/constant/widget"
import { applyDashedLineStyle } from "@/page/App/components/ScaleSquare/style"
import { getIsFLOWAGENTEditMode } from "@/redux/config/configSelector"
import { executionActions } from "@/redux/currentApp/executionTree/executionSlice"
import { getShadowStyle } from "@/utils/styleUtils/shadow"
import CursorBasedSelector from "@/widgetLibrary/GridListWidget/components/CursorBasedSelector"
import RenderCopyContainer from "@/widgetLibrary/GridListWidget/components/RenderCopyContainer"
import RenderTemplateContainer from "@/widgetLibrary/GridListWidget/components/RenderTemplateContainer"
import {
  COLUMN_NUM_ADAPTATION,
  ListWidgetPropsWithChildrenNodes,
  PAGINATION_TYPE,
} from "@/widgetLibrary/GridListWidget/interface"
import {
  ListParentContainerWithScroll,
  applyListItemStyle,
  itemContainerStyle,
  paginationWrapperStyle,
  selectStyle,
} from "@/widgetLibrary/GridListWidget/style"
import { resizeBottomHandler } from "@/widgetLibrary/GridListWidget/utils"

const ListWidgetWithServerPagination: FC<ListWidgetPropsWithChildrenNodes> = (
  props,
) => {
  const {
    itemHeight = 48,
    handleUpdateOriginalDSLMultiAttr,
    childrenNode,
    copyComponents = [],
    handleUpdateSelectedItem,
    itemBackGroundColor,
    columnNumber,
    pageSize,
    paginationType,
    totalRowCount,
    nextCursor,
    previousCursor,
    itemGapX = LIST_ITEM_MARGIN_TOP,
    itemGapY = LIST_ITEM_MARGIN_TOP,
    itemBorderColor,
    itemBorderRadius,
    itemBorderWidth,
    itemShadow,
    page = 1,
    enableServerSidePagination,
    dynamicHeight,
    updateComponentHeight,
    h,
    dynamicMinHeight,
    dynamicMaxHeight,
    displayName,
    columnNumAdaptation,
    numberOfColumns = 3,
    minColumnWidth,
    disabled,
    selectIndexForMark,
    themeColor,
    handleUpdateMultiExecutionResult,
    triggerEventHandler,
    enablePagination,
    loading,
    itemPadding,
  } = props
  const [containerRef, containerBounds] = useMeasure()
  const [paginationRef, paginationBounds] = useMeasure()
  const [itemRef, itemBounds] = useMeasure()
  const [isMouseHover, setIsMouseHover] = useState(false)
  const safePageSize = !pageSize ? 0 : pageSize

  const currentContainerBoundsHeight =
    containerBounds.height - paginationBounds.height
  const isEditMode = useSelector(getIsFLOWAGENTEditMode)
  const dispatch = useDispatch()

  const propsRef = useRef(props)
  const handleChangePage = useCallback(
    (pageNumber: number) => {
      if (pageNumber <= 0 || disabled) return
      handleUpdateSelectedItem()
      new Promise((resolve) => {
        handleUpdateMultiExecutionResult([
          {
            displayName,
            value: {
              page: pageNumber - 1,
            },
          },
        ])
        resolve(true)
      }).then(() => {
        triggerEventHandler("pageChange")
      })
    },
    [
      disabled,
      handleUpdateSelectedItem,
      handleUpdateMultiExecutionResult,
      displayName,
      triggerEventHandler,
    ],
  )

  const handleCursorBasedChangePage = useCallback(
    (isNext: boolean) => {
      if ((page <= 0 && !isNext) || disabled) return
      handleUpdateSelectedItem()
      let value: {
        page: number
        beforeCursor: string | undefined
        afterCursor: string | undefined
      }
      if (isNext) {
        value = {
          page: page + 1,
          beforeCursor: undefined,
          afterCursor: nextCursor,
        }
      } else {
        value = {
          page: page - 1,
          beforeCursor: previousCursor,
          afterCursor: undefined,
        }
      }
      new Promise((resolve) => {
        handleUpdateMultiExecutionResult([
          {
            displayName,
            value,
          },
        ])
        resolve(true)
      }).then(() => {
        triggerEventHandler("pageChange")
      })
    },
    [
      disabled,
      displayName,
      handleUpdateMultiExecutionResult,
      handleUpdateSelectedItem,
      nextCursor,
      page,
      previousCursor,
      triggerEventHandler,
    ],
  )

  useEffect(() => {
    if (!isEqual(propsRef.current, props)) {
      propsRef.current = props
    }
  }, [props])

  const handleResizeStart: ResizeStartCallback = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(executionActions.setResizingNodeIDsReducer([displayName]))
  }

  const handleOnResizeTopStop: ResizeCallback = useCallback(
    (e, dir, elementRef, delta) => {
      let finalHeight = itemHeight + delta.height
      handleUpdateOriginalDSLMultiAttr({
        itemHeight: finalHeight,
      })
      dispatch(executionActions.setResizingNodeIDsReducer([]))
    },
    [dispatch, handleUpdateOriginalDSLMultiAttr, itemHeight],
  )

  const canShowBorder = isEditMode && isMouseHover

  const shadowStyle = getShadowStyle(itemShadow)
  const borderStyle = useMemo(() => {
    let borderWidth, borderRadius
    const borderWidthNum = itemBorderWidth?.match(/\d+(\.\d+)?/g)
    if (borderWidthNum) borderWidth = borderWidthNum?.join("") + "px"
    const radiusNum = itemBorderRadius?.match(/\d+(\.\d+)?/g)
    if (radiusNum) borderRadius = radiusNum?.join("") + "px"
    return `
    border: ${
      borderWidth ? `${borderWidth} solid ${itemBorderColor}` : "unset"
    };
      border-radius: ${borderRadius ?? "unset"}
    `
  }, [itemBorderColor, itemBorderRadius, itemBorderWidth])

  const rowsNum = useMemo(() => {
    const rows =
      safePageSize > (copyComponents?.length ?? 0)
        ? copyComponents?.length ?? 0
        : safePageSize
    if (
      columnNumAdaptation === COLUMN_NUM_ADAPTATION.FIXED &&
      !!numberOfColumns
    ) {
      return Math.ceil(rows / numberOfColumns)
    } else {
      return Math.ceil(rows / (containerBounds.width / itemBounds.width))
    }
  }, [
    columnNumAdaptation,
    containerBounds.width,
    itemBounds.width,
    numberOfColumns,
    safePageSize,
    copyComponents?.length,
  ])

  useEffect(() => {
    handleUpdateMultiExecutionResult([
      {
        displayName,
        value: {
          offset: safePageSize * page,
        },
      },
    ])
  }, [displayName, handleUpdateMultiExecutionResult, page, safePageSize])

  return (
    <div
      css={ListParentContainerWithScroll}
      ref={containerRef}
      onMouseEnter={() => {
        setIsMouseHover(true)
      }}
      onMouseLeave={() => {
        setIsMouseHover(false)
      }}
    >
      <div
        css={itemContainerStyle(
          columnNumAdaptation!,
          itemGapX,
          itemGapY,
          itemShadow,
          numberOfColumns,
          minColumnWidth,
        )}
      >
        <Resizable
          size={{
            width: "100%",
            height: itemHeight,
          }}
          bounds="parent"
          minHeight={48}
          maxHeight={
            dynamicHeight !== "fixed"
              ? "unset"
              : currentContainerBoundsHeight - 4
          }
          handleComponent={isMouseHover ? resizeBottomHandler() : undefined}
          enable={
            dynamicHeight !== "fixed" || loading
              ? {}
              : {
                  bottom: true,
                }
          }
          onResizeStart={handleResizeStart}
          onResizeStop={handleOnResizeTopStop}
        >
          <div
            css={selectStyle(
              selectIndexForMark === 0,
              isEditMode,
              themeColor,
              itemBorderRadius,
            )}
          >
            <div
              css={applyListItemStyle(
                true,
                itemBackGroundColor,
                shadowStyle,
                borderStyle,
                isEditMode,
                loading,
              )}
              onClick={() => {
                handleUpdateSelectedItem(0)
              }}
            >
              <RenderTemplateContainer
                templateComponentDisplayName={childrenNode[0]}
                templateContainerHeight={itemHeight}
                columnNumber={columnNumber}
                dynamicHeight={dynamicHeight}
                extraHeight={paginationBounds.height}
                itemShadow={itemShadow}
                enableAutoPagination={enablePagination}
                handleUpdateOriginalDSLMultiAttr={
                  handleUpdateOriginalDSLMultiAttr
                }
                itemNumber={rowsNum}
                updateComponentHeight={updateComponentHeight}
                h={h}
                dynamicMinHeight={dynamicMinHeight}
                dynamicMaxHeight={dynamicMaxHeight}
                itemGap={itemGapY}
                itemPadding={itemPadding}
              />
            </div>
          </div>

          {canShowBorder && (
            <div css={applyDashedLineStyle(false, true, false)} />
          )}
        </Resizable>
        {copyComponents?.map((node, index) => {
          if (index === 0) return null
          return (
            <div
              key={node.displayName}
              css={selectStyle(
                selectIndexForMark === index,
                isEditMode,
                themeColor,
                itemBorderRadius,
                itemHeight,
              )}
            >
              <div
                css={applyListItemStyle(
                  false,
                  itemBackGroundColor,
                  shadowStyle,
                  borderStyle,
                  isEditMode,
                  loading,
                  itemHeight,
                  itemPadding?.size,
                )}
                ref={itemRef}
                onClick={() => {
                  handleUpdateSelectedItem(index)
                }}
              >
                <RenderCopyContainer
                  templateComponentNodes={node}
                  templateContainerHeight={itemHeight}
                  columnNumber={columnNumber}
                  displayNamePrefix={`grid-list-child-${index}-`}
                />
              </div>
            </div>
          )
        })}
      </div>
      {enablePagination && enableServerSidePagination && (
        <div css={paginationWrapperStyle} ref={paginationRef}>
          {paginationType === PAGINATION_TYPE.LIMIT_OFFSET_BASED ? (
            <Pagination
              total={totalRowCount ?? 1}
              current={page + 1 ?? 1}
              pageSize={safePageSize}
              size="medium"
              disableSimplePageJump
              sizeCanChange={false}
              hideOnSinglePage={false}
              simple
              onChange={handleChangePage}
            />
          ) : (
            <CursorBasedSelector
              page={page}
              hasNextPage={props.hasNextPage}
              onChange={handleCursorBasedChangePage}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default ListWidgetWithServerPagination
