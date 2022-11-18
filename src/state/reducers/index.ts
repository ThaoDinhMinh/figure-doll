import { combineReducers } from 'redux'
import cartsReducer from './cartReducer'
import categoryReducer from './categoryReducer'
import ceoReducer from './ceoReducer'
import colorReducer from './colorReducer'
import hairReducer from './hairReducer'
import maxminReducer from './maxminReducer'
import noteReducer from './noteReducer'
import pageReducer from './pageReducer'
import selecterReducer from './selectProductReducer'

const reducers = combineReducers({
  ceos: ceoReducer,
  hair: hairReducer,
  category: categoryReducer,
  color: colorReducer,
  page: pageReducer,
  selecter: selecterReducer,
  note: noteReducer,
  maxmin: maxminReducer,
  carts: cartsReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
