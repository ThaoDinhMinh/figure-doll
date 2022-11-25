import { ActionType } from '../action-types'
import { Action } from '../actions'
import { TypeHairProduct } from '../../interface'

interface InitialState {
  carts: TypeHairProduct[]
}

const initialState: InitialState = {
  carts: [],
}

const cartsReducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.ADD_CART:
      const prod = state.carts.find((a) => a.id === action.payload.id)
      if (!prod) return { carts: [...state.carts, action.payload] }
      else
        return {
          carts: state.carts,
        }

    case ActionType.REMOVER_HAIR:
      return { carts: state.carts.filter((a) => a.id !== action.payload) }
    case ActionType.ICREMENT_QTY:
      return {
        carts: state.carts.map((a) => {
          return { ...a, qty: a.id === action.payload.id ? a.qty + 1 : a.qty }
        }),
      }
    case ActionType.DECREMENT_QTY:
      return {
        carts: state.carts.map((a) => {
          return { ...a, qty: a.id === action.payload.id ? (a.qty > 1 ? a.qty - 1 : (a.qty = 1)) : a.qty }
        }),
      }
    case ActionType.CLEAR_CART:
      return {
        carts: action.payload,
      }
    default:
      return state
  }
}

export default cartsReducer
