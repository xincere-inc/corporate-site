<template>
  <div>
    <JobDescription title="ソフトウェアエンジニア" :jdTable="jdTable" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import JobDescription from "@/components/JobDescription.vue";

export default Vue.extend({
  components: {
    JobDescription
  },
  data() {
    return {
      jdTable: [
        {
          key: "職種",
          value: "ソフトウェアエンジニア"
        },
        {
          key: "雇用形態",
          value: "正社員・契約社員・副業・インターン"
        },
        {
          key: "業務内容",
          value:
            "シンシア（シンシアレジデンス等）におけるあらゆるソフトウェア開発"
        },
        {
          key: "必須条件",
          value:
            "エンジニアとしての業務経験\nアルゴリズムに対する理解\nネットワークに対する知識\n事業に焦点を当てたエンジニアリング"
        },
        {
          key: "望ましい条件",
          value:
            "プロダクトの0 → 1経験チーム開発の経験\n大規模開発の経験\n不動産の賃貸・購入経験\n宅地建物取引士の資格保有\n営業経験"
        },
        {
          key: "試用期間",
          value: "3ヶ月"
        },
        {
          key: "勤務地",
          value: "(応相談)六本木周辺・在宅"
        },
        {
          key: "給与",
          value: "年収400 - 800万(それ以上は応相談)"
        },
        {
          key: "勤務時間",
          value: "フレックス制(コアタイム含む):9:30 - 18:30（休憩60分含む）"
        },
        {
          key: "時間外労働",
          value: "有り(月10-20時間程度)"
        },
        {
          key: "休日・休暇",
          value:
            "完全週休2日（曜日は応相談）・年末年始・夏季・ＧＷ・婚姻・産前産後・慶弔・忌引き・転勤休暇など"
        },
        {
          key: "諸手当",
          value:
            "深夜・休日勤務手当、追加割増手当、通勤交通費（当社規定による）ほか"
        },
        {
          key: "保険",
          value: "健康保険・介護保険・厚生年金保険・雇用保険・労災保険"
        }
      ]
    };
  },
  head() {
    return {
      title: "ソフトウェアエンジニアの募集要項",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "株式会社シンシアにおけるソフトウェアエンジニアに関する募集要項です。ご興味ある方はぜひカジュアル面談からでも大丈夫なので、ぜひよろしくお願い致します。"
        }
      ]
    };
  }
});
</script>
