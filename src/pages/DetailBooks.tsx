import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../state'
import { RootState } from '../state/reducers'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import UseSlickBook from '../components/detaiComponent/UseSlickBook'
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

const DetailBooks = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { getBook, removeProduct } = bindActionCreators(actionCreators, dispatch)
  const { book, loading } = useSelector((state: RootState) => state.book)
  useEffect(() => {
    id ? getBook(id) : null
    return () => {
      removeProduct()
    }
  }, [])

  if (loading) return <h1>Loading ...</h1>
  else
    return (
      <>
        <Items className="link-nav">
          <Link to={'/home'}>Sản Phẩm</Link>
          <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
          <p>{book?.name}</p>
        </Items>

        <Items>
          <Items className="card-left">
            <Items className="in-slick">
              {book?.images ? <UseSlickBook images={book.images} /> : <p>Loadding...</p>}
            </Items>
            <Items className="in-text">
              <Items>
                <Text className="text-head">{book?.name}</Text>
                <Text className="text-coin">$ {book?.price} OtaCoin</Text>
              </Items>

              <Items className="text-buttom">
                <Items>
                  <Text>
                    <b>Tên sản phẩm :</b> {book?.name}
                  </Text>
                  <Text>
                    <b>Tác giả :</b> {book?.main.editor}
                  </Text>
                  <Text>
                    <b>Nhà sản xuất :</b> {book?.main.publisher!}
                  </Text>
                  <Text>
                    <b>Ngày ra mắt :</b> {book?.main.nsx!}
                  </Text>
                  <Text>
                    <b>Bìa :</b> {book?.main.size!}
                  </Text>
                  <Text>
                    <b>Số lượng trang :</b> {book?.main.numberPages!}
                  </Text>
                  <Text>
                    <b>Ngôn ngữ :</b> {book?.main.language!}
                  </Text>
                </Items>
                <Items>
                  <Text>
                    <b>{book?.read_text}</b>
                  </Text>
                  <Text className="text-mean-pro">{book?.text_mean}</Text>
                </Items>
              </Items>
            </Items>
          </Items>
          <Items className="card-right">
            <Items className="all-mean">
              <Items className="pice-text">
                <Text>Giá bán sản phẩm</Text>
                <Text>$ {book?.price} OtaCoin</Text>
              </Items>
              <Button className="button-css">Mua Ngay</Button>
              <Link to={'./'}>Thêm vào giỏ hàng</Link>
            </Items>
          </Items>
        </Items>
      </>
    )
}

export default DetailBooks
