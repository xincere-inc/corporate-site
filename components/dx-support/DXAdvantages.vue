<template>
  <div class="advantage-bg">
    <DXH2Header en_title="OUR ADVANTAGES" title="シンシアを選ぶメリット" />
    <div class="features">
      <div style="margin: auto">
        <p class="merits">
          <span class="merits__number"> 1 </span>
          事業の成長マイルストーンを予め相談できるため長期・短期の開発計画を理解しながら進められる
        </p>
        <p class="merits">
          <span class="merits__number"> 2 </span>
          自社でも事業を運営しているため事業の目的にフォーカスした開発を提案できる
        </p>

        <p class="merits">
          <span class="merits__number"> 3 </span>
          実際に事業を進めている経験豊富なメンバーが知恵を持ち寄り進める
        </p>
      </div>
      <div style="margin: auto">
        <img
          style="width: 100%; margin: auto"
          src="~/assets/images/dx-support/advantages.svg"
        />
      </div>
    </div>
    <ApplyLink />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DXH2Header from "./DXH2Header.vue";
import ApplyLink from "../ApplyLink.vue";

export default Vue.extend({
  components: {
    DXH2Header,
    ApplyLink,
  },
});
</script>

<style lang="scss" scoped>
.advantage-bg {
  margin-top: 60px;
  background-color: #f2f3f4;
  padding: 20px 30px 40px;
}
.features {
  display: block;
}
.merits {
  position: relative;
  background-color: white;
  border: 2px solid #518c3c;
  padding: 16px 32px;
  border-radius: 8px;
  margin-bottom: 40px;

  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #4f4f4f;
  &__number {
    position: absolute;
    left: -24px;
    top: -24px;
    border-radius: 100px;
    background-color: #518c3c;
    color: white;
    width: 48px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    font-size: 32px;
  }
}
img {
  margin-top: 40px;
}
@media all and (min-width: 980px) {
  .features {
    width: 1024px;
    margin: 40px auto 0;
    display: grid;
    grid-template-columns: 500px 1fr;
    justify-items: end;
  }
  .merits {
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
