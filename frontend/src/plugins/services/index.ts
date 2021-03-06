// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Context } from '@nuxt/types'
import Strapi, { IStrapi } from 'services/Strapi/index'
import ErrorHandler from 'services/ErrorHandler'
import HttpClient from 'services/HttpClient'
import Menu, { IMenu } from 'services/Menu'
import DateFormat, { IDateFormat } from 'services/DateFormat'
import Header, { IHeader } from 'services/Header/index'
import Page from 'services/Page'
import ReadingEstimate, { IReadingEstimate } from 'services/ReadingEstimate'
import Auth, { IAuth } from 'services/Auth/index'
// import Like, { ILike } from 'services/Like'

export type servicesT = {
  http: HttpClient
  errors: ErrorHandler
  strapi: IStrapi
  menu: IMenu
  date: IDateFormat
  header: IHeader
  page: Page
  reading: IReadingEstimate
  auth: IAuth
  // like: ILike
}

declare module '@nuxt/types' {
  interface Context {
    $services: servicesT
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $services: servicesT
  }
}

/**
 *
 * @param {Context} ctx
 * @param inject
 */
export default function (ctx: Context, inject: any) {
  const services: servicesT = {
    http: new HttpClient(ctx.$axios),
    errors: new ErrorHandler(ctx.error),
    strapi: new Strapi(ctx.$strapi),
    menu: new Menu(),
    date: new DateFormat(),
    header: new Header(ctx.store),
    page: new Page(),
    reading: new ReadingEstimate(),
    auth: new Auth(ctx.$strapi, ctx.store, ctx.redirect),
    // like: new Like(ctx.store, ctx.$repositories.user),
  }

  inject('services', services)
}
