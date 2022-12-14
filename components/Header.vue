<template>
  <header>
    <div class="header">
      <NuxtLink to="/">
        <img src="~/assets/images/header_logo.svg" height="38" alt="xincere Residence" />
      </NuxtLink>
      <div>
        <img src="~/assets/images/tel.svg" height="28" alt="tel" />
      </div>
    </div>
  </header>
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
.header {
  padding: 10px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px 0 #0000000d;
  background: white;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
}
@media only screen and (max-width: 980px) {
  .header {
    padding: 10px 20px;
  }
}
</style>
