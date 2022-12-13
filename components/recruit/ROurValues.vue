<template>
  <section class="container">
    <RH2 etitle="Work" title="この仕事で得られるもの" />
    <TitleText title="ビジョン" content="「お客様のライフステージの変化をなめらかにする」を掲げ、現在は不動産事業に注力しています。社会や業界をよりよくするための事業の立ち上げ期に携わることができます。　"/>
    <TitleText title="洗練されたワークフロー" content="平均会社経験数3社以上、外資テック企業、日系大手企業、スタートアップCTO在籍していた創設メンバーがいままでの経験を元に開発しているため、ハイレベルな開発ができ、多くの知見が得られます。　　"/>
    <TitleText title="経験豊富なスタッフと一緒に" content="社内には宅建の資格を持ったメンバーや不動産会社での就業経験があるメンバーもいるため、不動産に関する知識を身につけることができます。　"/>
    <TitleText title="開発について" content="0→1フェーズであるため、一緒に 'いい会社'とはなにか考え、制度・文化面から作っていくことができます。"/>
    <TitleText title="シンシアメンバー" content="創業者がエンジニアであるため、エンジニアリング起点に、どのようにビジネスをつくるか、長期的な技術戦略から一緒に考えることができます。"/>
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
    margin: 100px 30px;
  }
  .grid {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    align-items: center;

    /* Gray 2 */

    color: #4f4f4f;
    &__title {
      margin-bottom: 15px;
    }
    &__item {
      margin-bottom: 25px;
    }
  }
}

@media only screen and (min-width: 980px) {
  .container {
    max-width: 980px;
    margin: 0 auto;
    padding: 30px 0;
    display: block;
    background-image: url(~/assets/images/symbol.png);
    background-repeat: no-repeat;
    background-position : right 0 bottom 110px;
    background-size: 475px;
  }
  .grid {
    display: grid;
    grid-template-columns: 500px 1fr;
  }
}
</style>
