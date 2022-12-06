<template>
  <section class="container">
    <RH2 etitle="Recruit" title="募集要項" />
    <div class="grid">
      <div class="grid-box">
        <SmallTitleText title="ソフトウェアエンジニア" content="シンシアレジデンスなど、シンシアで運営しているシステムを幅広く開発していただきます。フルスタックで開発することを想定しています。"/>
      </div>
      <div class="grid-box">
        <SmallTitleText title="ソフトウェアエンジニア" content="シンシアレジデンスなど、シンシアで運営しているシステムを幅広く開発していただきます。フルスタックで開発することを想定しています。"/>
      </div>
      <div class="grid-box">
        <SmallTitleText title="ソフトウェアエンジニア" content="シンシアレジデンスなど、シンシアで運営しているシステムを幅広く開発していただきます。フルスタックで開発することを想定しています。"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { onDeactivated } from "vue";
import RH2 from "@/components/recruit/RH.vue";
import SmallTitleText from "./SmallTitleText.vue";

export default Vue.extend({
  components: {
    RH2,
    onDeactivated,
    SmallTitleText
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
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
  }

  .grid-box {
    background: #FFFFFF;
    padding: 30px 20px;
    box-sizing: border-box;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

}
</style>
