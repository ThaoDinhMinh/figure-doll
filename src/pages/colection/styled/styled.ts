import styled from 'styled-components'

export const ViewDiv = styled.div`
  &.card-category {
    width: 33.333333%;
    padding: 15px;
  }
  img {
    width: 100%;
    display: block;
  }
  .item {
    text-align: center;
    box-shadow: 1px 1px 5px #0a05052c;
    transition: all 0.3s linear;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
    }
  }
  p {
    padding-top: 12px;
  }
  .p-bot {
    padding-bottom: 24px;
    font-weight: 300;
    font-size: 1rem;
  }
  .name-category {
    font-size: 1.2rem;
    font-weight: 500;
    transition: all 0.3s linear;
    &:hover {
      color: #d3ad69;
    }
  }
`

export const ViewDivColection = styled.div`
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
    color: #000000;
    border-bottom: 1px solid transparent;
    transition: all 0.3s linear;
    padding-bottom: 3px;
    &:hover {
      border-bottom: 1px solid #000000;
    }
  }
  span {
    padding-left: 8px;
  }
  .contain {
    padding: 32px 0;
    display: flex;
    flex-wrap: wrap;
    margin: 0 54px;
  }
`
