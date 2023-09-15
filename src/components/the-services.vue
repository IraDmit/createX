<template>
  <div class="section-services">
    <div class="bg-img"></div>
    <section class="container services">
      <h3 class="title">Our services</h3>
      <h4 class="desc">
        Createx Construction Bureau is a construction giant with a full range of
        construction services.
      </h4>
      <div class="services-content">
        <div
          class="service"
          v-for="(service, idx) in servicesList"
          :key="'service' + idx"
          :style="{ '--bg-img': service.backgroundImg }"
        >
          <img :src="getIconPath(service.icon)" class="icon" />
          <div class="service-name">
            {{ service.name }}
          </div>
        </div>
      </div>
      <div class="more-information">
        <div class="learn-more">Learn more about our services</div>
        <div class="btn">View services</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      servicesList: [
        {
          name: "Construction",
          icon: require("../assets/images/ic-constuct.svg"),
          backgroundImg: "",
        },
        {
          name: "Project Development",
          icon: require("../assets/images/plan.svg"),
          backgroundImg: "",
        },
        {
          name: "Interior Design",
          icon: require("../assets/images/pantone.svg"),
          backgroundImg: `url(${require("../assets/images/bg-interier.jpg")})`,
        },
        {
          name: "Repairs",
          icon: require("../assets/images/painting.svg"),
          backgroundImg: "",
        },
      ],
    };
  },
  methods: {
    getIconPath(path) {
      return "http://localhost:8080" + path;
    },
  },
};
</script>

<style lang="scss" scoped>
.section-services {
  position: relative;
  .bg-img {
    position: absolute;
    top: -90px;
    left: 0;
    z-index: -20;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-image: url("../assets/images/bg-image(1).png");
  }
  .title {
    margin-top: 120px;
    font-family: Ubuntu;
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 576px) {
      font-size: 28px;
    }
  }
  .desc {
    font-family: Ubuntu;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin: 24px 0 60px 0;
    color: #787a80;
  }
  .services {
    display: flex;
    flex-direction: column;
    align-items: center;
    .services-content {
      display: grid;
      grid-template-columns: repeat(4, 285px);
      gap: 30px;
      margin: 0 auto;
      .service {
        cursor: pointer;
        z-index: 10;
        gap: 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 285px;
        height: 285px;
        width: 100%;
        border-radius: 4px;
        border: 1px solid #e5e8ed;
        background: #fff;
        box-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03),
          0px 12px 10px -6px rgba(154, 156, 165, 0.04),
          0px 30px 24px -10px rgba(154, 156, 165, 0.05),
          0px 80px 80px -20px rgba(154, 156, 165, 0.08);
        font-family: Ubuntu;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        .icon {
          color: #ff5a30;
        }
        &:hover {
          color: #fff;
          background: var(--bg-img);
        }
      }
      @media (max-width: 1400px) {
        grid-template-columns: repeat(2, 285px);
      }
      @media (max-width: 576px) {
        grid-template-columns: repeat(1, 285px);
      }
    }
  }
  .more-information {
    display: flex;
    gap: 40px;
    display: inline-flex;
    align-items: center;
    margin-top: 80px;
    .learn-more {
      font-family: Ubuntu;
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
    }
  }
}
</style>
