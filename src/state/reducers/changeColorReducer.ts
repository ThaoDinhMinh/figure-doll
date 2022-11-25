import { ActionType } from '../action-types'
import { Action } from '../actions'

interface InitialState {
  colorNumber: number
}

const initialState = {
  colorNumber: 0,
}

const pageReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.CHANGE_LINK_COLOR:
      return { ...state, colorNumber: action.payload }
    default:
      return state
  }
}

export default pageReducer
