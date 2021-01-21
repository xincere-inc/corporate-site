<template>
  <div>
    <JobDescription title="セールスエンジニア(未経験可)" :jdTable="jdTable" />
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
          value: "セールスエンジニア(未経験可)"
        },
        {
          key: "雇用形態",
          value: "正社員"
        },
        {
          key: "業務内容",
          value: "(応相談)週3日エンジニアとしての開発、週2日の不動産営業"
        },
        {
          key: "必須条件",
          value:
            "不動産営業経験（2年以上）\n宅建士免許\n不動産仲介業務が一通りできる"
        },
        {
          key: "望ましい条件",
          value:
            "任意のプログラミングスクール卒業\n最低限のエンジニアリング経験\nプロダクトの0 → 1経験チーム開発の経験"
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
          value: "年収350万(みなし残業45時間含む) + 営業インセンティブ"
        },
        {
          key: "勤務時間",
          value: "フレックス制(コアタイム含む):10:00 - 19:00（休憩60分含む）"
        },
        {
          key: "時間外労働",
          value: "有り(月10-20時間程度)"
        },
        {
          key: "休暇",
          value:
            "年末年始・夏季・ＧＷ・婚姻・産前産後・慶弔・忌引き・転勤休暇など"
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
      title: "セールスエンジニア(未経験可)の募集要項",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "株式会社シンシアにおけるセールスエンジニア(未経験可)に関する募集要項です。ご興味ある方はぜひカジュアル面談からでも大丈夫なので、ぜひよろしくお願い致します。"
        }
      ]
    };
  }
});
</script>
