import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ScrollView from 'react-animate-on-scroll'

const ViewDiv = styled.div`
  &.nav-item {
    padding: 8px 20px;
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 400;
  }
  &.header-top {
    /* padding: 20px 0; */
  }
  &.header-bot {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 200;
  }
`
const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background-color: #121212;
`
const Text = styled.p``

const Header = () => {
  return (
    <>
      <ScrollView delay={0}>
        <ViewDiv className="header-top"></ViewDiv>
      </ScrollView>

      <ViewDiv className="header-bot">
        <Navbar>
          <ViewDiv className="nav-item">
            <Link to="/">Trang chủ</Link>
          </ViewDiv>
          <ViewDiv className="nav-item">
            <Link to="/colection">Bộ sưu tập</Link>
          </ViewDiv>
          <ViewDiv className="nav-item">
            <Link to="/">Cửa hàng</Link>
          </ViewDiv>
          <ViewDiv className="nav-item">
            <Link to="/">Màu tóc</Link>
          </ViewDiv>
          <ViewDiv className="nav-item">
            <Link to="/">Tóc giả</Link>
          </ViewDiv>
          <ViewDiv className="nav-item">
            <Link to="/aboutus">Thông tin</Link>
          </ViewDiv>
        </Navbar>
      </ViewDiv>
    </>
  )
}

export default Header
