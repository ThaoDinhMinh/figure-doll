import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Link } from 'react-router-dom'

const ViewDiv = styled.div`
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
    <ViewDiv className="footer">
      <ViewDiv className="bg-dark"></ViewDiv>
      <ViewDiv className="footer-items">
        <ViewDiv className="img-top spacing">
          <Image src="/img/logo_small.png" />
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
          <Text className="email-footer">Hòm thư : alice.schurbeg@hotmail.com</Text>
        </LinkTo>
      </ViewDiv>
    </ViewDiv>
  )
}

export default Footer
