<template>
  <div>
    <TopMessage />
    <BusinessContents />
    <NewNotice />
    <BoardMembers />
    <Recruit />
    <AboutCompany />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopMessage from "@/components/TopMessage.vue";
import BusinessContents from "@/components/BusinessContents.vue";
import NewNotice from "@/components/NewNotice.vue";
import BoardMembers from "@/components/BoardMembers.vue";
import Recruit from "@/components/Recruit.vue";
import AboutCompany from "@/components/AboutCompany.vue";

export default Vue.extend({
  layout: "top",
  components: {
    TopMessage,
    BusinessContents,
    NewNotice,
    BoardMembers,
    AboutCompany,
    Recruit,
  },
  head() {
    return {
      title: "ライフステージの変化をなめらかにする",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            '一般的にライフステージが変化するタイミング(入学・就職・結婚・出産)で、人は住まいを変えます。その重要な出来事で発生する"不動産の売買・賃貸"に伴う手続きなどを、我々はその時代における最善の方法を用いて、より簡単に・効率化していきます。',
        },
      ],
    };
  },
});
</script>
