import { Context } from '@nuxt/types'

export default function ({ redirect, $strapi }: Context) {
  if (!$strapi.user) {
    return redirect('/auth')
  }
}
