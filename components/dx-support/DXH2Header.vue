<template>
  <div class="dx-h2header">
    <p><span v-html="en_title" /></p>
    <h2><span v-html="title" /></h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    en_title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.dx-h2header {
  width: 100%;
  padding-top: 40px;
  text-align: center;
  p {
    font-weight: 300;
    font-size: 10px;
    line-height: 100%;
    margin-bottom: 10px;

    color: #4f4f4f;
  }
  h2 {
    display: inline-block;
    position: relative;

    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    color: #4f4f4f;
  }

  h2:before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px; /*下線の上下位置調整*/
    display: inline-block;
    width: 100px; /*下線の幅*/
    height: 2px; /*下線の太さ*/
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translate(-50%); /*位置調整*/
    background-color: #518c3c; /*下線の色*/
  }
}
</style>
