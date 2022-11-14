import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeHairProduct } from '../../interface'

interface InitialState {
  loading: boolean
  error: string | null
  selecter: TypeHairProduct | null
}

const initialState: InitialState = {
  loading: false,
  selecter: null,
  error: null,
}

const selectProductReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.GET_SELECT_PRODUCT_PENDING:
      return { loading: true, error: null, selecter: null }
    case ActionType.GET_SELECT_PRODUCT:
      return { loading: false, error: null, selecter: action.payload }
    case ActionType.GET_SELECT_PRODUCT_FAIL:
      return { loading: false, error: action.payload, selecter: null }
    default:
      return state
  }
}

export default selectProductReducer
