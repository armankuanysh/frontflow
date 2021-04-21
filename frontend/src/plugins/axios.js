// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Context } from '@nuxt/types'

/**
 * @param {Context} ctx
 */
export default function (ctx) {
  ctx.$axios.onError((error) => {
    const code = error.code || error.response?.status
    if (code) {
      ctx.$services.errors.onError(code)
    }
  })
}
