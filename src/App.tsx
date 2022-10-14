import { Action } from 'history'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TypeProduct } from './interface'
import { actionCreators } from './state'
import { RootState } from './state/reducers'

function App() {
  const text: string = '-NEEjCnC95GO5R7658e1'
  const dispatch = useDispatch()
  const { getProducts } = bindActionCreators(actionCreators, dispatch)
  useEffect(() => {
    getProducts()
  }, [])

  return <div className="App">Heloo world</div>
}

export default App
