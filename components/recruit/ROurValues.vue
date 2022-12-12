<template>
  <section class="container">
    <RH2 etitle="Our Values" title="バリューについて" />
    <img
      src="~/assets/images/recruit/bg-logo.svg"
      class="bg_logo"
    />
    <TitleText
      title="ビジョン"
      content="「お客様のライフステージの変化をなめらかにする」を掲げ、現在は不動産事業に注力しています。社会や業界をよりよくするための事業の立ち上げ期に携わることができます。"
    />
    <TitleText
      title="洗練されたワークフロー"
      content="平均会社経験数3社以上、外資テック企業、日系大手企業、スタートアップCTO在籍していた創設メンバーがいままでの経験を元に開発しているため、ハイレベルな開発ができ、多くの知見が得られます。"
    />
    <TitleText
      title="経験豊富なスタッフと一緒に"
      content="社内には宅建の資格を持ったメンバーや不動産会社での就業経験があるメンバーもいるため、不動産に関する知識を身につけることができます。"
    />
    <TitleText
      title="開発について"
      content="0→1フェーズであるため、一緒に 'いい会社'とはなにか考え、制度・文化面から作っていくことができます。"
    />
    <TitleText
      title="シンシアメンバー"
      content="創業者がエンジニアであるため、エンジニアリング起点に、どのようにビジネスをつくるか、長期的な技術戦略から一緒に考えることができます。"
    />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import RH2 from "@/components/recruit/RH.vue";
import TitleText from "./TitleText.vue";

export default Vue.extend({
  components: {
    RH2,
    TitleText
},
});
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 980px) {
  .container {
    margin: 50px 20px;
    position: relative;
  }
  .bg_logo {
    position: absolute;
    z-index: -1;
    right: 0;
    top: 700px;
    width: 210px;
    height: auto;
  }
}

@media only screen and (min-width: 980px) {
  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 75px 0 30px 0;
    position: relative;
  }
  .bg_logo {
    position: absolute;
    z-index: -1;
    right: 0;
    top: 330px;
    width: 460px;
    height: auto;
  }
}
</style>
