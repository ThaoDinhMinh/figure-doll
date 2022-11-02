import React from 'react'
import Slider, { Settings } from 'react-slick'
import { TypeListImage } from '../../interface'
import styled, { keyframes } from 'styled-components'
import 'animate.css'
import 'animate.css/animate.min.css'
import ScrollView from 'react-animate-on-scroll'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import LazyLoad from 'react-lazy-load'
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
    margin-left: 8vw;
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
                <ScrollView
                  animateIn="animate__fadeInDown"
                  animateOut="nimate__fadeOutDown"
                  initiallyVisible={true}
                  delay={1}
                >
                  <Text className="text animate__fadeInDown animate__animated animate__repeat-3">
                    Thật tuyệt vời với dịch vụ Làm đẹp
                  </Text>
                </ScrollView>
              </ViewDiv>
              <ViewDiv>
                <ScrollView
                  animateIn="animate__bounceInLeft"
                  animateOut="animate__bounceOutLeft"
                  duration={0.8}
                  initiallyVisible={true}
                  delay={1}
                >
                  <ViewDiv className="text-extesion">
                    <FiberManualRecordIcon
                      className="animate__animated animate__bounceInLeft animate__delay-1s"
                      sx={{ color: '#dcdbdb', fontSize: 12 }}
                    />
                    <Text className="text-mean-extension animate__animated animate__bounceInLeft animate__delay-1s">
                      100% tóc thật
                    </Text>
                  </ViewDiv>
                </ScrollView>
              </ViewDiv>
              <ViewDiv>
                <ScrollView animateIn="animate__bounceOutLeft" duration={1.5} initiallyVisible={true} delay={1}>
                  <ViewDiv className="text-extesion">
                    <FiberManualRecordIcon
                      className="animate__animated animate__delay-2s animate__bounceInLeft"
                      sx={{ color: '#dcdbdb', fontSize: 12 }}
                    />
                    <Text className="text-mean-extension animate__animated animate__bounceInLeft animate__delay-2s">
                      Điều trị tự nhiên
                    </Text>
                  </ViewDiv>
                </ScrollView>
              </ViewDiv>

              <ViewDiv>
                <ScrollView animateIn="animate__bounceOutLeft" duration={2.2} initiallyVisible={true}>
                  <ViewDiv className="text-extesion">
                    <FiberManualRecordIcon
                      className="animate__animated animate__delay-3s animate__bounceInLeft"
                      sx={{ color: '#dcdbdb', fontSize: 12 }}
                    />
                    <Text className="text-mean-extension animate__animated animate__delay-3s animate__bounceInLeft">
                      Chất lượng cao
                    </Text>
                  </ViewDiv>
                </ScrollView>
              </ViewDiv>
              <ViewDiv>
                <ScrollView animateIn="animate__fadeInDown" initiallyVisible={true} duration={2.3}>
                  <ViewDiv className="btn-price">
                    <Text className="text-button animate__animated animate__delay-3s animate__fadeInDown">
                      Bắt đầu chỉ từ : 1.300k
                    </Text>
                  </ViewDiv>
                </ScrollView>
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
                  <ScrollView animateIn="animate__fadeInDown" initiallyVisible={true} offset={300}>
                    <ViewDiv>
                      <Image
                        className="animate__animated animate__fadeInDown"
                        style={{ height: '120px', width: '142px' }}
                        src="/img/img-1.png"
                        alt="logo"
                      />
                    </ViewDiv>
                  </ScrollView>
                </ViewDiv>
              </LazyLoad>
              <LazyLoad offset={300}>
                <ViewDiv>
                  <ScrollView animateIn="animate__fadeInDown" initiallyVisible={true} offset={641}>
                    <ViewDiv>
                      <Text className="text-head-extension animate__animated animate__delay-1s animate__fadeInDown">
                        Mọi kiểu tóc đẹp một cách tự nhiên
                      </Text>
                    </ViewDiv>
                  </ScrollView>
                </ViewDiv>
              </LazyLoad>
              <LazyLoad offset={300}>
                <ViewDiv>
                  <ScrollView animateIn="animate__fadeInUp" initiallyVisible={true} offset={641}>
                    <ViewDiv>
                      <Text className="text-button animate__animated animate__delay-1s animate__fadeInUp">
                        Kiểm tra bộ sưu tập
                      </Text>
                    </ViewDiv>
                  </ScrollView>
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
                <ScrollView
                  animateIn="animate__fadeInDown"
                  animateOut="animate__fadeOutUp"
                  initiallyVisible={true}
                  offset={641}
                >
                  <LazyLoad offset={300}>
                    <Text className="text-head-extension animate__animated animate__delay-1s animate__fadeInDown">
                      Làm đẹp tóc một cách tự nhiên
                    </Text>
                  </LazyLoad>
                </ScrollView>
              </ViewDiv>
              <ViewDiv className="grup-childen">
                <ViewDiv>
                  <ScrollView
                    animateIn="animate__bounceInLeft"
                    animateOut="animate__bounceOutLeft"
                    duration={0.8}
                    initiallyVisible={true}
                    delay={1}
                  >
                    <LazyLoad offset={300}>
                      <ViewDiv className="text-extesion">
                        <FiberManualRecordIcon
                          className="animate__animated animate__bounceInLeft  animate__delay-1s"
                          sx={{ color: '#dcdbdb', fontSize: 12 }}
                        />
                        <Text className="text-mean-extension animate__animated  animate__bounceInLeft  animate__delay-1s">
                          Kẹp tóc bên trong
                        </Text>
                      </ViewDiv>
                    </LazyLoad>
                  </ScrollView>
                </ViewDiv>
                <ViewDiv>
                  <ScrollView
                    animateIn="animate__bounceInLeft"
                    animateOut="animate__bounceOutLeft"
                    duration={1.5}
                    initiallyVisible={true}
                    delay={1}
                  >
                    <LazyLoad offset={300}>
                      <ViewDiv className="text-extesion">
                        <FiberManualRecordIcon
                          className="animate__animated  animate__bounceInLeft animate__delay-2s"
                          sx={{ color: '#dcdbdb', fontSize: 12 }}
                        />
                        <Text
                          className="text-mean-extension animate__animated  
                          animate__bounceInLeft animate__delay-2s"
                        >
                          Cuộn tóc
                        </Text>
                      </ViewDiv>
                    </LazyLoad>
                  </ScrollView>
                </ViewDiv>
                <ViewDiv>
                  <ScrollView
                    animateIn="animate__bounceInLeft"
                    animateOut="animate__bounceOutLeft"
                    duration={2}
                    initiallyVisible={true}
                    delay={1}
                  >
                    <LazyLoad offset={300}>
                      <ViewDiv className="text-extesion">
                        <FiberManualRecordIcon
                          className="animate__animated animate__bounceInLeft  animate__delay-3s"
                          sx={{ color: '#dcdbdb', fontSize: 12 }}
                        />
                        <Text
                          className="text-mean-extension animate__animated animate__bounceInLeft 
                        animate__delay-3s"
                        >
                          Nối tóc
                        </Text>
                      </ViewDiv>
                    </LazyLoad>
                  </ScrollView>
                </ViewDiv>
              </ViewDiv>
              <ViewDiv className="grup-childen grup-childen-pad">
                <LazyLoad offset={300}>
                  <ViewDiv>
                    <ScrollView
                      animateIn="animate__fadeInDown"
                      animateOut="animate__fadeOutUp"
                      initiallyVisible={true}
                      offset={641}
                    >
                      <Text className="text-price animate__animated animate__fadeInDown  animate__delay-3s ">
                        Chỉ từ :
                      </Text>
                    </ScrollView>
                  </ViewDiv>
                </LazyLoad>
                <ViewDiv>
                  <ScrollView
                    animateIn="animate__fadeInDown"
                    animateOut="animate__fadeOutUp"
                    initiallyVisible={true}
                    offset={641}
                    duration={2}
                  >
                    <LazyLoad offset={300}>
                      <Text className="animate__animated animate__fadeInDown  animate__delay-4s price">1.300k</Text>
                    </LazyLoad>
                  </ScrollView>
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
