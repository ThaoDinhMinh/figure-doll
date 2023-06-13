import React from 'react'
import styled from 'styled-components'
import ScrollView from 'react-animate-on-scroll'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../../../state'
const ViewDiv = styled.div`
  &.grup-body {
  }
  .color-left {
    background-color: #121212;
  }
  .color-right {
    background-color: white;
  }
  &.text-mean-left {
    padding: 42px 0;
    height: 100%;
  }
  &.text-mean-right {
    text-align: center;
    padding: 42px 0;
    height: 100%;
  }
  &.g-text-in {
    padding: 0 30px;
    margin: auto;
  }
  &.item-right {
    width: 70%;
    margin: auto;
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
    font-size: 1.8rem;
    line-height: 40px;
    font-weight: 300;
    color: #d3ad69 !important;
  }
  &.text-footer {
    color: #fff;
    font-weight: 0.9 rem;
    font-weight: 300;
    line-height: 26px;
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
      <div className="row flex-warp grup-body-items">
        <div className="col-12 col-lg-6 color-left">
          <ViewDiv className="text-mean-left">
            <ScrollView animateIn="animate__fadeInLeft" animateOnce={true}>
              <ViewDiv className="g-text-in container-md">
                <Text className="text-head">Chăm sóc tóc</Text>
                <Text className="text-body">
                  Một mái tóc khỏe trông hấp dẫn có thể khiến bạn cảm thấy tự tin và siêu hấp dẫn. Mái tóc sáng bóng và
                  chắc khỏe khiến bạn trở thành người thu hút mọi ánh nhìn.
                </Text>
                <Text className="text-footer">
                  Thực hiện một vài bước chăm sóc tóc cơ bản sẽ giúp bạn duy trì mái tóc một cách lâu dài. Nếu không,
                  tóc rụng, tóc không khỏe mạnh và tóc mờ nhạt là kết quả cuối cùng có thể tránh được.Hãy nhớ rằng, mái
                  tóc của bạn là một chỉ số về tính cách của bạn, có thể tạo nên hoặc thay đổi vẻ ngoài của bạn.
                </Text>
                <ViewDiv className="btn-bot pt-5">
                  <Link onClick={() => changeLinkColor(5)} to={'/aboutus'}>
                    <Text className="text-btn">Thông tin</Text>
                  </Link>
                </ViewDiv>
              </ViewDiv>
            </ScrollView>
          </ViewDiv>
        </div>
        <div className="col-12 col-lg-6 color-right">
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
                    Dầu gội, Màu tóc, Dầu xả & Dầu dưỡng tóc là các sản phẩm tạo kiểu tóc
                  </Text>
                </ViewDiv>
              </ScrollView>
            </ViewDiv>
            <ViewDiv className="item-right">
              <ScrollView animateIn="animate__fadeInRight" animateOnce={true} duration={1.5}>
                <ViewDiv className="box-bot">
                  <Text className="box-bot-foot pt-5">
                    Ngành công nghiệp chăm sóc tóc đang phát triển với tốc độ tăng trưởng kép 14%
                  </Text>
                </ViewDiv>
              </ScrollView>
            </ViewDiv>
          </ViewDiv>
        </div>
      </div>
    </ViewDiv>
  )
}

export default Textmean
