import styled from 'styled-components'

export const CartView = styled.div`
  &.cart-page {
    position: relative;
  }
  .head-cart {
    text-align: center;
    color: #000000;
    padding-top: 32px;
    background-image: url('/img/img-back.jpg');
    background-repeat: repeat-x;
    .h1 {
      font-size: 3rem;
      line-height: 72px;
      letter-spacing: 4px;
    }
    .link-nv {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 12px;
      .t-link-center {
        padding: 0 8px;
      }
      .t-link {
        padding-bottom: 4px;
        color: #000000;
        font-size: 1rem;
        border: 1px solid transparent;
      }
      .t-link-hover {
        cursor: pointer;
        &:hover {
          border-bottom: 1px solid rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
  .show-cart-items {
    padding: 32px 56px 0 56px;
    font-size: 1rem;
    font-weight: 300;
    .no-item {
      padding: 24px;
      background-color: #fafafa;
      border-top: 1px solid rgba(0, 0, 0, 0.4);
      margin-bottom: 35vh;
    }
    .return-home {
      padding: 8px 16px;
      background-color: #d3ad69;
      display: inline-block;
      color: white;
      font-size: 1rem;
      border-radius: 4px;
      transition: all 0.3s linear;
      margin: 32px 0;
      &:hover {
        background-color: #000000;
      }
    }
    .head-tab {
      display: flex;
      align-items: center;
      padding: 16px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      text-align: center;
      .name-img {
        width: 58.333333%;
      }
      .total-product {
        width: 16.666667%;
      }
      .qty-product {
        width: 16.666667%;
      }
      .noname {
        width: 8.333333%;
      }
    }

    .tab-left {
      width: 66.666667%;
      margin-right: 15px;
      .btn-remo {
        padding: 6px 16px;
        background-color: rgba(0, 0, 0, 0.4);
        color: white;
        border-radius: 4px;
        font-size: 1rem;
        font-weight: 400;
        cursor: pointer;
        transition: all 0.3s linear;
        &:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
      }
    }

    .shop-cart {
      display: flex;
    }
    .have-item {
      .qty-ID {
        display: flex;
        align-items: center;
        button {
          padding: 8px 16px;
          cursor: pointer;
        }
        .qty-resut {
          margin: 0 16px;
        }
        .btn-qty {
          &:hover {
            background-color: rgba(0, 0, 0, 0.7);
            color: #fafafa;
          }
        }
      }
      .item {
        display: flex;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      }
      .img-cart-card {
        width: 58.333333%;
        display: flex;
        align-items: center;
        .img {
          width: 100%;
          display: flex;
        }
        .box-img {
          width: 25%;
        }
        .text-mean {
          width: 75%;
          text-align: center;
        }
      }
      .qty-ID {
        width: 16.666667%;
      }
      .total-coin {
        width: 16.666667%;
        text-align: center;
      }
      .btn-remover {
        width: 8.333333%;
        text-align: center;
      }
      .te-left {
        font-size: 1.1rem;
        font-weight: 400;
      }
    }
    .tab-right {
      width: 33.333333%;
      margin-left: 15px;
      background-color: #f5f5f5;
      .text-ingor {
        font-size: 1.1rem;
        font-weight: 400;
      }
      .head-right {
        text-align: center;
        padding: 16px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      }
      .icre-coin {
        padding: 12px;
        display: flex;
        justify-content: space-between;
      }
      .font-infor {
        .icre-coin,
        .shiping,
        .total-cost {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
        }
        .localtion {
          padding: 10px 20px;

          .label {
            padding-top: 24px;
          }

          .btn-code {
            margin-top: 12px;
          }
          .form-addrees {
            margin-top: 12px;
            font-size: 0.9rem;
          }
        }
        .total-cost {
          border-top: 1px solid rgba(0, 0, 0, 0.4);
        }
      }
      .code-sale {
        padding: 10px 16px;
      }
      .btn-code {
        padding: 8px 16px;
        background-color: #d3ad69;
        color: white;
        font-size: 1rem;
        border-radius: 4px;
        transition: all 0.3s linear;
        border: 1px solid transparent;
        cursor: pointer;
        &:hover {
          background-color: white;
          color: #000000;
          border: 1px solid #000000;
        }
      }
      .dcre-pice {
        text-align: right;
        padding: 0 20px 10px;
        .text-dre {
          padding-bottom: 6px;
          text-align: left;
        }
      }
      .form {
        margin: 10px 0px;
      }

      .input-code,
      .input-address {
        padding: 12px;
        outline: none;
        width: 100%;
        border-radius: 4px;
        margin-bottom: 12px;
      }
      .input-address {
        margin-top: 12px;
      }
    }
    .text {
      font-size: 1rem;
      font-weight: 400;
    }

    .checkout {
      text-align: center;
      padding: 24px 0;
    }
  }

  .show-check-out {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #f5f5f5;
    padding: 0 56px;
    .form-value {
      color: #000000;
      font-size: 1rem;
      font-weight: 300;
      margin: 6px 0;
    }
    .back-home,
    .back-shop {
      padding: 12px 16px;
      background-color: #d3ad69;
      border: 2px solid transparent;
      color: white;
      display: inline-block;
      margin: 32px 0;
      border-radius: 8px;
      transition: all 0.3s linear;
      &:hover {
        background-color: #ffffff;
        border: 2px solid #000000;
        color: #000000;
      }
    }
    .all-form-value {
      text-align: left;
      margin: auto;
    }
  }
`
