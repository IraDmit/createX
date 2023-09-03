<template>
  <div class="container statistics">
    <div class="right-img"></div>
    <h3 class="section-title">Some facts and figures</h3>
    <div class="statistics-content">
      <div
        class="statistic"
        v-for="(item, idx) in statisticsList"
        :key="'statistic' + idx"
      >
        <svg :style="{ '--number': item.number }">
          <circle cx="75" cy="75" r="75" :stroke="item.color + '50'"></circle>
          <circle cx="75" cy="75" r="75" :stroke="item.color"></circle>
        </svg>
        <div class="number">{{ item.number + "%" }}</div>
        <div class="desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statisticsList: [
        {
          number: "98",
          color: "#F89828",
          desc: "Totally satisfied clients",
        },
        {
          number: "20",
          color: "#F52F6E",
          desc: "Years of experience",
        },
        {
          number: "9452",
          color: "#5A87FC",
          desc: "Working hours spent",
        },
        { number: "100", color: "#03CEA4", desc: "Succeeded projects" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.statistics {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 180px 0 0 0;

  .right-img {
    opacity: 0.2;
    background: url(https://s3-alpha-sig.figma.com/img/2483/835d/32bc1f2438a729dbff568ee802b7a86f?Expires=1694390400&Signature=kJg~-c-cCe8TNzD-gtpkc-WzZNcCSyEDqcYuXEi9YBu-xEI8KIcAyB7QskyLjzl-p1vWGygN~I0fsXsIpHulBY9eJxsbj2xFonQYuyu1Qia2jx~9Xz3Okkkxv6rBpXuz0vigV6BecG4~E3~Or~vxYbC-VHFFrJn30RKeYpOXYFRCFFcw~-bD4cib2NL5tpNfUtlv8oPD9ZHHSIHNRBnVNFOLxmt-E1jMulUv6LiQIAXJ0SMf2JQR-Jgo88p7mk4bDfdKdf87Ru0zsVGE8XR~z1QBBL7FmzQVNttUSZCwEjfLkwUpr9p414y68wwWkyFcMOn5GeezqK-6KYwlEdbqFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4),
      50% / cover no-repeat;
    width: 1065.947px;
    height: 858.82px;
    transform: rotate(126.97deg);
    position: absolute;
    left: -70%;
    top: -30%;
    z-index: -1;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .statistics-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 48px;
    .statistic {
      position: relative;
      width: 100%;
      height: 100%;
      gap: 20px;
      .number {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 45%;
        left: 50%;
        font-family: Ubuntu;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
      }
      .desc {
        font-family: Ubuntu;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        color: #1e212c;
        text-align: center;
      }
      svg {
        width: 160px;
        height: 160px;
        fill: none;
        stroke-width: 5;
        transform: rotate(-90deg);
        circle {
          transform: translate(5px, 5px);
          &:last-of-type {
            stroke-dasharray: 471;
            stroke-dashoffset: calc(471 - (471 * var(--number) / 100));
          }
        }
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 475px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
