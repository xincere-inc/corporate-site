<template>
  <div>
    <div class="container">
      <h2>会社概要</h2>
      <div class="grid">
        <div class="grid__title">会社名</div>
        <div class="grid__item">株式会社シンシア</div>
        <div class="grid__title">代表者</div>
        <div class="grid__item">代表取締役社長 徐 聖博</div>
        <div class="grid__title">資本金</div>
        <div class="grid__item">6,700万円（資本準備金含む）</div>
        <div class="grid__title">事業内容</div>
        <div class="grid__item">
          高級不動産サイト「シンシアレジデンス」の運営
        </div>
        <div class="grid__title">宅地建物取引業免許番号</div>
        <div class="grid__item">東京都知事(1)第105089号</div>
        <div class="grid__title">加盟団体</div>
        <div class="grid__item">
          社団法人全日本不動産協会、社団法人不動産保証協会
        </div>
        <div class="grid__title">設立年月日</div>
        <div class="grid__item">2020年6月8日</div>
      </div>
      <ApplyLink />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ApplyLink from "@/components/ApplyLink.vue";

export default Vue.extend({
  components: {
    ApplyLink,
  },
});
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 980px) {
  .container {
    margin: 100px 30px;
  }
  .grid {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    align-items: center;

    /* Gray 2 */

    color: #4f4f4f;
    &__title {
      margin-bottom: 15px;
    }
    &__item {
      margin-bottom: 25px;
    }
  }
}

@media only screen and (min-width: 980px) {
  .container {
    max-width: 980px;
    margin: 0 auto;
    padding: 75px 0;
  }
  .grid {
    display: grid;
    grid-template-columns: 230px 1fr;
    grid-auto-rows: 14px;
    grid-gap: 20px;
    &__title {
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      letter-spacing: 0.05em;

      /* Gray 1 */

      color: #333333;
    }
    &__item {
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      letter-spacing: 0.05em;

      /* Gray 2 */

      color: #4f4f4f;
    }
  }
}
</style>
