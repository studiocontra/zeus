<template>
  <div class="wrap-partners" data-section="delivery">
    <div class="container">
      <div class="partners__box">
        <div class="partners__headline">
          <h4 class="title">
            {{ headline }}
          </h4>
        </div>

        <div class="wrap-items">
          <div
            v-for="(partner, idx) in items"
            :key="idx"
            class="single-partner">
            <img :src="partner.logo.sizes.small" :alt="partner.logo.alt">

            <a
              class="btn"
              :href="partner.play_store"
              target="_blank">
              <img alt="Disponible en Google Play" src="/img/google-play-badge.png"/>
            </a>

            <a
              class="btn"
              :href="partner.apple_store"
              target="_blank">
              <img alt="Disponible en el App Store" src="/img/app-store-badge.png"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeliveryPartners',
  props: {
    headline: {
      type: String,
      default: '',
    },
    items: {
      type: [Array, Boolean],
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/home/partners";
</style>