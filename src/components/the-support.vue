<template>
  <div class="bg-gray">
    <div class="container content-wrp">
      <h3 class="title">Supported by 12+ partners</h3>
      <div class="partners">
        <img
          :src="item.icon"
          class="partner"
          v-for="(item, idx) in partnerList"
          :key="'partner' + idx"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partnerList: [
        {
          icon: "https://s3-alpha-sig.figma.com/img/c5e5/b91c/105ec894eb955e978d7274a029dee59c?Expires=1693785600&Signature=bpsQ4md014khD9y2HmoduoeZQMA9WfTxSp4zJQOYGlKXYJQP3FQenb0Zbq4A3emGiRl9WUvHexe8DW-1hRiidX~pa9kPaCSt1LXzSZzh26OSm8T4Bkoe1PyfDXv1y0hgZ9yum4wOLQDDRxPt9z8U-sntoSqKURX8XbY-LOciNyxiwZ~qCfCI2fyNevPe3iiyA7B4kEcskREViOask4RL4nUx13Hm1mzKhlenhB4JhQi9P9en6wKcjMzWrZ2XwtPw8jUEBzOFoiLRDRKM6hzxgWX-TjipnTdHIWyhsAmqjpmEd~Se3UrdhXlcchARCxaN2SaGYBnJv5prAJyO3DG3jg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          icon: "https://s3-alpha-sig.figma.com/img/a87b/fef2/d8e12e5fe4bd89f45142880d1a891387?Expires=1693785600&Signature=YhJPL3MTajeCrwpSFD7-HzaPJM8bm6KVBMHAbW6mRkjL8vSOOhQyqHQ5~kE7~0n7VUoowQCJDzEoxgoafVCS8wuZbrFAxD3bB~vqjMPFNYsa6P6hC9mP44Gks~kVQPHf0jzHHm0fdyLJ6hydK39gwEZ9MAJxFwlS2~ndG855N3iKJikUPTVdpTKrg4g4dXc8XdXrt6U-5B5nQ7ZOrdbMbIkIhr~zQniF~ulD1w4ZTA1QbVPR1MEJEgv1Oxn69fSnhkvCp5tZlXiCiWm79pjovLC-LX8-nTgltQ3YoCKRfkmLbyEKFB8oA0RNw~ZthRmgdZZ2Dw4fAf8awcBOREA29g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          icon: "https://s3-alpha-sig.figma.com/img/6350/0650/4a0304c6115a1fb006467546f1cf3e3f?Expires=1693785600&Signature=XqGxuUENAor~pBE3gIid5Beeb7T-WIjNe3ed18qmM92onyj8CNJTlVWijoWijupGGZGgzfyFXNggYwqaKYSbkGh8J5p~ASYmD2kRDXTT~~bnBx6RXr~VtK0~0dlFk7z1Qm-uar2WzT00l8i1gcJRpaC1AGdSviZCja1M8Y66bX0Wvs1jMlfzQZPmneIXmwY04H3LvejJm7WhPnvRQFLWnl-hgngIw606ua1rU66ie7GEo0qgX5LTqcfbABpAxHcivhkyEk5A9aNO1in9tkNCxT2Gte8Ar4P-M4YEaD5CvtztwVCGbV~HhHyWSITqap6NoSoE4f6LaJMwIKaigG3Bmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          icon: "https://s3-alpha-sig.figma.com/img/f8c3/0adc/dae91bf3c4eeabe51f5538366f88f239?Expires=1693785600&Signature=SMRi8ViEgVQMxuVJwfFc-382JfJIHFr5AlRlZFAEGI-scNsdtJ39NHuzP4LftNVcH7f6CYzNuCMY7Q8ydbNJ215q2HEG2v97lpAJRSfwBcp1bUVfBJAkeOpItTUhxiK-~0Ts2LapiZiQV5aF4j6cY4LoXW2fNqg7MQFOPLOGGv8DwA4YXzTBeWLksLp-K2CeTe9-h4q~gd0rPvMrZLfrLifY6t9K4lrjumHuJH6U0k2Tr1feu-rPU9aMkU9u01IITuNoxX7GS-0uQbuuOpuj3odQuHkJPscxqVPVfg6m3NTgRtHux9sEkHK-VJGdygl0-e37g-K4-z5UBVGKhmKQKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          icon: "https://s3-alpha-sig.figma.com/img/c915/d6bd/459e74913fa7983d9c8d5f1a6e621339?Expires=1693785600&Signature=RB~IUCWKHPABiDq-O7ITPZ1qXlLWKf92zCPEjkRNb3ICOalW76lkejQUAIYx3qH80yURuE5bwzlzEBhBjbvTniYFDvA79HxrxEvALxH~35dpstmaiCZOPSnEQms6kwXeokOYm-yMbRzwMgeajcDWeY9tN5tIDDqwKXIQG0dArb9NIkYvSjvFOSV-WTRcWwTGxBrDucro5nxyuj9Nen7seOwR~gQrZE1iu3VosXHLruNrC0TppT8VS46PoBW~eKwVJS4s7pBnIwQeRjkN6lQE6tD0sBXnYJ5BHYFkClOmbPl5knmVyfbuTh749Yu6ITZdovGychH2BQ~WEejZ~Mq5oA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          icon: "https://s3-alpha-sig.figma.com/img/6bab/cdb7/5a959a2b066cc908e29c4abac6c786f3?Expires=1693785600&Signature=L24pCY45Mc0~rRfyzEh~I1EHzaDFc8sk5lOaMZgcvAMp7aI1~4GkMzck3v3TCET-0pXjKo~JyiWBSrBLvdiqaaO~rJpwyb-fj6h6cRmcgsnpKIqZv7DFWiz8yqp4zCJaaV33M1Jbq1NGJgUHWVEKF3HkOCtPDS4NpnfqkB-KldGJtHYnLUWIPc7yvlhl4W6MNmfJaDiIRq-J-ghhBiJ741td80xT3k6~-hyaaCCgs2eF1vDHngUq2Hmwfva2w515U9LzwdwBZdDLaqHXaBSYnmlhWgXGnw2Levw1~5I0G2S2CcJUm-IsTMpEnE8~e6Ut0JQPwLVomu8Mosp0INE1Pg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content-wrp {
  display: flex;
  flex-direction: column;
  align-items: center;
  .partners {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .partner {
      width: 174px;
      height: 134px;
      filter: grayscale(0%);
      &:last-of-type{
          filter: grayscale(100%);
      }
      &:hover {
        &:not(:last-of-type) {
          filter: invert(100%);
        }
        &:last-of-type {
          filter: grayscale(0%);
        }
      }
    }
  }
  .title {
    font-family: Ubuntu;
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
}
</style>
