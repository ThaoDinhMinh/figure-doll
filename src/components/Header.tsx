import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state/reducers'

const ViewDiv = styled.div`
  &.nav-item {
    padding: 8px 20px;
    font-size: 1.2rem;
    transition: all 0.3s linear;
    &:hover .cl-hover {
      color: #d3ad69;
    }
  }
  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 400;
  }
  &.header-top {
    /* padding: 20px 0; */
  }
  &.header-bot {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 200;
  }
  .header-top-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 56px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
  .top-top-left {
    display: flex;
    align-items: center;
  }
  .item-left {
    display: flex;
    align-items: center;
    margin-right: 24px;
  }
  .top-top-right {
    display: flex;
    align-items: center;
    .icon-ftyi {
      margin-left: 16px;
      .icon-all {
        &:hover {
          color: #d3ad69;
        }
      }
    }
  }
  .text-hear-logo {
    font-weight: 300;
    font-size: 2.5rem;
    margin-left: 12px;
    color: #000000;
  }
  .header-top-bot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 56px;
    .icon-all {
      transition: all 0.3s linear;
    }
    .logo {
      display: flex;
      align-items: center;
    }
    .cart-login {
      display: flex;
      align-items: center;
      transition: all 0.3s linear;
    }
    .cart-item {
      display: flex;
      align-items: center;
      padding-right: 12px;
      position: relative;
      cursor: pointer;
      &:hover .show-cart {
        display: block;
        transition: all 0.8s linear;
      }
      &:hover .icon-all {
        color: #d3ad69;
      }
    }
    .cart-item-begin::after {
      content: '';
      position: absolute;
      display: inline-block;
      top: 0;
      right: 0;
      width: 1px;
      height: 24px;
      background-color: #000000;
    }
    .icon-use {
      margin-left: 12px;
      &:hover .icon-all {
        color: #d3ad69;
        cursor: pointer;
      }
    }
    .icon-uses {
      display: flex;
      align-items: center;
    }
    .text-price {
      margin-left: 12px;
      font-weight: 300;
      font-size: 0.9rem;
      margin-bottom: 4px;
    }
  }
  .phone-text {
    margin-left: 8px;
    font-size: 0.9rem;
    font-weight: 300;
  }
  .icon-ftyi {
    margin-top: 6px;
    cursor: pointer;
  }
  .img-logo {
    height: 72px;
    width: 72px;
  }
  .icon-cart {
    position: relative;
    cursor: pointer;
  }
  .show-cart {
    transition: all 0.3s linear;
    display: none;
    position: absolute;
    top: 20px;
    right: -63px;
    width: 280px;
    height: 280px;
    z-index: 500;
    background-color: #ffffff;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.4);
    overflow-y: scroll;
    border-radius: 8px;
  }
  .g-img-cart {
    display: flex;

    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    .i-cart {
      max-width: 30%;
      display: block;
    }
    .g-tex-price {
      font-size: 0.9rem;
      font-weight: 300;
      margin-left: 8px;
    }
    .te-price {
      margin-top: 4px;
    }
  }
  .g-text-emty {
    text-align: center;
  }
  .text-emty {
    font-size: 1rem;
    font-weight: 300;
    margin-top: 36px;
  }
  .img-no-item {
    max-width: 70%;
    display: block;
    margin: auto;
  }
  .g-butom-cart {
    display: flex;
    align-items: center;
  }
  .btn-cart {
    padding: 4px 12px;
    background-color: #d3ad69;
    border: 1px solid transparent;
    font-size: 1rem;
    color: #fff;
    margin-right: 8px;
    border-radius: 4px;
    margin-top: 8px;
    transition: all 0.3s linear;
    &:hover {
      background-color: transparent;
      border: 1px solid #000000;
      color: #000000;
      cursor: pointer;
    }
  }
`
const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background-color: #121212;
`
const Text = styled.p``
interface Nav {
  id: number
  text: string
  link: string
}
const Header = () => {
  const nav: Nav[] = [
    {
      id: 0,
      text: 'Trang chủ',
      link: '/',
    },
    {
      id: 1,
      text: 'Bộ sưu tập',
      link: '/colection',
    },
    {
      id: 2,
      text: 'Cửa hàng',
      link: '/shop',
    },
    {
      id: 3,
      text: 'Màu tóc',
      link: '/shop/detail/3',
    },
    {
      id: 4,
      text: 'Tóc giả',
      link: '/shop',
    },
    {
      id: 5,
      text: 'Thông tin',
      link: '/aboutus',
    },
  ]
  const { carts } = useSelector((state: RootState) => state.carts)
  const dispatch = useDispatch()
  const [sel, setSel] = useState<number>(0)
  const { removeHart } = bindActionCreators(actionCreators, dispatch)
  return (
    <>
      <ViewDiv className="header-top">
        <div className="header-top-top">
          <div className="top-top-left">
            <div className="item-left">
              <LocalPhoneIcon sx={{ fontSize: 20 }} />
              <p className="phone-text">+84 97649 1200</p>
            </div>
            <div className="item-left">
              <EmailIcon sx={{ fontSize: 20 }} />
              <p className="phone-text">kienminh.tnut@gmail.com</p>
            </div>
          </div>
          <div className="top-top-right">
            <div className="icon-ftyi">
              <a href="https://www.facebook.com/">
                <FacebookIcon className="icon-all" sx={{ fontSize: 20, color: '#000000' }} />
              </a>
            </div>
            <div className="icon-ftyi">
              <a href="https://twitter.com">
                <TwitterIcon className="icon-all" sx={{ fontSize: 20, color: '#000000' }} />
              </a>
            </div>
            <div className="icon-ftyi">
              <a href="https://www.youtube.com/watch?v=QakzCGr5EXs">
                <YouTubeIcon className="icon-all" sx={{ fontSize: 20, color: '#000000' }} />
              </a>
            </div>
            <div className="icon-ftyi">
              <a href="https://www.instagram.com/">
                <InstagramIcon className="icon-all" sx={{ fontSize: 20, color: '#000000' }} />
              </a>
            </div>
          </div>
        </div>
        <div className="header-top-bot">
          <Link to={'/'}>
            <div className="logo">
              <img className="img-logo" src="/img/logo_small.png" alt="logo-footer" />
              <h1 className="text-hear-logo">Beautyfull Hair</h1>
            </div>
          </Link>
          <div className="cart-login">
            <div className="cart-item cart-item-begin">
              <div className="icon-cart">
                <Link to={'/cart'}>
                  <ShoppingBasketIcon className="icon-all" sx={{ fontSize: 20, color: '#000000' }} />
                </Link>
                <div className="show-cart">
                  <div className="show-cart-items">
                    {carts.length === 0 ? (
                      <div className="g-text-emty">
                        <p className="text-emty">Chưa có sản phẩm nào</p>
                        <div className="no-empty">
                          <img className="img-no-item" src="/img/no-item.webp" alt="no item" />
                        </div>
                      </div>
                    ) : (
                      <div>
                        {carts?.map((a) => (
                          <div key={a.id}>
                            <div className="g-img-cart">
                              <img className="i-cart" src={a.img} alt={a.style_hair} />
                              <div className="g-tex-price">
                                <div className="text">{a.style_hair}</div>
                                <p className="te-price">
                                  {a.qty} x{' '}
                                  {(Number(a.price) - (Number(a.price) * a.sale!) / 100).toLocaleString('en-US')} đ
                                </p>
                                <div className="g-butom-cart">
                                  <Link to={'/cart'}>
                                    <button className="btn-cart">Xem</button>
                                  </Link>
                                  <button className="btn-cart" onClick={() => removeHart(a.id)}>
                                    Xóa
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-price">{carts.length} item</p>
            </div>
            <div className="icon-uses">
              <div className="icon-use">
                <AccountCircleIcon className="icon-all" sx={{ fontSize: 20 }} />
              </div>
              <div className="icon-use">
                <SearchIcon className="icon-all" sx={{ fontSize: 20 }} />
              </div>
            </div>
          </div>
        </div>
      </ViewDiv>

      <ViewDiv className="header-bot">
        <Navbar>
          {nav.map((a) => (
            <ViewDiv key={a.id} className="nav-item">
              <Link
                style={sel === a.id ? { color: '#d3ad69' } : { color: '#FFFFFF' }}
                className="cl-hover"
                onClick={() => {
                  window.scrollTo(0, 135)
                  setSel(a.id)
                }}
                to={a.link}
              >
                {a.text}
              </Link>
            </ViewDiv>
          ))}
        </Navbar>
      </ViewDiv>
    </>
  )
}

export default Header
