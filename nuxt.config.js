const environment = process.env.NODE_ENV || "development";
const envSet = require(`./config/env.${environment}.js`);

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  devtools: envSet.devtools,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "株式会社シンシア",
    titleTemplate: "%s | 株式会社シンシア",
    meta: [
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "一般的にライフステージが変化するタイミング（入学・就職・結婚・出産）で、人は住まいを変えます。その重要な出来事で発生する  不動産の売買・賃貸  に伴う手続きなどを“”、我々はその時代における最善の方法を用いて、より簡単に・効率化していきます。"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://corp.xincere.jp/og_image.png"
      },
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content:
          "一般的にライフステージが変化するタイミング（入学・就職・結婚・出産）で、人は住まいを変えます。その重要な出来事で発生する  不動産の売買・賃貸  に伴う手続きなどを“”、我々はその時代における最善の方法を用いて、より簡単に・効率化していきます。"
      },
      {
        name: "keywords",
        content: "不動産仲介,ライフステージ,エンジニア"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      },
      {
        ref: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
      }
    ]
  },
  env: envSet,

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/google-analytics"
    // [
    //   "@nuxtjs/google-analytics",
    //   {
    //     id: envSet.gaKey
    //   }
    // ]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/gtm"],
  gtm: {
    id: envSet.gaTagKey
  },
  googleAnalytics: {
    id: envSet.gaTagKey
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
};
