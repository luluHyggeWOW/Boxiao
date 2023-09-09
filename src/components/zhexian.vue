<template>
  <div>
    <div class="top">
      <div class="title">上证指数</div>
      <div class="num">
        <div class="num1">3125.31</div>
        <div class="num2">-31.21(-1.3%)</div>
      </div>

    </div>
    <div class="table">
      <div class="row">
        <div class="cell">内容1</div>
        <div class="cell">内容2</div>
        <div class="cell">内容3</div>
        <div class="cell">内容4</div>
        <div class="cell">内容5</div>
      </div>
      <div class="row">
        <div class="cell">内容6</div>
        <div class="cell">内容7</div>
        <div class="cell">内容8</div>
        <div class="cell">内容9</div>
        <div class="cell">内容10</div>
      </div>
      <div class="row">
        <div class="cell">内容11</div>
        <div class="cell">内容12</div>
        <div class="cell">内容13</div>
        <div class="cell">内容14</div>
        <div class="cell">内容15</div>
      </div>
      <div class="row">
        <div class="cell">内容16</div>
        <div class="cell">内容17</div>
        <div class="cell">内容18</div>
        <div class="cell">内容19</div>
        <div class="cell">内容20</div>
      </div>
    </div>
  </div>
  <div ref="main" style="width100%;height:400px"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
const main = ref(); // 使用ref创建虚拟DOM引用，使用时用main.value

const stockData = [
  { time: "9:30", price: 5.1 },
  { time: "10:30", price: 4.2 },
  { time: "11:30", price: 6.12 },
  { time: "12:30", price: 3.1 },
  { time: "13:30", price: 2.1 },
];

const xAxisData = stockData.map((item) => item.time);
const seriesData = stockData.map((item) => item.price.toFixed(2));
const init = () => {
  var myChart = echarts.init(main.value);
  let option = {
    // title: {
    //   text: "上证股票", // 设置标题文本内容
    //   subtext: "这里是副标题", // 设置副标题文本内容 // 可选，设置副标题点击后跳转的链接
    //   subtext: "这里是副标题", // 设置副标题文本内容 // 可选，设置副标题点击后跳转的链接
    //   subtext: "这里是副标题", // 设置副标题文本内容 // 可选，设置副标题点击后跳转的链接
    //   left: "left", // 设置标题居中显示
    //   textStyle: {
    //     fontSize: 16, // 设置标题文本字体大小
    //     fontWeight: "bold", // 设置标题文本加粗
    //   },
    // },
    xAxis: {
      type: "category",
      data: xAxisData,
    },
    yAxis: {
      type: "value",
      // axisLabel: {
      //   formatter: "{value.toFixed(2)}",
      // },
    },
    series: [
      {
        type: "line",
        data: seriesData,
        showSymbol: false,
      },
    ],
    graphic: [
      {
        type: "text",
        left: "center",
        top: 10,
        style: {
          text: "股票信息",
          fontSize: 14,
          fontWeight: "bold",
        },
      },
    ],
  };

  myChart.setOption(option);
};
let data = ["今开", "最高", "成交量", "上涨", "公司数", "昨收"];
onMounted(() => {
  init();
});
</script>

<style scoped lang="scss">
.top {
  display: flex;
  .title {
    font-size: 20px;
  }
  .num {
    display: flex;
    color: #17da24;
    margin-left: 20px;
    .num1 {
      font-size: 20px;
      line-height: 20px;
    }
    .num2 {
      line-height: 20px;
    }
  }
}
table {
  border-collapse: collapse;
  font-family: Arial, sans-serif;
}

.row {
  display: flex;
}

.cell {
  flex: 1;
  padding: 5px;
  text-align: left;
}
</style>