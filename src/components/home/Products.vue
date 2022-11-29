<template>
  <div class="wrap-products">
    <div class="wrap-products__shape"></div>

    <div class="container">
      <p>
        Conoce nuestros productos:
      </p>
    </div>

    <div class="wrap-slider">
      <div class="container">
        <h4 class="title">
          Yogures<br>
          Bebibles
        </h4>

        <Swiper
          :slides-per-view="1.4"
          :space-between="50"
          :navigation="{
                    nextEl: '.swiper-arrow--next',
                    prevEl: '.swiper-arrow--prev',
                    disabledClass: 'swiper-arrow--disabled',
                }"
          :modules="modules">
          <SwiperSlide class="single-slide">
            <h5 class="title title--small mobile">
              Descremado Frutilla
            </h5>
            <img src="/img/descremado-frutilla.png" alt="">
            <div class="slide__content">
              <h5 class="title title--small">
                Descremado Frutilla
              </h5>

              <div class="slide__sizes">
                <div class="size">
                  <span>
                    950 g
                  </span>
                </div>
                <div class="size">
                  <span>
                    190 g
                  </span>
                </div>
              </div>

              <div class="text text--small">
                <p>
                  Delicioso yogur descremado con trozos y salsa de frutilla, con doble proteína.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="single-slide">
            <h5 class="title title--small mobile">
              Descremado Mora
            </h5>
            <img src="/img/descremado-mora.png" alt="">
            <div class="slide__content">
              <h5 class="title title--small">
                Descremado Mora
              </h5>
            </div>
          </SwiperSlide>
          <SwiperSlide class="single-slide">
            <h5 class="title title--small mobile">
              Descremado Durazno
            </h5>
            <img src="/img/descremado-durazno.png" alt="">
            <div class="slide__content">
              <h5 class="title title--small">
                Descremado Durazno
              </h5>
            </div>
          </SwiperSlide>
          <SwiperSlide class="single-slide">
            <h5 class="title title--small mobile">
              Descremado Natural
            </h5>
            <img src="/img/descremado-natural.png" alt="">
            <div class="slide__content">
              <h5 class="title title--small">
                Descremado Natural
              </h5>
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

    <div class="wrap-slider">
      <div class="container">
        <h4 class="title">
          Yogures<br>
          Griegos
        </h4>

        <Swiper
          :slides-per-view="1.4"
          :space-between="50"
          :navigation="{
                    nextEl: '.swiper-arrow--next',
                    prevEl: '.swiper-arrow--prev',
                    disabledClass: 'swiper-arrow--disabled',
                }"
          :modules="modules">
          <SwiperSlide class="single-slide">
            <h5 class="title title--small mobile">
              Griego Mora
            </h5>
            <img src="/img/griego-mora.png" alt="">
            <div class="slide__content">
              <h5 class="title title--small">
                Griego Mora
              </h5>
            </div>
          </SwiperSlide>
          <SwiperSlide class="single-slide">
            <h5 class="title title--small mobile">
              Griego Frutilla
            </h5>
            <img src="/img/griego-frutilla.png" alt="">
            <div class="slide__content">
              <h5 class="title title--small">
                Griego Frutilla
              </h5>
            </div>
          </SwiperSlide>
          <SwiperSlide class="single-slide">
            <h5 class="title title--small mobile">
              Griego Natural
            </h5>
            <img src="/img/griego-natural.png" alt="">
            <div class="slide__content">
              <h5 class="title title--small">
                Griego Natural
              </h5>
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
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/home/products";
</style>