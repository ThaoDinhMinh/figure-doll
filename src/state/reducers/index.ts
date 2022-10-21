import { combineReducers } from 'redux'
import productsReducer from './productReducer'
import selectorReducer from './selecPrReducer'
import seriesReducer from './seriesReducer'

const reducers = combineReducers({
  products: productsReducer,
  product: selectorReducer,
  series: seriesReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
