import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeColor } from '../../interface'

interface InitialState {
  loading: boolean
  error: string | null
  color: TypeColor[] | null
}

const initialState = {
  loading: false,
  color: null,
  error: null,
}

const colorReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.GET_COLOR_PENDING:
      return { loading: true, error: null, color: null }
    case ActionType.GET_COLOR:
      return { loading: false, error: null, color: action.payload }
    case ActionType.GET_COLOR_FAIL:
      return { loading: false, error: action.payload, color: null }
    default:
      return state
  }
}

export default colorReducer
