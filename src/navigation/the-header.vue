<template>
  <div>
    <the-header-desctop v-if="!isMobile" />
    <the-header-mobile v-if="isMobile" />
  </div>
</template>

<script>
import theHeaderDesctop from "./the-header-desctop.vue";
import TheHeaderMobile from "./the-header-mobile.vue";
export default {
  components: { theHeaderDesctop, TheHeaderMobile },

  computed: {
    isMobile() {
      return window.innerWidth < 768;
    },
  },
};
</script>

<style lang="scss" scoped></style>
