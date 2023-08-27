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
</style>
