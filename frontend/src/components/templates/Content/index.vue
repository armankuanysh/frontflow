<template>
  <article
    v-if="article.content"
    id="editor"
    class="content"
    v-html="$md.render(article.content)"
  />
</template>

<script>
/**
 * TEMPLATES/Content
 * @displayName Content
 */
export default {
  name: 'Content',
  props: {
    article: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss">
.content {
  width: 100%;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.75;
  img,
  iframe,
  video {
    display: block;
    width: 100%;
    height: auto;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: $f-heading;
    margin: rem(10) 0;
  }
  h2 {
    font-size: rem(28);
    margin: rem(15) 0;
  }
  h3 {
    font-size: rem(24);
  }
  h4 {
    font-size: rem(22);
  }
  h5 {
    font-size: rem(20);
  }
  h6 {
    font-size: rem(18);
  }
  p {
    font-size: rem(18);
    margin: rem(8) 0;
    line-height: 1.75;
  }
}
</style>
