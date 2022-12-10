<template>
  <div class="hero-home js-hero-home">
    <picture>
      <source :srcset="img.sizes['full-page']" media="(min-width: 1400px)">
      <source :srcset="img.sizes['half-page']" media="(min-width: 768px)">
      <source :srcset="img.sizes.card">
      <img class="img" :src="img.url" :alt="img.alt">
    </picture>

    <div
      class="hero__player">
      <div class="unmute" @click="toggleMute">
        <svg
          v-if="isMuted"
          viewBox="0 0 16 16"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 5.75v4.5h2.5l4 3V2.75l-4 3zm9 .5s1 .5 1 1.75s-1 1.75-1 1.75m1-6.5c2 1 3 2.5 3 4.75s-1 3.75-3 4.75"/></svg>
          <svg v-if="!isMuted" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 5.75v4.5h2.5l4 3V2.75l-4 3zm12.5 0l-3.5 4.5m0-4.5l3.5 4.5"/></svg>
      </div>
      <video
        v-if="videoDesktop"
        ref="desktopPlayer"
        class="video video-js video--desktop"
        :src="videoDesktop"></video>
      <video
        v-if="videoMobile"
        ref="mobilePlayer"
        class="video video--mobile"
        :src="videoMobile"></video>
    </div>

    <div class="hero__marquee">
      <p v-for="(item, idx) in 10" :key="idx">
        {{ marquee }}
      </p>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videojs from 'video.js';
import 'videojs-youtube';

import 'video.js/dist/video-js.css';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'MainHero',
  props: {
    img: {
      type: [Object, Boolean],
      default: false,
    },
    videoDesktop: {
      type: String,
      default: ''
    },
    videoMobile: {
      type: String,
      default: ''
    },
    marquee: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      desktopPlayer: null,
      mobilePlayer: null,
      isMuted: true,
      playerOptions: {
        autoplay: true,
        controls: false,
        muted: true,
        techOrder: ['youtube'],
        youtube: {
          modestbranding: 1,
          playsinline: 1,
        }
      }
    }
  },
  mounted() {
    this.desktopPlayer = videojs(this.$refs.desktopPlayer, {
      ...this.playerOptions,
      sources: [
        {
          src: this.videoDesktop,
          type: 'video/youtube'
        }
      ]
    });

    this.mobilePlayer = videojs(this.$refs.mobilePlayer, {
      ...this.playerOptions,
      sources: [
        {
          src: this.videoMobile,
          type: 'video/youtube'
        }
      ]
    });
  },
  beforeDestroy() {
    if (this.desktopPlayer) {
      this.desktopPlayer.dispose();
    }
    if (this.mobilePlayer) {
      this.mobilePlayer.dispose();
    }
  },
  methods: {
    toggleMute() {
      this.desktopPlayer.play();

      if(this.isMuted) {
        this.desktopPlayer.muted(false);
      } else {
        this.desktopPlayer.muted(true);
      }

      this.isMuted = !this.isMuted;
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/home/hero";
</style>
