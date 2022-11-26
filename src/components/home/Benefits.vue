<template>
  <div class="wrap-benefits">
    <div class="benefits__intro">
      <div class="container">
        <p>
          Se siente bien cuidarnos.<br>
          Entregamos productos que te alimentan mejor.
        </p>
      </div>
    </div>

    <div class="benefits__items js-benefit-items">
      <div class="single-benefit single-benefit--relative">
        <div class="container">
          <div class="benefit__image">
            <img src="" alt="">
            <img class="img" src="/img/vacastory.jpg" alt="">
          </div>

          <div class="benefit__text">
            <h3 class="title title--medium">
              Ganadería propia
            </h3>

            <div class="text">
              <p>
                Y les aplicamos nuestra teoría: si las vacas son felices, se alimentan bien, caminan libres y hasta tienen
                su propio Tik Tok, el yogur sabe mejor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="single-benefit single-benefit--left">
        <div class="container">
          <div class="benefit__image">
            <img src="" alt="">
            <img class="img" src="/img/vacastory2.jpg" alt="">
          </div>

          <div class="benefit__text">
            <h3 class="title title--medium">
              Nuestra fruta es 100% real
            </h3>

            <div class="text">
              <p>
                Mientras muchos dicen que tienen fruta, en Zeus puedes sentir los trocitos de frutilla, mora o melocotón. Somos un yogur con trocitos 100% reales.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="single-benefit">
        <div class="container">
          <div class="benefit__image">
            <img src="" alt="">
            <img class="img" src="/img/vacastory3.jpg" alt="">
          </div>

          <div class="benefit__text">
            <h3 class="title title--medium">
              Doble Proteina
            </h3>

            <div class="text">
              <p>
                Y les aplicamos nuestra teoría: si las vacas son felices, se alimentan bien, caminan libres y hasta tienen
                su propio Tik Tok, el yogur sabe mejor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const leaveElement = (parent) => {
  const image = parent.querySelector('.benefit__image');
  const content = parent.querySelector('.benefit__text');

  return gsap.timeline()
  .to(image, {
    y: 10,
    ease: 'power1.in'
  })
  .addLabel('text')
  .to(image, {
    ease: 'power4.out',
    opacity: 0,
    y: -50,
  })
  .to(content, {
    y: -20,
    opacity: 0,
  }, 'text')
}

const enterElement = (parent) => {
  const image = parent.querySelector('.benefit__image');
  const content = parent.querySelector('.benefit__text');

  return gsap.timeline()
  .from(image, {
    ease: 'power4.out',
    opacity: 0,
    y: -50,
  })
  .from(content, {
    y: -20,
    opacity: 0,
  })
}

export default {
  name: 'HomeBenefits',
  data() {
    return {
      benefitsTl: null,
    }
  },
  mounted() {
    let allBenefits = gsap.utils.toArray('.single-benefit');

    const itemsTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.js-benefit-items',
        start: 'top top',
        end: () => `+=${allBenefits.length * 85}%`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      }
    });

    allBenefits.map((item, idx) => {
      let singleItemTl;

      if(idx < allBenefits.length -1) {
        singleItemTl = gsap.timeline()
        .add(leaveElement(item))
        .add(enterElement(item.nextElementSibling), '-=0.25')
      }

      itemsTl.add(singleItemTl);
    });
  },
  beforeDestroy() {
    this.benefitsTl.kill();
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/home/benefits";
</style>