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
          <img :src="service.icon" class="icon" />
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
          icon: "../assets/images/ic-constuct.svg",
          backgroundImg: "",
        },
        {
          name: "Project Development",
          icon: "../assets/images/plan.svg",
          backgroundImg: "",
        },
        {
          name: "Interior Design",
          icon: "../assets/images/pantone.svg",
          backgroundImg:
            "url(https://s3-alpha-sig.figma.com/img/bfa8/71ee/fc0ef31433fe6d3805805a9a0294d42a?Expires=1693785600&Signature=hz3czNv1plELhWUfgfs4p3zbmdgk~pqxtHHqUevIGCpjL~CtQNCORAsRkKetGmR1Qe14Bvz0aHztHF3FxtjrZzOMv6nsz0t0u1iVwSk3x4uaSSOGgIWF46f1gCBAWCeSoxJbAv-FEZWK2umXavsAJBqRrjLLgW3lldS9djIjyfp1UASHAB6owTrqd5N6Uxpx9lzSlP8dymkx87CRcwr2rMGtG8bV5nw9vZ4T15i-a5FEMReYlT6m1rxTlBeB~qJhtMaSLuy2sveYf2N5Kr1llZJxBLLL6Z8stXJgO1gTbHD9dyRtIeKr3HB~aXFx7EkkRK-UOZdn1H-Yvh3XHEezQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
        },
        {
          name: "Repairs",
          icon: "../assets/images/painting.svg",
          backgroundImg: "",
        },
      ],
    };
  },
  //   methods: {
  //     getIconPath(path) {
  //         return require(path)
  //     },
  //   },
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
    height: 880px;
    opacity: 0.1;
    background: url(https://s3-alpha-sig.figma.com/img/6572/5bc7/101ee1479e282a9bb45c4aea2bc0ee1c?Expires=1693785600&Signature=Ogd3Y6uKUE-C-GqGf4aQb044BwpxcLwsIRrNM5RmrBWeKLlOxvCl09dkNnI39tUiVTsZaJiVxfyL6lwc~~XQvu0rNfPvMgmaDrpgwr3hedGvOCFkBg754K8uqbvDv20D870mL~APCm03xXqhbnZpxAqf9w~A32VkDWtNi2omiUi1AQnwqZPSpVxik-ZvqS~aRN8-dJjzsExhbw8S6VgM5dPPnusEN1xtzRCNoFYZ30nMkwuYCicA5GlZeArrSZWaC6VFerr7~Oh-MqfYm-GFLi7GuP~zniRYQnGQSimpR8MDM9cJdl3sM55r5T2Aspcx3e8HtbNcBv7gnudj7QJevA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4),
      lightgray 50% / cover no-repeat;
  }
  .title {
    margin-top: 120px;
    font-family: Ubuntu;
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
  .desc {
    font-family: Ubuntu;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin: 24px 0 60px 0;
    color: #787A80;
  }
  .services {
    display: flex;
    flex-direction: column;
    align-items: center;
    .services-content {
      display: flex;
      justify-content: space-between;
      width: 100%;
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
