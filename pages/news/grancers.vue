<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="container">
        <main class="news">
          <h1 class="content__h1">税理士法人グランサーズ様提携税理士法人グランサーズ様提携税理士法人グランサーズ様提携</h1>
          <p class="content__date">Date: 2022/01/11（月）</p>

          <div class="content__main">
            <h2 class="content__h2">これはテストです</h2>
            <p class="content__p">これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。</p>
            <h2 class="content__h2">これはテストです</h2>
            <p class="content__p">これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。</p>
            <h2 class="content__h2">これはテストです</h2>
            <p class="content__p">これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。これはテストです。</p>
          </div>
        </main>
      </div>
    </div>
    <Recruit />
    <AboutCompany />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue"

export default Vue.extend({
  components: {
    Header,
  },
  data: () => ({
    title: "税理士法人グランサーズ様提携税理士法人グランサーズ様提携税理士法人グランサーズ様提携",
    createdAt: "2022/01/11（月）",
    content: "<p>税理士法人グランサーズ様と提携しました！</p>"
  }),
})
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 1440px) {
  .wrapper {
    max-width: 1440px;
    width: 1440px;
    position: relative;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 980px) {
  .container {
    max-width: 980px;
    margin: 150px auto 0 auto;
  }

  .content {
    &__date {
      font-size: 24px;
      padding-bottom: 14px;
      margin-bottom: 30px;
      border-bottom: 1px solid #4f4f4f;
    }
    &__h1 {
      font-size: 32px;
      margin: 40px 0;
      line-height: 2;
    }
    &__h2 {
      font-size: 24px;
      margin: 10px 0;
      line-height: 2;
      font-weight: 600;
    }
    &__p {
      font-size: 18px;
    }
  }
}

@media only screen and (max-width: 980px) {
  .wrapper {
    margin: 0 30px;
  }
  .container {
    margin: 100px auto 0 auto;
  }
  .content {
    &__date {
      font-size: 18px;
      padding-bottom: 14px;
      margin-bottom: 30px;
      border-bottom: 1px solid #4f4f4f;
    }
    &__h1 {
      font-size: 24px;
      margin: 20px 0;
      line-height: 2;
    }
    &__main {
      font-size: 14px;
    }
    &__h2 {
      font-size: 20px;
      margin: 10px 0;
      line-height: 2;
      font-weight: 600;
    }
    &__p {
      font-size: 18px;
    }
  }
}
</style>
