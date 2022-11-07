import React, { useEffect, useState } from 'react'
import Detail from './pages/Detail'
import Gallery from './pages/Gallery'
import DetailBooks from './pages/DetailBooks'
import Home from './pages/Home'
import Introduce from './pages/Introduce'
import Layout from './pages/Layout'
import News from './pages/News'
import PageNotFound from './pages/PageNotFound'
import AboutUs from './pages/AboutUs'
import { actionCreators } from './state'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import 'animate.css'
import 'animate.css/animate.min.css'

function App() {
  // const dispatch = useDispatch()
  // const { getProducts, getProduct, getBooks } = bindActionCreators(actionCreators, dispatch)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Introduce />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/detailbooks/:id" element={<DetailBooks />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
