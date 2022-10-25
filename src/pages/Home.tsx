import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Mui from '../components/Mui'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../state/reducers'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'

const FormHead = styled.form`
  background-color: #3fa2d9;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  margin: 0 -30px;
`
const Items = styled.div`
  &.container {
    margin: 0 30px;
  }
  &.mui-container {
    margin-top: 20px;
  }
  &.input-grup {
    position: relative;
    display: flex;
  }
  &.banner-image {
    display: flex;
  }
  &.banner-top {
    margin-bottom: 4px;
  }
  &.banner-item-left {
    width: 66.666667%;
    padding: 5px 5px 0 0;
  }
  &.banner-item-right {
    width: 33.333333%;
    padding: 5px 0 0 5px;
    margin: -5px 0;
  }
  &.chip {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 5px;
  }
  &.chip-items {
    padding: 10px 15px 5px 0;
  }
  &.item-img {
    height: 33.333333%;
  }
`
const Input = styled.input`
  &.search {
    width: 400px;
    padding: 8px 10px 8px 80px;
    border-radius: 2px;
  }
  &.search-icon {
    display: none;
  }
`
const Text = styled.p`
  &.text-search {
    position: absolute;
    background-color: #f3f3f3;
    padding: 6px 4px;
    border-right: 1px solid grey;
    font-size: 0.9rem;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    top: 1px;
    left: 0;
  }
  &.text-chip {
    padding: 4px;
    background: pink;
    cursor: pointer;
  }
`
const Label = styled.label`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 2px;
  padding: 2px;
  top: 2px;
  background-color: orange;
  color: #ffffff;
  cursor: pointer;
`
const Image = styled.img`
  width: 100%;
  display: block;
  &.item-img-mean {
    height: 100%;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    padding: 5px 0;
  }
  &.img-left {
    height: 100%;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`
interface Props {
  seriesSet: React.Dispatch<React.SetStateAction<string>>
}
const Home: React.FC<Props> = (props) => {
  const [chip, chipSet] = useState<boolean>(true)
  const [publisher, publisherSet] = useState<string>(`orderBy="main"&limitToFirst=10`)
  const [sortFigure, sortFigureSet] = useState<string>('')
  const [sortPrice, sortPriceSet] = useState<string>('')

  const dispatch = useDispatch()
  const { seriesSet } = props
  const { getSeries, getBooks, getFublisher } = bindActionCreators(actionCreators, dispatch)
  const { series } = useSelector((state: RootState) => state.series)
  const { publischer } = useSelector((state: RootState) => state.pubLisher)
  useEffect(() => {
    getSeries()
    getFublisher()
  }, [])
  useEffect(() => {
    getBooks(publisher)
  }, [publisher])

  return (
    <Items className="container">
      <Items>
        <FormHead action="">
          <Items className="input-grup">
            <Text className="text-search">Sản phẩm</Text>
            <Input className="search" type="text" placeholder="Tìm kiếm sản phẩm" />
            <Label htmlFor="search">
              <SearchIcon />
            </Label>
            <Input className="search-icon" id="search" type={'submit'} />
          </Items>
        </FormHead>
      </Items>
      <Items className="grunp-banner">
        <Items className="banner-top">
          <Image src="./img/image 80.jpg" alt="banner" />
        </Items>
        <Items className="banner-image">
          <Items className="banner-item-left">
            <Image className="img-left" src="./img/image 184.jpg" alt="banner" />
          </Items>
          <Items className="banner-item-right">
            <Items className="item-img">
              <Image className="item-img-mean" src="./img/image 82.jpg " alt="banner" />
            </Items>
            <Items className="item-img">
              <Image className="item-img-mean" src="./img/image 83.jpg " alt="banner" />
            </Items>
            <Items className="item-img">
              <Image className="item-img-mean" src="./img/image 183.jpg " alt="banner" />
            </Items>
          </Items>
        </Items>
      </Items>

      <Items className="mui-container">
        <Mui chipSet={chipSet} chip={chip} seriesSet={seriesSet} publisherSet={publisherSet} />
        <h1>Heloo</h1>
      </Items>
    </Items>
  )
}

export default Home
