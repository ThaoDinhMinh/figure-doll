import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import styled, { keyframes } from 'styled-components'

const transfrom = keyframes`
  0%, 40% {
    transform: translateY(20px);
    opacity: 0;
  }
  80% , 100% {
    transform: translateY(0px);
    opacity: 1;
  }
`

const ViewDiv = styled.div`
  &.our-program {
    background-color: white;
  }
  &.our-text {
    text-align: center;
    padding-top: 56px;
  }
  &.g-our-img {
    display: flex;
    justify-content: center;
    padding-top: 32px;
    padding-bottom: 64px;
  }
  &.g-our-content {
    position: relative;
    cursor: pointer;
    &:hover .opaci {
      background-color: #000000bf;
    }
    &:hover .text-transfrom-top {
      animation: ${transfrom} 0.3s linear;
      opacity: 1;
    }
  }
  &.opaci {
    position: absolute;
    top: 12px;
    transition: all 0.3s linear;
    bottom: 12px;
    left: 12px;
    right: 12px;
    z-index: 1;
  }
  &.text-tranfrom {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
  }
  &.g-our-items {
    width: 25%;
    padding: 15px;
  }
  &.text-transfrom-top {
    opacity: 0;
  }
`
const Text = styled.p`
  font-weight: 300;
  &.text-head-slice {
    font-size: 2.5rem;
    color: #000000;
    line-height: 64px;
    margin-bottom: 16px;
  }
  &.text-slice-bot {
    font-size: 1.4rem;
  }
  &.text-on-tranfrom {
    font-size: 1.4rem;
    letter-spacing: 2px;
  }
  &.dot-three {
    font-size: 2rem;
    color: #d3ad69;
  }
`
const Image = styled.img`
  width: 100%;
  display: block;
`

const OurProgram = () => {
  return (
    <ViewDiv className="our-program">
      <ViewDiv className="our-text">
        <Text className="text-head-slice">Các trương trình</Text>
        <Text className="text-slice-bot">Tạo sự khác biệt trong cuộc sống của khách hành có nhu cầu</Text>
      </ViewDiv>
      <ViewDiv className="g-our-img">
        <ViewDiv className="g-our-items">
          <ViewDiv className="g-our-item">
            <ViewDiv className="g-our-content">
              <ViewDiv className="opaci"></ViewDiv>
              <Image src="/img/img16-1.jpg" alt="anh girl toc dai" />
              <ViewDiv className="text-tranfrom">
                <ViewDiv className="text-transfrom-top">
                  <Text className="text-on-tranfrom">Màu tóc</Text>
                  <MoreHorizIcon sx={{ color: '#d3ad60', fontSize: 40 }} />
                </ViewDiv>
              </ViewDiv>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
        <ViewDiv className="g-our-items">
          <ViewDiv className="g-our-item">
            <ViewDiv className="g-our-content">
              <ViewDiv className="opaci"></ViewDiv>
              <Image src="/img/img17-1.jpg" alt="anh girl toc dai" />
              <ViewDiv className="text-tranfrom">
                <ViewDiv className="text-transfrom-top">
                  <Text className="text-on-tranfrom">Gội đầu & dưỡng tóc</Text>
                  <MoreHorizIcon sx={{ color: '#d3ad60', fontSize: 40 }} />
                </ViewDiv>
              </ViewDiv>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
        <ViewDiv className="g-our-items">
          <ViewDiv className="g-our-item">
            <ViewDiv className="g-our-content">
              <ViewDiv className="opaci"></ViewDiv>
              <Image src="/img/img18-1.jpg" alt="anh girl toc dai" />
              <ViewDiv className="text-tranfrom">
                <ViewDiv className="text-transfrom-top">
                  <Text className="text-on-tranfrom">Trang điểm & tóc giả</Text>
                  <MoreHorizIcon sx={{ color: '#d3ad60', fontSize: 40 }} />
                </ViewDiv>
              </ViewDiv>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default OurProgram
