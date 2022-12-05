<template>
  <div class="top">
    <img class="logo" src="~/assets/images/dx-support/logo.svg" />
    <img class="sp-only bg-image" src="~/assets/images/dx-support/top_sp.jpg" />
    <img class="pc-only bg-image" src="~/assets/images/dx-support/top.jpg" />
    <div class="copy">
      <p>RECRUIT</p>
      <h1>採用と選考</h1>
      <p>
        シンシアに興味を<br />
        持ってくださったみなさんへ。
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.logo {
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 20;
}
.bg-image {
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
  filter: brightness(0.5);
}
.sp-only {
  display: block;
}
.pc-only {
  display: none;
}
.copy {
  position: absolute;
  color: white;
  z-index: 10;
  top: 120px;
  text-align: center;
  width: 100%;
  h1 {
    margin-top: 20px;
    margin-bottom: 40px;
  }
}

.top {
  height: 500px;
  position: relative;
}
@media all and (min-width: 980px) {
  .sp-only {
    display: none;
  }
  .pc-only {
    display: block;
  }
  .top {
    height: 480px;
    position: relative;
  }
  .copy {
    position: absolute;
    color: white;
    z-index: 10;
    top: 110px;
    text-align: center;
    width: 100%;
    h1 {
      margin-top: 20px;
      margin-bottom: 40px;
    }
  }
}
</style>
