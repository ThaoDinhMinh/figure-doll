import React from 'react'
import { Link } from 'react-router-dom'
import { dataSome } from './components/about_data'
import styled from 'styled-components'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import OfferSalon from './components/OfferSalon'
import OurProgram from './components/OurProgram'
import OurStats from './components/OurStats'
import SalonTeam from './components/SalonTeam'
import OurSomeThing from './components/OurSomeThing'

export const ViewDiv = styled.div`
  &.about_us {
    background-image: url('/img/back-about.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
  &.head {
    background-image: url('/img/img-back.jpg');
    background-repeat: repeat-x;
    background-position: center;

    text-align: center;
  }
  &.g-link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 24px;
  }
  &.container-about {
    background-color: white;
    padding-bottom: 64px;
  }
  &.item {
    width: 50%;
  }
  &.item-right {
    padding-left: 20px;
  }
  &.item-left {
    padding-right: 20px;
  }
  &.items {
    padding: 58px 60px;
    box-shadow: 1px 2px 8px gray;
  }
  &.about-bd {
    display: flex;
    width: 75%;
    margin: auto;
    padding-top: 32px;
  }
  &.g-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 -12px;
  }
  &.g-offer {
    background-color: #f7f7f7;
    padding-bottom: 36px;
  }
  &.offer-none {
    width: 17.5%;
  }
  &.offer-head {
    text-align: center;
    padding: 64px 0 32px 0;
  }
  &.img {
    width: 33.333333%;
    padding: 0 12px;
  }
  &.offer-all-card {
    display: flex;
    padding: 36px 0;
  }
  &.offer-card {
    width: 31%;
    text-align: center;
    box-shadow: 0px 0px 10px #00000011;
    padding: 32px 0 40px 0;
  }
  &.offer-cart-center {
    margin: 0 36px;
  }
  &.offer-text {
    padding: 16px 24px;
  }
  &.offer-btn {
    margin-top: 24px;
  }
`
export const Text = styled.p`
  color: #000000;
  font-weight: 300;
  &.text-head {
    font-size: 3rem;
    font-weight: 400;
    line-height: 72px;
    letter-spacing: 4px;
    padding-top: 32px;
  }
  &.offer-text-header {
    font-size: 2.5rem;
    line-height: 64px;
  }
  &.offer-text-two {
    font-size: 1.5rem;
  }
  &.text-link {
    font-weight: 400;
    font-size: 0.9rem;
    margin-right: 10px;
  }
  &.name-zoom {
    font-size: 2.5rem;
    letter-spacing: 2px;
    margin-bottom: 32px;
  }
  &.welcoom {
    font-size: 1.5rem;
    margin-bottom: 24px;
  }
  &.text-mean {
    font-size: 0.9rem;
    margin-bottom: 64px;
  }
  &.offer-text-head {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }
  &.offer-text-mean {
    font-size: 0.9rem;
    color: #666666;
  }
`
export const Image = styled.img`
  width: 100%;
  display: block;
  &.offer-img-item {
    margin: auto;
    width: 50%;
    border-radius: 50%;
    transition: all 0.3s linear;
    &:hover {
      transform: scale(1.1);
    }
  }
`
export const Button = styled.button`
  padding: 14px 18px;
  background-color: #000000;
  transition: all 0.3s linear;
  border-radius: 4px;
  color: white;
  border: 2px solid transparent;
  &:hover {
    cursor: pointer;
    border: 2px solid #000000;
    background-color: white;
    color: #000000;
  }
`

const AboutUs = () => {
  return (
    <ViewDiv className="about_us">
      <ViewDiv className="head">
        <Text className="text-head">Thông tin</Text>
        <ViewDiv className="g-link">
          <Link to={'/'}>
            <Text className="text-link">Trang chủ</Text>
          </Link>
          <Text className="text-link">/</Text>
          <Text className="text-link">Thông tin</Text>
        </ViewDiv>
      </ViewDiv>
      <ViewDiv className="container-about">
        <ViewDiv className="about-bd">
          <ViewDiv className="item item-left">
            <Image src="/img/img-about-1.jpg" alt="hinh anh 1 co gai" />
          </ViewDiv>
          <ViewDiv className="item item-right">
            <ViewDiv className="items">
              <Text className="name-zoom">Hair Beautifull</Text>
              <Text className="welcoom">Chào mừng đén với Hair Beautifull</Text>
              <Text className="text-mean">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas facere minus, aliquid ad amet
                expedita iure alias officia quis consectetur quisquam at laboriosam commodi delectus iste doloremque
                facilis cupiditate.
              </Text>
              <ViewDiv className="g-image">
                <ViewDiv className="img">
                  <Image src="/img/img-about.jpg" alt="anh dep" />
                </ViewDiv>
                <ViewDiv className="img">
                  <Image src="/img/img-about-2.jpg" alt="anh dep" />
                </ViewDiv>
                <ViewDiv className="img">
                  <Image src="/img/img-about-3.jpg" alt="anh dep" />
                </ViewDiv>
              </ViewDiv>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>
      <ViewDiv className="g-offer">
        <ViewDiv className="offer-body">
          <ViewDiv className="offer-head">
            <Text className="offer-text-header">Chúng tôi có thể cung cấp những gì</Text>
            <Text className="offer-text-two">Các chuyên gia chăm sóc tóc</Text>
          </ViewDiv>
          <ViewDiv className="offer-all-card">
            <ViewDiv className="offer-none"></ViewDiv>
            {dataSome.map((a) => (
              <OurSomeThing key={a.id} item={a} />
            ))}
            <ViewDiv className="offer-none"></ViewDiv>
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>

      <OfferSalon />
      <OurProgram />
      <OurStats />
      <SalonTeam />
    </ViewDiv>
  )
}

export default AboutUs
