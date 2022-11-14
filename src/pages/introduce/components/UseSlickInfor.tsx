import React from 'react'
import Slider, { Settings } from 'react-slick'
import styled, { keyframes } from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import LazyLoad from 'react-lazy-load'
import { Link } from 'react-router-dom'
const botomup = keyframes`
  from {
    height: 10%;
  }

  to {
    height: 100%;
  }
`
const ViewDiv = styled.div`
  &.slick-view {
    position: relative;
  }
  &.view-slick {
    margin-bottom: -5px;
  }
  &.text-scroll {
  }
  &.grup-srcoll {
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 12vw;
  }
  &.grup-scroll-center {
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &.dark-background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #0000006a;
    animation: ${botomup} 0.5s linear;
  }
  &.text-extesion {
    display: flex;
    align-items: center;
    padding: 0 10px 10px 10px;
  }
  &.grup-childen {
    display: flex;
    align-items: center;
  }
  &.grup-childen-pad {
    margin-top: 20px;
  }
  &.btn-price {
    display: inline-block;
    margin-top: 25px;
  }
`
const Text = styled.p`
  color: #fff;
  &.text {
    margin-bottom: 40px;
    font-size: 3rem;
    font-weight: 300;
    width: 500px;
    line-height: 70px;
    font-family: 'Open Sans', sans-serif;
  }
  &.text-price {
    font-size: 1.6rem;
    font-weight: 200;
    margin-right: 4px;
  }
  &.price {
    font-size: 2rem;
    font-weight: 700;
  }
  &.text-mean-extension {
    font-size: 1.3rem;
    font-weight: 100;
    margin-left: 10px;
  }
  &.text-head-extension {
    font-size: 2.5rem;
    font-weight: 300;
    padding: 40px;
    text-align: center;
  }
  &.text-button {
    transition: all 0.2s linear;
    padding: 25px 15px;
    background-color: #d3ad69;
    cursor: pointer;
    border-radius: 8px;
    &:hover {
      background-color: #fff;
      color: black;
    }
  }
`
const Image = styled.img`
  &.img-slick {
    width: 100%;
    display: block;
    height: calc(100vh - 50px);
    object-fit: cover;
    overflow: hidden;
  }
`

const UseSlickInfor = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <ViewDiv className="view-slick">
      <Slider {...settings}>
        <ViewDiv className="slick-view">
          <Image className="img-slick" src="/img/img1.jpg" alt="anh" />

          <ViewDiv className="text-scroll">
            <ViewDiv className="grup-srcoll">
              <ViewDiv>
                <Text className="text ">Thật tuyệt vời với dịch vụ Làm đẹp</Text>
              </ViewDiv>
              <ViewDiv>
                <ViewDiv className="text-extesion">
                  <FiberManualRecordIcon sx={{ color: '#dcdbdb', fontSize: 12 }} />
                  <Text className="text-mean-extension ">100% tóc thật</Text>
                </ViewDiv>
              </ViewDiv>
              <ViewDiv>
                <ViewDiv className="text-extesion">
                  <FiberManualRecordIcon sx={{ color: '#dcdbdb', fontSize: 12 }} />
                  <Text className="text-mean-extension ">Điều trị tự nhiên</Text>
                </ViewDiv>
              </ViewDiv>

              <ViewDiv>
                <ViewDiv className="text-extesion">
                  <FiberManualRecordIcon sx={{ color: '#dcdbdb', fontSize: 12 }} />
                  <Text className="text-mean-extension ">Chất lượng cao</Text>
                </ViewDiv>
              </ViewDiv>
              <ViewDiv>
                <ViewDiv className="btn-price">
                  <Link to={'/colection'}>
                    <Text className="text-button ">Bắt đầu chỉ từ : 1.300k</Text>
                  </Link>
                </ViewDiv>
              </ViewDiv>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>

        <ViewDiv className="slick-view">
          <Image className="img-slick" src="/img/img2.jpg" alt="anh" />
          <LazyLoad offset={33}>
            <ViewDiv className="dark-background"></ViewDiv>
          </LazyLoad>
          <ViewDiv className="text-scroll">
            <ViewDiv className="grup-scroll-center">
              <LazyLoad offset={30}>
                <ViewDiv>
                  <ViewDiv>
                    <Image style={{ height: '120px', width: '142px' }} src="/img/img-1.png" alt="logo" />
                  </ViewDiv>
                </ViewDiv>
              </LazyLoad>
              <LazyLoad offset={300}>
                <ViewDiv>
                  <ViewDiv>
                    <Text className="text-head-extension">Mọi kiểu tóc đẹp một cách tự nhiên</Text>
                  </ViewDiv>
                </ViewDiv>
              </LazyLoad>
              <LazyLoad offset={300}>
                <ViewDiv>
                  <ViewDiv>
                    <Link to={'/colection'}>
                      <Text className="text-button ">Kiểm tra bộ sưu tập</Text>
                    </Link>
                  </ViewDiv>
                </ViewDiv>
              </LazyLoad>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>

        <ViewDiv className="slick-view">
          <Image className="img-slick" src="/img/img.jpg" alt="anh" />
          <ViewDiv className="dark-background"></ViewDiv>
          <ViewDiv className="text-scroll">
            <ViewDiv className="grup-scroll-center">
              <ViewDiv>
                <LazyLoad offset={300}>
                  <Text className="text-head-extension">Làm đẹp tóc một cách tự nhiên</Text>
                </LazyLoad>
              </ViewDiv>
              <ViewDiv className="grup-childen">
                <ViewDiv>
                  <LazyLoad offset={300}>
                    <ViewDiv className="text-extesion">
                      <FiberManualRecordIcon sx={{ color: '#dcdbdb', fontSize: 12 }} />
                      <Text className="text-mean-extension ">Kẹp tóc bên trong</Text>
                    </ViewDiv>
                  </LazyLoad>
                </ViewDiv>
                <ViewDiv>
                  <LazyLoad offset={300}>
                    <ViewDiv className="text-extesion">
                      <FiberManualRecordIcon sx={{ color: '#dcdbdb', fontSize: 12 }} />
                      <Text className="text-mean-extension ">Cuộn tóc</Text>
                    </ViewDiv>
                  </LazyLoad>
                </ViewDiv>
                <ViewDiv>
                  <LazyLoad offset={300}>
                    <ViewDiv className="text-extesion">
                      <FiberManualRecordIcon sx={{ color: '#dcdbdb', fontSize: 12 }} />
                      <Text className="text-mean-extension">Nối tóc</Text>
                    </ViewDiv>
                  </LazyLoad>
                </ViewDiv>
              </ViewDiv>
              <ViewDiv className="grup-childen grup-childen-pad">
                <LazyLoad offset={300}>
                  <ViewDiv>
                    <Text className="text-price ">Chỉ từ :</Text>
                  </ViewDiv>
                </LazyLoad>
                <ViewDiv>
                  <LazyLoad offset={300}>
                    <Text className="price">1.300k</Text>
                  </LazyLoad>
                </ViewDiv>
              </ViewDiv>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
      </Slider>
    </ViewDiv>
  )
}

export default UseSlickInfor
