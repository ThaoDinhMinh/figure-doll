import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeHairProduct } from '../../interface'

interface InitialState {
  loading: boolean
  error: string | null
  hairAllProduct: TypeHairProduct[] | null
}

const initialState: InitialState = {
  loading: false,
  hairAllProduct: null,
  error: null,
}

const allProductHairReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.GET_ALL_HAIR_PENDING:
      return { ...state, loading: true }
    case ActionType.GET_ALL_HAIR:
      return { ...state, hairAllProduct: action.payload, loading: false }
    case ActionType.GET_ALL_HAIR_FAIL:
      return { ...state, error: action.payload }

    default:
      return state
  }
}

export default allProductHairReducer
