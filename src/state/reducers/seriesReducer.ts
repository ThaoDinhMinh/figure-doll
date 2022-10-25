import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeSeriesImage } from '../../interface'

interface InitialState {
  loading: boolean
  error: string | null
  series: TypeSeriesImage[] | null
}

const initialState = {
  loading: false,
  series: null,
  error: null,
}

const seriesReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.GETSERIES_PENDING:
      return { loading: true, error: null, series: null }
    case ActionType.GETSERIES:
      return { loading: false, error: null, series: action.payload }
    case ActionType.GETSERIES_FAIL:
      return { loading: false, error: action.payload, series: null }

    default:
      return state
  }
}

export default seriesReducer
