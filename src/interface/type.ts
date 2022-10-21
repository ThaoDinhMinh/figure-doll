export interface TypeProduct {
  id: string
  name: string
  img: string
  images: TypeListImage[]
  read_text: string
  text_mean: string
  main: TypeMainProduct
  posts: TypeListPost[]
  qty: number
  price: number
}

export interface TypeMainProduct {
  namePrd: string
  series: string
  manufacturer: string
  specifications: string
  height: string
}

export interface TypeListImage {
  parenId: string
  img: string
}

export interface TypeListPost {
  id: string
  title: string
  author: string
}

export type TypeSeries = string[]
