import React, { useEffect } from 'react'
import 'animate.css'
import 'animate.css/animate.min.css'
import styled from 'styled-components'
import Textmean from './components/Textmean'
import ProductFeatured from './components/ProductFeatured'
import ContentTranperen from './components/ContentTranperen'
import Programs from './components/Programs'
import Mission from './components/Mission'
import UpdateType from './components/UpdateType'
import SlickCeo from './components/SlickCeo'
import FormIntroduct from './components/FormIntroduct'
import UseSlickInfor from './components/UseSlickInfor'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../../state'
import { RootState } from '../../state/reducers'
import FeatureProduct from './components/FeatureProduct'
import { items } from './components/dataItem/feature'

export const ViewDiv = styled.div`
  &.container {
    background-image: url(' /img/nguoidep.jpg');
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
  &.content {
    background-image: url('/img/background.jpg');
    width: 100%;
    padding-bottom: 60px;
  }
  &.g-text {
    text-align: center;
  }
  &.g-items-scroll {
    width: 30%;
  }
  &.g-content {
    display: flex;
    padding: 0 80px;
    justify-content: center;
  }
  &.card-item {
    padding: 30px 20px 0 20px;
    text-align: center;
    &:hover .number-radius {
      background-color: #d3ad69;
    }
  }
  &.g-text-scoll {
    background-color: #ffffff;
    &:last-child {
      padding-bottom: 20px;
    }
  }
  &.text-number {
    padding: 10px 0;
  }
`
export const Text = styled.p`
  &.content-text-head {
    font-size: 2.5rem;
    font-weight: 300;
    padding-top: 40px;
  }
  &.content-text-mean {
    font-size: 1.3rem;
    font-weight: 200;
    margin: auto;
    width: 500px;
    padding-top: 20px;
    line-height: 28px;
  }
  &.number-radius {
    padding: 12px 18px;
    border-radius: 50%;
    background-color: #101010;
    display: inline-block;
    color: white;
  }
  &.btn-see-more {
    padding: 12px 12px;
    background-color: #d3ad69;
    display: inline-block;
    color: white;
    cursor: pointer;
    transition: all 0.3s linear;
    border: 2px solid transparent;
    border-radius: 8px;
    &:hover {
      background-color: white;
      color: black;
      border: 2px solid #d3ad69;
    }
  }
  &.text-head-card {
    font-size: 1.3rem;
    font-weight: 300;
  }
  &.text-card-mean {
    font-size: 1rem;
    font-weight: 200;
  }
`
export const Image = styled.img`
  width: 100%;
  display: block;
`

const Introduce = () => {
  const dispatch = useDispatch()
  const { getCeo } = bindActionCreators(actionCreators, dispatch)
  const { loading, ceos } = useSelector((state: RootState) => state.ceos)

  useEffect(() => {
    getCeo()
  }, [])

  return (
    <ViewDiv className="container">
      <UseSlickInfor />
      <ViewDiv className="content">
        <ViewDiv className="g-text">
          <Text className="content-text-head">Bộ sưu tập nổi bật</Text>
          <Text className="content-text-mean">
            Chúng tôi có những giải pháp thiết kế riêng cho từng cá nhân để biết được nhu cầu cụ thể
          </Text>
        </ViewDiv>

        <ViewDiv className="g-content">
          {items.map((a) => (
            <FeatureProduct key={a.id} featureProduct={a} />
          ))}
        </ViewDiv>
      </ViewDiv>

      <Textmean />
      <ProductFeatured />
      <ContentTranperen />
      <Mission />
      <Programs />
      <UpdateType />
      {loading ? <p>loadding...</p> : <SlickCeo ceos={ceos} />}
      <FormIntroduct />
    </ViewDiv>
  )
}

export default Introduce
