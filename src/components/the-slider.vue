<template>
  <div class="slider">
    <VueSlickCarousel v-bind="settings" class="slider-content" ref="slider">
      <div
        class="slide"
        v-for="(slide, idx) in sliderList"
        :key="'slide' + idx"
      >
        <div
          class="image"
          :style="`background: url(${slide.image}) center/cover no-repeat`"
        ></div>
        <div class="container">
          <h2 class="slide-title" v-html="slide.title"></h2>
          <div class="slide-text">{{ slide.text }}</div>
          <div class="buttons">
            <router-link
              v-for="(button, idx) in slide.buttons"
              :key="'button' + idx"
              :to="button.link"
              class="btn"
            >
              {{ button.text }}
            </router-link>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
    <div class="dots">
      <div
        class="dot"
        v-for="(i, idx) in countPages"
        :key="'page' + idx"
        @click="selectPageSlide(i)"
        :class="{ activePage: pageSlide === idx }"
      >
        <div class="page">
          {{ i > 10 ? i : "0" + i }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      sliderList: [
        {
          title: "CREATE<i>X</i> CONSTRUCTION",
          text: "Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. ",
          image:
            "https://amiel.club/uploads/posts/2022-03/1647689819_1-amiel-club-p-kartinki-stroiki-1.jpg",
          buttons: [
            {
              text: "Learn more about us",
              link: "#",
            },
            { text: "SUBMIT REQUEST", link: "#" },
          ],
        },
        {
          title: "CREATE<i>X</i> CONSTRUCTION",
          text: "Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. ",
          image: "https://kartinkof.club/uploads/posts/2022-09/1662550782_1-kartinkof-club-p-novie-i-krasivie-kartinki-stroika-1.jpg",
          buttons: [
            {
              text: "Learn more about us",
              link: "#",
            },
            { text: "SUBMIT REQUEST", link: "#" },
          ],
        },
        {
          title: "CREAT<i>E</i>X CONSTRUCTION",
          text: "Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. ",
          image:
            "https://oir.mobi/uploads/posts/2021-03/1616983433_11-p-stroika-fon-11.jpg",
          buttons: [
            {
              text: "Learn more about us",
              link: "#",
            },
            { text: "SUBMIT REQUEST", link: "#" },
          ],
        },
        {
          title: "CREATE<i>X</i> CONSTRUCTION",
          text: "Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. ",
          image:
            "https://concreteunion.ru/wp-content/uploads/2020/05/1-22.jpg",
          buttons: [
            {
              text: "Learn more about us",
              link: "#",
            },
            { text: "SUBMIT REQUEST", link: "#" },
          ],
        },
      ],
      pageSlide: 0,
    };
  },
  computed: {
    countPages() {
      return this.sliderList.length;
    },
  },
  methods: {
    selectPageSlide(idx) {
      this.$refs.slider.goTo(idx - 1);
      this.pageSlide = idx - 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  color: #fff;
  .dots {
    position: absolute;
    transform: translateX(-50%);
    bottom: 50px;
    left: 50%;
    display: grid;
    grid-template-columns: repeat(4, 179px);
    .dot {
      border-bottom: 2px solid #fff;
      opacity: 0.6;
      cursor: pointer;
      &:not(:first-of-type) {
        margin-left: 4px;
      }
      .page {
        font-family: Ubuntu;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        margin-bottom: 12px;
      }
      &.activePage {
        opacity: 1;
      }
    }
  }
  .slider-content::v-deep {
    .slick-next {
      right: 32px;
      &::before {
        font-size: 48px;
      }
    }
    .slick-prev {
      left: 32px;
      z-index: 11;
      &::before {
        font-size: 48px;
      }
    }
    .slide {
      height: 90vh;
      position: relative;
      display: flex !important;
      align-items: center;
      .slide-title {
        font-family: Ubuntu;
        font-size: 72px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 93.6px */
        letter-spacing: 1px;
        max-width: 577px;
        i {
          font-style: unset;
          color: #ff5a30;
        }
      }
      .slide-text {
        font-family: Ubuntu;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        max-width: 577px;
        margin: 24px 0 61px 0;
      }
      .buttons {
        display: flex;
        gap: 24px;
        .btn {
          padding: 0px 40px;
          border-radius: 4px;
          text-decoration: unset;
          color: inherit;
          text-align: center;
          font-family: Ubuntu;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 52px; /* 325% */
          letter-spacing: 0.5px;
          text-transform: uppercase;
          &:first-of-type {
            border: 1px solid #fff;
            background-color: unset;
          }
          &:last-of-type {
            background-color: #ff5a30;
          }
        }
      }
      .image {
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -1;
        &::before {
          display: block;
          content: "";
          width: 100%;
          height: 100%;
          background-color: rgba($color: #000000, $alpha: 0.4);
        }
      }
      @media (max-width: 1230px) {
        .slide-title {
          font-size: 55px;
        }
        .slide-text {
          font-size: 16px;
        }
        .buttons {
          .btn {
            font-size: 14px;
            line-height: 180%;
          }
        }
      }
      @media (max-width: 576px) {
        .slide-title {
          font-size: 40px;
        }
        .slide-text {
          font-size: 14px;
        }
        .buttons {
          .btn {
            font-size: 14px;
            line-height: 180%;
            padding: 0 5px;
          }
        }
      }
    }
  }
  @media (max-width: 1230px) {
    .dots {
      grid-template-columns: repeat(4, 150px);
    }
  }
  @media (max-width: 768px) {
    .dots {
      grid-template-columns: repeat(4, 100px);
    }
  }
  @media (max-width: 375px) {
    .dots {
      grid-template-columns: repeat(4, 70px);
    }
  }
}
</style>
