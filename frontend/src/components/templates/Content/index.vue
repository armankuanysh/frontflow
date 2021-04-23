<template>
  <div class="article">
    <BottomBar class="article-actions" />
    <article
      v-if="article.content"
      id="editor"
      class="content"
      v-html="$md.render(article.content)"
    />
  </div>
</template>

<script>
import BottomBar from 'organisms/ArticleBottomBar'
/**
 * TEMPLATES/Content
 * @displayName Content
 */
export default {
  name: 'Content',
  components: { BottomBar },
  props: {
    article: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss">
.article {
  position: relative;
  width: 100%;
  height: max-content;
  overflow: visible;
}
.content {
  width: 100%;
  font-size: 20;
  font-size: rem(20);
  line-height: 1.75;
  padding-bottom: 40px;
  img,
  iframe,
  video {
    display: block;
    width: 100%;
    height: auto;
  }
  a {
    color: var(--c-link);
    &:visited {
      opacity: 0.75;
    }
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
    font-size: rem(20);
    margin: rem(8) 0;
    line-height: 1.75;
  }
  ul,
  ol {
    padding-left: rem(25);
  }
}
</style>
