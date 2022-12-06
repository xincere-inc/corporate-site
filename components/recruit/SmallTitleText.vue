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
  margin-bottom: 40px;
} 

.text::before {
  content: '';
  display: inline-block;
  width: 60px;
  height: 60px;
  background-image: url(~/assets/images/icons/green_circle.png);
  background-size: contain;
}

.text {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  /* or 80% */
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #4F4F4F;
}

p {
  font-size: 16px;
}

</style>
