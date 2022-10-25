import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeSeries } from '../../interface'

interface InitialState {
  loading: boolean
  error: string | null
  publischer: TypeSeries | null
}

const initialState = {
  loading: false,
  publischer: null,
  error: null,
}

const pubLisherReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.GETPUBLISHER_PENDING:
      return { loading: true, error: null, publischer: null }
    case ActionType.GETPUBLISHER:
      return { loading: false, error: null, publischer: action.payload }
    case ActionType.GETPUBLISHER_FAIL:
      return { loading: false, error: action.payload, publischer: null }

    default:
      return state
  }
}

export default pubLisherReducer
