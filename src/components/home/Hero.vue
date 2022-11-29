<template>
  <div class="hero-home js-hero-home">
    <img src="/img/hero-bg.jpg" alt="">

    <div class="hero__marquee">
      <p v-for="(item, idx) in 10" :key="idx">
        un mejor mundo, un mejor yogurt
      </p>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'MainHero',
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/home/hero";
</style>
