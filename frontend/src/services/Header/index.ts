import { Context } from '@nuxt/types'

interface heading {
  [key: string]: {
    title: string
  }
}

export interface IHeader {
  headings: heading
  getHeading(route: string): void
}

export default class Header implements IHeader {
  headings: heading = {
    '/': {
      title: 'Посты',
    },
  }

  constructor(private $store: Context['store']) {}

  getHeading(route: keyof heading) {
    this.headings[route] &&
      this.$store.commit('header/setTitle', this.headings[route]?.title)
  }
}
