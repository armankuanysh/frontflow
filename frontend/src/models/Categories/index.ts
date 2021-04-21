/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */

export interface Article {
  id: number
  title: string
  description: string
  content: string
  publishedAt: string
  status: string
  slug: string
  category: number
  author: number
  created_at: string
  updated_at: string
  image: Image
}

export interface ICategory {
  id: number
  name: string
  slug: string
  is_popular: boolean
  created_at: string
  updated_at: string
  articles: Article[]
}

export interface Image {
  id: number
  name: string
  alternativeText: null
  caption: null
  width: number
  height: number
  formats: Formats
  hash: string
  ext: EXT
  mime: MIME
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  created_at: string
  updated_at: string
}

export enum EXT {
  Jpg = '.jpg',
}

export interface Formats {
  thumbnail: Large
  medium: Large
  small: Large
  large?: Large
}

export interface Large {
  name: string
  hash: string
  ext: EXT
  mime: MIME
  width: number
  height: number
  size: number
  path: null
  url: string
}

export enum MIME {
  ImageJPEG = 'image/jpeg',
}
