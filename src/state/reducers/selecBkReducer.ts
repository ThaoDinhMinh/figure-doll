import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeProduct } from '../../interface'

interface InitialState {
  loading: boolean
  error: string | null
  book: TypeProduct | null
}

const initialState = {
  loading: false,
  book: null,
  error: null,
}

const slectorBookReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.GETBOOK_PENDING:
      return { loading: true, error: null, book: null }
    case ActionType.GETBOOK:
      return { loading: false, error: null, book: action.payload }
    case ActionType.GETBOOK_FAIL:
      return { loading: false, error: action.payload, book: null }
    case ActionType.REMOVE_SELETE:
      return { loading: false, error: null, book: action.payload }
    default:
      return state
  }
}

export default slectorBookReducer
