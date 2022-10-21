import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeProduct } from '../../interface'

interface InitialState {
  loading: boolean
  error: string | null
  product: TypeProduct | null
}

const initialState = {
  loading: false,
  product: null,
  error: null,
}

const slectorReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.GETPRODUCT_PENDING:
      return { loading: true, error: null, product: null }
    case ActionType.GETPRODUCT:
      return { loading: false, error: null, product: action.payload }
    case ActionType.GETPRODUCT_FAIL:
      return { loading: false, error: action.payload, product: null }
    case ActionType.REMOVE_SELETE:
      return { loading: false, error: null, product: action.payload }
    default:
      return state
  }
}

export default slectorReducer
