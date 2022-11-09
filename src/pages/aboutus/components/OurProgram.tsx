import React from 'react'

import styled, { keyframes } from 'styled-components'
import { dataOurPro } from './about_data'
import OurProgramComponent from './OurProgramComponent'

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

export const ViewDiv = styled.div`
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
export const Text = styled.p`
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
export const Image = styled.img`
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
        {dataOurPro.map((a) => (
          <OurProgramComponent key={a.id} item={a} />
        ))}
      </ViewDiv>
    </ViewDiv>
  )
}

export default OurProgram
