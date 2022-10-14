export interface TypeProduct {
  id: string
  name: string
  img: string
  read_text: string
  text_mean: string
  main: TypeMainProduct
  posts: TypeListPost[]
}

export interface TypeMainProduct {
  namePrd: string
  series: string
  manufacturer: string
  specifications: string
  height: string
  images: TypeListImage[]
  price: string
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
