import React from 'react'
import styled from 'styled-components'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import NearMeIcon from '@mui/icons-material/NearMe'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonIcon from '@mui/icons-material/Person'
import SubjectIcon from '@mui/icons-material/Subject'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import Toastify from 'toastify-js'

const ViewDiv = styled.div`
  &.form-adress {
    display: flex;
  }
  .from-uplate {
    background-color: #f7f7f7;
  }

  &.face {
    /* padding: 0 20px; */
  }
  &.adress {
    background-color: #f7f7f7;
    /* padding: 0 28px 0 100px; */
    padding: 0 20px;
  }
  &.form {
    background-color: #ffffff;
    height: 100%;
    /* padding: 0 100px 0 28px; */
    padding: 0 20px;
  }
  @media (min-width: 992px) {
    .form,
    .adress {
      padding: 0 40px;
    }
  }
  &.g-phone {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }
  &.bold {
    margin-bottom: 8px;
    margin-left: 54px;
  }
  &.adress-prone {
    padding: 16px 0;
    border-bottom: 0.5px dashed #666666;
  }
  &.adress-prone-1 {
    border-bottom: 0.5px dashed transparent;
    padding-bottom: 68px;
  }
  &.input-icon {
    position: relative;
  }
  &.icone {
    position: absolute;
    top: 12px;
    left: 0;
  }
  &.buttom {
    margin-top: 24px;
  }
`
const Text = styled.p`
  font-weight: 300;
  &.text-head {
    font-size: 2.5rem;
    padding: 40px 0 12px 0;
  }
  &.text-mean-icon {
    font-size: 1.5rem;
    padding-left: 12px;
  }
  &.text-email {
    color: #666666;
    font-size: 0.9rem;
    padding-left: 54px;
  }
  &.text-phone {
    color: #666666;
    font-size: 0.9rem;
    padding-left: 4px;
  }
  &.btn-text {
    padding: 12px;
    background-color: #d3ad69;
    color: white;
    text-align: center;
    font-weight: 400;
    border-radius: 4px;
    transition: all 0.3s linear;
    font-size: 0.9rem;
    border: 2px solid transparent;
    cursor: pointer;
    &:hover {
      background-color: white;
      color: #000000;
      border: 2px solid #d3ad69;
    }
  }
`
const Bord = styled.strong`
  font-size: 0.9rem;
  color: #666666;
`
const Form = styled.form``
const Input = styled.input`
  padding: 15px 15px 15px 25px;
  margin-bottom: 4px;
  outline: none;
  border-bottom: 0.5px dashed #d3ad69;
  width: 100%;
`
const TextArea = styled.textarea`
  outline: none;
  padding: 15px 15px 15px 25px;
  resize: none;
  border-bottom: 0.5px dashed #d3ad69;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
`

const FormIntroduct = () => {
  const handleClickForm: React.MouseEventHandler<HTMLParagraphElement> = () => {
    Toastify({
      text: 'Cám ơn bạn đã gửi phiếu điều tra của chúng tôi',
      position: 'right',
      duration: 2000,
      newWindow: true,
      close: true,
      gravity: 'top',
      stopOnFocus: true,
      style: {
        background: 'linear-gradient(to right, #00b09b, #96c93d)',
      },
    }).showToast()
  }
  return (
    <ViewDiv className="from-uplate">
      <ViewDiv className="d-flex flex-wrap">
        <ViewDiv className="face adress col-lg-6 col-12">
          <ViewDiv className="adress-items">
            <Text className="text-head">Thông tin</Text>
            <ViewDiv className="adress-prone">
              <ViewDiv className="g-phone">
                <LocalPhoneIcon sx={{ fontSize: 42, color: '#d3ad69' }} />

                <Text className="text-mean-icon">Gọi cho chúng tôi</Text>
              </ViewDiv>
              <ViewDiv className="g-phone bold">
                <Bord>Gọi miễn phí :</Bord>
                <Text className="text-phone">0987654312</Text>
              </ViewDiv>
              <ViewDiv className="g-phone bold">
                <Bord>Fax :</Bord>
                <Text className="text-phone">01272653000</Text>
              </ViewDiv>
            </ViewDiv>
            <ViewDiv className="adress-prone">
              <ViewDiv className="g-phone">
                <EmailIcon sx={{ fontSize: 42, color: '#d3ad69' }} />
                <Text className="text-mean-icon">Liên hệ</Text>
              </ViewDiv>
              <Text className="text-email">kienminh.tnut@gmail.com</Text>
            </ViewDiv>
            <ViewDiv className="adress-prone">
              <ViewDiv className="g-phone">
                <NearMeIcon sx={{ fontSize: 42, color: '#d3ad69' }} />
                <Text className="text-mean-icon">Địa điểm</Text>
              </ViewDiv>
              <Text className="text-email">58/34 Trung Kính ,Cầu Giấy ,Hà Nội</Text>
            </ViewDiv>
            <ViewDiv className="adress-prone adress-prone-1">
              <ViewDiv className="g-phone">
                <AccessTimeIcon sx={{ fontSize: 42, color: '#d3ad69' }} />
                <Text className="text-mean-icon">Giờ mở cửa</Text>
              </ViewDiv>
              <Text className="text-email">Thứ 2 - Thứ 7 9h:00 đến 20h:00 </Text>
              <Text className="text-email">Chủ nhật 10h:00 đến 15h:30 </Text>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>

        <ViewDiv className="face form-items col-lg-6 col-12">
          <ViewDiv className="form">
            <Text className="text-head">Phiếu điều tra</Text>
            <Form>
              <ViewDiv className="input-icon">
                <ViewDiv className="icone">
                  <PersonIcon sx={{ fontSize: 20, color: '#d3ad69' }} />
                </ViewDiv>

                <Input type="text" placeholder="Nhập tên" />
              </ViewDiv>
              <ViewDiv className="input-icon">
                <ViewDiv className="icone">
                  <EmailIcon sx={{ fontSize: 20, color: '#d3ad69' }} />
                </ViewDiv>

                <Input type="text" placeholder="Nhập email" />
              </ViewDiv>
              <ViewDiv className="input-icon">
                <ViewDiv className="icone">
                  <LocalPhoneIcon sx={{ fontSize: 20, color: '#d3ad69' }} />
                </ViewDiv>

                <Input type="text" placeholder="Nhập số điện thoại" />
              </ViewDiv>
              <ViewDiv className="input-icon">
                <ViewDiv className="icone">
                  <SubjectIcon sx={{ fontSize: 20, color: '#d3ad69' }} />
                </ViewDiv>
                <Input type="text" placeholder="Vấn đề" />
              </ViewDiv>
              <ViewDiv className="input-icon">
                <ViewDiv className="icone">
                  <TextSnippetIcon sx={{ fontSize: 20, color: '#d3ad69' }} />
                </ViewDiv>
                <TextArea rows={7} placeholder="Nhập tin nhắn thêm"></TextArea>
              </ViewDiv>
            </Form>
            <ViewDiv className="buttom">
              <Text onClick={handleClickForm} className="btn-text mb-4">
                Hoàn thành
              </Text>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default FormIntroduct
