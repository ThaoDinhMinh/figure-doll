import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import ceoReducer from './ceoReducer'
import hairReducer from './hairReducer'

const reducers = combineReducers({
  ceos: ceoReducer,
  hair: hairReducer,
  category: categoryReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
