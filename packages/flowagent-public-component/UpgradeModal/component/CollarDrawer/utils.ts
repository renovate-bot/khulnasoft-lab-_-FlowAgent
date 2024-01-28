import { COFLOWAGENTR_TYPE } from "../../interface"
import { COFLOWAGENTR_BUTTON_TEXT, COFLOWAGENTR_MORE_TEXT } from "./constants"

export const getCurrentCollarType = (
  teamSubscribeNum: number,
  currentSubscribeNum: number,
  isCanceled?: boolean,
) => {
  if (isCanceled) {
    return COFLOWAGENTR_TYPE.MODIFY_SUBSCRIPTION
  }
  if (teamSubscribeNum === 0) {
    return COFLOWAGENTR_TYPE.SUBSCRIBE
  } else {
    if (currentSubscribeNum > teamSubscribeNum) {
      return COFLOWAGENTR_TYPE.ADD_COFLOWAGENTR
    } else if (currentSubscribeNum === 0) {
      return COFLOWAGENTR_TYPE.CANCEL_SUBSCRIPTION
    } else if (currentSubscribeNum < teamSubscribeNum) {
      return COFLOWAGENTR_TYPE.REMOVE_COFLOWAGENTR
    } else {
      return COFLOWAGENTR_TYPE.SUBSCRIBE
    }
  }
}

export const getDescription = (currentCollarType: COFLOWAGENTR_TYPE) => {
  switch (currentCollarType) {
    case COFLOWAGENTR_TYPE.ADD_COFLOWAGENTR:
      return COFLOWAGENTR_MORE_TEXT.ADD_COFLOWAGENTR
    case COFLOWAGENTR_TYPE.REMOVE_COFLOWAGENTR:
      return COFLOWAGENTR_MORE_TEXT.REMOVE_COFLOWAGENTR
    case COFLOWAGENTR_TYPE.CANCEL_SUBSCRIPTION:
      return COFLOWAGENTR_MORE_TEXT.CANCEL_SUBSCRIPTION
    default:
    case COFLOWAGENTR_TYPE.SUBSCRIBE:
      return COFLOWAGENTR_MORE_TEXT.SUBSCRIBE
  }
}

export const getBtnText = (currentCollarType: COFLOWAGENTR_TYPE) => {
  if (currentCollarType === COFLOWAGENTR_TYPE.SUBSCRIBE) {
    return COFLOWAGENTR_BUTTON_TEXT.SUBSCRIBE
  } else if (currentCollarType === COFLOWAGENTR_TYPE.ADD_COFLOWAGENTR) {
    return COFLOWAGENTR_BUTTON_TEXT.ADD_COFLOWAGENTR
  } else if (currentCollarType === COFLOWAGENTR_TYPE.REMOVE_COFLOWAGENTR) {
    return COFLOWAGENTR_BUTTON_TEXT.REMOVE_COFLOWAGENTR
  } else if (currentCollarType === COFLOWAGENTR_TYPE.CANCEL_SUBSCRIPTION) {
    return COFLOWAGENTR_BUTTON_TEXT.CANCEL_SUBSCRIPTION
  } else {
    return COFLOWAGENTR_BUTTON_TEXT.SUBSCRIBE
  }
}
