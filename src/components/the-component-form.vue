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
  background: url(https://s3-alpha-sig.figma.com/img/75b5/c0d6/aa3e13c7465310229d970e2c13d9d922?Expires=1694390400&Signature=Wc4F6r~nyEQiLc3Ox3cc93fywzasuQV-XRgZtdk9n55eLl83puBkoVv1Ln-1ExhYIasqsF4vS1N25WsCRwUy4NT-3im4IAoi-pnO~q4ZReueswX9yflGzCGHhsDVUqlfE0FbVVpEE15YrRbanU0c28pSnd6d9nFN-UWP6kiJ9qsjM9VBzPgK0UgQNkQGVJRfmqdj9MDJPWRx5kE8g1n~-FxLfo6e9zt8ZU01IbyhM3bTKO2GoYOhE9WakMNO5oolI0gwNRHKgalwe98-cXlnpiZ6wU73omxvhZ0IYMKMc0ZBqyRYzrEPBbT4V82~udcf5iuu5TXa3G0lswNiUk3Xlg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4),
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
