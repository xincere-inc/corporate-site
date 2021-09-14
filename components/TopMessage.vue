<template>
  <div class="o-hidden">
    <div class="logo">
      <img src="~/assets/images/top_image.png" />
    </div>
    <div class="container">
      <div class="grid">
        <div class="text-box">
          <h1 class="copy">
            ライフステージの変化をなめらかにする
          </h1>
          <div class="message">
            一般的にライフステージが変化するタイミング(入学・就職・結婚・出産)で、人は住まいを変えます。その重要な出来事で発生する“不動産の売買・賃貸”に伴う手続きなどを、我々はその時代における最善の方法を用いて、より簡単に・効率化していきます。
          </div>
        </div>
      </div>
      <div>
        <div class="name">
          <p>代表取締役社長</p>
          <img src="~/assets/images/signature.png" height="32" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 980px) {
  .o-hidden {
    overflow: hidden;
  }
  .logo {
    max-width: 1440px;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    position: relative;
    top: -250px;
    left: 0;

    right: 0;
    img {
      width: 120%;
    }
  }
  .container {
    max-width: 980px;
    margin: -330px auto 0 auto;
    overflow: hidden;
  }
  .copy {
    font-style: normal;
    font-weight: 300;
    font-size: 34px;
    line-height: 180%;
    /* or 61px */

    display: flex;
    align-items: center;
    letter-spacing: 0.2em;
    margin-bottom: 10px;
    color: #333333;
  }

  .message {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 250%;

    display: flex;
    align-items: center;
    letter-spacing: 0.14em;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(4, [col-start] 1fr);
  }

  .text-box {
    grid-column: col-start 2 / span 3;
    grid-row: 1 / 3;
  }
}
.name {
  text-align: right;
  margin-top: 20px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  margin-left: auto;
  letter-spacing: 0.125em;
  p {
    margin-bottom: 10px;
  }
}

@media only screen and (max-width: 980px) {
  .container {
    margin-top: 40px;
  }

  .logo {
    justify-content: center;
    display: flex;
    margin-top: -100px;
    overflow: hidden;
    img {
      width: 120%;
      height: intrinsic;
      object-fit: contain;
    }
  }
  .copy {
    font-weight: 300;
    font-size: 21px;
    line-height: 180%;
    /* or 38px */

    display: flex;
    align-items: center;
    letter-spacing: 0.2em;

    /* Gray 1 */

    color: #333333;
  }
  .message {
    font-weight: 300;
    font-size: 14px;
    line-height: 200%;
    /* or 28px */

    display: flex;
    align-items: center;
    letter-spacing: 0.14em;
  }
}
</style>
