<template>
  <div class="container">
    <section class="advantages">
      <h3 class="section-title">Our core values</h3>
      <h4 class="section-desc">
        Our mission is to set the highest standards for construction sphere.
      </h4>
      <div class="pros">
        <div
          v-for="(advan, idx) in advantages"
          :key="'advan' + idx"
          class="plus"
        >
          <img :src="advan.icon" />
          <h3 class="title">{{ advan.title }}</h3>
          <h4 class="desc">{{ advan.text }}</h4>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      advantages: [
        {
          title: "Quality",
          icon: "./src/assets/img/Group.svg",
          text: "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.",
        },
        {
          title: "Safety",
          icon: "./src/assets/images/ic-hand.svg",
          text: "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.",
        },
        {
          title: "Comfort",
          icon: "./src/assets/images/tapki.svg",
          text: "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
h3,
h4 {
  margin: 0;
}
.advantages {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
  .pros {
    display: flex;
    gap: 94px;
    .plus {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      &:not(:last-of-type)::before {
        content: "";
        position: absolute;
        height: 100%;
        top: 0;
        right: -40px;
        width: 1px;
        background: linear-gradient(
          315deg,
          rgba(218, 219, 221, 0) 0%,
          rgba(218, 219, 221, 0.5) 12.33%,
          #dadbdd 51.91%,
          rgba(218, 219, 221, 0.5) 87.85%,
          rgba(218, 219, 221, 0) 100%
        );
      }
      .title {
        font-family: Ubuntu;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        margin: 24px 0 8px 0;
      }
      .desc {
        font-family: Ubuntu;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        color: #787a80;
      }
    }
  }
}
</style>
