<template>
  <div class="wrapper">
    <img src="~/assets/images/right_door.png" class="right_door"/>
    <div class="container">
      <h2>
        事業内容
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
            高級不動産仲介事業
          </h3>
          <p>
            高級不動産に特化した賃貸・売買の不動産メディア「シンシアレジデンス」を運営しています。高級不動産について知識豊富なスタッフが、高級不動産・タワーマンションに引っ越しするに発生するお悩みにお答え致します。お客様のライフステージの変化に。
          </p>
          <p class="link">
            <a
              href="https://residence.xincere.jp"
              target="_blank"
              rel="noreferrer noopener"
              >詳しくはこちら</a
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
