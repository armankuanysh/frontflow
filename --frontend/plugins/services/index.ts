import { Context } from '@nuxt/types'
import NetAPI from '~/services/NetAPI'

export type servicesT = {
  netApi: NetAPI
}

declare module '@nuxt/types' {
  interface Context {
    $services: servicesT
  }
}

export default function (ctx: Context, inject: any) {
  const services: servicesT = {
    netApi: new NetAPI(ctx.$strapi),
  }

  inject('services', services)
}
