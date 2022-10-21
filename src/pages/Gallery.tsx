import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../state/reducers'
import ListingGallery from '../components/ListingGallery'

const Gallery = () => {
  const { products, loading } = useSelector((state: RootState) => state.products)
  if (loading) return <p>Loading...</p>
  return (
    <div>
      {products?.map((a, i) => (
        <ListingGallery key={i} imgls={a.images} />
      ))}
    </div>
  )
}

export default Gallery
