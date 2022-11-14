import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import ceoReducer from './ceoReducer'
import colorReducer from './colorReducer'
import hairReducer from './hairReducer'
import pageReducer from './pageReducer'
import selecterReducer from './selectProductReducer'

const reducers = combineReducers({
  ceos: ceoReducer,
  hair: hairReducer,
  category: categoryReducer,
  color: colorReducer,
  page: pageReducer,
  selecter: selecterReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
