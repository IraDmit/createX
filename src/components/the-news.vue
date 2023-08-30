<template>
  <div class="container news-content">
    <h3 class="title">Recent news</h3>
    <div class="news">
      <div class="new" v-for="(item, idx) in newsList" :key="'new' + idx">
        <img :src="item.image" class="new-img" />
        <div class="new-text">
          <h4 class="new-title">{{ item.title }}</h4>
          <div class="info">
            <div class="publishingHouse">
              {{ item.publishingHouse }}
            </div>
            <div class="data">{{ item.data }}</div>
            <div class="comments">
              <img src="../assets/images/mini-chat.svg" />
              <div class="number">
                {{ item.countComments }}
              </div>
            </div>
          </div>
          <div v-if="item.description" class="description">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
    <div class="more-information">
      <div class="learn-more">Explore all our news posts</div>
      <div class="btn">View all news</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          image:
            "https://s3-alpha-sig.figma.com/img/bae6/2295/631f7adc908aa3c09809e618ce8d7924?Expires=1694390400&Signature=aYMx3aGPmI9ip1k5w3sU1QSHU3w8mF~7kRHXMt-19Dw4BZpsTm7ElujSdUfOjPdVcx1af0w7fbA6fso0-QJSTl~U~qZ83D6~gC2GJhhj8wz5AHnID-8~cqEJl8JGfodj-xMS8xByLkpog95KlNKhP-hB6WkrPhCenMKNTaogzSJrJhtcleL6Zm1ref4GMwxURYlmAGBo3JcGtbo56phfKwpEqMegYnyd~vsDjKSPoC77KFp6qg5apZ0Y7qASuVTu8-OOp6BwzDDydyiSeKKRdrCGWpuabgD94wsu6q5y3TlOUZK866Rn6fg33Pj3TH9akcG600x4BdsdtWySF2pakQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          title: "How to Build Climate Change-Resilient Infrastructure",
          countComments: "4 comments",
          data: "June 24, 2020",
          publishingHouse: "Industry News",
          description:
            "Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...",
        },
        {
          image:
            "https://s3-alpha-sig.figma.com/img/d3ae/0069/a076d840be513d07538c5857de2b26a8?Expires=1694390400&Signature=iynEecvM~ZEbwAFK1Je3pjMe6C68dZKotdQfSkI30DTMPe03~7Ah3rcX5D8e-VW~Md7hDX6fpLVjNrHP5z6fIIPNJv~4cshV7890Z4-cwPlHgR2g6beZTADP6~iLU8hHgSxAIwIsUzy-9qIXaMod-OAhdUYMELTvC2OLHdsB1wWWRFnOZnGYHMbNWhrEU9Ebd42QMhc05txFI8V3wl2nNU6BNmSf78Wguvdfs5wvIIT~~XVoLQ6w9bJBsXb8LaEY76Ckew1slrWHq2c6ghOUpgGFvFtwCP~S8mdcxR160WWEsaYT0Ida0dI3GZFNhE-xbXQufwJ2-5OA4YTyG8zQpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          title: "How Construction Can Help Itself",
          countComments: "No comments",
          data: "June 12, 2020",
          publishingHouse: "Innovation",
          description: "",
        },
        {
          image:
            "https://s3-alpha-sig.figma.com/img/674a/2c13/f6d69ef2eee9ed03584b1e65b1bb8908?Expires=1694390400&Signature=ClXD-7achpVCsN6kFi~TCAKKlzwvQ4V481BBAvWkq2DIfgK4v8OobYl~lOxzwEUb4AEpB7Oy8ySYJKK66XmgLQ6DHxxHstLEJygFwpxs2lr5jV1EdHsBTaQrocw9aIcOAISwRizcDyjsoqAdv~q-GYUj5xxmCeS85sktBw9abaBLOWkap~8R6Zq9wKaT7-wRHjxGVEyIxRtoP8IKwxvUga3tF1ANeXG-yLUnP8Xy634fNqw4KYL0yEVHYoU~0qcfC-IEyw9QGn1ZIr22xcZlvWfi2Yhuwjt2Q6xwn2DGWxbJewH5ToaBips4HK1UUrR7HRZbCfu4LlTHjG9rh-Ii0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          title: "Types of Flooring Materials",
          countComments: "No comments",
          data: "December 1, 2019",
          publishingHouse: "Company News",
          description: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.news-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 180px;
  margin-bottom: 120px;
  .title {
    font-family: Ubuntu;
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 60px;
  }
  .news {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    .new {
      box-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03),
        0px 12px 10px -6px rgba(154, 156, 165, 0.04),
        0px 30px 24px -10px rgba(154, 156, 165, 0.05),
        0px 80px 80px -20px rgba(154, 156, 165, 0.08);
      border-radius: 4px;
      cursor: pointer;
      &:first-of-type {
        grid-row: 1 / span 2;
      }
      .new-text {
        padding: 24px;
        .new-title {
          font-family: Ubuntu;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 150%;
          color: #1e212c;
          transition: .3s;
        }
        .info {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #787a80;
          font-family: Ubuntu;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          margin-top: 12px;
          .comments {
            display: flex;
            gap: 8px;
          }
          & div {
            position: relative;
            &:not(:last-of-type)::before {
              content: "";
              position: absolute;
              transform: translateY(-50%);
              height: 12px;
              width: 1px;
              top: 50%;
              right: -6px;
              background-color: #787a80;
            }
          }
        }
      }
      .description {
        font-family: Ubuntu;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        color: #424551;
        margin-top: 16px;
      }
      &:hover {
        .new-title {
          color: #ff5a30;
        }
      }
    }
  }
}
</style>
