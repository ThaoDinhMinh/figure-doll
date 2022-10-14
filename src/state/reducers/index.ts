import { combineReducers } from 'redux'
import productsReducer from './productReducer'
import selectorReducer from './selecPrReducer'

const reducers = combineReducers({
  products: productsReducer,
  product: selectorReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
