import React from 'react'
import styled from 'styled-components'

const ViewDiv = styled.div`
  &.g-our {
    display: flex;
    text-align: center;
  }
  &.g-item {
    width: 50%;
  }
  &.g-our-left {
    background-color: #fcf1db;
    text-align: center;
    padding: 56px 168px;
  }
  &.g-our-right {
    color: white;
    display: flex;
    background-image: url('/img/img-bgd-about.jpg');
    background-position: center;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
    padding-top: 48px;
    position: relative;
  }
  &.g-stats-top {
    width: 50%;
  }
  &.g-stats-item {
    padding-bottom: 62px;
  }
  &.our-opacity {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: #0000007d;
  }
`
const Text = styled.p`
  font-weight: 300;
  &.text-our-head {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 70px;
  }
  &.text-our-mean {
    font-size: 1.3rem;
    line-height: 30px;
  }
  &.text-out-action {
    margin-top: 32px;
  }
  &.t-number {
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 24px;
    position: relative;
  }
  &.t-stats {
    position: relative;
    font-size: 1.2rem;
    font-weight: 300;
    padding-bottom: 28px;
    &::before {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      right: 0;
      width: 33px;
      background: white;
      height: 2px;
      text-align: center;
      margin: auto;
    }
  }
`
const Image = styled.img`
  margin-bottom: 32px;
`

const OurStats = () => {
  return (
    <ViewDiv className="our-stats">
      <ViewDiv className="g-our">
        <ViewDiv className="g-our-left g-item">
          <Text className="text-our-head">Số liệu thống kê</Text>
          <Image src="/img/logo-body.png" />
          <Text className="text-our-mean">Ngành công nghiệp chăm sóc tóc đang có tốc độ tăng trưởng kép 14%</Text>
          <Text className="text-out-action">Phân tích toàn cầu</Text>
        </ViewDiv>
        <ViewDiv className="g-our-right g-item">
          <ViewDiv className="our-opacity"></ViewDiv>
          <ViewDiv className="g-stats-top">
            <ViewDiv className="g-stats-item">
              <Text className="t-number">960+</Text>
              <Text className="t-stats">Cắt tóc nữ</Text>
            </ViewDiv>
            <ViewDiv className="g-stats-item">
              <Text className="t-number">750+</Text>
              <Text className="t-stats">Phục vụ yêu cầu</Text>
            </ViewDiv>
          </ViewDiv>
          <ViewDiv className="g-stats-top">
            <ViewDiv className="g-stats-item">
              <Text className="t-number">520+</Text>
              <Text className="t-stats">Điều trị gàu</Text>
            </ViewDiv>
            <ViewDiv className="g-stats-item">
              <Text className="t-number">860+</Text>
              <Text className="t-stats">Tóc giả & Làm tóc</Text>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default OurStats
