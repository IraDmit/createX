<template>
  <div class="bg-gray">
    <div class="container content-wrp">
      <h3 class="section-title">Supported by 12+ partners</h3>
      <div class="partners">
        <img
          :src="item.icon"
          class="partner"
          v-for="(item, idx) in partnerList"
          :key="'partner' + idx"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partnerList: [
        {
          icon: require("../assets/images/InDepthConsultingLog-UntitledPage.png"),
        },
        {
          icon: require("../assets/images/HigherFitLogo-UntitledPage.png"),
        },
        {
          icon: require("../assets/images/SentinalConsultingLogo.png"),
        },
        {
          icon: require("../assets/images/HappyHomeLogo.png"),
        },
        {
          icon: require("../assets/images/ForSaleLogo.png"),
        },
        {
          icon: require("../assets/images/SunsetRealtyLogo.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content-wrp {
  display: flex;
  flex-direction: column;
  align-items: center;
  .partners {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 40px;
    .partner {
      filter: grayscale(0%);
      &:last-of-type {
        filter: grayscale(100%);
      }
      &:hover {
        &:not(:last-of-type) {
          filter: invert(100%);
        }
        &:last-of-type {
          filter: grayscale(0%);
        }
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 425px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .title {
    font-family: Ubuntu;
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
}
</style>
