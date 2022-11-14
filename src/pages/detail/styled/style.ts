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

  .container-detail {
    padding-top: 32px;
  }
  .item {
    width: 50%;
    .img {
      width: 100%;
      display: block;
    }
  }
`
