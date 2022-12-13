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
  margin-top: 40px;
} 

.text {
  background-image: url(~/assets/images/icons/green_circle.png);
  background-repeat: no-repeat;
  background-size: 60px;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  /* or 80% */
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  padding-left: 16px;
  color: #4F4F4F;
}

p {
  font-size: 16px;
}

</style>
