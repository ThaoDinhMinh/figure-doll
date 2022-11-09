import React from 'react'
import styled, { keyframes } from 'styled-components'
import { team_data } from './about_data/teamdata'
import SalonTeamComponent from './SalonTeamComponent'

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

export const ViewDiv = styled.div`
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
export const Image = styled.img`
  width: 100%;
  display: block;
  &.img-salon {
    border-radius: 50%;
    padding: 10px;
  }
`
export const Text = styled.p`
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
export const LinkTo = styled.a``

const SalonTeam = () => {
  return (
    <ViewDiv className="salon-team">
      <ViewDiv className="salon-head">
        <Text className="text-head-slice">Đội ngũ làm tóc</Text>
        <Text className="text-slice-bot">Ưu đãi mới nhất</Text>
      </ViewDiv>
      <ViewDiv className="teams">
        {team_data.map((a) => (
          <SalonTeamComponent key={a.id} team={a} />
        ))}
      </ViewDiv>
    </ViewDiv>
  )
}

export default SalonTeam
