<template>
  <div class="top">
    <div class="container">
      <h1>
        {{ title }}
      </h1>
      <div class="wrapper-grid">
        <div class="grid" v-for="item in jdTable" :key="item.key">
          <div class="grid__title">
            {{ item.key }}
          </div>
          <div class="grid__item">{{ item.value }}</div>
        </div>
      </div>
      <div class="apply_link">
        <a href="https://forms.gle/sdEpyhFmpfV2n1D76">
          応募する
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import JobDescription from "@/components/JobDescription.vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    jdTable: {
      type: Object,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.apply_link {
  text-align: center;
  margin-top: 50px;
}
a {
  background: #518c3c;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-align: center;
  text-decoration: none;
  padding: 15px 80px;
}
h1 {
  font-style: normal;
  font-weight: 300;
  font-size: 21px;
  line-height: 180%;
  margin-bottom: 20px;
  /* or 38px */

  display: flex;
  align-items: center;
  letter-spacing: 0.2em;

  /* Gray 1 */

  color: #333333;
}
@media only screen and (max-width: 980px) {
  .top {
    margin-top: 50px;
    min-height: calc(100vh - 154px);
  }
  .container {
    margin: 0 30px 100px 30px;
  }
  .grid {
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    letter-spacing: 0.05em;
    margin-bottom: 20px;
    margin-top: 30px;

    /* Gray 2 */

    color: #4f4f4f;
    &__title {
      margin-bottom: 15px;
    }
    &__item {
      margin-bottom: 25px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  }
}

@media only screen and (min-width: 980px) {
  .top {
    margin-top: 100px;
    min-height: calc(100vh - 154px);
  }
  .container {
    max-width: 980px;
    margin: 0 auto;
    padding: 75px 0;
  }
  .wrapper-grid {
    display: grid;
    grid-auto-rows: minmax(14px, auto);
    grid-gap: 20px;
  }
  .grid {
    display: grid;
    grid-template-columns: 230px 1fr;
    grid-auto-rows: minmax(14px, auto);
    grid-gap: 20px;
    &__title {
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      letter-spacing: 0.05em;

      /* Gray 1 */

      color: #333333;
    }
    &__item {
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      letter-spacing: 0.05em;
      white-space: pre-wrap;
      word-wrap: break-word;

      color: #4f4f4f;
    }
  }
}
</style>
