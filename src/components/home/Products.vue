<template>
  <div class="wrap-products" data-section="products">
    <div class="wrap-products__shape"></div>

    <div class="wrap-products__headline" data-aos="fade-right">
      <div class="container">
        <p>
          {{ headline }}
        </p>
      </div>
    </div>

    <div
      v-for="(category, idx) in products"
      :key="idx"
      class="wrap-slider">
      <div class="container">
        <div class="slider__headline" data-aos="fade-right">
          <h4 class="title">
            {{ category.headline }}
          </h4>
        </div>

        <Swiper
          data-aos="fade-right"
          :slides-per-view="1.5"
          :space-between="50"
          :navigation="{
              nextEl: '.swiper-arrow--next',
              prevEl: '.swiper-arrow--prev',
              disabledClass: 'swiper-arrow--disabled',
          }"
          :breakpoints="{
            // when window width is >= 640px
            '768': {
              slidesPerView: 1.25
            },
            '1200': {
              slidesPerView: 1.75
            }
          }"
          :modules="modules">
          <SwiperSlide
            v-for="(prod, idx) in category.items"
            :key="idx"
            class="single-slide"
            :style="{
              'color': prod.acf.color
            }">
            <h5 class="title title--small mobile">
              {{ prod.title.rendered }}
            </h5>

            <div class="slide__img">
              <img :src="prod.image" :alt="prod.title.rendered">
            </div>

            <div class="slide__content">
              <h5 class="title title--small">
                {{ prod.title.rendered }}
              </h5>

              <div
                v-if="prod.acf.sizes"
                class="slide__sizes">
                <div
                  v-for="(size, id) in prod.acf.sizes"
                  :key="id"
                  class="size">
                  <span>
                    {{ size.size }}
                  </span>
                </div>
              </div>
              <div class="text text--small" v-html="prod.content.rendered"></div>
            </div>
          </SwiperSlide>

          <div class="wrap-arrows">
            <div class="container">
              <div class="swiper-arrow swiper-arrow--prev">
                <svg viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.8027 13.2095L1.29482 13.2095" />
                  <path d="M11.5273 1.70361L1.29472 13.2097L11.5273 24.7158" />
                </svg>
              </div>

              <div class="swiper-arrow swiper-arrow--next">
                <svg viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.49219 13.2095L34.0001 13.2095" />
                  <path d="M23.7676 1.70361L34.0002 13.2097L23.7676 24.7158" />
                </svg>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>

  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

export default {
  props: {
    headline: {
      type: String,
      default: '',
    },
    products: {
      type: [Array, Boolean],
      default: false,
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation],
      productsData: null,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/home/products";
</style>