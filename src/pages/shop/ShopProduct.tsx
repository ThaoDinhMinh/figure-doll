import React, { useEffect, useState } from 'react'
import { ViewDivShopProduct } from './styled'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../../state'
import CategoryShop from './components/CategoryShop'
import ProductList from './components/ProductList'
import ColorHair from './components/ColorHair'
import { RootState } from '../../state/reducers'

const ShopProduct = () => {
  const { page } = useSelector((state: RootState) => state.page)
  const [categ, setCateg] = useState<string>('')
  const [style, setStyle] = useState<number>(100)
  const dispatch = useDispatch()
  const { getCategory, getHairProducts, getColor } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    getCategory()
    getColor()
  }, [])
  useEffect(() => {
    getHairProducts(page.page)
  }, [page])

  return (
    <ViewDivShopProduct>
      <div className="header">
        <div className="header-items">
          <h1>{page.category === '' ? 'Cửa hàng' : page.category}</h1>
          <div className="header-bot">
            <Link className="link-home" to={'/'}>
              Trang chủ
            </Link>
            <span className="span">/</span>
            <span className="span">Cửa hàng</span>
            <span className="span">{page.category === '' ? '' : `/ ${' '} ${page.category}`}</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="category-layout">
          <CategoryShop setCateg={setCateg} setStyle={setStyle} style={style} />
          <ColorHair setStyle={setStyle} style={style} />
        </div>
        <div className="component-container">
          <div className="list-product">
            <ProductList />
          </div>
        </div>
      </div>
    </ViewDivShopProduct>
  )
}

export default ShopProduct
