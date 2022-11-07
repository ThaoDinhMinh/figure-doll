import React from 'react'
import styled, { keyframes } from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

const failing = keyframes`
    0%,25% {
        border: 4px solid #d3ad69;
    }
    50%{
        border: 8px solid #d3ad69;
    }
    75% {
        border: 12px solid #d3ad69;
    }
    100% {
        border: 16px solid #d3ad69;
    }
`

const ViewDiv = styled.div`
  &.salon-team {
    background-color: white;
    padding-bottom: 64px;
  }
  &.salon-head {
    text-align: center;
    padding-top: 56px;
    padding-bottom: 36px;
  }
  &.g-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 12px;
  }
  &.icon-mui {
    padding: 0 16px;
    &:hover .icon {
      filter: brightness(150%);
      cursor: pointer;
    }
  }
  &.teams {
    display: flex;
    justify-content: center;
  }
  &.teams-card {
    width: 23%;
    text-align: center;
    box-shadow: 0px 0px 10px 0px #00000011;
    padding: 56px 0;
    margin: 0 15px;
    transition: all 0.3 linear;
    &:hover {
      box-shadow: 0px 0px 10px 0px #0000003f;
    }
    &:hover .img-salon {
      animation: ${failing} 0.3s;
      border: 16px solid #d3ad69;
    }
  }
  &.g-on-img {
    border-radius: 50%;
    width: 50%;
    margin: auto;
  }
`
const Image = styled.img`
  width: 100%;
  display: block;
  &.img-salon {
    border-radius: 50%;
    padding: 10px;
  }
`
const Text = styled.p`
  font-weight: 300;
  &.text-head-slice {
    font-size: 2.5rem;
    color: #000000;
    line-height: 64px;
    margin-bottom: 16px;
  }
  &.text-slice-bot {
    font-size: 1.4rem;
  }
  &.name {
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 12px;
    margin-top: 18px;
  }
  &.jog {
    margin-bottom: 10px;
    padding-bottom: 24px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      margin: auto;
      height: 2px;
      width: 44px;
      background-color: #000000;
    }
  }
`
const LinkTo = styled.a``

const SalonTeam = () => {
  return (
    <ViewDiv className="salon-team">
      <ViewDiv className="salon-head">
        <Text className="text-head-slice">Đội ngũ làm tóc</Text>
        <Text className="text-slice-bot">Ưu đãi mới nhất</Text>
      </ViewDiv>
      <ViewDiv className="teams">
        <ViewDiv className="teams-card">
          <ViewDiv className="g-on-img">
            <Image className="img-salon" src="/img/img-salon.jpg" alt="team salon" />
          </ViewDiv>
          <Text className="name">Victoria Lewis</Text>
          <Text className="jog">Chuyên gia trị liệu chăm sóc tóc</Text>
          <ViewDiv className="g-icon">
            <ViewDiv className="icon-mui">
              <LinkTo href="https://www.facebook.com/">
                <FacebookIcon className="icon" sx={{ color: '#257be9' }} />
              </LinkTo>
            </ViewDiv>
            <ViewDiv className="icon-mui">
              <LinkTo href="https://twitter.com">
                <TwitterIcon className="icon" sx={{ color: '#229bf0' }} />
              </LinkTo>
            </ViewDiv>
            <ViewDiv className="icon-mui">
              <LinkTo href="https://www.instagram.com/">
                <InstagramIcon
                  className="icon"
                  sx={{
                    color: '#ee3a7b',
                  }}
                />
              </LinkTo>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
        <ViewDiv className="teams-card">
          <ViewDiv className="g-on-img">
            <Image className="img-salon" src="/img/img-salon-1.jpg" alt="team salon" />
          </ViewDiv>
          <Text className="name">Edith Underwood</Text>
          <Text className="jog">Chuyên gia trị liệu chăm sóc tóc</Text>
          <ViewDiv className="g-icon">
            <ViewDiv className="icon-mui">
              <LinkTo href="https://www.facebook.com/">
                <FacebookIcon className="icon" sx={{ color: '#257be9' }} />
              </LinkTo>
            </ViewDiv>
            <ViewDiv className="icon-mui">
              <LinkTo href="https://twitter.com">
                <TwitterIcon className="icon" sx={{ color: '#229bf0' }} />
              </LinkTo>
            </ViewDiv>
            <ViewDiv className="icon-mui">
              <LinkTo href="https://www.instagram.com/">
                <InstagramIcon
                  className="icon"
                  sx={{
                    color: '#ee3a7b',
                  }}
                />
              </LinkTo>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
        <ViewDiv className="teams-card">
          <ViewDiv className="g-on-img">
            <Image className="img-salon" src="/img/img-salon-2.jpg" alt="team salon" />
          </ViewDiv>
          <Text className="name">Genevieve Davidson</Text>
          <Text className="jog">Bác sĩ da liễu</Text>
          <ViewDiv className="g-icon">
            <ViewDiv className="icon-mui">
              <LinkTo href="https://www.facebook.com/">
                <FacebookIcon className="icon" sx={{ color: '#257be9' }} />
              </LinkTo>
            </ViewDiv>
            <ViewDiv className="icon-mui">
              <LinkTo href="https://twitter.com">
                <TwitterIcon className="icon" sx={{ color: '#229bf0' }} />
              </LinkTo>
            </ViewDiv>
            <ViewDiv className="icon-mui">
              <LinkTo href="https://www.instagram.com/">
                <InstagramIcon
                  className="icon"
                  sx={{
                    color: '#ee3a7b',
                  }}
                />
              </LinkTo>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default SalonTeam
