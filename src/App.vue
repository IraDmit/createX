<template>
  <div id="app">
    <the-header />
    <the-slider />
    <the-video />
    <the-advantages />
    <the-contact-form />
    <the-services />
    <the-projects />
    <the-support />
    <the-reviews />
    <the-statistics />
    <the-news />
    <the-component-form />
    <the-footer />
    <div class="go-to-top">
      <div class="btn"><img src="./assets/images/Up-chevron.svg" /></div>
    </div>
  </div>
</template>

<script>
import TheAdvantages from "./components/the-advantages.vue";
import TheContactForm from "./components/the-contact-form.vue";
import TheSlider from "./components/the-slider.vue";
import TheVideo from "./components/the-video.vue";
import TheServices from "./components/the-services.vue";
import theHeader from "./navigation/the-header.vue";
import TheProjects from "./components/the-projects.vue";
import TheSupport from "./components/the-support.vue";
import TheReviews from "./components/the-reviews.vue";
import TheNews from "./components/the-news.vue";
import TheStatistics from "./components/the-statistics.vue";
import TheComponentForm from "./components/the-component-form.vue";
import TheFooter from "./navigation/the-footer.vue";
export default {
  components: {
    theHeader,
    TheSlider,
    TheVideo,
    TheAdvantages,
    TheContactForm,
    TheServices,
    TheProjects,
    TheSupport,
    TheReviews,
    TheNews,
    TheStatistics,
    TheComponentForm,
    TheFooter,
  },
};
</script>

<style lang="scss">
.section-video {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 120px 0;
}
.section-title {
  margin-bottom: 24px;
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
.section-desc {
  margin-bottom: 60px;
  font-family: Ubuntu;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: #787a80;
}
.go-to-top {
  position: fixed;
  display: inline-flex;
  align-items: flex-end;
  gap: 16px;
  bottom: 20px;
  right: 20px;
  .up-btn {
    opacity: 0.6;
  }
  .btn {
    width: 40px;
    height: 40px;
    padding: 0;
    img {
      width: 23px;
      height: 40px;
    }
  }
}
</style>
