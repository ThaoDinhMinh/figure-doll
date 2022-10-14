import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeProduct } from '../../interface'

interface InitialState {
  product: TypeProduct | {}
}

const initialState: InitialState = {
  product: {},
}

const reducerOne = (state: InitialState = initialState, action: Action): TypeProduct | {} => {
  switch (action.type) {
    case ActionType.GETPRODUCT:
      return (state.product = action.payload)
    default:
      return (state.product = {})
  }
}

export default reducerOne
