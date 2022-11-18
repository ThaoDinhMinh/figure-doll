import React from 'react'

interface DecripProps {
  item: string
}

const DescriptionComponent: React.FC<DecripProps> = (props) => {
  const { item } = props
  return <li>{item}</li>
}

export default DescriptionComponent
