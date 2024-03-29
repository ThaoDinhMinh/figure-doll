import { Rating, Stack } from '@mui/material'
import React from 'react'
import { TypeHairProduct } from '../../../interface'
import { ViewDetail } from '../styled'
import TableInfor from './TableInfor'
import StarIcon from '@mui/icons-material/Star'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import Description from './description'
import ShowSale from './ShowSale'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../state'
import Toastify from 'toastify-js'
interface ShowProps {
  selecter: TypeHairProduct | null
  idtingSet: React.Dispatch<React.SetStateAction<number>>
}

const ShowDetail: React.FC<ShowProps> = (props) => {
  const dispatch = useDispatch()
  const { addCart } = bindActionCreators(actionCreators, dispatch)
  const { selecter, idtingSet } = props
  const url = window.location.href

  return (
    <ViewDetail>
      <div className="g-items">
        <div className="items">
          <div style={{ display: 'flex' }}>
            <div className="items-left">
              <div className="img">
                <img src={selecter?.img} alt={selecter?.style_hair} />
                <div className="sale">
                  <p>Sale {selecter?.sale} %</p>
                </div>
              </div>
            </div>
            <div className="items-right">
              <div className="g-text">
                <h1>{selecter?.style_hair}</h1>
              </div>
              <Stack spacing={1}>
                <Rating name="size-medium" defaultValue={2} />
              </Stack>
              <div className="g-price">
                <p className="price-nomal">{Number(selecter?.price).toLocaleString('en-US')} đ</p>
                <p className="price-new">
                  {(Number(selecter?.price) - (Number(selecter?.price) * selecter?.sale!) / 100).toLocaleString(
                    'en-US'
                  )}{' '}
                  đ
                </p>
              </div>
              <div className="text-mean">
                <p>{selecter?.main.text}</p>
              </div>
              <TableInfor item={selecter?.main!} />

              <div className="chip">
                <div className="chip-item">
                  <span className="t-seach">Cùng loại : </span>
                  <span className="cate-sear">{selecter?.category}</span>
                  <span>,</span>
                  <span className="cate-sear">{selecter?.main.color}</span>
                </div>
              </div>
              <div className="share">
                <p className="share-text">Chia sẻ tới :</p>
                <div
                  className="fb-share-button"
                  data-href="https://developers.facebook.com/docs/plugins/"
                  data-layout="button"
                  data-size="small"
                >
                  <a
                    target="_blank"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                    className="fb-xfbml-parse-ignore"
                  >
                    <FacebookIcon sx={{ color: '#257be9' }} />
                  </a>
                </div>
                <a href={`http://twitter.com/share?text=share to here&url=${url}`}>
                  {' '}
                  <TwitterIcon className="icon" sx={{ color: '#229bf0' }} />
                </a>
              </div>
            </div>
          </div>
          <Description />
          <ShowSale idtingSet={idtingSet} />
        </div>
        <div className="items-end">
          <div className="card-cart">
            <div className="sale-infor">
              <input type="radio" disabled />
              <div className="no-sale-infor">
                <p className="text-no-sale">Giá gốc</p>
                <p className="no-sale-price">{Number(selecter?.price).toLocaleString('en-US')} đ</p>
              </div>
            </div>
            <div className="sale-infor sale-infor-check">
              <input defaultChecked type="radio" name="select" />
              <div className="no-sale-infor">
                <div className="final-pirce">
                  <StarIcon sx={{ color: '#d3ad69', fontSize: 20 }} />
                  <p className="text-sale">Giá mới</p>
                </div>

                <span className="sale-price">
                  {' '}
                  {(Number(selecter?.price) - (Number(selecter?.price) * selecter?.sale!) / 100).toLocaleString(
                    'en-US'
                  )}{' '}
                  đ
                </span>
                <span className="num-sale">({selecter?.sale}% sale)</span>
              </div>
            </div>
            <div className="btn-buy">
              <button className="btn">Mua Ngay</button>
            </div>
            <div className="add-cart">
              <button
                onClick={() => {
                  addCart(selecter!)
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
                className="btn-add"
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </ViewDetail>
  )
}

export default ShowDetail
