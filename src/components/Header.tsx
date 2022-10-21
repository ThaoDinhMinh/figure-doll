import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const TextHead = styled.h1`
  margin-left: 20px;
  text-align: center;
  position: relative;
  font-weight: 700;
  background: linear-gradient(90deg, #2ca2b4, #5598de 24%, #7f87ff 45%, #f65aad 76%, #ec3d43);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

const Container = styled.div`
  background: linear-gradient(to right, rgba(152, 198, 219, 0.4), rgba(0, 0, 0, 0.4));
  backdrop-filter: blur(20px);
  padding: 6px 10px;
`
const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .link-router {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
  }
`
const Item = styled.li`
  list-style: none;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  margin: 0 8px;
  padding: 8px 12px;
  .link-router {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
  }
  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: 0.2s;
    border-radius: 25px;
  }
  &:hover {
    &::before {
      background: linear-gradient(to bottom, #e8edec, #d2d1d3);
      box-shadow: 0px 3px 20px 0px black;
      transform: scale(1.2);
    }
    .link-router {
      color: black;
    }
  }
`
const FlexRow = styled.ul`
  display: flex;
  flex-direction: row;
`

const Header = () => {
  return (
    <Container>
      <FlexBetween>
        <div className="logo-shop">
          <TextHead>Figure</TextHead>
        </div>
        <div className="logo-web">
          <Link className="link-router" to={'/'}>
            Logo
          </Link>
        </div>
        <nav className="navbar">
          <FlexRow className="navbar-router">
            <Item className="item-link-router">
              <Link className="link-router" to="/home">
                Sản phẩm
              </Link>
            </Item>
            <Item className="item-link-router">
              <Link className="link-router" to="/news">
                Tin Tức
              </Link>
            </Item>
            <Item className="item-link-router">
              <Link className="link-router" to="/gallery">
                Ảnh
              </Link>
            </Item>
          </FlexRow>
        </nav>
      </FlexBetween>
    </Container>
  )
}

export default Header
