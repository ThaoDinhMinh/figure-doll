import React from 'react'
import styled, { keyframes } from 'styled-components'
const moving = keyframes`
  0%{
    transform: translateX(-75%);
    opacity: 0;
  }
  25%{
    transform: translateX(-50%);

  }
  50%{
    transform: translateX(-25%);

  }
  75%{
    transform: translateX(-10%);

  }
  100%{
    transform: translateX(0%);

  }
`

const widting = keyframes`
  0%{
    width:0% ;
  }
  25%{
    width: 25%;
  }
  50%{
    width: 50%;
  }
  75%{
    width: 75%;
  }
  100%{
    width: 100%;
  }
`

const ViewDiv = styled.div`
  &.product {
    background-color: #fcf1db;
  }
  &.g-text-product {
    text-align: center;
  }
  &.item-wid {
    width: 16.666667%;
    margin: 0 20px;
    &:hover .text {
      color: #d3ad69;
    }
  }
  &.item {
    position: relative;

    &:hover .img-hilden {
      animation: ${moving} 0.3s linear;
      z-index: 1;
    }
    &:hover .hilden-div-opa {
      animation: ${widting} 0.3s linear;
      background-color: #ffffff80;
    }
  }
  &.hilden-div-opa {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 2;
  }
  &.product-hilden {
    overflow: hidden;
    object-fit: cover;
    z-index: 1;
  }
  &.items-product {
    display: flex;
    padding: 60px 100px;
    justify-content: center;
  }
  &.g-price {
    display: flex;
  }
  &.text-name {
    padding: 20px 10px;
    border-bottom: 1px solid gray;
    margin: 0 10px;
  }
  &.text-background {
    background-color: white;
  }
  &.g-price {
    padding: 10px 20px;
  }
`
const Image = styled.img`
  width: 100%;
  display: block;
  &.img-hilden {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
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
  &.price-new {
    color: #d3ad69;
    font-weight: 600;
    line-height: 24px;
  }
  &.text {
    font-size: 1rem;
    font-weight: 400;
    line-height: 28px;
  }
  &.price-nomal {
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.4);
    text-decoration: line-through;
    margin-right: 4px;
  }
`

const ProductFeatured = () => {
  return (
    <ViewDiv className="product">
      <ViewDiv className="g-text-product">
        <Text className="text-product">Sản phẩm nổi bật</Text>
        <Text className="text-mean-product">
          Tự tin khẳng định sự nữ tính của bạn khi sử dụng Sản phẩm chăm sóc tóc Hair Beautifull
        </Text>
      </ViewDiv>
      <ViewDiv className="items-product">
        <ViewDiv className="item-wid">
          <ViewDiv className="item">
            <ViewDiv className="product-show">
              <Image className="img-product" src="/img/product1.jpg" />
            </ViewDiv>
            <ViewDiv className="product-hilden">
              <Image className="img-hilden" src="/img/product.jpg" />
            </ViewDiv>
            <ViewDiv className="hilden-div-opa"></ViewDiv>
          </ViewDiv>
          <ViewDiv className="text-background">
            <ViewDiv className="text-name">
              <Text className="text">Kiểu tóc vàng nâu</Text>
            </ViewDiv>
            <ViewDiv className="g-price">
              <Text className="price-nomal">500.000 đ</Text>
              <Text className="price-new">429.000 đ</Text>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
        <ViewDiv className="item-wid">
          <ViewDiv className="item">
            <ViewDiv className="product-show">
              <Image className="img-product" src="/img/product2.jpg" />
            </ViewDiv>
            <ViewDiv className="product-hilden">
              <Image className="img-hilden" src="/img/product3.jpg" />
            </ViewDiv>
            <ViewDiv className="hilden-div-opa"></ViewDiv>
          </ViewDiv>
          <ViewDiv className="text-background">
            <ViewDiv className="text-name">
              <Text className="text">Tóc giả xoăn màu nâu</Text>
            </ViewDiv>
            <ViewDiv className="g-price">
              <Text className="price-nomal">1.399.000 đ</Text>
              <Text className="price-new">999.000 đ</Text>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
        <ViewDiv className="item-wid">
          <ViewDiv className="item">
            <ViewDiv className="product-show">
              <Image className="img-product" src="/img/product4.jpg" />
            </ViewDiv>
            <ViewDiv className="product-hilden">
              <Image className="img-hilden" src="/img/product5.jpg" />
            </ViewDiv>
            <ViewDiv className="hilden-div-opa"></ViewDiv>
          </ViewDiv>
          <ViewDiv className="text-background">
            <ViewDiv className="text-name">
              <Text className="text">Tóc giả dài tóc vàng</Text>
            </ViewDiv>
            <ViewDiv className="g-price">
              <Text className="price-nomal">800.000 đ</Text>
              <Text className="price-new">699.000 đ</Text>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
        <ViewDiv className="item-wid">
          <ViewDiv className="item">
            <ViewDiv className="product-show">
              <Image className="img-product" src="/img/product6.jpg" />
            </ViewDiv>
            <ViewDiv className="product-hilden">
              <Image className="img-hilden" src="/img/product7.jpg" />
            </ViewDiv>
            <ViewDiv className="hilden-div-opa"></ViewDiv>
          </ViewDiv>
          <ViewDiv className="text-background">
            <ViewDiv className="text-name">
              <Text className="text">Tóc giả màu đen bóng</Text>
            </ViewDiv>
            <ViewDiv className="g-price">
              <Text className="price-nomal">500.000 đ</Text>
              <Text className="price-new">329.000 đ</Text>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default ProductFeatured
