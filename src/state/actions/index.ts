import { ActionType } from '../action-types'
import { TypeCategory, TypeCeo, TypeHairProduct, TypeColor, TypePage, TypeNote } from '../../interface'
import { type } from 'os'

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

interface GetSelectNotePending {
  type: ActionType.GET_NOTE_PENDING
}
interface GetSelectNote {
  type: ActionType.GET_NOTE
  payload: TypeNote
}
interface GetSelectNoteFail {
  type: ActionType.GET_NOTE_FAIL
  payload: string
}

interface GetMaxPending {
  type: ActionType.GET_MAX_PENDING
}
interface GetMax {
  type: ActionType.GET_MAX
  payload: TypeHairProduct[]
}
interface GetMaxFail {
  type: ActionType.GET_MAX_FAIL
  payload: string
}

interface ChangePage {
  type: ActionType.CHANGE_PAGE
  payload: TypePage
}

interface AddCart {
  type: ActionType.ADD_CART
  payload: TypeHairProduct
}
interface Remover {
  type: ActionType.REMOVER_HAIR
  payload: number
}
interface IcrementQty {
  type: ActionType.ICREMENT_QTY
  payload: TypeHairProduct
}
interface Decrement {
  type: ActionType.DECREMENT_QTY
  payload: TypeHairProduct
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
  | GetSelectNotePending
  | GetSelectNote
  | GetSelectNoteFail
  | GetMaxPending
  | GetMax
  | GetMaxFail
  | AddCart
  | Remover
  | IcrementQty
  | Decrement
