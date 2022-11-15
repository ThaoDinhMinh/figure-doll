import { Rating, Stack } from '@mui/material'
import React from 'react'
import { TypeHairProduct } from '../../../interface'
import { ViewDetail } from '../styled'
import TableInfor from './TableInfor'
import StarIcon from '@mui/icons-material/Star'

interface ShowProps {
  selecter: TypeHairProduct | null
}

const ShowDetail: React.FC<ShowProps> = (props) => {
  const { selecter } = props
  const url = window.location.href

  return (
    <ViewDetail>
      <div className="g-items">
        <div className="items">
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
                {(Number(selecter?.price) - (Number(selecter?.price) * selecter?.sale!) / 100).toLocaleString('en-US')}{' '}
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
                  Chia sẻ
                </a>
              </div>
            </div>
          </div>
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
              <button className="btn-add"> Thêm vào giỏ hàng</button>
            </div>
          </div>
        </div>
      </div>
    </ViewDetail>
  )
}

export default ShowDetail
