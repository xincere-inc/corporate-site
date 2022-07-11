<template>
  <div class="bg-gray">
    <div class="container">
      <h2>招聘职位</h2>
      <div class="grid">
        <nuxt-link to="/recruit/software_engineer" class="grid-box">
          <div class="recruit-grid">
            <div class="text-box">
              <h3>软件工程师</h3>
              <p>针对Xincere Residence等Xincere运营的系统进行开发。</p>
            </div>
          </div>
          <div class="arrow">
            <img src="~/assets/images/icons/arrow.svg" height="11px" />
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  .grid {
    display: grid;
    grid-auto-rows: minmax(150px auto);
    grid-gap: 20px;
  }

  .grid-box {
    background-color: #ffffff;
    padding: 20px;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(16, [col-start] 1fr);
    .recruit-grid {
      grid-column: col-start 1 / span 14;
      font-weight: 300;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      display: flex;
      align-items: center;
      text-align: justify;
      letter-spacing: 0.05em;
    }
    .arrow {
      grid-column: col-start 16 / span 1;
      text-align: center;
    }
  }
  .bg-gray {
    padding: 30px 0;
    margin-top: 100px;
  }
}
@media only screen and (min-width: 980px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 150px;
    grid-gap: 20px;
  }

  .grid-box {
    background-color: #ffffff;
    padding: 30px;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(16, [col-start] 1fr);
    .recruit-grid {
      grid-column: col-start 1 / span 14;
      font-weight: 300;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      display: flex;
      align-items: center;
      text-align: justify;
      letter-spacing: 0.05em;
    }
    .arrow {
      grid-column: col-start 16 / span 1;
      text-align: center;
    }
  }
  .container {
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

a {
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05em;

  text-decoration: none;
  color: #828282;
}
</style>
