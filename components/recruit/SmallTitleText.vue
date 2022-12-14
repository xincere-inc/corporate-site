<template>
  <div class="small_text_wrapper">
    <div class="contents">
      <p class="text">{{ title }}</p>
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
    }
  },
});
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 980px) {
  .small_text_wrapper {
    margin: 20px 10px 10px 10px;
  }
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
  font-size: 22px;
  line-height: 32px;
  /* or 80% */
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #4F4F4F;
  padding-left: 16px;
}

</style>
