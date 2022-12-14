import React from 'react'
import styled from 'styled-components'
import ScrollView from 'react-animate-on-scroll'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../../../state'
const ViewDiv = styled.div`
  &.grup-body {
    display: flex;
  }
  &.text-mean-left {
    width: 50%;
    background-color: #121212;
    padding: 70px 0;
  }
  &.text-mean-right {
    width: 50%;
    text-align: center;
    background-color: white;
  }
  &.g-text-in {
    width: 70%;
    margin: auto;
  }
  &.item-right {
    width: 60%;
    margin: auto;
    margin-top: 40px;
  }
  &.box-body {
    padding: 40px;
    box-shadow: 0 20px 25px #dcdcdc;
  }
`
const Text = styled.p`
  margin-bottom: 15px;
  &.text-head {
    color: white;
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 70px;
  }
  &.text-body {
    color: #d3ad69;
    font-size: 1.8rem;
    line-height: 40px;
    font-weight: 300;
  }
  &.text-footer {
    color: #fff;
    font-weight: 0.9 rem;
    font-weight: 300;
    line-height: 34px;
  }
  &.text-btn {
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
  &.box-body-top {
    font-size: 2.5rem;
    font-weight: 300;
    color: #d3ad69;
    line-height: 70px;
    margin-bottom: 15px;
  }
  &.box-body-bot {
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 24px;
    color: #666666;
  }
  &.box-bot-foot {
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 30px;
  }
`
const Image = styled.img``

const Textmean = () => {
  const dispatch = useDispatch()
  const { changeLinkColor } = bindActionCreators(actionCreators, dispatch)
  return (
    <ViewDiv className="grup-body">
      <ViewDiv className="text-mean-left">
        <ScrollView animateIn="animate__fadeInLeft" animateOnce={true}>
          <ViewDiv className="g-text-in">
            <Text className="text-head">Ch??m s??c t??c</Text>
            <Text className="text-body">
              M???t m??i t??c kh???e tr??ng h???p d???n c?? th??? khi???n b???n c???m th???y t??? tin v?? si??u h???p d???n. M??i t??c s??ng b??ng v?? ch???c
              kh???e khi???n b???n tr??? th??nh ng?????i thu h??t m???i ??nh nh??n.
            </Text>
            <Text className="text-footer">
              Th???c hi???n m???t v??i b?????c ch??m s??c t??c c?? b???n s??? gi??p b???n duy tr?? m??i t??c m???t c??ch l??u d??i. N???u kh??ng, t??c
              r???ng, t??c kh??ng kh???e m???nh v?? t??c m??? nh???t l?? k???t qu??? cu???i c??ng c?? th??? tr??nh ???????c.H??y nh??? r???ng, m??i t??c c???a
              b???n l?? m???t ch??? s??? v??? t??nh c??ch c???a b???n, c?? th??? t???o n??n ho???c thay ?????i v??? ngo??i c???a b???n.
            </Text>
            <ViewDiv className="btn-bot">
              <Link onClick={() => changeLinkColor(5)} to={'/aboutus'}>
                <Text className="text-btn">Th??ng tin</Text>
              </Link>
            </ViewDiv>
          </ViewDiv>
        </ScrollView>
      </ViewDiv>
      <ViewDiv className="text-mean-right">
        <ViewDiv className="item-right">
          <ScrollView animateIn="animate__fadeInRight" animateOnce={true}>
            <ViewDiv>
              <Image className="logo-body" src="/img/logo-body.png" alt="logo" />
            </ViewDiv>
          </ScrollView>
        </ViewDiv>
        <ViewDiv className="item-right">
          <ScrollView animateIn="animate__fadeInRight" animateOnce={true} duration={1}>
            <ViewDiv className="box-body">
              <Text className="box-body-top">$85 Billion</Text>
              <Text className="box-body-bot">
                D???u g???i, M??u t??c, D???u x??? & D???u d?????ng t??c l?? c??c s???n ph???m t???o ki???u t??c
              </Text>
            </ViewDiv>
          </ScrollView>
        </ViewDiv>
        <ViewDiv className="item-right">
          <ScrollView animateIn="animate__fadeInRight" animateOnce={true} duration={1.5}>
            <ViewDiv className="box-bot">
              <Text className="box-bot-foot">
                Ng??nh c??ng nghi???p ch??m s??c t??c ??ang ph??t tri???n v???i t???c ????? t??ng tr?????ng k??p 14%
              </Text>
            </ViewDiv>
          </ScrollView>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default Textmean
