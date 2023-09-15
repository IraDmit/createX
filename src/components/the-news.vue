<template>
  <div class="container news-content">
    <h3 class="section-title">Recent news</h3>
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
          image: require("../assets/images/big-man.jpg"),
          title: "How to Build Climate Change-Resilient Infrastructure",
          countComments: "4 comments",
          data: "June 24, 2020",
          publishingHouse: "Industry News",
          description:
            "Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...",
        },
        {
          image: require("../assets/images/kaska.jpg"),

          title: "How Construction Can Help Itself",
          countComments: "No comments",
          data: "June 12, 2020",
          publishingHouse: "Innovation",
          description: "",
        },
        {
          image: require("../assets/images/floor.jpg"),

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
      img {
        max-width: 100%;
      }
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
          transition: 0.3s;
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
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      .new:first-of-type {
        grid-row: unset;
      }
      .new-img {
        width: 100%;
      }
    }
  }
}
</style>
