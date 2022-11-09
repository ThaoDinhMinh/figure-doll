export interface TypeCeo {
  id: number
  img: string
  job: string
  listen: string
  name: string
}

export interface TypeFeatureProduct {
  id: number
  img: string
  count: number
  duration: number
  title: string
  content: string
}

export interface TypeUiProduct {
  id: number
  img: string
  img_hide: string
  title: string
  price: string
  sale: number
}

export interface TypeMission {
  id: number
  animate: string
  duration: number
  img: string
  title: string
  content: string
  time: string
}
export interface TypeProgram {
  id: number
  img: string
  sale: string
  title: string
  content: string
}

export interface TypeUplate {
  id: number
  img: string
  class?: string
  time?: string
  title: string
  content: string
}

export interface TypeOur {
  id: number
  img: string
  content: string
}

export interface TypeTeam {
  id: number
  img: string
  name: string
  job: string
}

export interface TypeHairProduct {
  id: number
  category: string
  img: string
  imghide: string
  price: string
  qty: number
  sale: number
  style_hair: string
  main: TypeMainHair
}

export interface TypeMainHair {
  bold: string
  color: string
  dimensions: string
  size: string
  text: string
}

export interface TypeCategory {
  id: number
  img: string
  text: string
  qty: number
}
