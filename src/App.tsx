import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import Detail from './pages/Detail'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Introduce from './pages/Introduce'
import Layout from './pages/Layout'
import News from './pages/News'
import PageNotFound from './pages/PageNotFound'
import { actionCreators } from './state'

function App() {
  const Text: string = '-NEEjeC1UiLHueMg-575'
  const [series, seriesSet] = useState<string>('')
  const dispatch = useDispatch()
  const { getProducts, getProduct } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    getProducts(series)
  }, [series])
  useEffect(() => {
    getProduct(Text)
  }, [Text])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Introduce />} />
          <Route path="/home" element={<Home seriesSet={seriesSet} />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
