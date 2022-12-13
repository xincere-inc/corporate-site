<template>
  <div class="text-center">
    <span>{{ etitle }}</span>
    <h2>{{ title }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    etitle: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 980px) {
  .text-center {
    text-align: center;
  }

  span {
    font-size: 8px;
    line-height: 12px;
    align-items: center;
    text-align: center;
    letter-spacing: 1px;
    color: #4f4f4f;
  }

  h2 {
    font-size: 24px;
    line-height: 36px;
    align-items: center;
    color: #4f4f4f;
    margin: 10px auto 32px;
    display: inherit;
  }
}

@media only screen and (min-width: 980px) {
  .text-center {
    text-align: center;
  }

  span {
    font-size: 16px;
    align-items: center;
    text-align: center;
    letter-spacing: 1px;
  
    color: #4f4f4f;
  }
  
  h2 {
    font-weight: bold;
    font-size: 32px;
    align-items: center;
  
    color: #518c3c;
    margin: 10px auto 32px;
    display: inherit;
  }
}

</style>
