import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Link } from 'react-router-dom'

const ViewDiv = styled.div`
  .link-location {
    padding: 0 100px;
    display: flex;
    flex-direction: row;

    .all-link-footer {
      display: flex;
      width: 50%;
      height: 100%;
      .items-link-footer-1 {
        padding-right: 42px;
      }
      .items-link-footer {
        width: 50%;
        list-style: none;
        li {
          margin-bottom: 8px;
          text-decoration: underline;
          font-weight: 300;
          a {
            color: #0000009b;
            transition: all 0.3s linear;
            &:hover {
              color: #3636d0;
            }
          }
        }
        .header-ul {
          font-size: 1.5rem;
          padding: 92px 0 12px 0;
          text-decoration: none;
        }
      }
    }
    .map-location {
      width: 50%;
      .img-location-footer {
        width: 100%;
        display: block;
      }
    }
  }
  &.footer {
    background-image: url('/img/footer-img.jpg');
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    position: relative;
  }
  &.bg-dark {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: #0000009b;
    z-index: 1;
  }
  &.footer-items {
    position: relative;
    z-index: 2;
  }
  &.g-input {
    position: relative;
    width: 35%;
  }
  &.g-mxh {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 32px;
  }
  &.icon-mui {
    padding: 0 20px;
    &:hover .icon {
      filter: brightness(150%);
      cursor: pointer;
    }
  }
  &.spacing {
    margin-bottom: 32px;
    z-index: 2;
  }
`
const Form = styled.form`
  &.form-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
  }
`
const Input = styled.input`
  padding: 15px 15px 15px 25px;
  outline: none;
  width: 100%;
`
const Text = styled.p`
  font-size: 0.9rem;
  color: #ffffff;
  font-weight: 300;
  margin-bottom: 32px;
  &.email-footer {
    padding-bottom: 64px;
    padding-top: 32px;
    margin: 0;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`
const Image = styled.img`
  margin-top: 32px;
`
const Button = styled.button`
  &.g-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    font-weight: 600;
    background-color: #d3ad69;
    text-align: center;
    color: #ffffff;
    &:hover {
      padding: 13px;
      top: 2px;
      right: 2px;
      cursor: pointer;
      background-color: #000000;
    }
  }
`
const LinkTo = styled.a``

const Footer = () => {
  return (
    <ViewDiv>
      <div className="link-location">
        <div className="all-link-footer">
          <ul className="items-link-footer">
            <li className="header-ul">Tất cả chủ đề</li>
            <li>
              <Link to={'/colection'}>Bộ sưu tập</Link>
            </li>
            <li>
              <Link to={'/shop'}>Màu tóc</Link>
            </li>
            <li>
              <Link to={'/aboutus'}>Thông tin</Link>
            </li>
            <li>
              <Link to={'/shop'}>Chi tiết Shipping</Link>
            </li>
          </ul>
          <ul className="items-link-footer items-link-footer-1">
            <li className="header-ul">Thông tin Beautifull Hair</li>
            <li>
              <a
                href={
                  'https://www.google.com/maps/place/51+Nguy%E1%BB%85n+Kh%C3%A1nh+To%C3%A0n,+Quan+Hoa,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0387238,105.797152,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab392c83d265:0x1031c428a408e3d7!8m2!3d21.0387188!4d105.7993407?hl=vi'
                }
              >
                51 Nguyễn Khánh Toàn - Cầu Giấy - Hà Nội
              </a>
            </li>
            <li>
              <Link to={'/aboutus'}>+ 84 976 49 1200</Link>
            </li>
            <li>
              <Link to={'/aboutus'}>kienminh.tnut@gmail.com</Link>
            </li>
            <li>
              <a href="https://figure-doll.vercel.app/">Webside chính thức tại https://figure-doll.vercel.app</a>
            </li>
          </ul>
        </div>
        <div className="map-location">
          <img className="img-location-footer" src="maplocation.png" alt="" />
        </div>
      </div>{' '}
      <ViewDiv className="footer">
        <ViewDiv className="bg-dark"></ViewDiv>

        <ViewDiv className="footer-items">
          <ViewDiv className="img-top spacing">
            <Link
              onClick={() => {
                window.scrollTo(0, 135)
              }}
              to={'/'}
            >
              <Image src="/img/logo_small.png" alt="logo-footer" />
            </Link>
          </ViewDiv>

          <Form className="form-footer">
            <ViewDiv className="g-input">
              <Input placeholder="Nhập địa chỉ email" type={'text'} />
              <ViewDiv>
                <Button className="g-btn">Đăng ký ngay</Button>
              </ViewDiv>
            </ViewDiv>
          </Form>
          <Text>Đăng ký để nhận các ưu đãi và tin tức mới nhất và luôn được cập nhật.</Text>
          <ViewDiv className="g-mxh">
            <ViewDiv className="icon-mui">
              <LinkTo href="https://www.facebook.com/">
                <FacebookIcon className="icon" sx={{ color: '#257be9' }} />
              </LinkTo>
            </ViewDiv>
            <ViewDiv className="icon-mui">
              <LinkTo href="https://twitter.com">
                <TwitterIcon className="icon" sx={{ color: '#229bf0' }} />
              </LinkTo>
            </ViewDiv>
            <ViewDiv className="icon-mui">
              <LinkTo href="https://www.youtube.com/">
                <YouTubeIcon className="icon" sx={{ color: '#ff0f00' }} />
              </LinkTo>
            </ViewDiv>
            <ViewDiv className="icon-mui">
              <LinkTo href="https://www.instagram.com/">
                <InstagramIcon
                  className="icon"
                  sx={{
                    color: '#ee3a7b',
                  }}
                />
              </LinkTo>
            </ViewDiv>
          </ViewDiv>
          <LinkTo href="https://outlook.live.com">
            <Text className="email-footer">Hòm thư : kienminh.tnut@gmail.com</Text>
          </LinkTo>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default Footer
