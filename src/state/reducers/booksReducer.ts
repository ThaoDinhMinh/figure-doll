import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeProduct } from '../../interface'

interface InitialState {
  loading: boolean
  error: string | null
  books: TypeProduct[] | null
}

const initialState = {
  loading: false,
  books: null,
  error: null,
}

const booksReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.GETBOOKS_PENDING:
      return { loading: true, error: null, books: null }
    case ActionType.GETBOOKS:
      return { loading: false, error: null, books: action.payload }
    case ActionType.GETBOOKS_FAIL:
      return { loading: false, error: action.payload, books: null }
    default:
      return state
  }
}

export default booksReducer
