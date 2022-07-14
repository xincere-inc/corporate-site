<template>
  <div class="dx-background">
    <DXH2Header
      en_title="PROBLEMS IN NEW BUSINESS PROJECTS"
      title="新規サービス<br/>立ち上げにおける課題"
    />
    <div class="fetures">
      <div class="items">
        <img src="~/assets/images/dx-support/specification.svg" />
        <h3>SPECIFICATIONS</h3>
        <p>
          アイディアはあるが細かい仕様<br />
          が決められず受託企業に頼めない
        </p>
      </div>
      <div class="items">
        <img src="~/assets/images/dx-support/talents.svg" />
        <h3>TALENTED RESOURCES</h3>
        <p>
          開発に必要な優秀なタレントを<br />
          集められず開発が思うように行かない
        </p>
      </div>
      <div class="items">
        <img src="~/assets/images/dx-support/risk.svg" />
        <h3>RECRUITMENT RISK</h3>
        <p>
          社員としてリソースを増やすと<br />
          リスクを抱えてしまう
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DXH2Header from "./DXH2Header.vue";

export default Vue.extend({
  components: {
    DXH2Header,
  },
});
</script>

<style lang="scss" scoped>
.dx-background {
  background-color: #f2f3f4;
  padding-bottom: 60px;
}
.fetures {
  display: block;
  text-align: center;
  .items {
    margin-top: 40px;
    h3 {
      font-weight: 600;
      font-size: 18px;
      line-height: 26px;

      /* primary/100 */

      color: #4f4f4f;
    }
    p {
      font-weight: 300;
      font-size: 14px;
      line-height: 22px;

      color: #4f4f4f;
    }
  }
}
@media all and (min-width: 980px) {
  .fetures {
    width: 1024px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;

    .items {
      margin-top: 40px;
      h3 {
        font-weight: 600;
        font-size: 18px;
        line-height: 26px;

        /* primary/100 */

        color: #4f4f4f;
      }
      p {
        font-weight: 300;
        font-size: 14px;
        line-height: 22px;

        color: #4f4f4f;
      }
    }
  }
}
</style>
