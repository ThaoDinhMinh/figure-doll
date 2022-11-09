import React from 'react'
import styled from 'styled-components'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { data } from './dataItem'
import UplateComponent from './UplateComponent'

export const ViewDiv = styled.div`
  &.update {
    background: url('/img/img-back-1.jpeg');
    background-repeat: repeat;
    width: 100%;
  }
  &.g-text-product {
    text-align: center;
  }
  &.g-image {
    position: relative;
  }
  &.news {
    margin: 60px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.news-items {
    width: 25%;
  }
  &.news-margin {
    margin: 0 32px;
  }
  &.day-month {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  &.g-image-child {
    background-color: white;
    display: flex;
    height: 56px;
    margin: 0 28px;
    padding: 0 28px;
    align-items: center;
  }
  &.t-card {
    background-color: white;
    padding: 0 56px;
  }
  &.btn {
    padding: 28px 0;
  }
  &.uplate-form {
    background-color: #fbf2db;
    display: flex;
    justify-content: center;
    padding: 12px 0 66px 0;
  }
  &.g-form {
    width: calc(75% + 74px);
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 36px 56px;
  }
  &.form-right {
    position: relative;
  }
`
export const Text = styled.p`
  font-weight: 300;
  color: #000000;
  &.text-product {
    font-size: 2.5rem;
    padding-top: 60px;
    letter-spacing: 0.5px;
  }
  &.text-mean-product {
    font-size: 1.3rem;
    font-weight: 200;
    margin: auto;
    padding-top: 20px;
    line-height: 28px;
  }
  &.text-head {
    font-size: 1.5rem;
    color: #000000;
    margin-bottom: 16px;
  }
  &.text-view {
    font-size: 0.9rem;
    color: #666666;
    line-height: 28px;
  }
  &.mean {
    font-size: 1rem;
    padding-left: 6px;
  }
  &.btn-tect {
    cursor: pointer;
    padding: 12px 16px;
    background-color: #000000;
    color: #ffffff;
    font-size: 1rem;
    border-radius: 4px;
    border: 2px solid transparent;
    transition: all 0.3s linear;
    display: inline-block;
    &:hover {
      background-color: #ffffff;
      color: #000000;
      border: 2px solid #000000;
    }
  }
  &.text-lable {
    color: #ffffff;
    font-size: 1.6rem;
  }
`
export const Image = styled.img`
  cursor: pointer;
  width: 100%;
  display: block;
`
const Input = styled.input`
  outline: none;
  padding: 14px 24px;
  width: 310px;
`
const Button = styled.button`
  cursor: pointer;
  &.button-icon {
    position: absolute;
    top: 4px;
    right: 4px;
    background-color: #000000;
    padding: 6px 8px;
  }
`

const UpdateType = () => {
  return (
    <ViewDiv className="update">
      <ViewDiv className="g-text-product">
        <Text className="text-product">Hãy theo dõi các tức làm tóc mới nhất</Text>
        <Text className="text-mean-product">Tin tức & Cập nhật</Text>
      </ViewDiv>

      <ViewDiv className="news">
        {data.map((a) => (
          <UplateComponent key={a.id} item={a} />
        ))}
      </ViewDiv>
      <ViewDiv className="uplate-form">
        <ViewDiv className="g-form">
          <ViewDiv className="lable-left">
            <Text className="text-lable">Hãy theo dõi các bản tin mới nhất</Text>
          </ViewDiv>
          <ViewDiv className="form-right">
            <Input type="text" placeholder="Nhập địa chỉ email của bạn" />
            <Button className="button-icon">
              <ArrowForwardIosIcon sx={{ color: '#ffffff', fontSize: 20 }} />
            </Button>
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default UpdateType
