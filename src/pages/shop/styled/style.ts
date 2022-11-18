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

export const ViewDivShopProduct = styled.div`
  .header {
    background-image: url('/img/img-back.jpg');
    background-repeat: repeat-x;
  }

  .header-items {
    text-align: center;
    padding-top: 32px;
  }
  h1 {
    font-size: 3rem;
    line-height: 72px;
    letter-spacing: 4px;
  }
  .header-bot {
    padding-top: 12px;
  }
  .link-home {
    color: #000000;
    border-bottom: 1px solid transparent;
    transition: all 0.3s linear;
    padding-bottom: 3px;
    &:hover {
      border-bottom: 1px solid #000000;
    }
  }
  .span {
    padding-left: 8px;
  }
  .contain {
    padding: 32px 0;
    display: flex;
    flex-wrap: wrap;
    margin: 0 54px;
  }
  .container {
    display: flex;
    margin: 0 56px;
    padding-top: 56px;
  }
  .category-layout {
    width: 25%;
    margin-right: 40px;
  }
  .component-container {
    width: 75%;
  }
`
export const ViewCategory = styled.div`
  &.select {
    text-align: end;
  }
  select {
    padding: 12px;
    border: 1px solid #d3ad69;
    outline: none;
  }
  .category-left-top {
    h3 {
      padding: 12px 24px;
      background-color: black;
      color: white;
      margin-bottom: 24px;
    }
  }
  .color-head-color {
    padding: 12px 24px;
    background-color: black;
    color: white;
    margin-bottom: 24px;
    margin-top: 32px;
  }
  .span {
    padding-left: 12px;
  }
  .span-color {
    padding-left: 6px;
  }
  .cate-item {
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 0.5px dotted #d3ad69;
    font-size: 0.9rem;
    font-weight: 300;
    transition: all 0.3s linear;
    cursor: pointer;
    &:hover {
      color: #d3ad69;
    }
  }
`

export const ViewCatItem = styled.div`
  .cate-item {
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 0.5px dotted #d3ad69;
    font-size: 0.9rem;
    font-weight: 300;
    transition: all 0.3s linear;
    cursor: pointer;
    &:hover {
      color: #d3ad69;
    }
  }
`
export const ViewProduct = styled.div`
  &.show-item {
    width: 33.333333%;
    padding: 20px;
    img {
      width: 100%;
      display: block;
    }
    .product {
      background-color: #fcf1db;
    }
    .g-text-product {
      text-align: center;
    }
    .item-wid {
      &:hover .img-hilden {
        animation: ${moving} 0.3s linear;
        z-index: 1;
      }
      &:hover .hilden-div-opa {
        animation: ${widting} 0.3s linear;
        background-color: #ffffff80;
        cursor: pointer;
      }
      &:hover .btn {
        background-color: #d3ad69;
        cursor: pointer;
      }
      &:hover .p {
        color: #d3ad69;
      }
    }
    .g-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .item {
      position: relative;
    }
    .sale {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 5;
    }
    .p-sale {
      padding: 4px 8px;
      background-color: #d3ad69;
      color: white;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .hilden-div-opa {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      z-index: 2;
    }
    .product-hilden {
      overflow: hidden;
      object-fit: cover;
      z-index: 1;
    }
    .items-product {
      display: flex;
      padding: 60px 100px;
      justify-content: center;
    }
    .g-price {
      display: flex;
      flex-wrap: wrap;
    }
    .text-name {
      padding: 20px 10px;
      border-bottom: 1px solid gray;
      margin: 0 10px;
    }
    .text-background {
      background-color: white;
    }
    .g-price {
      padding: 10px 0px 10px 0;
    }
    .img-hilden {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      height: 100%;
    }
    .text-product {
      font-size: 2.5rem;
      font-weight: 300;
      padding-top: 60px;
    }
    .text-mean-product {
      font-size: 1.3rem;
      font-weight: 200;
      margin: auto;
      width: 500px;
      padding-top: 20px;
      line-height: 28px;
    }
    .price-new {
      color: #d3ad69;
      font-weight: 600;
      line-height: 24px;
    }
    .text {
      font-size: 1rem;
      font-weight: 400;
      line-height: 28px;
      text-align: center;
    }
    .price-nomal {
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 24px;
      color: rgba(0, 0, 0, 0.4);
      text-decoration: line-through;
      margin-right: 4px;
    }
    .p-name {
      text-align: center;
      border-bottom: 1px solid #d3ad69;
      padding: 12px;
      transition: all 0.3s linear;
    }
    .button-item {
      text-align: end;
    }
    .btn {
      padding: 12px;
      background-color: #000000;
      color: white;
      font-weight: 500;
      transition: all 0.3s linear;
      font-size: 0.9rem;
      border-radius: 4px;
    }
  }
  &.g-product {
    .g-hair {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -20px;
      padding: 32px 0;
    }
    .g-butbtn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 56px;
    }
    .g-butbtn button {
      padding: 10px 24px;
      background-color: black;
      color: white;
      border-radius: 4px;
      margin-right: 12px;
      font-weight: 700;
      transition: all 0.3s linear;
      cursor: pointer;
      &:hover {
        background-color: #d3ad69;
      }
    }
  }
`
