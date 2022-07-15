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
            "株式会社シンシアでは、新規プロジェクト立ち上げ時に発生する人材リソースの問題に対し支援を行っています。ぜひご気軽にお問い合わせください。",
        },
      ],
    };
  },
});
</script>
