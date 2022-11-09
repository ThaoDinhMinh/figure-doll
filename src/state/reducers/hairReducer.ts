import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeHairProduct } from '../../interface'

interface InitialState {
  loading: boolean
  error: string | null
  hairProduct: TypeHairProduct[] | null
}

const initialState: InitialState = {
  loading: false,
  hairProduct: null,
  error: null,
}

const hairReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.GET_HAIR_PENDING:
      return { loading: true, error: null, hairProduct: null }
    case ActionType.GET_HAIR:
      return { loading: false, error: null, hairProduct: action.payload }
    case ActionType.GET_HAIR_FAIL:
      return { loading: false, error: action.payload, hairProduct: null }
    default:
      return state
  }
}

export default hairReducer
