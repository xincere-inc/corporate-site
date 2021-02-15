<template>
  <div class="wrapper">
    <img src="~/assets/images/left_door.png" class="left_door" />
    <div class="container">
      <h2>
        役員紹介
      </h2>
      <div class="grid">
        <div class="text-box">
          <h3><span>代表取締役社長</span>徐 聖博</h3>
          <p>
            東京大学大学院情報理工学系研究科コンピュータ科学専攻にて、人工知能の研究し修士号取得。ソフトウェアエンジニアとして、スタートアップ、大手上場企業、外資系テック企業など様々な会社にてエンジニアリングを経験する。2020年に自身の持つ”宅地建物取引士”免許を用いて起業。
          </p>
        </div>
        <div class="image-box">
          <img src="~/assets/images/board/president.jpg" style="width: 100%;" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (max-width: 980px) {
  .container {
    margin-top: 100px;
  }
  .grid {
    display: grid;
  }
  .image-box {
    order: 1;
    margin: 0 -30px;
  }
  h3 {
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    align-items: center;
    letter-spacing: 0.2em;

    /* Gray 2 */

    color: #4f4f4f;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .text-box {
    order: 2;
    span {
      display: block;
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 19px;
      align-items: center;
      letter-spacing: 0.2em;
      margin-bottom: 5px;

      /* Gray 3 */

      color: #828282;
    }
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 200%;
      /* or 26px */

      align-items: center;
      text-align: justify;
      letter-spacing: 0.1em;

      /* Gray 2 */

      color: #4f4f4f;
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
  .left_door {
    height: 285px;
    position: absolute;
    left: 0;
    bottom: -120px;
  }
}

@media only screen and (max-width: 1440px) {
  .left_door {
    display: none;
  }
}

@media only screen and (min-width: 980px) {
  .container {
    max-width: 980px;
    margin: 150px auto 0 auto;
  }

  a {
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    letter-spacing: 0.05em;

    text-decoration: none;
    color: #828282;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(16, [col-start] 1fr);
  }

  .image-box {
    grid-column: col-start 8 / span 9;
  }

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: 0.2em;
  }

  .text-box {
    grid-column: col-start 1 / span 6;
    span {
      display: block;
      font-weight: 300;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: 0.2em;
      margin-bottom: 5px;

      /* Gray 3 */

      color: #828282;
    }
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
