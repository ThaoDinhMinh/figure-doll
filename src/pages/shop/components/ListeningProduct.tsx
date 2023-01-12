import React from 'react'
import { TypeHairProduct } from '../../../interface'
import { ViewProduct } from '../styled'
import Rating from '@mui/material/Rating'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../state'
import { useDispatch } from 'react-redux'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

interface PropsProduct {
  item: TypeHairProduct | undefined
}

const ListeningProduct: React.FC<PropsProduct> = (props) => {
  const dispatch = useDispatch()
  const { addCart } = bindActionCreators(actionCreators, dispatch)
  const { item } = props
  return (
    <ViewProduct className="show-item">
      <div className="item-wid">
        <Link to={`/shop/detail/${item?.id}`}>
          <div className="item">
            <div className="sale">
              <p className="p-sale">Sale {item?.sale}%</p>
            </div>
            <div className="product-show">
              <img className="img-product" src={item?.img} />
            </div>
            <div className="product-hilden">
              <img className="img-hilden" src={item?.imghide} />
            </div>
            <div className="hilden-div-opa"></div>
          </div>
        </Link>
        <div className="p-background">
          <div className="p-name">
            <p className="p">{item?.style_hair}</p>
          </div>
          <div className="g-content">
            <div>
              <div className="g-price">
                <p className="price-nomal">{Number(item?.price).toLocaleString('en-US')} đ</p>
                <p className="price-new">
                  {(Number(item?.price) - (Number(item?.price) * item?.sale!) / 100).toLocaleString('en-US')} đ
                </p>
              </div>
              <Stack spacing={1}>
                <Rating name="size-medium" defaultValue={2} />
              </Stack>
            </div>
            <div className="button-item">
              <button
                onClick={() => {
                  item ? addCart(item) : null
                  Toastify({
                    text: 'Đã thêm vào giỏ hàng',
                    position: 'right',
                    duration: 2000,
                    newWindow: true,
                    close: true,
                    gravity: 'top',
                    stopOnFocus: true,
                    style: {
                      background: 'linear-gradient(to right, #00b09b, #96c93d)',
                    },
                  }).showToast()
                }}
                className="btn"
              >
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </ViewProduct>
  )
}

export default ListeningProduct
