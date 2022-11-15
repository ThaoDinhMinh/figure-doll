import React from 'react'
import { TypeMainHair } from '../../../interface'

interface PropsTable {
  item: TypeMainHair | null
}

const TableInfor: React.FC<PropsTable> = (props) => {
  const { item } = props
  return (
    <div>
      <table>
        <tbody>
          <tr className="tr-1">
            <th>Nặng</th>
            <td>{item?.bold} kg</td>
          </tr>
          <tr className="tr-2">
            <th>Kích thước</th>
            <td>{item?.dimensions} cm</td>
          </tr>
          <tr className="tr-1">
            <th>Màu tóc</th>
            <td>{item?.color}</td>
          </tr>
          <tr className="tr-2">
            <th>Loại</th>
            <td>{item?.size}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableInfor
