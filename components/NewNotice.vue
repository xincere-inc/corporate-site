<template>
  <div class="bg-gray">
    <div class="container">
      <h2>お知らせ</h2>
      <div class="grid">
        <nuxt-link to="/recruit/software_engineer" class="grid-box">
          <div class="text-box">
            <h3><span class="date">2022/01/11（月）</span>税理士法人グランサーズ様提携</h3>
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
      line-height: 22px;
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
      background-color: #ffffff;
      box-sizing: border-box;
      padding: 20px;
    }
  
    .grid-box {
      border-bottom: 2px solid #CDD0D3;
      align-items: center;
      display: grid;
      grid-template-columns: repeat(16, [col-start] 1fr);
      .text-box {
        grid-column: col-start 1 / span 14;
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
      grid-gap: 20px;
      background-color: #ffffff;
      box-sizing: border-box;
      padding: 40px 75px;
    }
  
    .grid-box {
      padding-bottom: 8px;
      border-bottom: 2px solid #CDD0D3;
      display: grid;
      grid-template-columns: repeat(16, [col-start] 1fr);
      .text-box {
        grid-column: col-start 1 / span 14;
        margin-top: 6px;
        margin-bottom: 12px;

      }
      .arrow {
        grid-column: col-start 16 / span 1;
        text-align: center;
        margin-top: 6px;
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
    text-decoration: none;
    color: #828282;
  }
  .date {
    color: #518C3C;
    margin-left: 8px;
    margin-right: 8px;
  }

  </style>
  