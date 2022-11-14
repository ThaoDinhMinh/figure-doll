import { TypePage } from '../../interface'
import { ActionType } from '../action-types'
import { Action } from '../actions'

interface InitialState {
  page: TypePage
}

const initialState = {
  page: {
    page: `?orderBy="id"&endAt=11`,
    category: '',
  },
}

const pageReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.CHANGE_PAGE:
      return { page: action.payload }
    default:
      return state
  }
}

export default pageReducer
