<template>
  <div class="bg-gray">
    <div class="container">
      <div class="slider">
        <transition name="fade" mode="out-in">
          <template v-for="(review, idx) in reviewsList">
            <div
              v-if="idx === currentSlide"
              :key="'review' + idx"
              class="slide"
            >
              <div class="left-col">
                <h3 class="section-title">What our clients are saying</h3>
                <img :src="review.icon" class="icon" />
                <div class="review">
                  <div class="text" :class="{ animation: idx }">
                    {{ review.review }}
                  </div>

                  <div class="person">
                    <div class="name">
                      {{ review.name }}
                    </div>
                    <div class="position">
                      {{ review.position }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="right-col">
                <img :src="review.image" class="photo" />
              </div>
            </div>
          </template>
        </transition>
      </div>
      <div class="dots">
        <div class="prev icon-right" @click="prev"></div>
        <div class="next icon-right" @click="next"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviewsList: [
        {
          image: require("../assets/images/photo-img.jpg"),
          icon: require("../assets/images/profile-image.png"),
          review:
            "Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ",
          name: "Shawn Edwards",
          position: "Position, Company name",
        },
        {
          image: require("../assets/images/photo-img.jpg"),
          icon: require("../assets/images/profile-image.png"),
          review:
            "gdlfkgdkf;alsdkf;sldg;sIpsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ",
          name: "Edwards",
          position: "Position, Company name",
        },
        {
          image: require("../assets/images/photo-img.jpg"),
          icon: require("../assets/images/profile-image.png"),
          review:
            "двпловадплжавдплжвдапбIpsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ",
          name: "Shawn",
          position: "Position, Company name",
        },
      ],
      currentSlide: 0,
    };
  },
  methods: {
    next() {
      this.currentSlide++;
      if (this.currentSlide === this.reviewsList.length) this.currentSlide = 0;
    },
    prev() {
      this.currentSlide--;
      if (this.currentSlide < 0)
        this.currentSlide = this.reviewsList.length - 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-gray {
  padding-bottom: 0;
}

.container {
  position: relative;
}
.dots {
  display: flex;
  gap: 12px;
  justify-content: center;
  .prev.icon-right {
    transform: rotate(180deg);
  }
}

.slide {
  display: flex;
  justify-content: space-between;
  .left-col {
    max-width: 600px;
    width: 100%;
    .icon {
      width: 72px;
      height: 72px;
      border-radius: 72px;
      margin-bottom: 24px;
    }
    .review {
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      position: relative;
      margin-bottom: 121px;
      .text {
        font-family: Ubuntu;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        color: #424551;
      }
      .name {
        font-family: Ubuntu;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
      }
      .position {
        font-family: Ubuntu;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        color: #787a80;
      }
    }
  }
  .title {
    font-family: Ubuntu;
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 60px;
  }
  .right-col {
    position: relative;
    width: 495px;
    height: 550px;
    .photo {
      position: absolute;
      bottom: -60px;
      right: 0;
      border-radius: 4px;
    }
  }
  @media (max-width: 1230px) {
    .right-col {
      display: none;
    }
    .left-col {
      max-width: unset;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
