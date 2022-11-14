import React, { useEffect, useState } from 'react'
import Gallery from './pages/Gallery'
import Introduce from './pages/introduce/Introduce'
import Layout from './pages/Layout'
import PageNotFound from './pages/PageNotFound'
import AboutUs from './pages/aboutus/AboutUs'
import Colection from './pages/colection/Colection'
import ShopProduct from './pages/shop'
import DetailProduct from './pages/detail/DetailProduct'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'animate.css'
import 'animate.css/animate.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Introduce />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/colection" element={<Colection />} />
          <Route path="/shop" element={<ShopProduct />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop/detail/:id" element={<DetailProduct />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
