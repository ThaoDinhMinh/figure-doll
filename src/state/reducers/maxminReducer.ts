import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeHairProduct } from '../../interface'

interface InitialState {
  loading: boolean
  error: string | null
  maxmin: TypeHairProduct[] | null
}

const initialState: InitialState = {
  loading: false,
  maxmin: null,
  error: null,
}

const maxminReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.GET_MAX_PENDING:
      return { loading: true, error: null, maxmin: null }
    case ActionType.GET_MAX:
      return { loading: false, error: null, maxmin: action.payload }
    case ActionType.GET_MAX_FAIL:
      return { loading: false, error: action.payload, maxmin: null }
    default:
      return state
  }
}

export default maxminReducer
