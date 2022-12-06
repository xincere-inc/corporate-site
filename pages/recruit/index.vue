<template>
  <div>
    <Top />
    <AboutCompany />
    <OurValues />
    <ROffice />
    <RRecruit />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Top from "@/components/recruit/RTop.vue";
import AboutCompany from "@/components/recruit/RAboutCompany.vue";
import OurValues from "@/components/recruit/ROurValues.vue";
import ROffice from "@/components/recruit/ROffice.vue";
import RRecruit from "@/components/recruit/RRecruit.vue";

export default Vue.extend({
  components: {
    Top,
    AboutCompany,
    OurValues,
    ROffice,
    RRecruit,
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
