import React, { useEffect, useState } from 'react'
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
import CartShow from './pages/cart/CartShow'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Introduce />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/colection" element={<Colection />} />
          <Route path="/shop" element={<ShopProduct />} />
          <Route path="/shop/detail/:id" element={<DetailProduct />} />
          <Route path="/cart" element={<CartShow />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
