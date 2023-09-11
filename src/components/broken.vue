<template>
  <div style="height:70px">
    <div class="top" >
      <div class="title" >{{data.name}}</div>
      <div class="num" :style="data.num2.valueOf() > 0?'color:red':'color:#17da24'">
        <div class="num1">{{data.num1}}</div>
        <div class="num2">{{data.num2.valueOf() < 0?data.num2:`+${data.num2}`}}({{data.num3.valueOf() < 0?data.num3:`+${data.num3}`}}%)</div>
      </div>
    </div>
    <div class="table">
      <div class="row">
        <div v-for="(item,index) in data1" :key="index" class="cell">{{item}}:</div>
      </div>
      <div class="row">
        <div class="cell">3123.2</div>
        <div class="cell">3123.2</div>
        <div class="cell">3123.2</div>
        <div class="cell">3123.2</div>
        <div class="cell">3123.2</div>
      </div>
      <div class="row">
        <div v-for="(item,index) in data2" :key="index" class="cell">{{item}}:</div>
      </div>
      <div class="row">
        <div class="cell">3123.2</div>
        <div class="cell">3123.2</div>
        <div class="cell">3123.2</div>
        <div class="cell">3123.2</div>
        <div class="cell">3123.2</div>
      </div>
    </div>
  </div>
  <div ref="main" style="width100%;height:350px"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted, ref, toRefs,watch } from "vue";
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
      },
    ],
  };

  myChart.setOption(option);
};
let data1 = ["今开", "最高", "成交量", "上涨", "公司数"];
let data2 = ["昨收", "最低", "成交额", "平盘", "下跌"];
interface dataType { name: String; num1: Number; num2: Number; num3: Number }
const props=defineProps({
  data: {
    type:Object as ()=>dataType,
    required:true
  }})
onMounted(() => {
  init();
});
</script>

<style scoped lang="scss">
.top {
  display: flex;
  .title {
    font-size: 20px;
    width: 150px;
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
  // display: flex;
}
.row {
  display: flex;
  font-size: 13px;
  color: #666666;
  margin: 0 auto;
  margin-left: 20px;
}
.cell {
  flex: 1;
  padding: 2px;
  text-align: left;
}
</style>