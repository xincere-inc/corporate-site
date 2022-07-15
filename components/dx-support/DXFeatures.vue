<template>
  <div>
    <DXH2Header
      en_title="DIFFERENCE"
      title="従来の受託開発と<br/>月額制開発チームレンタルの違い"
    />

    <div class="fetures">
      <div class="">
        <img src="~/assets/images/dx-support/difference.svg" />
      </div>
      <div class="">
        <img src="~/assets/images/dx-support/strength.svg" />
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
.fetures {
  display: block;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  img {
    width: 100%;
  }
}
@media all and (min-width: 980px) {
  .fetures {
    width: 1024px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: end;
    img {
      width: 90%;
    }
  }
}
</style>
