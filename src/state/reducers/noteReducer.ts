import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeNote } from '../../interface'

interface InitialState {
  loading: boolean
  error: string | null
  notes: TypeNote | null
}

const initialState: InitialState = {
  loading: false,
  notes: null,
  error: null,
}

const noteReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.GET_NOTE_PENDING:
      return { loading: true, error: null, notes: null }
    case ActionType.GET_NOTE:
      return { loading: false, error: null, notes: action.payload }
    case ActionType.GET_NOTE_FAIL:
      return { loading: false, error: action.payload, notes: null }
    default:
      return state
  }
}

export default noteReducer
