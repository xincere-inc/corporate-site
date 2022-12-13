<template>
  <section class="container">
    <RH2 etitle="About" title="どんな会社？" />
    <div class="grid">
      <div class="grid__title">
        <img
          src="~/assets/images/recruit/about.webp"
          width="460"
          height="auto"
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
@media only screen and (max-width: 980px) {
  .container {
    margin: 0 30px;
    padding:  40px 0 20px;
  }
  .grid {
    font-weight: bold;
    line-height: 20px;
    align-items: center;

    /* Gray 2 */

    color: #4f4f4f;
    &__title {
      margin-bottom: 15px;
    }
    &__item > h3 {
      margin-bottom: 25px;
      font-size: 21px;
      line-height: 32px;
      border-bottom: 3px solid #A9D68A;
    }
    &__item > p {
      font-size: 14px;
      font-weight: 300;
      line-height: 24px;
    }
    &__item > br {
      display: block;
      content: "";
      margin: 10px 0;
    }
  }
}

@media only screen and (min-width: 980px) {
  .container {
    max-width: 980px;
    margin: 0 auto;
    padding: 60px 0 30px;
  }
  .grid {
    display: grid;
    grid-template-columns: 500px 1fr;

    &__title {
      margin-bottom: 15px;
    }
    &__item > h3 {
      margin-bottom: 25px;
      font-size: 28px;
      border-bottom: 3px solid #A9D68A;
    }
    &__item > p {
      font-size: 16px;
      font-weight: 300;
      line-height: 32px;
    }
  }
}
</style>
