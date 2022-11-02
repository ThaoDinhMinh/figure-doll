import React from 'react'
import styled from 'styled-components'
import ScrollView from 'react-animate-on-scroll'
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
  return (
    <ViewDiv className="grup-body">
      <ViewDiv className="text-mean-left">
        <ScrollView animateIn="animate__fadeInLeft" animateOut="animate__fadeOutLeft">
          <ViewDiv className="g-text-in">
            <Text className="text-head">Chăm sóc tóc</Text>
            <Text className="text-body">
              Một mái tóc khỏe trông hấp dẫn có thể khiến bạn cảm thấy tự tin và siêu hấp dẫn. Mái tóc sáng bóng và chắc
              khỏe khiến bạn trở thành người thu hút mọi ánh nhìn.
            </Text>
            <Text className="text-footer">
              Thực hiện một vài bước chăm sóc tóc cơ bản sẽ giúp bạn duy trì mái tóc một cách lâu dài. Nếu không, tóc
              rụng, tóc không khỏe mạnh và tóc mờ nhạt là kết quả cuối cùng có thể tránh được.Hãy nhớ rằng, mái tóc của
              bạn là một chỉ số về tính cách của bạn, có thể tạo nên hoặc thay đổi vẻ ngoài của bạn.
            </Text>
            <ViewDiv className="btn-bot">
              <Text className="text-btn">Thông tin</Text>
            </ViewDiv>
          </ViewDiv>
        </ScrollView>
      </ViewDiv>
      <ViewDiv className="text-mean-right">
        <ViewDiv className="item-right">
          <ScrollView animateIn="animate__fadeInRight">
            <ViewDiv>
              <Image className="logo-body" src="/img/logo-body.png" alt="logo" />
            </ViewDiv>
          </ScrollView>
        </ViewDiv>
        <ViewDiv className="item-right">
          <ScrollView animateIn="animate__fadeInRight" duration={1}>
            <ViewDiv className="box-body">
              <Text className="box-body-top">$85 Billion</Text>
              <Text className="box-body-bot">
                Dầu gội, Màu tóc, Dầu xả & Dầu dưỡng tóc là các sản phẩm tạo kiểu tóc
              </Text>
            </ViewDiv>
          </ScrollView>
        </ViewDiv>
        <ViewDiv className="item-right">
          <ScrollView animateIn="animate__fadeInRight" duration={1.5}>
            <ViewDiv className="box-bot">
              <Text className="box-bot-foot">
                Ngành công nghiệp chăm sóc tóc đang phát triển với tốc độ tăng trưởng kép 14%
              </Text>
            </ViewDiv>
          </ScrollView>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default Textmean
