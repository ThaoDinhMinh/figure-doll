import { combineReducers } from 'redux'
import ceoReducer from './ceoReducer'

const reducers = combineReducers({
  ceos: ceoReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
