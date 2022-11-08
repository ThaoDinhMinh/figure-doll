import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeCeo } from '../../interface'

interface InitialState {
  loading: boolean
  error: string | null
  ceos: TypeCeo[] | null
}

const initialState = {
  loading: false,
  ceos: null,
  error: null,
}

const ceoReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.GETCEO_PENDING:
      return { loading: true, error: null, ceos: null }
    case ActionType.GETCEO:
      return { loading: false, error: null, ceos: action.payload }
    case ActionType.GETCEO_FAIL:
      return { loading: false, error: action.payload, ceos: null }
    default:
      return state
  }
}

export default ceoReducer
