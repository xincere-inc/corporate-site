<template>
  <div class="bg-gray">
    <div class="recruit_container">
      <div class="recruit_wrapper">
        <div class="text-center">
          <p>RECRUIT</p>
          <h2>採用と選考</h2>
          <p>シンシアに興味を持ってくださったみなさまへ</p>
        </div>
        <div>
          <nuxt-link to="/recruit" class="btn"> 採用ページ </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  background: #518c3c;
  border-radius: 4px;
  padding: 10px 16px;
  grid-gap: 10px;
  gap: 10px;
  color: white;
  font-size: 16px;
  line-height: 24px;
  width: 176px;
  margin: 40px auto 0;
  display: block;
  text-align: center;
}
@media only screen and (max-width: 980px) {
  h3 {
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    /* Gray 1 */

    color: #333333;
  }
  .bg-gray {
    margin-top: 100px;
  }
  .recruit_container {
    padding: 30px 0;
  }
}
@media only screen and (min-width: 980px) {
  .recruit_wrapper {
    max-width: 980px;
    margin: 0 auto;
    padding: 75px 0;
  }
  h3 {
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.05em;
    margin-bottom: 15px;

    /* Gray 1 */

    color: #333333;
  }
  .bg-gray {
    margin-top: 150px;
  }
}
.bg-gray {
  background-color: #f8f8f8;
}
.text-center {
  text-align: center;
  color: white;
}
h2 {
  display: inline-block;
  color: white;
}
a {
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05em;

  text-decoration: none;
  color: #828282;
}
.bg-gray {
  background-image: url("~/assets/images/dx-support/top.jpg");
  background-position: center;
  background-size: cover;
}
.recruit_container {
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
}
</style>
