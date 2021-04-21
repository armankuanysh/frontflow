<template>
  <component :is="type.toLowerCase()">
    <!-- @slot slot для отображения контента заголовка -->
    <slot></slot>
  </component>
</template>

<script>
/* eslint-disable vue/one-component-per-file */
/**
 * @module Heading
 * @vue-prop {String} h1 - tag of title, values - h1, h2, h3, h4, h5
 * @vue-prop {String} fontFamily - Change fontFamily title, values - web, ptroot. Default value - web
 */

import Vue from 'vue'

const H1 = Vue.component('H1', {
  template: '<h1></h1>',
})
const H2 = Vue.component('H2', {
  template: '<h2></h2>',
})
const H3 = Vue.component('H3', {
  template: '<h3></h3>',
})
const H4 = Vue.component('H4', {
  template: '<h4></h4>',
})
const H5 = Vue.component('H5', {
  template: '<h5></h5>',
})
const H6 = Vue.component('H6', {
  template: '<h6></h6>',
})

/**
 * Компонент заголовка уровней h1-h6
 * Компонент имеет следующие шрифты - web, ptroot
 * @displayName Heading
 */

export default {
  name: 'Heading',
  components: {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
  },
  props: {
    /**
     * Уровень заголовка
     * @values h1, h2, h3, h4, h5, h6
     */
    type: {
      type: String,
      default: 'h1',
    },
    /**
     * Опция выбора шрифта
     * @values ptroot, web
     */
    fontFamily: {
      type: String,
      default: 'web',
    },
  },
}
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $f-heading;
}
</style>

<docs>
```js
<Heading type="h1" fontFamily="web">Hello</Heading>
<Heading type="h1" fontFamily="ptroot">Hello</Heading>
<Heading type="h2" fontFamily="web">Hello</Heading>
<Heading type="h2" fontFamily="ptroot">Hello</Heading>
<Heading type="h3" fontFamily="web">Hello</Heading>
<Heading type="h3" fontFamily="ptroot">Hello</Heading>
<Heading type="h4" fontFamily="web">Hello</Heading>
<Heading type="h4" fontFamily="ptroot">Hello</Heading>
<Heading type="h5" fontFamily="web">Hello</Heading>
<Heading type="h5" fontFamily="ptroot">Hello</Heading>
<Heading type="h6" fontFamily="web">Hello</Heading>
<Heading type="h6" fontFamily="ptroot">Hello</Heading>
```
</docs>
