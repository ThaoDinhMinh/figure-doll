import { combineReducers } from 'redux'
import booksReducer from './booksReducer'
import productsReducer from './productReducer'
import selectorReducer from './selecPrReducer'
import seriesReducer from './seriesReducer'
import bookReducer from './selecBkReducer'
import pubLisherReducer from './pubLisherReducer'

const reducers = combineReducers({
  products: productsReducer,
  product: selectorReducer,
  series: seriesReducer,
  books: booksReducer,
  book: bookReducer,
  pubLisher: pubLisherReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
