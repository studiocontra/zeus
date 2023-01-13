<template>
  <div class="wrap-feed">
    <div class="feed__marquee">
      <a
        v-for="(item, idx) in 10"
        :key="idx"
        href="https://www.tiktok.com/@zeusecuador"
        target="_blank">
        Zeus en TikTok /
      </a>
    </div>

    <!-- <div class="wrap-posts container">
      <div
        v-for="(post, idx) in data"
        :key="idx"
        class="single-post"
        data-aos="fade-center">
        <div class="wrap-post">
          <iframe
            :src="`https://www.tiktok.com/embed/${videoId(post.url)}`"
            frameborder="0"
            allowfullscreen
            scrolling="no"
            allow="encrypted-media; autoplay;"></iframe>
        </div>
      </div>
    </div> -->

    <div class="wrap-posts container">
      <div
        v-for="(post, idx) in data"
        :key="idx"
        class="single-post"
        data-aos="fade-center">

        <svg
          v-if="randomVal() === 1"
          viewBox="0 0 520 725"
          fill="none">
          <path d="M29.5568 184.437C15.1835 158.661 14.4671 158.819 11.5243 151.953C-7.51791 99.2855 -2.42104 75.8763 28.2856 42.4918C50.809 16.3119 91.5327 1.89774 120.5 0.502075C168.477 -1.77867 199.968 8.24799 226.936 48.3051C247.288 78.5464 263.737 110.647 306.25 97.2419C341.707 86.0959 375.063 69.8017 411.023 60.8368C449.427 51.2962 477.054 73.9353 489.068 111.72C501.312 150.18 465.577 193.952 466.432 233.852C467.118 265.74 483.625 298.215 500.362 320.773C515.945 341.759 529.041 377.346 511.587 405.812C495.127 432.623 446.571 430.339 439.365 463.045C431.837 497.008 459.689 531.065 461.142 563.915C462.583 595.837 462.433 635.641 449.131 666.989C427.682 717.546 384.964 724.422 340.857 724.116C283.436 723.693 246.887 683.829 199.694 658.955C163.814 640.025 122.783 629.379 93.3192 599.96C73.0036 579.65 53.9188 564.529 41.331 536.471C33.1169 518.188 25.2105 495.251 20.5863 475.236C16.8942 459.257 20.2566 444.464 24.253 427.874C31.5657 397.456 36.5167 366.812 41.6346 336.209C46.0376 309.85 43.5306 285.58 43.3783 260.044C43.1868 231.876 42.8334 208.192 29.5568 184.437Z" fill="#C0B0C0"/>
        </svg>

        <svg
          v-else-if="randomVal() === 2"
          viewBox="0 0 518 683"
          fill="none">
          <path d="M297.73 630.581C246.327 595.26 182.961 584.794 136.392 539.771C68.4242 483.782 35.3323 447.82 9.42989 353.525C-6.89364 308.331 2.31409 245.353 15.3874 199.841C38.9139 117.997 102.85 70.0985 166.794 38.1738C233.664 5.00237 319.543 -21.5135 383.943 28.1106C447.085 76.8481 476.691 156.883 500.173 240.486C525.026 329.056 519.609 422.884 505.057 514.237C493.939 583.792 479.282 634.028 426.224 669.825C374.423 704.63 341.884 660.997 297.73 630.581Z" fill="#DFD4C7"/>
        </svg>

        <svg
          v-else
          viewBox="0 0 511 655"
          fill="none">
          <path d="M68.117 170.164C29.4408 182.465 13.0873 188.375 8.18957 206.147C3.29186 223.919 4.26847 242.542 10.728 251.946C17.1305 261.333 91.9574 388.297 96.9625 426.29C101.968 464.284 115.074 487.73 72.1637 511.979C29.2537 536.228 33.1464 553.337 19.8105 578.824C6.47466 604.31 -10.1765 623.027 8.4046 639.043C26.9857 655.059 30.1179 658.335 67.4959 641.501C104.874 624.667 139.13 656.998 177.268 653.996C215.45 651.079 230.138 649.986 246.986 634.692C263.835 619.399 303.218 585.025 322.452 559.108C341.686 533.191 426.506 467.352 465.57 373.569C504.634 279.786 528.066 169.771 492.924 120.132C457.781 70.4935 447.291 -12.5102 397.99 1.71019C348.619 15.9815 296.925 18.1144 281.106 9.78072C265.288 1.44709 241.246 -7.20486 224.961 18.4967C208.676 44.1983 214.156 62.9877 189.024 89.3354C177.807 101.111 128.153 107.994 114.577 129.971C101.001 151.949 75.3627 167.905 68.117 170.164V170.164Z" fill="#E3B293"/>
        </svg>

        <div class="wrap-post">
          <video
            :src="post.video_file.url"
            class="video video-js"
            :data-ref="`desktop-player-${idx}`"></video>
        </div>
      </div>
    </div>

    <Swiper
      class="feed-slider"
      :slides-per-view="'auto'"
      :navigation="{
        nextEl: '.swiper-feed--next',
        prevEl: '.swiper-feed--prev',
        disabledClass: 'swiper-feed--disabled',
      }"
      :modules="modules">
      <!-- <SwiperSlide
        v-for="(post, idx) in data"
        :key="idx"
        class="single-post"
        data-aos="fade-center">
        <div class="wrap-post">
          <iframe
            :src="`https://www.tiktok.com/embed/${videoId(post.url)}`"
            frameborder="0"
            allowfullscreen
            scrolling="no"
            allow="encrypted-media; autoplay;"></iframe>
        </div>
      </SwiperSlide> -->

      <SwiperSlide
        v-for="(post, idx) in data"
        :key="idx"
        class="single-post"
        data-aos="fade-center">
        <div class="wrap-post">
          <video
            :src="post.video_file.url"
            class="video video-js"
            :data-ref="`mobile-player-${idx}`"></video>
        </div>
      </SwiperSlide>

      <div class="wrap-arrows">
        <div class="swiper-feed swiper-feed--prev">
          <svg viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.8027 13.2095L1.29482 13.2095" />
            <path d="M11.5273 1.70361L1.29472 13.2097L11.5273 24.7158" />
          </svg>
        </div>

        <div class="swiper-feed swiper-feed--next">
          <svg viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.49219 13.2095L34.0001 13.2095" />
            <path d="M23.7676 1.70361L34.0002 13.2097L23.7676 24.7158" />
          </svg>
        </div>
      </div>
    </Swiper>
  </div>
