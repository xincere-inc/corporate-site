<template>
  <div>
    <header class="container">
      <img src="~/assets/images/logo.svg" class="logo" />
    </header>
    <Nuxt />
    <footer>
      Copyright © Xincere All Rights Reserved.
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 980px) {
  .container {
    max-width: 980px;
    margin: 0 auto;
  }
  .logo {
    position: absolute;
    top: 60px;
  }
}
@media only screen and (max-width: 980px) {
  header {
    margin-top: 30px;
  }
}
footer {
  font-size: 12px;
  padding: 20px 0;
  text-align: center;
  color: #333333;
  background-color: #f8f8f8;
}
</style>

<style>
@media only screen and (max-width: 980px) {
  .container {
    margin: 0 30px;
  }
}

html {
  font-family: "Noto Sans JP", sans-serif, "Source Sans Pro", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  letter-spacing: 0.14rem;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #4f4f4f;
  margin: 0 auto;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h2 {
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 41px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2em;
  margin-bottom: 30px;

  color: #518c3c;
}
</style>
