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
    padding: 48px 25px;

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
  &.image-scalc {
    position: relative;
    overflow: hidden;
    object-fit: cover;
    border-radius: 50%;
    border: 8px solid gray;
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
    width: 0%;
    height: 100%;
    background-color: transparent;
    z-index: 4;
  }
`
const Image = styled.img`
  &.image-radios {
    border-radius: 50%;
    width: 100%;
    transition: all 0.3s linear;
  }
`
const Text = styled.p`
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
            <Text>Tóc dài xoăn lượn sóng</Text>
            <Text>Kiểu tóc thời thượng của đương đại tạo nên một phong cách riêng !</Text>
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
            <Text>Tóc xoăn quyến rũ</Text>
            <Text>Kiểu tóc mà mọi người luôn ao ước có được !</Text>
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
            <Text>Tóc thẳng cổ điển</Text>
            <Text>Kiểu tóc cổ điển đã chiếm được cảm tình của rất nhiều người.</Text>
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default Programs