</template>

<script>
import videojs from 'video.js';
import 'videojs-youtube';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import 'video.js/dist/video-js.css';

export default {
  props: {
    data: {
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
      players: null,
      playersMobile: null,
      playerOptions: {
        aspectRatio: '9:16',
        autoplay: false,
        controls: true,
        muted: false
      }
    };
  },
  mounted() {
    this.players = this.data.map((post, idx) => {
      return {
        [idx]: videojs(document.querySelector(`video[data-ref="desktop-player-${idx}"]`), {
          ...this.playerOptions,
          sources: [
            {
              src: post.video_file.url,
              type: 'video/mp4'
            }
          ]
        })
      }
    });

    this.playersMobile = this.data.map((post, idx) => {
      return {
        [idx]: videojs(document.querySelector(`video[data-ref="mobile-player-${idx}"]`), {
          ...this.playerOptions,
          sources: [
            {
              src: post.video_file.url,
              type: 'video/mp4'
            }
          ]
        })
      }
    });
  },
  methods: {
    randomVal() {
      // return Math.floor(Math.random() * 3) + 1;
      return Math.floor(Math.random() * 3) + 1;
    }
  },
  computed: {
    videoId() {
      return url => {
        const parts = url.split('/');
        return parts[parts.length - 1];
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/home/feed";
</style>