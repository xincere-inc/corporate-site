<template>
  <div class="wrapper">
    <img src="~/assets/images/right_door.png" class="right_door" />
    <div class="container">
      <h2>事業内容</h2>
      <div class="grid">
        <div class="image-box">
          <img
            src="~/assets/images/business/residence.png"
            style="width: 100%"
          />
        </div>
        <div class="text-box">
          <h3>高級不動産仲介事業</h3>
          <p>
            高級不動産に特化した賃貸・売買の不動産メディア「シンシアレジデンス」を運営しています。高級不動産について知識豊富なスタッフが、高級不動産・タワーマンションに引っ越しする際に発生するお悩みにお答え致します。お客様のライフステージの変化に。
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
      <div class="grid" style="margin-top: 100px">
        <div class="image-box-dx">
          <img
            src="~/assets/images/business/dx_support.jpg"
            style="width: 100%"
          />
        </div>
        <div class="text-box-dx">
          <h3>DX支援事業</h3>
          <p>
            自社プロダクトの開発を通し、プロダクト運営経験豊富なメンバーが貴社のDX支援・プロダクト開発を致します。
            仕様が明確に定まっていない場合でも、一緒に検討するところからサポート致します。
          </p>
        </div>
      </div>
    </div>
    <div class="apply_link">
      <a
        href="https://forms.gle/TiWhkAbmg63kuoLi8"
        target="_blank"
        rel="noopener"
      >
        お問い合わせする
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.apply_link {
  text-align: center;
  margin-top: 80px;
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
}
.link {
  a {
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    letter-spacing: 0.05em;

    text-decoration: none;
    color: #828282;
  }
}

@media only screen and (max-width: 980px) {
  .container {
    margin-top: 100px;
  }
  .image-box,
  .image-box-dx {
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
  .text-box,
  .text-box-dx {
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

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: 0.2em;
  }

  .image-box {
    grid-column: col-start 1 / span 9;
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
  .image-box-dx {
    grid-column: col-start 8 / span 9;
    order: 2;
  }
  .text-box-dx {
    grid-column: col-start 1 / span 6;
    margin-top: 20px;
    order: 1;
    p {
      margin-top: 20px;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 200%;

      text-align: justify;
      letter-spacing: 0.1em;
    }
  }
}
</style>
