<template>
  <div class="container">
    <div
      class="wrap-news"
      :class="`wrap-news--${theme}`">
      <div class="news__headline">
        <h2 class="title">
          News
        </h2>
      </div>

      <div class="news__grid">
        <Swiper
          :slidesPerView="1.2"
          :spaceBetween="16"
          :breakpoints="{
            '576': {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            '992': {
              slidesPerView: 4,
              spaceBetween: 24,
            }
          }">
          <SwiperSlide
            v-for="item in data"
            :key="item.id">
            <NewsCard
              :theme="theme"
              :name="item.title.rendered"
              :description="item.acf.content"
              :link="item.acf.link"
              :date="item.acf.date"
              :image="item.acf.image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/vue";

// import Swiper styles
import 'swiper/css';

export default {
  name: 'NewsBlock',
  props: {
    theme: {
      type: String,
      default: 'light',
    },
    data: {
      type: Array,
      default: () => []
    },
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/news";
</style>
