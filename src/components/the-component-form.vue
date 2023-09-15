<template>
  <div class="section-form">
    <div class="container">
      <the-form />
    </div>
  </div>
</template>

<script>
import theForm from "./the-form.vue";
export default {
  components: { theForm },
};
</script>

<style lang="scss" scoped>
.section-form {
  width: 100%;
  padding: 80px 0;
  background: url('../assets/images/bg-build.jpg'),
    lightgray 50% / cover no-repeat;
  .container {
    display: flex;
    justify-content: flex-end;
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
}
</style>
