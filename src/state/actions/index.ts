import { ActionType } from '../action-types'
import { TypeProduct, TypeSeries, TypeSeriesImage } from '../../interface'

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
  payload: TypeSeriesImage[]
}
interface GetSeriseFail {
  type: ActionType.GETSERIES_FAIL
  payload: string
}

interface GetBooksPending {
  type: ActionType.GETBOOKS_PENDING
}
interface GetBooks {
  type: ActionType.GETBOOKS
  payload: TypeProduct[]
}
interface GetBooksFail {
  type: ActionType.GETBOOKS_FAIL
  payload: string
}

interface GetOneBookPending {
  type: ActionType.GETBOOK_PENDING
}
interface GetOneBook {
  type: ActionType.GETBOOK
  payload: TypeProduct
}
interface GetOneBookFail {
  type: ActionType.GETBOOK_FAIL
  payload: string
}

interface GetPublisherPending {
  type: ActionType.GETPUBLISHER_PENDING
}
interface GetPublisher {
  type: ActionType.GETPUBLISHER
  payload: TypeSeries
}
interface GetPublisherFail {
  type: ActionType.GETPUBLISHER_FAIL
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
  | GetBooksPending
  | GetBooks
  | GetBooksFail
  | GetOneBookPending
  | GetOneBook
  | GetOneBookFail
  | GetPublisherPending
  | GetPublisher
  | GetPublisherFail
