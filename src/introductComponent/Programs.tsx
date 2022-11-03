import React from 'react'
import styled from 'styled-components'

const ViewDiv = styled.div`
  &.contail {
    background-color: white;
  }
  &.g-text-product {
    text-align: center;
  }
  &.container-item {
    width: 25%;
  }
  &.container {
    display: flex;
    justify-content: center;
  }
  &.image-item {
    padding: 44px 24px 20px 24px;
  }
  &.image-scalc {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    object-fit: cover;
    border-radius: 50%;
    border: 8px solid gray;
    &:hover .image-radios {
      transform: scale(1.1);
    }
    &:hover .g-text-g {
      transform: scale(2.5);
    }
    &:hover .line-garen {
      background-color: #090909bc;
    }
  }
  &.text-mean {
    text-align: center;
  }
  &.g-text-g {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    transition: all 0.5s linear;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 3;
  }
  &.line-garen {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: 2;
    transition: all 0.5s linear;
  }
  &.btn-foot {
    text-align: center;
    padding: 12px 0 60px 0;
  }
`
const Image = styled.img`
  display: block;
  &.image-radios {
    border-radius: 50%;
    width: 100%;
    transition: all 0.3s linear;
  }
`
const Text = styled.p`
  font-weight: 300;
  &.text-product {
    font-size: 2.5rem;
    font-weight: 300;
    padding-top: 60px;
  }
  &.text-mean-product {
    font-size: 1.3rem;
    font-weight: 200;
    margin: auto;
    width: 500px;
    padding-top: 20px;
    line-height: 28px;
  }
  &.text-sale {
    color: #d3ad69;
    font-size: 1rem;
    font-weight: 300;
  }
  &.text-on {
    font-weight: 300;
    font-size: 0.5rem;
    color: white;
  }
  &.t-mean-head {
    font-size: 1.7rem;
    color: #121212;
    margin-bottom: 12px;
  }
  &.t-mean-foot {
    font-size: 0.9rem;
    color: #666666;
  }

  &.btn-foot-text {
    padding: 12px 16px;
    background-color: #121212;
    color: #ffffff;
    font-weight: 400;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s linear;
    display: inline-block;
    border: 2px solid transparent;
    &:hover {
      background-color: #ffffff;
      color: #121212;
      border: 2px solid #121212;
    }
  }
`

const Programs = () => {
  return (
    <ViewDiv className="contail">
      <ViewDiv className="g-text-product">
        <Text className="text-product">Kế hoạch</Text>
        <Text className="text-mean-product">Tạo sự khác biệt trong cuộc sống của bạn ...</Text>
      </ViewDiv>

      <ViewDiv className="container">
        <ViewDiv className="container-item">
          <ViewDiv className="image-item">
            <ViewDiv className="image-scalc">
              <Image className="image-radios" src="/img/img-pro.jpg" alt="toc dep" />
              <ViewDiv className="g-text-g">
                <Text className="text-sale">40% OFF</Text>
                <Text className="text-on">Trên sản phẩm</Text>
              </ViewDiv>
              <ViewDiv className="line-garen"></ViewDiv>
            </ViewDiv>
          </ViewDiv>
          <ViewDiv className="text-mean">
            <Text className="t-mean-head">Tóc dài xoăn lượn sóng</Text>
            <Text className="t-mean-foot">Kiểu tóc thời thượng của đương đại tạo nên một phong cách riêng !</Text>
          </ViewDiv>
        </ViewDiv>
        <ViewDiv className="container-item">
          <ViewDiv className="image-item">
            <ViewDiv className="image-scalc">
              <Image className="image-radios" src="/img/img-pro1.jpg" alt="toc dep" />
              <ViewDiv className="g-text-g">
                <Text className="text-sale">60% OFF</Text>
                <Text className="text-on">Trên sản phẩm</Text>
              </ViewDiv>
              <ViewDiv className="line-garen"></ViewDiv>
            </ViewDiv>
          </ViewDiv>
          <ViewDiv className="text-mean">
            <Text className="t-mean-head">Tóc xoăn quyến rũ</Text>
            <Text className="t-mean-foot">Kiểu tóc mà mọi người luôn ao ước có được !</Text>
          </ViewDiv>
        </ViewDiv>
        <ViewDiv className="container-item">
          <ViewDiv className="image-item">
            <ViewDiv className="image-scalc">
              <Image className="image-radios" src="/img/img-pro2.jpg" alt="toc dep" />
              <ViewDiv className="g-text-g">
                <Text className="text-sale">80% OFF</Text>
                <Text className="text-on">Trên sản phẩm</Text>
              </ViewDiv>
              <ViewDiv className="line-garen"></ViewDiv>
            </ViewDiv>
          </ViewDiv>
          <ViewDiv className="text-mean">
            <Text className="t-mean-head">Tóc thẳng cổ điển</Text>
            <Text className="t-mean-foot">Kiểu tóc cổ điển đã chiếm được cảm tình của rất nhiều người.</Text>
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>
      <ViewDiv className="btn-foot">
        <Text className="btn-foot-text">Xem thêm</Text>
      </ViewDiv>
    </ViewDiv>
  )
}

export default Programs
