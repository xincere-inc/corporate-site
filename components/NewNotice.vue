<template>
  <div class="bg-gray">
    <div class="container">
      <h2>お知らせ</h2>
      <div class="grid">
        <div class="grid-box">
          <nuxt-link to="/recruit/software_engineer" class="recruit-grid">
            <div class="text-box">
              <h3><span class="date">2022/01/11（月）</span>税理士法人グランサーズ様提携</h3>
            </div>
          </nuxt-link>
          <div class="arrow">
            <img src="~/assets/images/icons/arrow.svg" height="11px" />
          </div>
        </div>
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
      background-color: #ffffff;
    }
  
    .grid-box {
      margin: 20px;
      padding-top: 12px;
      padding-bottom: 12px;
      align-items: center;
      display: grid;
      border-bottom: 2px solid #CDD0D3;
      grid-template-columns: repeat(16, [col-start] 1fr);
      .recruit-grid {
        grid-column: col-start 1 / span 14;
        font-weight: 300;
        font-size: 14px;
        line-height: 200%;

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
      grid-gap: 20px;
      background-color: #ffffff;
    }
  
    .grid-box {
      background-color: #ffffff;
      margin: 40px 70px;
      padding-top: 12px;
      padding-bottom: 12px;
      border-bottom: 2px solid #CDD0D3;
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
  .date {
    color: #518C3C;
    margin-left: 8px;
    margin-right: 8px;
  }

  </style>
  