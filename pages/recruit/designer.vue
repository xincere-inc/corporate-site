<template>
  <div>
    <JobDescription title="UI/UXデザイナー" :jdTable="jdTable" />
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
          value: "UI/UXデザイナー"
        },
        {
          key: "雇用形態",
          value: "正社員"
        },
        {
          key: "業務内容",
          value:
            "シンシア（シンシアレジデンス等）におけるあらゆるソフトウェア開発"
        },
        {
          key: "必須条件",
          value:
            "SketchやFigmaなどを用いたUI、プロトタイプ制作の実務経験\nAdobe Photoshopなど、ビジュアルデザインの経験\nWeb制作の経験がある方"
        },
        {
          key: "望ましい条件",
          value:
            "HTML/CSS/Javascriptなどフロントエンド実装\nスタートアップ企業でデザイナーとして参画した経験がある方\n制作会社でのデザイナー経験がある方\nデザインシステムの設計を主導した経験がある方"
        },
        {
          key: "試用期間",
          value: "3ヶ月"
        },
        {
          key: "勤務地",
          value: "東京都渋谷区猿楽町4-10"
        },
        {
          key: "給与",
          value: "年収600 - 1000万"
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
            "株式会社シンシアにおけるUI/UXデザイナーに関する募集要項です。ご興味ある方はぜひカジュアル面談からでも大丈夫なので、ぜひよろしくお願い致します。"
        }
      ]
    };
  }
});
</script>
