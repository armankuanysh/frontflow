<template>
  <client-only>
    <button @clic="share">
      <ShareIcon />
    </button>
  </client-only>
</template>

<script>
import { Share } from '@capacitor/share'
import ShareIcon from 'icons/share.svg?inline'
/**
 * ATOMS/Share
 * @displayName Share
 */
export default {
  name: 'Share',
  components: { ShareIcon },
  methods: {
    async share() {
      await Share.share({
        text: 'Hi',
        url: this.$route.path,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  appearance: none;
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  font-family: $f-heading;
  font-weight: 300;
}
</style>
