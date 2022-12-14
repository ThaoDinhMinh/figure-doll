import React from 'react'
import { looking } from './dataItem'
import styled from 'styled-components'
import ScrollView from 'react-animate-on-scroll'
import MissionComponent from './MissionComponent'

export const ViewDiv = styled.div`
  &.text-top {
    margin: 60px 0;
  }
  &.mission {
    background-color: black;
  }
  &.g-body {
    width: 50%;
  }
  &.g-text-hide {
    width: 16.666667%;
  }
  &.g-text-body {
    width: 66.666667%;
  }
  &.g-mission {
    display: flex;
  }
  &.g-text-all {
    display: flex;
  }
  //////
  &.g-animate {
    display: flex;
    flex-wrap: wrap;
  }

  &.animate {
    width: 50%;
  }
  &.animate-container {
    perspective: 50%;
  }
  &.card-animate {
    margin-top: 60px;
    height: 212px;
    width: 300px;
    transform-style: preserve-3d;
    position: relative;
    transition: 1s;
    cursor: pointer;
    &:hover {
      transform: rotateY(180deg);
    }
  }
  &.card-image {
    position: absolute;
    backface-visibility: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &.card-text {
    transform: rotateY(-180deg);
    background: linear-gradient(to right top, #191818, #493c3c);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const Text = styled.p`
  &.t-head {
    color: white;
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 70px;
  }
  &.t-body-top {
    color: #d3ad69;
    font-size: 1.8rem;
    line-height: 40px;
    font-weight: 300;
    margin-bottom: 12px;
  }
  &.t-body-bot {
    color: #fff;
    font-weight: 0.9 rem;
    font-weight: 300;
    line-height: 34px;
  }
  &.text-btn {
    margin-top: 26px;
    color: #fff;
    padding: 12px 16px;
    background-color: #d3ad69;
    display: inline-block;
    border: 2px solid transparent;
    transition: all 0.3s linear;
    border-radius: 8px;
    &:hover {
      cursor: pointer;
      border: 2px solid #d3ad69;
      background-color: black;
      color: white;
    }
  }
  &.text-card {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 10px;
    color: white;
  }
  &.text-color {
    font-size: 1.1rem;
    font-weight: 300;
    margin-bottom: 10px;
    color: #d3ad69;
  }
  &.text-time {
    font-size: 0.9rem;
    font-weight: 300;
    color: white;
  }
`
export const Image = styled.img`
  width: 100%;
  display: block;
`

const Mission = () => {
  return (
    <ViewDiv className="mission">
      <ViewDiv className="g-mission">
        <ViewDiv className="g-body">
          <ViewDiv className="text-top">
            <ScrollView animateIn="animate__fadeInLeft" duration={2} animateOnce={true}>
              <ViewDiv className="g-text-all">
                <ViewDiv className="g-text-hide"></ViewDiv>
                <ViewDiv className="g-text-body">
                  <Text className="t-head">Nhi???m v???</Text>
                  <Text className="t-body-top">
                    Ch??ng t??i l?? m???t t??? ch???c theo ?????nh h?????ng nghi??n c???u. M???c ti??u c???a ch??ng t??i l?? cung c???p cho m???i c??
                    nh??n c?? nhu c???u ?????c bi???t s???n ph???m ????p ???ng mong mu???n c???a h???.
                  </Text>
                  <Text className="t-body-bot">
                    Nhu c???u ?????c bi???t l?? m???t nhu c???u duy nh???t ch??? ??p d???ng cho kh??ch h??ng y??u c???u. ???? l?? m???t ?????c ??i???m
                    ri??ng c???a ng?????i ????, c???n ph???i ???????c gi???i quy???t.Do ????,Nhu c???u ?????c bi???t ph??t huy t??c d???ng b???t c??? khi n??o
                    khi m???t kh??ch h??ng y??u c???u.
                  </Text>
                  <ViewDiv className="btn-text">
                    <Text className="text-btn">Th??ng tin th??m</Text>
                  </ViewDiv>
                </ViewDiv>
                <ViewDiv className="g-text-hide"></ViewDiv>
              </ViewDiv>
            </ScrollView>
          </ViewDiv>
        </ViewDiv>
        <ViewDiv className="g-body">
          <ViewDiv className="g-animate">
            {looking.map((a) => (
              <MissionComponent key={a.id} item={a} />
            ))}
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default Mission
