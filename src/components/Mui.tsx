import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import ListProducts from './ListProducts'
import ListBooks from './ListBooks'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import SeriesFS from './SeriesFS'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../state/reducers'
import { Link } from 'react-router-dom'
const Items = styled.div`
  .link-see-more {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &.text-price {
    color: #b7282e;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
  &.text-butn {
    align-items: center;
    padding: 4px 8px;
    border: 1px solid blue;
    border-radius: 4px;
    display: flex;
    margin-top: 5px;
  }
  &.items-left {
    width: 75%;
  }
  &.items-right {
    width: 25%;
  }
  &.items-product {
    display: flex;
    flex-direction: row;
  }
  &.items-right-grup {
    display: flex;
    margin-bottom: 10px;
    border-bottom: 1px solid #c2a8a8;
    margin-left: 10px;
  }
  &.items-right-grup-img {
    width: 41.666667%;
    position: relative;
    padding-bottom: 10px;
  }
  &.items-right-grup-text {
    width: 58.333333%;
  }
`
const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 8px;
  &.img-book {
    border: 0.5px solid #cac3c3;
  }
`
const Text = styled.p`
  &.text-head {
    margin-top: 16px;
    margin-bottom: 20px;
    font-size: 1.2rem;
    font-weight: 400;
    padding-left: 10px;
  }
  &.text-name-right {
    font-size: 0.9rem;
    padding: 10px 0 10px 10px;
    color: #30309a;
  }
  &.text-name-right:hover {
    filter: brightness(190%);
  }

  &.money-format {
    text-decoration: line-through;
    padding: 0;
    padding-right: 4px;
  }
  &.text-series {
    margin: 20px 0 10px 0;
    font-size: 1.2rem;
    font-weight: 400;
  }
`
const TextRank = styled.p`
  position: absolute;
  top: -6px;
  left: -6px;
  padding: 4px 8px;
  border-radius: 50%;
  background-color: #3e3b3b;
  color: #ffffff;
  font-weight: 300;
  font-size: 0.8rem;
  &.rank-yeloow {
    background-color: #ade232;
    color: #ffffff;
    padding: 4px 9px;
  }
  &.rank-pink {
    background-color: #e297a4;
    color: #ffffff;
  }
  &.rank-red {
    background-color: #c82540;
    color: #ffffff;
  }
  &.rank-end {
    padding: 4px 5px;
  }
`
interface Props {
  seriesSet: React.Dispatch<React.SetStateAction<string>>
  publisherSet: React.Dispatch<React.SetStateAction<string>>
  chipSet: React.Dispatch<React.SetStateAction<boolean>>
  chip: boolean
}

const Mui: React.FC<Props> = ({ chipSet, chip }) => {
  const [value, setValue] = React.useState('1')

  const { products, loading } = useSelector((state: RootState) => state.products)
  const { books } = useSelector((state: RootState) => state.books)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
    chipSet(!chip)
  }

  return (
    <Items className="items-product">
      <Items className="items-left">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Figures" value="1" />
                <Tab label="Sách" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <ListProducts />
            </TabPanel>
            <TabPanel value="2">
              <ListBooks />
            </TabPanel>
          </TabContext>
        </Box>
        <Link to="" className="link-see-more">
          <Items className="text-butn">
            <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
            <Text>Xem thêm</Text>
          </Items>
        </Link>
        <Items>
          <Text className="text-series">Xem thêm series</Text>
          <SeriesFS />
        </Items>
      </Items>
      <Items className="items-right">
        <Text className="text-head">Bán chạy nhất</Text>

        {chip ? (
          loading ? (
            <h6>Loadding...</h6>
          ) : (
            products &&
            products
              .sort(() => 0.5 - Math.random())
              .map((a, i) => (
                <Link className="border-bot" key={a.id} to={`/detail/${a.id}`}>
                  <Items className="items-right-grup">
                    <Items className="items-right-grup-img">
                      <Image src={a.img} alt={a.name} />
                      <TextRank
                        className={
                          i + 1 === 1
                            ? 'rank-yeloow'
                            : i + 1 == 2
                            ? 'rank-pink'
                            : i + 1 === 3
                            ? 'rank-red'
                            : i + 1 === products.length
                            ? 'rank-end'
                            : ''
                        }
                      >
                        {i + 1}
                      </TextRank>
                    </Items>
                    <Items className="items-right-grup-text">
                      <Text className="text-name-right">{a.name}</Text>
                      <Items className="text-price">
                        <Text className="money-format">O</Text>
                        {a.price} OtaCoin
                      </Items>
                    </Items>
                  </Items>
                </Link>
              ))
          )
        ) : loading ? (
          <h6>Loadding...</h6>
        ) : (
          books &&
          books
            .sort(() => 0.5 - Math.random())
            .map((a, i) => (
              <Link className="border-bot" key={a.id} to={`/detail/${a.id}`}>
                <Items className="items-right-grup">
                  <Items className="items-right-grup-img">
                    <Image className="img-book" src={a.img} alt={a.name} />
                    <TextRank
                      className={
                        i + 1 === 1
                          ? 'rank-yeloow'
                          : i + 1 == 2
                          ? 'rank-pink'
                          : i + 1 === 3
                          ? 'rank-red'
                          : i + 1 === books.length
                          ? 'rank-end'
                          : ''
                      }
                    >
                      {i + 1}
                    </TextRank>
                  </Items>
                  <Items className="items-right-grup-text">
                    <Text className="text-name-right">{a.name}</Text>
                    <Items className="text-price">
                      <Text className="money-format">O</Text>
                      {a.price} OtaCoin
                    </Items>
                  </Items>
                </Items>
              </Link>
            ))
        )}
      </Items>
    </Items>
  )
}
export default Mui
