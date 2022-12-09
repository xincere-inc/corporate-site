<template>
  <div class="bg-gray">
    <div class="container">
      <h2>お知らせ</h2>
      <div class="grid">
        <new-notice
          date="2022/01/11（月）"
          title="税理士法人グランサーズ様提携"
          link="/news/grancers"
        />
        <new-notice
          date="2022/01/11（月）"
          title="税理士法人グランサーズ様提携"
          link="/news/grancers"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NewNotice from "@/components/NewNotice.vue";

export default Vue.extend({
  components: {
    NewNotice,
  },
});
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 980px) {
    .grid {
      display: grid;
      grid-auto-rows: minmax(150px auto);
      grid-gap: 20px;
      background-color: #ffffff;
      box-sizing: border-box;
      padding: 20px;
    }

    .bg-gray {
      padding: 30px 0;
      margin-top: 100px;
    }
  }
  @media only screen and (min-width: 980px) {
    .grid {
      display: grid;
      grid-gap: 20px;
      background-color: #ffffff;
      box-sizing: border-box;
      padding: 40px 75px;
    }

    .container {
      max-width: 980px;
      margin: 0 auto;
      padding: 75px 0;
    }
    .bg-gray {
      margin-top: 150px;
    }
  }
  .bg-gray {
    background-color: #f8f8f8;
  }

  .date {
    color: #518C3C;
    margin-left: 8px;
    margin-right: 8px;
  }

</style>
