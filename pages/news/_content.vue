<template>
  <div>
    <div class="new-content">
      <main class="news">
        <h1 class="content__h1">{{ title }}</h1>
        <p class="content__created_at">{{ createdAt }}</p>

        <div class="static-page-md" v-html="content" />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    title: "税理士法人グランサーズ様提携",
    createdAt: "2022/01/11（月）",
    content: "<p>税理士法人グランサーズ様と提携しました！</p>"
  }),
})
</script>

<style lang="scss" scoped>
</style>
