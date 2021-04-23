import { resolve } from 'path'

const strapiBaseUri = process.env.API_URL || 'http://localhost:1337'

export default {
  ssr: process.env.NODE_ENV !== 'mobile',

  env: {
    strapiBaseUri,
  },

  router: {
    mode: process.env.NODE_ENV === 'mobile' ? 'hash' : 'history',
  },

  generate: {
    minify: {
      collapseWhitespace: false,
    },
    fallback: 'error.html',
  },

  head: {
    title: 'RFH',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src:
          'https://unpkg.com/@ionic/pwa-elements@latest/dist/ionicpwaelements/ionicpwaelements.esm.js',
        type: 'module',
      },
    ],
  },

  pageTransition: {
    name: 'fade',
  },

  srcDir: 'src/',

  alias: {
    icons: resolve(__dirname, './src/assets/icons'),
    atoms: resolve(__dirname, './src/components/atoms'),
    molecules: resolve(__dirname, './src/components/molecules'),
    organisms: resolve(__dirname, './src/components/organisms'),
    templates: resolve(__dirname, './src/components/templates'),
    services: resolve(__dirname, './src/services'),
    repositories: resolve(__dirname, './src/repositories'),
    plugins: resolve(__dirname, './src/plugins'),
  },

  css: [
    '~/assets/scss/main.scss',
    {
      src: './node_modules/highlight.js/styles/xcode.css',
      lang: ['javascript, css, yaml, bash, json'],
    },
  ],

  plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/services/index.ts' },
    { src: '~/plugins/repositories/index.ts' },
  ],

  components: false,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg',
    '@nuxtjs/color-mode',
    'nuxt-build-optimisations',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/strapi',
    '@nuxtjs/markdownit',
  ],

  buildOptimisations: {
    profile: process.env.NODE_ENV === 'development' ? 'risky' : 'expiremental',
  },

  strapi: {
    url: strapiBaseUri,
    entities: [
      {
        name: 'articles',
        type: 'collection',
      },
      {
        name: 'categories',
        type: 'collection',
      },
      {
        name: 'tags',
        type: 'collection',
      },
      {
        name: 'homepage',
        type: 'single',
      },
      {
        name: 'global',
        type: 'single',
      },
    ],
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
    use: ['markdown-it-highlightjs'],
  },

  styleResources: {
    scss: [
      './src/assets/scss/_fonts.scss',
      './src/assets/scss/_mixins.scss',
      './src/assets/scss/_variables.scss',
    ],
  },

  axios: {},

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  server: {
    host: '0.0.0.0',
  },

  build: {
    publicPath: '/nuxt/',
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    },
  },
}
