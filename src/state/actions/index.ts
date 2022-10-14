import { ActionType } from '../action-types'
import { TypeProduct } from '../../interface'

interface GetProductAction {
  type: ActionType.GETPRODUCTS
  payload: TypeProduct[]
}
interface GetOneProductAction {
  type: ActionType.GETPRODUCT
  payload: TypeProduct
}

export type Action = GetProductAction | GetOneProductAction
