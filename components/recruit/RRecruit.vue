<template>
  <section>
    <RH2 etitle="Recruit" title="募集要項" />
    <div class="bg-gray">
      <div class="recruit_container">
        <div class="recruit_wrapper">
          <div class="text-center">
            <h2>シンシアの採用情報を掲載</h2>
            <p>
              募集要項選考フローに<br />
              ついてはWantedlyをご確認ください。
            </p>
          </div>
          <div>
            <a href="https://www.wantedly.com/companies/xincere-inc/projects" class="btn"> さっそくエントリーする </a>
          </div>
        </div>
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

.btn {
  display:flex;
  align-items: center;
  justify-content: center;
  background: #518c3c;
  border-radius: 4px;
  padding: 10px 16px;
  gap: 10px;
  color: white;
  font-size: 16px;
  line-height: 24px;
  height: 50px;
  width: 290px;
  margin: 32px auto 0;
}

@media only screen and (max-width: 980px) {

  .recruit_container {
    padding: 30px 0;
  }
}

@media only screen and (min-width: 980px) {
  .recruit_wrapper {
    max-width: 980px;
    margin: 0 auto;
    padding: 60px 0;
  }
}
.bg-gray {
  background-color: #f8f8f8;
}
.text-center {
  text-align: center;
  color: white;
  letter-spacing: 0.25em;
}
h2 {
  display: inline-block;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: white;
}
a {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05em;

  text-decoration: none;
  color: #828282;
}
.bg-gray {
  background-image: url("~/assets/images/recruit/top.png");
  background-position: 10%;
  background-size: cover;
}
.recruit_container {
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
}

</style>
