<template>
  <section class="container">
    <RH2 etitle="Our Office" title="オフィスについて" />
    <div class="grid">
      <div class="grid-box">
        <img class="img" src="~/assets/images/recruit/office1.png" />
        <p>未来的なデザインの建物</p>
      </div>
      <div class="grid-box">
        <img class="img" src="~/assets/images/recruit/office2.png" />
        <p>落ち着いた共有スペース</p>
      </div>
      <div class="grid-box">
        <img class="img" src="~/assets/images/recruit/office3.png" />
        <p>開放的なオフィス</p>
      </div>
      <div class="grid-box">
        <img class="img" src="~/assets/images/recruit/office4.png" />
        <p>未来的なデザインの建物（的な文章）</p>
      </div>
      <div class="grid-box">
        <img class="img" src="~/assets/images/recruit/office5.png" />
        <p>未来的なデザインの建物（的な文章）</p>
      </div>
      <div class="grid-box">
        <img class="img" src="~/assets/images/recruit/office6.png" />
        <p>未来的なデザインの建物（的な文章）</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { onDeactivated } from "vue";
import RH2 from "@/components/recruit/RH.vue";

export default Vue.extend({
  components: {
    RH2,
    onDeactivated
},
});
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 980px) {
  .container {
    margin: 50px 20px;
  }
  .grid {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    align-items: center;

    /* Gray 2 */

    color: #4f4f4f;
    .grid-box {
      margin-bottom: 10px;
      .img {
        display: block;
        height: auto;
        width: 100%;
      }
      p {
        padding: 5px 0;
        text-align: center;
      }
    }
  }
}

@media only screen and (min-width: 980px) {
  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 30px 0 60px 0;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
  }

  .img {
    display: block;
    height: auto;
    width: 100%;
  }
  p {
    padding: 5px 0;
  }
}
</style>
