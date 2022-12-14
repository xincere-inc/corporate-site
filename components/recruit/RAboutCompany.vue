<template>
  <section class="container">
    <RH2 etitle="About" title="どんな会社？" />
    <div class="grid">
      <div class="grid__title">
        <img
          src="~/assets/images/recruit/about.webp"
          class="grid__img"
        />
      </div>
      <div class="grid__item">
        <h3>ライフステージの変化をなめらかにする</h3>
        <p>
          一般的にライフステージが変化するタイミング(入学・就職・結婚・出産)で、人は住まいを変えます。その重要な出来事で発生する“不動産の売買・賃貸”に伴う手続きなどを、我々はその時代における最善の方法を用いて、より簡単に・効率化していきます。<br />
          高級不動産をメインにした賃貸・売買の不動産情報サイト「シンシアレジデンス」を運営しています。東京の高級不動産情報のほか、不動産の賃貸や売買に関する疑問を解消するコンテンツも掲載しています。"契約まで"の不動産仲介ではなく、入居後の新生活についてもサポートできるようにお客様に寄り添ったサービスを提供しております。
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import RH2 from "@/components/recruit/RH.vue";

export default Vue.extend({
  components: {
    RH2,
  },
});
</script>

<style lang="scss" scoped>
.grid {
  &__item {
    h3 {
      font-size: 28px;
      border-bottom: 3px solid #c1e2ab;
      margin-bottom: 24px;
      line-height: 40px;
    }
  }
}

@media only screen and (max-width: 980px) {
  .container {
    margin: 50px 20px;
  }
  .grid {
    font-size: 14px;
    line-height: 24px;
    align-items: center;

    /* Gray 2 */

    color: #4f4f4f;
    &__title {
      margin-bottom: 15px;
    }
    &__item > h3 {
      margin-bottom: 25px;
      h3 {
        font-size: 21px;
        line-height: 30px;
      }
    }
    &__img {
      width: 100%;
      height: auto;
    }
  }
}

@media only screen and (min-width: 980px) {
  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 75px 0 30px 0;
  }
  .grid {
    display: grid;
    grid-template-columns: 500px 1fr;
    p {
      font-size: 16px;
      line-height: 32px;
    }
    &__img {
      width: 460px;
      height: auto;
    }
  }
}
</style>
