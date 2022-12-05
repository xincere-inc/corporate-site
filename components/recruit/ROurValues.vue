<template>
  <section class="container">
    <RH2 etitle="Our Values" title="バリューについて" />
    <div></div>
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
    grid-template-columns: 500px 1fr;
  }
}
</style>
