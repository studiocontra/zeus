<template>
  <transition name="fade">
  <div
    v-if="$parent.isModalVisible"
    class="modal">
    <div class="modal-content">
      <div class="modal-body">
        <div class="modal__close" @click="$parent.isModalVisible = false">
          <svg viewBox="0 0 512 512"><path d="M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0s-81.2 212.9 0 294.2c81.2 81.2 212.9 81.2 294.2 0s81.2-213 0-294.2zm-12.3 281.9c-74.3 74.3-195.3 74.3-269.6 0-74.3-74.3-74.3-195.3 0-269.6s195.3-74.3 269.6 0c74.4 74.3 74.4 195.3 0 269.6z"/><path d="M340.2 160l-84.4 84.2-84-83.8-11.8 11.8 84 83.8-84 83.8 11.8 11.8 84-83.8 84.4 84.2 11.8-11.8-84.4-84.2 84.4-84.2z"/></svg>
        </div>
        <div class="modal__logo">
          <svg viewBox="0 0 113 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51.7954 3.87012C49.3114 1.84623 46.3475 0.942953 43.1436 0.75958C40.522 0.610166 37.9498 0.902203 35.5081 1.87C31.5739 3.43206 29.0652 6.26075 27.7808 10.1319C27.001 12.4818 26.8493 14.8894 27.0575 17.3344C27.2621 19.7522 28.0737 21.9663 29.485 23.963C31.0552 26.1804 33.2005 27.7119 35.8292 28.6016C39.3259 29.7834 42.8896 29.909 46.4957 29.1585C48.4293 28.7544 50.3029 28.1771 51.9683 27.1143C53.1397 26.3638 54.1418 25.4673 54.604 24.1158C55.4297 21.7014 53.5455 19.5145 50.945 19.9016C50.13 20.0239 49.5019 20.4687 48.8774 20.9543C48.0305 21.6097 47.2084 22.3228 46.2628 22.8186C44.5833 23.7049 42.7202 23.7898 40.8572 23.5215C37.0888 22.9782 34.8977 20.1767 34.9612 16.6179C35.1658 16.6179 35.3423 16.6179 35.5187 16.6179C41.2983 16.6179 47.0779 16.6179 52.8575 16.6179C53.1256 16.6179 53.3973 16.6179 53.6619 16.6043C55.6061 16.4821 56.3788 15.7554 56.4459 13.9352C56.5941 9.86028 55.0169 6.49846 51.8024 3.87691L51.7954 3.87012ZM36.055 12.1422C38.038 10.7058 40.2574 9.53429 43.1366 8.73288C40.6067 9.05209 38.1897 10.0572 35.7057 11.1914L35.741 11.1269C36.7113 6.93991 42.9108 4.49494 49.9677 7.59869C46.6968 12.2068 41.1113 14.2035 36.0585 12.1422H36.055ZM85.1215 4.08066C85.1392 4.29459 85.1392 4.51192 85.1392 4.72586C85.1392 11.7721 85.1392 18.8184 85.1356 25.8612C85.1356 26.2755 85.1109 26.7 85.0192 27.1041C84.5676 29.1246 83.1244 29.7664 81.4167 29.7052C79.5325 29.6373 78.5128 28.8767 78.1211 27.3418C77.98 26.7917 77.9729 26.2076 77.92 25.6371C77.8988 25.4028 77.9164 25.1651 77.9164 24.9274L77.8141 24.9002C77.6165 25.1243 77.4189 25.3485 77.2249 25.576C75.4183 27.6746 73.1777 29.0906 70.355 29.5321C67.6028 29.9599 64.9282 29.7154 62.4689 28.3639C60.2672 27.1516 59.0075 25.2364 58.4747 22.8899C58.2454 21.8712 58.1148 20.8151 58.1078 19.776C58.0725 14.757 58.0866 9.74143 58.0972 4.72246C58.0972 4.28101 58.1289 3.82597 58.2277 3.39471C58.5277 2.04998 59.3992 1.23499 60.7964 0.949744C61.6962 0.766372 62.6065 0.776559 63.5028 0.973515C64.9812 1.29611 65.9162 2.4371 66.0432 4.03651C66.0609 4.25045 66.0573 4.46778 66.0573 4.68171C66.0573 9.06567 66.0362 13.453 66.075 17.837C66.082 18.7165 66.1914 19.6333 66.4667 20.4653C67.0665 22.2651 68.4849 23.1853 70.4079 23.3721C73.0719 23.6302 75.7076 22.1394 76.6709 19.7454C76.999 18.9338 77.1472 18.0136 77.1578 17.1374C77.2072 12.9097 77.1755 8.68195 77.1825 4.45759C77.1825 3.0823 77.6165 1.90736 78.9856 1.23159C79.6948 0.881828 80.471 0.813913 81.2473 0.827496C81.706 0.837683 82.1753 0.881828 82.6199 0.987098C84.123 1.34705 84.998 2.44729 85.1215 4.08066V4.08066ZM112.125 20.9815C111.955 24.2278 110.219 26.503 107.33 28.0141C105.318 29.0668 103.141 29.5694 100.858 29.6747C97.5134 29.8309 94.2849 29.3487 91.2222 28.0141C89.7826 27.3859 88.4877 26.5472 87.5279 25.2941C86.7799 24.3195 86.4764 23.2329 86.7023 22.0444C87.1363 19.7216 89.5532 19.2157 91.1587 19.8846C92.002 20.2344 92.6265 20.8592 93.2475 21.4841C94.3519 22.5945 95.534 23.6064 97.1112 24.0377C98.8966 24.5233 100.685 24.5538 102.411 23.8102C103.297 23.4264 104.002 22.8356 104.15 21.827C104.288 20.8966 103.946 20.085 103.064 19.7047C102.107 19.2938 101.088 18.9915 100.072 18.7267C97.7251 18.1188 95.3505 17.6197 93.0217 16.9643C91.9773 16.6722 90.9611 16.1934 90.0155 15.6603C87.9972 14.5193 86.9281 12.7433 86.6917 10.5225C86.48 8.5597 86.7728 6.68183 87.9972 5.02129C89.0981 3.52714 90.6047 2.55935 92.3478 1.90056C94.3449 1.1433 96.4302 0.813913 98.5614 0.817309C100.837 0.817309 103.074 1.11614 105.258 1.7885C106.797 2.26391 108.208 2.93288 109.44 3.95841C111.355 5.55443 111.193 8.43066 109.097 9.63276C107.852 10.3459 106.172 10.0946 104.923 9.01473C104.5 8.65138 104.073 8.29483 103.642 7.94166C102.298 6.83803 100.707 6.4645 98.9248 6.47808C97.9262 6.5426 96.8677 6.59354 95.8939 7.06555C95.1388 7.4323 94.6307 7.96543 94.606 8.83136C94.5813 9.73124 95.0294 10.3968 95.855 10.699C97.0053 11.1167 98.205 11.4189 99.3941 11.7314C101.55 12.2951 103.731 12.7773 105.869 13.3919C107.125 13.7519 108.289 14.3563 109.344 15.1373C111.345 16.6179 112.262 18.5705 112.135 20.9849L112.125 20.9815ZM27.8302 25.593C28.3489 27.7934 27.2551 29.5185 24.6511 29.5321C19.8277 29.5592 15.0043 29.5389 10.1774 29.5389C8.31087 29.5389 6.44432 29.5456 4.57778 29.5321C4.16495 29.5321 3.74154 29.4879 3.33577 29.3962C1.55743 28.9887 0.625922 27.5727 0.90114 25.8341C1.06345 24.8153 1.61036 24.0309 2.31252 23.3008C6.35964 19.0764 10.3997 14.8453 14.4398 10.6141C15.2337 9.78218 16.0311 8.95021 16.9344 8.00618H16.3134C12.7602 8.00618 9.20356 8.01977 5.65042 7.9926C5.06823 7.98921 4.45428 7.89073 3.90737 7.69717C2.71829 7.2693 2.07964 6.13171 2.17138 4.81075C2.26665 3.43885 3.00056 2.50841 4.28492 2.18921C4.66952 2.09412 5.07882 2.0364 5.474 2.0364C11.7476 2.02621 18.0211 2.0296 24.2912 2.0296C26.9305 2.0296 28.4689 4.41684 27.2762 6.70899C27.0187 7.20138 26.6552 7.65981 26.2671 8.0707C22.5234 12.037 18.7656 15.9897 15.0114 19.9492C14.0058 21.0086 13.0037 22.0749 12.0016 23.1378C11.9064 23.2397 11.8217 23.3517 11.6699 23.5283H12.2274C16.3945 23.5283 20.5616 23.5283 24.7287 23.5283C26.2989 23.5283 27.5268 24.3127 27.8267 25.5862L27.8302 25.593Z" />
          </svg>
        </div>

        <div class="modal__newsletter">
          <p class="newsletter__intro text text--big">
            Suscríbete para recibir las mejores ofertas y beneficios de Zeus.
          </p>

          <form
            class="js-modal-form"
            method="get">
            <input
              class="input"
              type="text"
              name="FNAME"
              placeholder="Nombre"
              v-model="modalName">
            <input
              class="input"
              type="text"
              name="CITY"
              placeholder="Ciudad"
              v-model="modalCity">
            <input
              class="input"
              type="email"
              name="EMAIL"
              placeholder="Email"
              v-model="modalEmail">
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input
                ref="captcha-modal"
                type="text"
                name="b_5d02bd40b12110e49af116b7a_c54aeb12bc"
                tabindex="-1"
                value="">
            </div>
            <input
              type="submit"
              value="Enviar"
              name="subscribe"
              class="button"
              @click.prevent="ajaxFormSubmit">
          </form>
          <p
            class="error" v-if="showValidation">
            El email es incorrecto
          </p>
          <p
            class="error" v-if="showValidationEmail">
            El email es incorrecto
          </p>
          <p
            class="error" v-if="showError">
            Ha ocurrido un error
          </p>
          <p
            class="success" v-if="showSuccess">
            Gracias por suscribirte
          </p>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from 'jquery';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Modal',
  props: {
    theme: {
      type: String,
      default: 'light'
    }
  },
  data() {
    return {
      modalName: '',
      modalCity: '',
      modalEmail: '',
      showSuccess: false,
      showExists: false,
      showError: false,
      showValidation: false,
      showValidationEmail: false,
    }
  },
  methods: {
    scrollToSection(target) {
      const scrollTarget = document.querySelector(`[data-section="${target}"]`).offsetTop;

      if (window.innerWidth < 768) {
        this.isMenuOpen = false;
      }

      window.scroll({
        top: scrollTarget,
        behavior: 'smooth'
      })
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    async ajaxFormSubmit({target}) {
      const isValid = this.validateEmail(this.modalEmail);
      const captcha = this.$refs['captcha-modal'].value;
      const vApp = this;

      if (isValid && (captcha === '')) {
        $.ajax({
          type: 'GET',
          url: 'https://reylacteos.us13.list-manage.com/subscribe/post-json?u=5d02bd40b12110e49af116b7a&id=c54aeb12bc&f_id=00eee1e2f0&c=?',
          data: $('.js-modal-form').serialize(),
          cache       : false,
          dataType    : 'json',
          contentType: "application/json; charset=utf-8",
          error(err) {
            vApp.showError = true;
            setTimeout(() => {
              vApp.showError = false;
            }, 3000);
          },
          success(data) {
            console.log(data);
            if (data.result != "success") {
              // Something went wrong, do something to notify the user.
              vApp.showError = true;
              setTimeout(() => {
                vApp.showError = false;
              }, 3000);
            } else {
              // It worked, carry on...
              vApp.showSuccess = true;
              $('.js-ajax-form').fadeOut();
              setTimeout(() => {
                $('.js-ajax-form').fadeIn();
                vApp.$parent.isModalVisible = false;
                vApp.showSuccess = false;
              }, 3000);
            }
          }
        });
      } else {
        this.showValidation = true;
        setTimeout(() => {
          this.showValidation = false;
        }, 3000);
      }
    },
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/modal";
</style>
