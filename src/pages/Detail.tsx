import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../state'
import { RootState } from '../state/reducers'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import UseSlick from '../components/detaiComponent/UseSlick'
import styled from 'styled-components'

const Items = styled.div`
  &.link-nav {
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
  }
  &.card-left {
    width: 75%;
    position: relative;
  }
  &.card-right {
    width: 25%;
  }
  &.in-slick {
    width: 100%;
  }
  &.in-text {
    position: absolute;
    top: 0;
    left: calc(54%);
    z-index: -1;
    padding: 0 10px;
  }
  &.text-buttom {
    margin-top: 40px;
  }
  &.all-mean {
    width: 320px;
    height: 300px;
    position: fixed;
    right: 20px;
    border-radius: 8px;
    top: 12vh;
    z-index: 100;
    box-shadow: 1px 1px 8px gray;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
`
const Text = styled.p`
  padding-bottom: 10px;
  line-height: 22px;
  font-size: 1rem;
  &.text-head {
    font-size: 1.5rem;
    font-weight: 600;
  }
  &.text-coin {
    color: #b7272e;
    font-weight: medium;
    font-size: 1.3rem;
    line-height: 42px;
    margin-top: 40px;
    margin-left: 20px;
  }
`
const Button = styled.button`
  &.button-css {
    width: 100%;
    padding: 8px;
  }
`

const Detail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { getProduct, removeProduct } = bindActionCreators(actionCreators, dispatch)
  const { product, loading } = useSelector((state: RootState) => state.product)
  useEffect(() => {
    id ? getProduct(id) : null
    return () => {
      removeProduct()
    }
  }, [])
  if (loading) return <h1>Loading ...</h1>
  else
    return (
      <div>
        <Items className="link-nav">
          <Link to={'/home'}>Sản Phẩm</Link>
          <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
          <p>{product?.name}</p>
        </Items>

        <Items>
          <Items className="card-left">
            <Items className="in-slick">
              {product?.images ? <UseSlick images={product.images} /> : <p>Loadding...</p>}
            </Items>
            <Items className="in-text">
              <Items>
                <Text className="text-head">{product?.name}</Text>
                <Text className="text-coin">$ {product?.price} OtaCoin</Text>
              </Items>

              <Items className="text-buttom">
                <Items>
                  <Text>
                    <b>Tên sản phẩm :</b> {product?.name}
                  </Text>
                  <Text>
                    <b>Series :</b> {product?.main.series}
                  </Text>
                  <Text>
                    <b>Nhà sản xuất:</b> {product?.main.manufacturer}
                  </Text>
                  <Text>
                    <b>Thông số :</b> {product?.main.specifications}
                  </Text>
                  <Text>
                    <b>Độ cao :</b> {product?.main.height}
                  </Text>
                </Items>
                <Items>
                  <Text>
                    <b>{product?.read_text}</b>
                  </Text>
                  <Text className="text-mean-pro">{product?.text_mean}</Text>
                </Items>
              </Items>
            </Items>
          </Items>
          <Items className="card-right">
            <Items className="all-mean">
              <Items className="pice-text">
                <Text>Giá bán sản phẩm</Text>
                <Text>$ {product?.price} OtaCoin</Text>
              </Items>
              <Button className="button-css">Mua Ngay</Button>
              <Link to={'./'}>Thêm vào giỏ hàng</Link>
            </Items>
          </Items>
        </Items>
      </div>
    )
}

export default Detail
