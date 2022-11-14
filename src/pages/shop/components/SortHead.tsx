import React from 'react'
import { ViewCategory } from '../styled'
import { TypeHairProduct } from '../../../interface'

interface Props {
  hairProduct: TypeHairProduct[] | null
  setProds: React.Dispatch<React.SetStateAction<string>>
  loading: boolean
}

const SortHead: React.FC<Props> = (props) => {
  const { hairProduct, setProds, loading } = props
  const handleChang: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    if (e.target.value === '2') {
      {
        setProds(e.target.value)
        hairProduct && !loading ? hairProduct?.sort((a, b) => Number(b.price) - Number(a.price)) : null
      }
    } else if (e.target.value === '3') {
      {
        setProds(e.target.value)
        hairProduct && !loading ? hairProduct.sort((a, b) => Number(a.price) - Number(b.price)) : null
      }
    } else if (e.target.value === '4') {
      {
        setProds(e.target.value)
        hairProduct && !loading ? hairProduct.sort((a, b) => a.sale - b.sale) : null
      }
    } else if (e.target.value === '5') {
      {
        setProds(e.target.value)
        hairProduct && !loading ? hairProduct.sort((a, b) => b.sale - a.sale) : null
      }
    }
  }

  return (
    <ViewCategory className="select">
      <select onChange={handleChang} name="" id="">
        <option defaultValue={1} value="1">
          Sắp xếp
        </option>
        <option value="2">Giá từ cao xuống thấp</option>
        <option value="3">Gíá từ thấp lên cao</option>
        <option value="4">Sale từ thấp lên cao</option>
        <option value="5">Sale từ cao xuống thấp</option>
      </select>
    </ViewCategory>
  )
}

export default SortHead
