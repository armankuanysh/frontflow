export default class HttpClient {
  constructor(httpClient) {
    this.$http = httpClient
  }

  async get(url, params) {
    try {
      return await this.$http.$get(url, params?.params)
    } catch (e) {
      console.log('GET ERROR', e)
    }
  }

  async post(url, params) {
    try {
      return await this.$http.$post(url, params?.params)
    } catch (e) {
      console.log('POST ERROR', e)
    }
  }

  async put(url, params) {
    try {
      return await this.$http.$put(url, params?.params)
    } catch (e) {
      console.log('PUT ERROR', e)
    }
  }

  async delete(url, params) {
    try {
      return await this.$http.$delete(url, params?.params)
    } catch (e) {
      console.log('DELETE ERROR', e)
    }
  }
}
