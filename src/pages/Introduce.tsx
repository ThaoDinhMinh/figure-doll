import React from 'react'
import styled from 'styled-components'
import Textmean from '../introductComponent/Textmean'
import ProductFeatured from '../introductComponent/ProductFeatured'
import ContentTranperen from '../introductComponent/ContentTranperen'
import Programs from '../introductComponent/Programs'
import 'animate.css'
import 'animate.css/animate.min.css'

import ScrollView from 'react-animate-on-scroll'
import UseSlickInfor from '../components/detaiComponent/UseSlickInfor'
import Mission from '../introductComponent/Mission'

const ViewDiv = styled.div`
  &.container {
    background-image: url(' /img/nguoidep.jpg');
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
  &.content {
    background-image: url('/img/background.jpg');
    width: 100%;
    padding-bottom: 60px;
  }
  &.g-text {
    text-align: center;
  }
  &.g-items-scroll {
    width: 33.333333%;
  }
  &.g-content {
    display: flex;
    padding: 0 80px;
  }
  &.card-item {
    padding: 30px 20px 0 20px;
    text-align: center;
    &:hover .number-radius {
      background-color: #d3ad69;
    }
  }
  &.g-text-scoll {
    background-color: #ffffff;
    &:last-child {
      padding-bottom: 20px;
    }
  }
  &.text-number {
    padding: 10px 0;
  }
`
const Text = styled.p`
  &.content-text-head {
    font-size: 2.5rem;
    font-weight: 300;
    padding-top: 40px;
  }
  &.content-text-mean {
    font-size: 1.3rem;
    font-weight: 200;
    margin: auto;
    width: 500px;
    padding-top: 20px;
    line-height: 28px;
  }
  &.number-radius {
    padding: 12px 18px;
    border-radius: 50%;
    background-color: #101010;
    display: inline-block;
    color: white;
  }
  &.btn-see-more {
    padding: 12px 12px;
    background-color: #d3ad69;
    display: inline-block;
    color: white;
    cursor: pointer;
    transition: all 0.3s linear;
    border: 2px solid transparent;
    border-radius: 8px;
    &:hover {
      background-color: white;
      color: black;
      border: 2px solid #d3ad69;
    }
  }
  &.text-head-card {
    font-size: 1.3rem;
    font-weight: 300;
  }
  &.text-card-mean {
    font-size: 1rem;
    font-weight: 200;
  }
`
const Image = styled.img`
  width: 100%;
  display: block;
`

const Introduce = () => {
  return (
    <ViewDiv className="container">
      <UseSlickInfor />
      <ViewDiv className="content">
        <ViewDiv className="g-text">
          <Text className="content-text-head">Bộ sưu tập nổi bật</Text>
          <Text className="content-text-mean">
            Chúng tôi có những giải pháp thiết kế riêng cho từng cá nhân để biết được nhu cầu cụ thể
          </Text>
        </ViewDiv>

        <ViewDiv className="g-content">
          <ViewDiv className="g-items-scroll">
            <ScrollView animateIn="animate__fadeInDown">
              <ViewDiv className="card-item">
                <ViewDiv className="img-g-item">
                  <Image src="/img/img3.jpg" />
                </ViewDiv>
                <ViewDiv className="g-text-scoll">
                  <ViewDiv className="text-number">
                    <Text className="number-radius">1</Text>
                  </ViewDiv>
                  <ViewDiv className="text-number">
                    <Text className="text-head-card">Gội đầu</Text>
                  </ViewDiv>

                  <ViewDiv className="text-number">
                    <Text className="text-card-mean">Luôn lịch sự và nhã nhặn.</Text>
                  </ViewDiv>

                  <ViewDiv className="text-number">
                    <Text className="btn-see-more">Xem thêm</Text>
                  </ViewDiv>
                </ViewDiv>
              </ViewDiv>
            </ScrollView>
          </ViewDiv>
          <ViewDiv className="g-items-scroll">
            <ScrollView animateIn="animate__fadeInDown" duration={2}>
              <ViewDiv className="card-item">
                <ViewDiv className="img-g-item">
                  <Image src="/img/img4.jpg" />
                </ViewDiv>
                <ViewDiv className="g-text-scoll">
                  <ViewDiv className="text-number">
                    <Text className="number-radius">2</Text>
                  </ViewDiv>
                  <ViewDiv className="text-number">
                    <Text className="text-head-card">Màu nhuộm</Text>
                  </ViewDiv>

                  <ViewDiv className="text-number">
                    <Text className="text-card-mean">Luôn lịch sự và nhã nhặn.</Text>
                  </ViewDiv>

                  <ViewDiv className="text-number">
                    <Text className="btn-see-more">Xem thêm</Text>
                  </ViewDiv>
                </ViewDiv>
              </ViewDiv>
            </ScrollView>
          </ViewDiv>
          <ViewDiv className="g-items-scroll">
            <ScrollView animateIn="animate__fadeInDown" duration={3}>
              <ViewDiv className="card-item">
                <ViewDiv className="img-g-item">
                  <Image src="/img/img5.jpg" />
                </ViewDiv>
                <ViewDiv className="g-text-scoll">
                  <ViewDiv className="text-number">
                    <Text className="number-radius">3</Text>
                  </ViewDiv>
                  <ViewDiv className="text-number">
                    <Text className="text-head-card">Gội đầu</Text>
                  </ViewDiv>

                  <ViewDiv className="text-number">
                    <Text className="text-card-mean">Luôn lịch sự và nhã nhặn.</Text>
                  </ViewDiv>

                  <ViewDiv className="text-number">
                    <Text className="btn-see-more">Xem thêm</Text>
                  </ViewDiv>
                </ViewDiv>
              </ViewDiv>
            </ScrollView>
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>

      <Textmean />
      <ProductFeatured />
      <ContentTranperen />
      <Mission />
      <Programs />
    </ViewDiv>
  )
}

export default Introduce
