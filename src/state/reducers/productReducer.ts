import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeProduct } from '../../interface'

interface InitialState {
  products: TypeProduct[] | null
}

const initialState: InitialState = {
  products: [],
}

const reducer = (state: InitialState = initialState, action: Action): TypeProduct[] | [] => {
  switch (action.type) {
    case ActionType.GETPRODUCTS:
      return (state.products = action.payload)
    default:
      return (state.products = [])
  }
}

export default reducer
