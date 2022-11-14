import { ActionType } from '../action-types'
import { TypeCategory, TypeCeo, TypeHairProduct, TypeColor, TypePage } from '../../interface'

interface GetCeoPending {
  type: ActionType.GETCEO_PENDING
}
interface GetCeo {
  type: ActionType.GETCEO
  payload: TypeCeo[]
}
interface GetCeoFail {
  type: ActionType.GETCEO_FAIL
  payload: string
}

interface Get_Hair_Pending {
  type: ActionType.GET_HAIR_PENDING
}
interface Get_Hair {
  type: ActionType.GET_HAIR
  payload: TypeHairProduct[]
}
interface Get_Hair_Fail {
  type: ActionType.GET_HAIR_FAIL
  payload: string
}

interface GetCategoryPending {
  type: ActionType.GET_CATEGORY_PENDING
}
interface GetCategory {
  type: ActionType.GET_CATEGORY
  payload: TypeCategory[]
}
interface GetCategoryFail {
  type: ActionType.GET_CATEGORY_FAIL
  payload: string
}

interface GetColorPending {
  type: ActionType.GET_COLOR_PENDING
}
interface GetColor {
  type: ActionType.GET_COLOR
  payload: TypeColor[]
}
interface GetColorFail {
  type: ActionType.GET_COLOR_FAIL
  payload: string
}

interface GetSelectProductPending {
  type: ActionType.GET_SELECT_PRODUCT_PENDING
}
interface GetSelectProduct {
  type: ActionType.GET_SELECT_PRODUCT
  payload: TypeHairProduct
}
interface GetSelectProductFail {
  type: ActionType.GET_SELECT_PRODUCT_FAIL
  payload: string
}

interface ChangePage {
  type: ActionType.CHANGE_PAGE
  payload: TypePage
}

export type Action =
  | GetCeoPending
  | GetCeo
  | GetCeoFail
  | Get_Hair_Pending
  | Get_Hair
  | Get_Hair_Fail
  | GetCategoryPending
  | GetCategory
  | GetCategoryFail
  | GetColorPending
  | GetColor
  | GetColorFail
  | ChangePage
  | GetSelectProductPending
  | GetSelectProduct
  | GetSelectProductFail
