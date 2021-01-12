<template>
  <div>
    <TopMessage />
    <BusinessContents />
    <BoardMembers />
    <Recruit />
    <AboutCompany />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopMessage from "@/components/TopMessage.vue";
import BusinessContents from "@/components/BusinessContents.vue";
import BoardMembers from "@/components/BoardMembers.vue";
import Recruit from "@/components/Recruit.vue";
import AboutCompany from "@/components/AboutCompany.vue";

export default Vue.extend({
  components: {
    TopMessage,
    BusinessContents,
    BoardMembers,
    AboutCompany
  }
});
</script>
