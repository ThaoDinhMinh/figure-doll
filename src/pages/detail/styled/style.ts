import styled from 'styled-components'

export const ViewDetail = styled.div`
  .header {
    background-image: url('/img/img-back.jpg');
    background-repeat: repeat-x;
    .header-item {
      text-align: center;
      padding-top: 32px;
      .text-head {
        font-size: 3rem;
        line-height: 72px;
        letter-spacing: 4px;
      }
      .g-span {
        padding-top: 12px;
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
          color: #000000;
        }
        .span-cate {
          margin-left: 8px;
        }
      }
    }
  }
  .final-pirce {
    display: flex;
  }
  .text-sale {
    margin-left: 4px;
    font-size: 1rem;
    font-weight: 400;
  }

  .container-detail {
    padding-top: 32px;
    margin: 0 56px;
  }

  .g-items {
    display: flex;
  }
  .items {
    width: 75%;
  }
  .items-left {
    width: 50%;
    padding-right: 15px;
  }

  .items-right {
    width: 50%;
    padding-left: 15px;
    .g-price {
      display: flex;
      .price-new {
        color: #d3ad69;
        font-weight: 600;
        line-height: 24px;
      }
      .price-nomal {
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.4);
        text-decoration: line-through;
        margin-right: 4px;
      }
    }

    .g-text {
      padding-bottom: 12px;
    }
    .g-price {
      padding-bottom: 20px;
      padding-top: 12px;
    }
    .g-text h1 {
      font-weight: 300;
      font-size: 2rem;
    }
    .text-mean {
      font-size: 0.9rem;
      font-weight: 300;
      padding-bottom: 36px;
    }
    table {
      text-align: left;
      border-collapse: collapse;
      width: 100%;
    }
    tr,
    td,
    th {
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 10px 20px;
      font-weight: 300;
    }
    th {
      color: '#000000';
      width: 30%;
    }
    td {
      color: #666666;
      font-size: 0.9rem;
      width: 70%;
    }
    .tr-1 {
      background-color: rgba(0, 0, 0, 0.04);
    }
    .tr-2 {
      background-color: rgba(0, 0, 0, 0.02);
    }
  }
  .img img {
    max-width: 100%;
    display: block;
  }
  .img {
    position: relative;
    padding: 28px;
  }
  .sale {
    position: absolute;
    top: 0;
    left: 0;
    p {
      padding: 6px 12px;
      background-color: #d3ad69;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      font-size: 0.9rem;
      font-weight: 300;
      color: white;
    }
  }
  .items-end {
    width: 25%;
    padding-left: 30px;
  }
  .sale-infor-check {
    background-color: rgba(0, 0, 0, 0.04);
  }
  .card-cart {
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    position: -webkit-sticky;
    position: sticky;
    top: 84px;
    z-index: 200;
  }
  .sale-infor {
    display: flex;
    padding: 10px 20px;
    align-items: center;
  }
  .no-sale-infor {
    margin-left: 12px;
    font-size: 0.9rem;
    font-weight: 300;
    color: #666666;
  }
  .num-sale {
    padding-left: 6px;
    font-size: 0.8rem;
  }
  .no-sale-price {
    text-decoration: line-through;
  }
  .sale-price {
    font-weight: 400;
    font-size: 1rem;
    color: #d3ad69;
  }
  .btn-buy {
    padding: 20px;
    .btn {
      width: 100%;
      padding: 12px 0;
      background-color: #d3ad69;
      font-size: 1.3rem;
      font-weight: 500;
      color: white;
      border: 2px solid transparent;
      border-radius: 8px;
      transition: all 0.3s linear;
      &:hover {
        background-color: white;
        color: #666666;
        border: 2px solid #666666;
        cursor: pointer;
      }
    }
  }
  .add-cart {
    padding-bottom: 20px;
    .btn-add {
      width: 100%;
      font-size: 0.9rem;
      font-weight: 300;
      color: #1f74d1;
      background-color: transparent;
      &:hover {
        cursor: pointer;
        filter: brightness(40%);
      }
    }
  }
  .chip {
    padding-top: 32px;
    font-weight: 300;
    font-size: 0.9rem;
    .chip-item {
      .cate-sear {
        margin: 0 4px;
        padding-bottom: 2px;
        border-bottom: 1px solid transparent;
        cursor: pointer;
        transition: all 0.3s linear;
        &:hover {
          border-bottom: 1px solid #666666;
        }
      }
    }
  }
  .share {
    font-weight: 300;
    font-size: 0.9rem;
    margin-top: 16px;
    display: flex;
    .fb-share-button {
      margin: 0 10px;
    }
    a {
      transition: all 0.3s linear;
      &:hover {
        filter: brightness(150%);
      }
    }
  }
  ul {
    list-style: none;
  }
  .h3 {
    font-weight: 400;
    font-size: 1.3rem;
    margin: 24px 0 16px 30px;
  }
  li {
    margin-bottom: 12px;
    font-weight: 300;
    font-size: 1rem;
  }
  ol {
    margin-left: 16px;
    margin-top: 24px;
  }
  ol,
  ul {
    padding: 0 30px;
  }
`

export const SlickView = styled.div`
  &.rank-sale {
    margin: 32px 0;
    .show-item {
      width: 100%;
      padding: 0 15px;
    }
    .slick-prev,
    .slick-next {
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 1000;
      padding: 15px 0 30px 0;
    }
    .slick-prev {
      left: 0;
    }
    .slick-next {
      right: 0;
    }
    .slick-list {
      margin-left: -15px;
      margin-right: -15px;
    }
    h4 {
      padding-bottom: 24px;
      font-weight: 400;
      font-size: 1.4rem;
      text-align: center;
    }
    .item-slider {
      position: relative;
    }
    .click-detail {
      position: absolute;
      top: 0;
      right: 15px;
      left: 15px;
      z-index: 100;
      background-color: rgba(0, 0, 0, 0.4);
    }
    .sale {
      text-align: right;
    }
    .p-sale {
      display: inline-block;
    }
  }
`
