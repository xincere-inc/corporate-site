<template>
  <div class="wrapper">
    <div class="contents">
      <h2 class="text">{{ title }}</h2>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>

.wrapper {
  margin-bottom: 48px;
}

.text::before {
  content: '';
  position: absolute;
  left: 0;
  width: 60px;
  height: 60px;
  background-image: url(~/assets/images/icons/green_circle.png);
  background-size: contain;
  z-index: -1;
}

.text {
  position: relative;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 32px;
  /* or 80% */
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #4F4F4F;
  padding-left: 16px;
  box-sizing: border-box;
}

p {
  font-size: 16px;
}

@media only screen and (max-width: 980px) {
  .text::before {
    width: 40px;
    height: 40px;
    top: -1px;
  }
  .text {
    font-size: 30px;
    padding-left: 12px;
    line-height: 40px;
  }
}

</style>
