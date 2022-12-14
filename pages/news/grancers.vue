<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="container">
        <main class="news">
          <h1 class="content__h1">
            バックオフィスのアウトソーシングサービス『SUPPORT+iA』（サポーティア）や、財務会計・DXコンサルティングサービスを運営する「グランサーズ株式会社」と「株式会社シンシア」が業務提携！
          </h1>
          <p class="content__date">Date: 2022/11/15（火）</p>

          <div class="content__main">
            <p class="content__p">
              DX支援事業及び高級不動産に特化した賃貸・売買の不動産メディア「シンシアレジデンス」を運営する株式会社シンシア（本社：東京都渋谷区、代表取締役：徐
              聖博）はバックオフィスのアウトソーシングサービス「SUPPORT+iA」（サポーティア）や、IPO⽀援・DXコンサルティングサービスを運営するグランサーズ株式会社（本社：東京都港区、代表取締役：筧
              智家至
              <a href="https://grancers-group.com/company" target="_blank"
                >https://grancers-group.com/company</a
              >）と業務提携契約を締結いたしました。
            </p>

            <p class="content__p">
              「株式会社シンシア」は、DX支援事業を運営しています。<br />
              ＜公式サイト＞：
              <a href="https://corp.xincere.jp/dx-support/" target="_blank">
                https://corp.xincere.jp/dx-support/
              </a>
              <br />
              株式会社シンシアの事業で活躍している人材が実際に現場で用いるノウハウ・技術を活用し、クライアントにとって最適な開発・サービス立ち上げを提供いたします。
            </p>
            <p class="content__p">
              ■背景について<br />
              バックオフィス業務には経理財務や⼈事労務等の多様な専⾨性が必要とされ、更に少⼦⾼齢化により、労働⼈⼝が減少することを考えるとこれからも担い⼿は慢性的に不⾜していくことが考えられるため、バックオフィスDX化による業務改⾰は⽇々重要性を増しています。<br />
              その他にも、IPOを⽬指される企業様は、業務効率化の他、セキュリティ、内部統制構築、コンプライアンス強化といった複合的な要素をバックオフィスDX時に考慮する必要があります。当該DXを進めるためにはバックオフィスの専⾨知識に加え、⾼度なシステム理解とIPOに向けた課題対応に関する知識が必要となるため、成功事例は限られています。<br />
              本提携により、グランサーズの強みであるIPOコンサルティング及び、それに付随して発⽣する経理・給与計算等のアウトソーシング業務とシンシアの経験豊富なメンバーによる開発⼒を合わせ、お客様のバックオフィスに関するDXシステム構築の⽀援を実現していきます。
            </p>
            <p class="content__p">
              ■『DX支援事業』について<br />
              新規サービス立ち上げ時における主な課題は、下記の通りです。<br />
              ・アイディアはあるが細かい仕様が決められず受託企業に頼めない<br />
              ・開発に必要な優秀なタレントを集められず開発が思うように行かない<br />
              ・社員としてリソースを増やすとリスクを抱えてしまう<br />
              こうした課題を解決するため、シンシアのDX支援事業では、月額制でのラボ型開発支援を行っています。(クライアントと月額費用で業務提供契約を結び、クライアントの社員のような形で働きながらチームとして開発を進めていく形式)<br />
              また、自社でも事業を運営しているため事業の目的にフォーカスした開発を提案できる、実際に事業を進めている経験豊富なメンバーが知恵を持ち寄り進めることができるといった強みがございます。
            </p>
          </div>
        </main>
      </div>
    </div>
    <Recruit />
    <AboutCompany />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";

export default Vue.extend({
  components: {
    Header,
  },
  data: () => ({
    title:
      "税理士法人グランサーズ様提携税理士法人グランサーズ様提携税理士法人グランサーズ様提携",
    createdAt: "2022/01/11（月）",
    content: "<p>税理士法人グランサーズ様と提携しました！</p>",
  }),
});
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 1440px) {
  .wrapper {
    max-width: 1440px;
    width: 1440px;
    position: relative;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 980px) {
  .container {
    max-width: 980px;
    margin: 150px auto 0 auto;
  }

  .content {
    &__date {
      font-size: 24px;
      padding-bottom: 14px;
      margin-bottom: 30px;
      border-bottom: 1px solid #4f4f4f;
    }
    &__h1 {
      font-size: 32px;
      margin: 40px 0;
      line-height: 1.2;
    }
    &__h2 {
      font-size: 24px;
      margin: 10px 0;
      line-height: 2;
      font-weight: 600;
    }
    &__p {
      font-size: 16px;
      margin: 20px 0;
      line-height: 1.6;
    }
  }
}

@media only screen and (max-width: 980px) {
  .wrapper {
    margin: 0 30px;
  }
  .container {
    margin: 100px auto 0 auto;
  }
  .content {
    &__date {
      font-size: 18px;
      padding-bottom: 14px;
      margin-bottom: 30px;
      border-bottom: 1px solid #4f4f4f;
    }
    &__h1 {
      font-size: 24px;
      margin: 20px 0;
    }
    &__main {
      font-size: 14px;
    }
    &__h2 {
      font-size: 20px;
      margin: 10px 0;
      line-height: 2;
      font-weight: 600;
    }
    &__p {
      font-size: 16px;
      margin: 20px 0;
      line-height: 1.6;
    }
  }
}
</style>
