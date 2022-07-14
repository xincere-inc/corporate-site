<template>
  <div>
    <Top />
    <Problems />
    <Features />
    <Advantages />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Top from "@/components/dx-support/DXTop.vue";
import Problems from "@/components/dx-support/DXProblems.vue";
import Features from "@/components/dx-support/DXFeatures.vue";
import Advantages from "@/components/dx-support/DXAdvantages.vue";

export default Vue.extend({
  components: {
    Top,
    Problems,
    Features,
    Advantages,
  },
  head() {
    return {
      title: "シンシアのDX支援事業について",
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
