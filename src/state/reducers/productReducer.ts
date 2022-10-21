import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeProduct } from '../../interface'

interface InitialState {
  loading: boolean
  products: TypeProduct[] | null
  error: string | null
}

const initialState: InitialState = {
  products: null,
  loading: false,
  error: null,
}

const reducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.GETPRODUCTS_PENDING:
      return { loading: true, error: null, products: null }
    case ActionType.GETPRODUCTS:
      return { loading: false, error: null, products: action.payload }
    case ActionType.GETPRODUCTS_FAIL:
      return { loading: false, error: action.payload, products: null }
    default:
      return state
  }
}

export default reducer
