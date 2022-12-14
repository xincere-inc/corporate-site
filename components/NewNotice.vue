<template>
  <nuxt-link :to="link" class="grid-box news-link">
    <div class="text-box">
      <div class="date">{{ date }}</div>
      <div class="title">{{ title }}</div>
    </div>
    <div class="arrow">
      <img src="~/assets/images/icons/black_arrow.svg" height="11px" />
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
});
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 980px) {

    .news-link {
      &:hover {
        opacity: 0.7;
      }
    }

    .grid-box {
      border-bottom: 2px solid #CDD0D3;
      align-items: center;
      display: grid;
      grid-template-columns: repeat(16, [col-start] 1fr);

      .text-box {
        grid-column: col-start 1 / span 14;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        display: grid;
        letter-spacing: 0.05em;
        color: #333333;
        flex-direction: row;
      }
      .arrow {
        grid-column: col-start 16 / span 1;
        text-align: center;
      }
      .title {
        margin: 4px 0 4px 8px;
      }
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

    .news-link {
      &:hover {
        opacity: 0.7;
      }
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
    .text-box {
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;
      letter-spacing: 0.05em;
      color: #333333;
      display: flex;
      justify-content: flex-start;
    }
    .bg-gray {
      margin-top: 150px;
    }
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
