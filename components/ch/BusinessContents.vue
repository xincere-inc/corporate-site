<template>
  <div class="wrapper">
    <img src="~/assets/images/right_door.png" class="right_door"/>
    <div class="container">
      <h2>
        业务内容
      </h2>
      <div class="grid">
        <div class="image-box">
          <img
            src="~/assets/images/business/residence.png"
            style="width: 100%;"
          />
        </div>
        <div class="text-box">
          <h3>
            高级房产的中介业务
          </h3>
          <p>
            运营针对高级房产的租赁、买卖的房产媒体「Xincere Residence」。在您搬进高级房产、塔楼公寓时发生烦恼，我司精通高级房产的职员会为您排忧解。一切为了您的生活阶段的改变。
          </p>
          <p class="link">
            <a
              href="https://residence.xincere.jp"
              target="_blank"
              rel="noreferrer noopener"
              >详情请点击此处</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  letter-spacing: 0.05em;

  text-decoration: none;
  color: #828282;
}

@media only screen and (max-width: 980px) {
  .container {
    margin-top: 100px;
  }
  .image-box {
    margin: 0 -30px;
  }

  h3 {
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2em;

    /* Gray 2 */

    color: #4f4f4f;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .text-box {
    text-align: right;
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 200%;
      /* or 26px */

      display: flex;
      align-items: center;
      text-align: justify;
      letter-spacing: 0.1em;

      /* Gray 2 */

      color: #4f4f4f;
    }
    .link {
      text-align: right;
    }
    a {
      margin-top: 10px;
      margin-left: auto;
    }
  }
}
@media only screen and (min-width: 1440px) {
  .wrapper {
    max-width: 1440px;
    width: 1440px;
    position: relative;
    margin: 0 auto;
  }
  .right_door {
    height: 285px;
    position: absolute;
    right: 0;
    bottom: -120px;
  }
}

@media only screen and (max-width: 1440px) {
  .right_door {
    display: none;
  }
}
@media only screen and (min-width: 980px) {
  .container {
    max-width: 980px;
    margin: 150px auto 0 auto;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(16, [col-start] 1fr);
  }

  .image-box {
    grid-column: col-start 1 / span 9;
  }

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: 0.2em;
  }

  .text-box {
    margin-top: 20px;
    grid-column: col-start 11 / span 6;
    p {
      margin-top: 20px;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 200%;

      text-align: justify;
      letter-spacing: 0.1em;
    }
    .link {
      text-align: right;
    }
  }
}
</style>
