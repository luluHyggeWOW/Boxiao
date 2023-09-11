<template>
  <div ref="main" style="width:100%;height:400px"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
const main = ref(); 

var ItemStyle = {
  normal: {
    color: function (params:any) {
      var colorList;
      if (params.data >= 0) {
        colorList = "red";
      } else {
        colorList = "green";
      }
      return colorList;
    },
  },
};
const option = {
  xAxis: [
    {
      type: "category",
      data: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",'K','L','M','N'],
    },
  ],
  yAxis: [
    {
      type: "value",
    axisLabel: {
      formatter: function (value:any) {
        return value+'%'; // 将刻度标签的值增加2%
      }
    },
    axisTick: {
      inside: true,
      length: 2 // 设置刻度线的长度为2
    }
    },
  ],
  series: [
    {
      type: "bar",
      itemStyle: ItemStyle,
      barWidth: 20,
      barGap: 1,
      barCategoryGap: 20,
      data: [1, 0.2, 0.1, -0.6, -0.7, -0.8, -0.9, -1, -1.1, -1.2, -1.3, -1.4, -1.5, -1.6, -1.7],
    },
  ],
};
onMounted(() => {
  const myChart = echarts.init(main.value);
  myChart.setOption(option);
});
</script>

<style scoped lang="scss">

</style>