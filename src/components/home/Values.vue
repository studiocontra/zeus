<template>
  <div class="wrap-values">
    <div class="wrap-values__shape"></div>

    <div class="values__headline" data-aos="fade-up">
      <div class="container">
        <h3 class="title title--medium">
          {{ headline }}
        </h3>
      </div>
    </div>

    <div class="values__intro">
      <div class="container">
        <img
          class="badge"
          src="/img/planet-badge.png"
          alt="Bueno para mi, bueno para el planeta"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center">

        <div class="main-img" data-aos="fade-up">
          <picture>
            <source :srcset="img.sizes.card" media="(min-width: 576px)">
            <source :srcset="img.sizes.small">
            <img :src="img.url" :alt="img.alt">
          </picture>
        </div>

        <img
          class="badge badge--2"
          src="/img/fruta-badge.png"
          alt="100% fruta real"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center">
      </div>
    </div>

    <div class="container">
      <div class="values__items">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="single-value"
          data-aos="fade-up"
          :data-aos-delay="idx * 100">
          <div class="headline">
            <span>
              {{ item.headline }}
            </span>
          </div>
          <div class="text" v-html="item.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headline: {
      type: String,
      default: '',
    },
    img: {
      type: [Object, Boolean],
      default: false,
    },
    items: {
      type: [Array, Boolean],
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/home/values";
</style>