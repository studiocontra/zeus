<template>
  <div class="wrap-benefits" data-section="benefits">
    <div class="benefits__intro">
      <div class="container">
        <div data-aos="fade-right" v-html="headline"></div>
      </div>
    </div>

    <div class="benefits__items js-benefit-items">
      <div
        v-for="(benefit, idx) in items"
        :key="idx"
        class="single-benefit"
        :class="{
          'single-benefit--relative': idx === 0,
          'single-benefit--left' : idx % 2 !== 0
        }">
        <div class="container">
          <div class="benefit__image">
            <div v-html="benefit.shapes"></div>
            <img class="img" :src="benefit.image.url" :alt="benefit.image.alt">
          </div>

          <div class="benefit__text">
            <h3 class="title title--medium">
              {{ benefit.headline }}
            </h3>

            <div class="text" v-html="benefit.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const leaveElement = (parent) => {
  const image = parent.querySelector('.benefit__image');
  const content = parent.querySelector('.benefit__text');

  return gsap.timeline()
    .to(image, {
      ease: 'power4.out',
      opacity: 0,
    })
    .to(content, {
      y: -20,
      opacity: 0,
    }, '<');
}

const enterElement = (parent) => {
  const image = parent.querySelector('.benefit__image .img');
  const shapes = parent.querySelectorAll('.benefit__image .shape');
  const content = parent.querySelector('.benefit__text');

  return gsap.timeline()
  .from(image, {
    ease: 'power4.out',
    opacity: 0,
    duration: 1,
  })
  .from(shapes, {
    ease: 'power4.out',
    opacity: 0,
    stagger: 0.2,
    scale: 0.5,
  }, '-=0.35')
  .from(content, {
    y: -20,
    opacity: 0,
  }, '<')
}

const enterShapes = (parent) => {
  const shapes = parent.querySelectorAll('.benefit__image .shape');

  return gsap.timeline()
  .from(shapes, {
    ease: 'power4.out',
    opacity: 0,
    stagger: 0.4,
    scale: 0.5,
  });
}

export default {
  name: 'HomeBenefits',
  props: {
    headline: {
      type: String,
      default: '',
    },
    items: {
      type: [Array, Boolean],
      default: false,
    }
  },
  mounted() {
    let allBenefits = gsap.utils.toArray('.single-benefit');
    let mm = gsap.matchMedia();
    let itemsTl;

    mm.add('(min-width: 768px)', () => {
      itemsTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.js-benefit-items',
          start: 'top top',
          end: () => `+=${allBenefits.length * 110}%`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
        }
      });
    });
    mm.add('(max-width: 767px)', () => {
      itemsTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.js-benefit-items',
          start: 'top top',
          end: () => `+=${allBenefits.length * 100}%`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
        }
      });
    });

    allBenefits.map((item, idx) => {
      let singleItemTl;

      if(idx  === 0) {
        singleItemTl = gsap.timeline()
        .add(enterShapes(item))
        .add(leaveElement(item))
        .add(enterElement(item.nextElementSibling), '-=0.5')
      }

      if(idx > 0 && idx < allBenefits.length -1) {
        singleItemTl = gsap.timeline()
        .add(leaveElement(item))
        .add(enterElement(item.nextElementSibling), '-=0.5')
      }

      itemsTl.add(singleItemTl).add(() => AOS.refresh());
    });
 }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/home/benefits";
</style>