<template>
  <div class="wrap-content">
    <div class="left">
      <picture v-if="img">
        <source :srcset="img.sizes['half-page']" media="(min-width: 1200px)">
        <source :srcset="img.sizes['card']" media="(min-width: 768px)">
        <source :srcset="img.sizes.small">
        <img class="img" :src="img.url" :alt="img.alt">
      </picture>
    </div>
    <div class="right">
      <div class="content__content" data-aos="fade-up">
        <h4 class="title">
          {{ headline }}
        </h4>

        <div class="text text--big" v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: [Object, Boolean],
      default: false,
    },
    headline: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/home/content";
</style>