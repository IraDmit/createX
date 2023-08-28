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
                <h3 class="title">What our clients are saying</h3>
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
        <div class="prev" @click="prev">prev</div>
        <div class="next" @click="next">next</div>
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
          image:
            "https://s3-alpha-sig.figma.com/img/8950/f5b3/dee44805efdefe9dee6999e4c5df751d?Expires=1694390400&Signature=QCley5po3~mrmZBUezkk4qc12kg6FFkdrD0XEA-Kmhgw5A4rEjboxDEKl~QdGuArl2ul~FRa~1k7MLMsjE2YV81mApxLUH6wqgmsvEnhJehRMNgH35yeIDdq72CAWwCB-Ofg7rb8Uue4Rgyq~QiqvRGV8t-x0DbiFIYeCKQ9gS4TI71JaKLXylH5CzLjaWspzG68KAwGSpGl04egGYUs-FJlbczqInJOh02PIAmfqIpyk3J6mUTvQrCEI6iNqT3a7B19uw3PI~38EzS4bjQ9jBuTVmPK8PW0g1RfAcuvlWVdUzY4Jd3DCcg0cUV4lRrWw~c~i8KwUiGCwima9~qwTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          icon: "https://s3-alpha-sig.figma.com/img/201d/164a/6c51faf663c18e40fa229b1efaaeb6e5?Expires=1694390400&Signature=Qm99j3yD8EQeCTiRgVTB2r-OnZCRrCtW38ty2BQwb0TKSkCopBcWxAXCksWonzCLHGInZ0KG4FbHnFCvOvqzJMpBsYk3X~e32gY~tVE~5JCf85U0czhhwPHW6p1tRKRUHyX7EAmlC~smBDppbxxSuuYMjAmKicYtdxPjQvwHDNIeZXqli-AIPsnqMd0lXssA8hZHj4T2JZ3OvvvgUYx7TrLOYfCB2D5uU02Ce1DIMKtcv~XbZr~B53UZvSb67e5ces0uihC-EOORUgX58~W3ncZYeICU1DP8ehEk0jFAa~~J7pzUGSjfwsXqECx~OHyQBOocwSpGM0Hwtbf4Re7VeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          review:
            "Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ",
          name: "Shawn Edwards",
          position: "Position, Company name",
        },
        {
          image:
            "https://s3-alpha-sig.figma.com/img/8950/f5b3/dee44805efdefe9dee6999e4c5df751d?Expires=1694390400&Signature=QCley5po3~mrmZBUezkk4qc12kg6FFkdrD0XEA-Kmhgw5A4rEjboxDEKl~QdGuArl2ul~FRa~1k7MLMsjE2YV81mApxLUH6wqgmsvEnhJehRMNgH35yeIDdq72CAWwCB-Ofg7rb8Uue4Rgyq~QiqvRGV8t-x0DbiFIYeCKQ9gS4TI71JaKLXylH5CzLjaWspzG68KAwGSpGl04egGYUs-FJlbczqInJOh02PIAmfqIpyk3J6mUTvQrCEI6iNqT3a7B19uw3PI~38EzS4bjQ9jBuTVmPK8PW0g1RfAcuvlWVdUzY4Jd3DCcg0cUV4lRrWw~c~i8KwUiGCwima9~qwTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          icon: "https://s3-alpha-sig.figma.com/img/201d/164a/6c51faf663c18e40fa229b1efaaeb6e5?Expires=1694390400&Signature=Qm99j3yD8EQeCTiRgVTB2r-OnZCRrCtW38ty2BQwb0TKSkCopBcWxAXCksWonzCLHGInZ0KG4FbHnFCvOvqzJMpBsYk3X~e32gY~tVE~5JCf85U0czhhwPHW6p1tRKRUHyX7EAmlC~smBDppbxxSuuYMjAmKicYtdxPjQvwHDNIeZXqli-AIPsnqMd0lXssA8hZHj4T2JZ3OvvvgUYx7TrLOYfCB2D5uU02Ce1DIMKtcv~XbZr~B53UZvSb67e5ces0uihC-EOORUgX58~W3ncZYeICU1DP8ehEk0jFAa~~J7pzUGSjfwsXqECx~OHyQBOocwSpGM0Hwtbf4Re7VeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          review:
            "gdlfkgdkf;alsdkf;sldg;sIpsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ",
          name: "Edwards",
          position: "Position, Company name",
        },
        {
          image:
            "https://s3-alpha-sig.figma.com/img/8950/f5b3/dee44805efdefe9dee6999e4c5df751d?Expires=1694390400&Signature=QCley5po3~mrmZBUezkk4qc12kg6FFkdrD0XEA-Kmhgw5A4rEjboxDEKl~QdGuArl2ul~FRa~1k7MLMsjE2YV81mApxLUH6wqgmsvEnhJehRMNgH35yeIDdq72CAWwCB-Ofg7rb8Uue4Rgyq~QiqvRGV8t-x0DbiFIYeCKQ9gS4TI71JaKLXylH5CzLjaWspzG68KAwGSpGl04egGYUs-FJlbczqInJOh02PIAmfqIpyk3J6mUTvQrCEI6iNqT3a7B19uw3PI~38EzS4bjQ9jBuTVmPK8PW0g1RfAcuvlWVdUzY4Jd3DCcg0cUV4lRrWw~c~i8KwUiGCwima9~qwTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          icon: "https://s3-alpha-sig.figma.com/img/201d/164a/6c51faf663c18e40fa229b1efaaeb6e5?Expires=1694390400&Signature=Qm99j3yD8EQeCTiRgVTB2r-OnZCRrCtW38ty2BQwb0TKSkCopBcWxAXCksWonzCLHGInZ0KG4FbHnFCvOvqzJMpBsYk3X~e32gY~tVE~5JCf85U0czhhwPHW6p1tRKRUHyX7EAmlC~smBDppbxxSuuYMjAmKicYtdxPjQvwHDNIeZXqli-AIPsnqMd0lXssA8hZHj4T2JZ3OvvvgUYx7TrLOYfCB2D5uU02Ce1DIMKtcv~XbZr~B53UZvSb67e5ces0uihC-EOORUgX58~W3ncZYeICU1DP8ehEk0jFAa~~J7pzUGSjfwsXqECx~OHyQBOocwSpGM0Hwtbf4Re7VeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
      .dots {
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        gap: 12px;
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
    .photo {
      position: absolute;
      width: 495px;
      height: 550px;
      bottom: -60;
      right: 0;
      border-radius: 4px;
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
