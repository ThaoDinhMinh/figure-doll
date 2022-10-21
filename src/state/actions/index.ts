import { ActionType } from '../action-types'
import { TypeProduct, TypeSeries } from '../../interface'

interface GetProductActionPending {
  type: ActionType.GETPRODUCTS_PENDING
}
interface GetProductAction {
  type: ActionType.GETPRODUCTS
  payload: TypeProduct[]
}

interface GetProductActionFail {
  type: ActionType.GETPRODUCTS_FAIL
  payload: string
}
interface GetOneProductActionPending {
  type: ActionType.GETPRODUCT_PENDING
}
interface GetOneProductAction {
  type: ActionType.GETPRODUCT
  payload: TypeProduct
}
interface GetOneProductActionFail {
  type: ActionType.GETPRODUCT_FAIL
  payload: string
}

interface RemoveProductSelect {
  type: ActionType.REMOVE_SELETE
  payload: null
}

interface GetSerisePending {
  type: ActionType.GETSERIES_PENDING
}
interface GetSerise {
  type: ActionType.GETSERIES
  payload: TypeSeries
}
interface GetSeriseFail {
  type: ActionType.GETSERIES_FAIL
  payload: string
}

export type Action =
  | GetProductActionPending
  | GetProductAction
  | GetProductActionFail
  | GetOneProductActionPending
  | GetOneProductAction
  | GetOneProductActionFail
  | RemoveProductSelect
  | GetSerisePending
  | GetSerise
  | GetSeriseFail
