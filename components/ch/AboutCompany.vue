<template>
  <div>
    <div class="container">
      <h2>
        公司概要
      </h2>
      <div class="grid">
        <div class="grid__title">
          公司名
        </div>
        <div class="grid__item">
          株式会社 Xincere
        </div>
        <div class="grid__title">
          法人
        </div>
        <div class="grid__item">
          总经理 徐 圣博
        </div>
        <div class="grid__title">
          所在地
        </div>
        <div class="grid__item">
          东京都港区南麻布19-8 509
        </div>
        <div class="grid__title">
          注册资金
        </div>
        <div class="grid__item">
          6,700万日元
        </div>
        <div class="grid__title">
          业务内容
        </div>
        <div class="grid__item">
          运营高级房产网站「Xincere Residence」
        </div>
        <div class="grid__title">
          住宅土地建筑物行业交易执照号
        </div>
        <div class="grid__item">
          东京都知事（1）第105089号
        </div>
        <div class="grid__title">
          加盟团体
        </div>
        <div class="grid__item">
          社团法人全日本不动产协会，社团法人不动产保证协会
        </div>
        <div class="grid__title">
          设立日期
        </div>
        <div class="grid__item">
          2020年6月8日
        </div>
      </div>
      <div class="apply_link">
        <a
          href="https://forms.gle/TiWhkAbmg63kuoLi8"
          target="_blank"
          rel="noreferrer noopener"
        >
          联系我们
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.apply_link {
  text-align: center;
  margin-top: 80px;
}
a {
  background: #518c3c;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-align: center;
  text-decoration: none;
  padding: 15px 80px;
}
@media only screen and (max-width: 980px) {
  .container {
    margin: 100px 30px;
  }
  .grid {
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    letter-spacing: 0.05em;

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
    padding: 75px 0;
  }
  .grid {
    display: grid;
    grid-template-columns: 230px 1fr;
    grid-auto-rows: 14px;
    grid-gap: 20px;
    &__title {
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      letter-spacing: 0.05em;

      /* Gray 1 */

      color: #333333;
    }
    &__item {
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      letter-spacing: 0.05em;

      /* Gray 2 */

      color: #4f4f4f;
    }
  }
}
</style>
