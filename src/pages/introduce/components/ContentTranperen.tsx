import React from 'react'
import styled from 'styled-components'
import ScrollView from 'react-animate-on-scroll'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../../../state'

const ViewDiv = styled.div`
  text-align: center;
  color: black;
  &.content-body {
    margin-top: 60px;
    padding-bottom: 60px;
  }
  &.content-radius {
    display: inline-block;
    margin: auto;
    padding: 12px;
    background-color: white;
    border-radius: 50%;
  }
  &.content-radius-child {
    border: 2px dashed black;
    border-radius: 50%;
    padding: 84px;
  }
  @media (max-width: 684px) {
    &.content-radius-child {
      padding: 44px 84px;
    }
    &.content-radius {
      padding: 8px;
    }
  }
  @media (max-width: 320px) {
    &.content-radius-child {
      padding: 15px 15px;
      border: 1px dashed black;
    }
  }
`
const Text = styled.p`
  &.long-text {
    width: 350px;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 24px;
    color: #666666;
  }
  &.text-logo-head {
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 75px;
  }
  &.text-shop {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 36px;
    margin-bottom: 15px;
  }
  &.btn-text {
    font-size: 0.9rem;
    font-weight: 400;
    padding: 12px 16px;
    background-color: #d3ad69;
    border: 2px solid transparent;
    display: inline-block;
    color: white;
    transition: all 0.3s linear;
    margin-top: 30px;
    border-radius: 8px;
    &:hover {
      background-color: white;
      color: black;
      border: 2px solid #d3ad69;
      cursor: pointer;
    }
  }
  @media (max-width: 684px) {
    &.btn-text {
      margin-top: 16px;
    }
    &.long-text {
      width: 200px;
    }
    &.text-shop {
      margin-bottom: 10px;
    }
    &.text-logo-head {
      line-height: 36px;
    }
    @media (max-width: 320px) {
      &.btn-text {
        padding: 6px 8px;
        border: 1px solid transparent;
        margin-top: 8px;
      }
      &.long-text {
        width: 100%;
      }
      &.text-shop {
        line-height: 24px;
        margin-bottom: 8px;
      }
    }
  }
`
const Image = styled.img``

const ContentTranperen = () => {
  const dispatch = useDispatch()
  const { changeLinkColor } = bindActionCreators(actionCreators, dispatch)
  return (
    <ViewDiv className="content-body container">
      <ViewDiv className="content-radius">
        <ViewDiv className="content-radius-child">
          <ViewDiv>
            <ScrollView animateIn="animate__zoomIn" duration={1.5} animateOnce={true}>
              <ViewDiv>
                <Image src="/img/logo_small.png" alt="logo" />
              </ViewDiv>
              <ViewDiv>
                <Text className="text-logo-head">Make a Move</Text>
                <Text className="text-shop">Bạn có thể đặt hàng</Text>
                <Text className="long-text">
                  Hãy đến với chúng tổi để trải nghiệm những dịch vụ chăm sóc tóc chuyên nghiệp
                </Text>
              </ViewDiv>
              <ViewDiv>
                <Link
                  onClick={() => {
                    window.scrollTo(0, 135)
                    changeLinkColor(2)
                  }}
                  to={'/shop'}
                >
                  <Text className="btn-text">SHOP NOW</Text>
                </Link>
              </ViewDiv>
            </ScrollView>
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default ContentTranperen
