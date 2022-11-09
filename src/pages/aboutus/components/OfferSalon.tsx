import React from 'react'

import styled from 'styled-components'

const ViewDiv = styled.div`
  &.slice {
    text-align: center;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Button = styled.button`
  padding: 12px 24px;
  background-color: #d3ad69;
  color: white;
  transition: all 0.3s linear;
  border: 2px solid transparent;
  border-radius: 4px;
  font-size: 1.1rem;
  &:hover {
    background-color: transparent;
    border: 2px solid #d3ad69;
    cursor: pointer;
  }
`
const Text = styled.p`
  font-weight: 300;
  &.slice-text-head {
    font-size: 2.5rem;
    color: #d3ad69;
    line-height: 64px;
    margin-bottom: 32px;
  }
  &.slice-text-mean {
    width: 80%;
    margin: auto;
    font-size: 1.3rem;
    color: white;
    margin-bottom: 32px;
    line-height: 45px;
  }
`

const OfferSalon = () => {
  return (
    <ViewDiv className="slice">
      <ViewDiv>
        <Text className="slice-text-head">Tại Hair Beautifull chúng tôi có gì</Text>
        <Text className="slice-text-mean">
          Rất nhiều sản phẩm được trưng bày bán trực tiếp, nói chuyện cùng chuyên gia về những vấn đề về tóc !
        </Text>
        <ViewDiv className="btn">
          <Button className="text-btn">Xem thêm</Button>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default OfferSalon
