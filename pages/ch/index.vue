<template>
  <div>
    <TopMessage />
    <BusinessContents />
    <BoardMembers />
    <AboutCompany />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopMessage from "@/components/ch/TopMessage.vue";
import BusinessContents from "@/components/ch/BusinessContents.vue";
import BoardMembers from "@/components/ch/BoardMembers.vue";
import AboutCompany from "@/components/ch/AboutCompany.vue";

export default Vue.extend({
  layout: "top",
  components: {
    TopMessage,
    BusinessContents,
    BoardMembers,
    AboutCompany,
  },
  head() {
    return {
      title: "生活阶段变化的顺利进行",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "一般来说随着生活阶段发生变化的时机（入学、就业、结婚、生孩子），人们也会改变住所。在这个重要事件中伴随的“房产买卖、租赁”等相关手续，我们将使用当代最好的方法，使其更简单更有效率地进行。",
        },
      ],
    };
  },
});
</script>
