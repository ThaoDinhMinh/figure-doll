import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../state/reducers'

const View = styled.div`
  &.view-width {
    width: 20%;
    padding: 15px 5px;
  }
  &.grup-seris {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 -5px;
  }
`
const Text = styled.p`
  text-align: center;
  margin-top: 5px;
`
const Image = styled.img`
  width: 100%;
  border-radius: 50%;
`

const SeriesFS = () => {
  const { series, loading } = useSelector((state: RootState) => state.series)
  if (loading) return <h1>Loading...</h1>
  return (
    <View className="grup-seris">
      {series?.map((a) => (
        <View key={a.id} className="view-width">
          <View className="view-img">
            <Image src={a.img} alt={a.name} />
          </View>
          <View>
            <Text>{a.name}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

export default SeriesFS
