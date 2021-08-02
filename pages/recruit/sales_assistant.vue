<template>
  <div>
    <JobDescription title="営業アシスタント" :jdTable="jdTable" />
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
          value: "営業アシスタント"
        },
        {
          key: "雇用形態",
          value: "契約社員・正社員"
        },
        {
          key: "業務内容",
          value: "不動産営業におけるお客様対応・書類作成（ご案内は基本なし）"
        },
        {
          key: "必須条件",
          value:
            "社会人経験\nメール、Google Drive, Spreadsheet, Docs, Slide等の基本的なPC操作スキル"
        },
        {
          key: "望ましい条件",
          value:
            "IT企業での業務経験\n不動産会社での業務経験\n宅地建物取引士の資格"
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
          value: "年収250 - 350万 + 諸手当"
        },
        {
          key: "勤務時間",
          value: "フレックス制(コアタイム含む): 9:30 - 18:30（休憩60分含む）"
        },
        {
          key: "時間外労働",
          value: "有り(月10時間以下)"
        },
        {
          key: "休日・休暇",
          value:
            "完全週休2日（曜日は応相談）・年末年始・夏季・ＧＷ・婚姻・産前産後・慶弔・忌引き・転勤休暇など"
        },
        {
          key: "諸手当",
          value:
            "深夜・休日勤務手当、追加割増手当、通勤交通費（当社規定による）、資格手当ほか"
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
      title: "営業アシスタントの募集要項",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "株式会社シンシアにおける営業アシスタントに関する募集要項です。ご興味ある方はぜひカジュアル面談からでも大丈夫なので、ぜひよろしくお願い致します。"
        }
      ]
    };
  }
});
</script>
