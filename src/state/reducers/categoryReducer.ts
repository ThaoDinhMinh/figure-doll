import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeCategory } from '../../interface'

interface InitialState {
  loading: boolean
  error: string | null
  categorys: TypeCategory[] | null
}

const initialState = {
  loading: false,
  categorys: null,
  error: null,
}

const categoryReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.GET_CATEGORY_PENDING:
      return { loading: true, error: null, categorys: null }
    case ActionType.GET_CATEGORY:
      return { loading: false, error: null, categorys: action.payload }
    case ActionType.GET_CATEGORY_FAIL:
      return { loading: false, error: action.payload, categorys: null }
    default:
      return state
  }
}

export default categoryReducer
