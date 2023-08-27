<template>
  <div class="container">
    <h3 class="title">
      Browse our selected projects and learn more about our work
    </h3>
    <div class="projects-content">
      <div
        class="project"
        v-for="(item, idx) in projectsList"
        :key="'project' + idx"
      >
        <img :src="item.img" class="box-img" />
        <div class="information">
          <div class="project-name">{{ item.title }}</div>
          <div class="project-desc">{{ item.desc }}</div>
          <button class="more">View Project</button>
        </div>
      </div>
    </div>
    <div class="more-information">
      <div class="learn-more">Explore all our works</div>
      <div class="btn">View portfolio</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectsList: [
        {
          title: "Red Finger Building",
          desc: "Business Centers",
          img: "https://s3-alpha-sig.figma.com/img/bcc0/76f1/e55e41c3618d544882c733c9df6994fc?Expires=1693785600&Signature=Fg8xjUuhMbi8fa7mmkd7ALpOESE15EPL7Krt1ZnuKGu-BZWgpCVlauj7~2s7XmXsj1M1xEKb8aI~EWWYtrDeLoJLE6KwF1YQdjmea9rK5BKnZEXNC2UqUYJSWx93JXYxTr0g57077S1lD~weDe2Ut12AijC4vjg5z8~IZvCb2CCN3Mb-CV71Ie~~LqcXEd7jnf6cBww-egBoxgDf0snrqua6HGtze9rRV4YW5Gm5nxyLa7Gfl9mxPX4UlyxPlARgaokDBPOTa1XoNgXr~ZWRfwCGCLs5Bp83S6Epx~aOdD3jtqaQmWmatWGaz8ba4xqUTZ3UCj4hDCHoxPJpCgkxOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          title: "Cubes Building",
          desc: "Business Centers",
          img: "https://s3-alpha-sig.figma.com/img/2311/78ad/421618d5ac84c5165746c5f0e741ece2?Expires=1693785600&Signature=L2NkruOXYkCq-qK5Z6AsnIytQg42ljO0oT2k5bgvJje01GfTq9-zFy5XaW1UUSEEv~KPFTLSEZ0O9r7gLo~h6uRetTDhW58rZ6srQZJPN5ta54mzcosVxE~cDd4mVc9mPyEuz~uxZxxanjnsv30iigHn0JAcZxM9SFByo4ygsrXup-jM4H2wZucTkvjalODzxy-7TldGWd9kAs4GovS9HVZANeSsI1PIEBxy7YxYU-1i9My9mA55C3Ns8Ib1nbORXE999Sv073tJVUYFjqHVSYgWQ8YChbhilFs9bCl2pS90-DQ-x2rLMQAGjnnEuKZ~lpRHQss7dM8~ubn2NDn4sw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          title: "The Pencil Building",
          desc: "Stores & Malls",
          img: "https://s3-alpha-sig.figma.com/img/83e8/83c7/e31ecaae040c14943844c1fc4bafbe3a?Expires=1693785600&Signature=FG7bcMaWpHDBE7Fy8mj0AtZM9IvCtlp-puW95QahzU9XHSdMRW-2hGgcSBLSc7vlYpXChlb-v5gNby0gzboQB7FrPAO-9VoLqm27D5KxGRtNYniLXnlWxsYyHAdI2B8VF2ZlMbClWJqxCuuOkJqcOcBGObmIxlS6lJhE6GT3TAcQ744z5B0Ub8Xg1xby7uKxWFA~-OWP~FL8T6X7xxTVPnaV2CyluAzrO--GiIfbWlTvKUSLPOdRTve9z8E9h9~mVkl20y1zTDGay61bP8AtBs3tnh3DEsTzct-cchrQo1BbOtBWw5~KCtylh0DBT~ceGLn1ls06Uqcg9VnuoTON9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-family: Ubuntu;
  font-size: 46px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin: 205px 0 60px 0;
  width: 705px;
}
.projects-content {
  display: flex;
  justify-content: space-between;
  .project {
    position: relative;
    display: flex;
    align-items: center;
    width: 390px;
    height: 440px;
    padding-bottom: 0px;
    flex-direction: column;
    gap: 16px;
    flex-shrink: 0;
    overflow: hidden;
    box-shadow: 0px 4px 4px -4px rgba(30, 33, 44, 0.03),
      0px 12px 10px -6px rgba(154, 156, 165, 0.04),
      0px 30px 24px -10px rgba(154, 156, 165, 0.05),
      0px 80px 80px -20px rgba(154, 156, 165, 0.08);
    border-radius: 4px;
    .information {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      bottom: -75px;
      left: 0;
      background-color: #fff;
      width: 100%;
      transition: 0.3s;
      padding: 24px;
      .project-name {
        font-family: Ubuntu;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
      }
      .project-desc {
        font-family: Ubuntu;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        color: #787a80;
        margin-bottom: 24px;
      }
      .more {
        background-color: #fff;
        display: inline-flex;
        padding: 0px 32px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        border-radius: 4px;
        border: 1px solid #ff5a30;
        color: var(--primary, #ff5a30);
        font-family: Ubuntu;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
    }
    .box-img {
      width: 100%;
    }
    &:hover .information {
      bottom: 0;
    }
  }
}
.more-information {
  display: flex;
  justify-content: center;
}
</style>
