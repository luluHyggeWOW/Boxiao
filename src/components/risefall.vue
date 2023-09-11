<template>
  <p>个股涨跌情况</p>
  <div ref="main" style="width:100%;height:400px"></div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from "vue";
const main = ref(); 
onMounted(() => {
  const myChart = echarts.init(main.value);
  const data = [1000, 2, 2000, 0]; // 数据
  const colors = ['red', 'blue', 'green', 'black']; // 对应的颜色
  const option = {
            xAxis: {
              type: 'category',
              data: ['上涨', '平盘', '下跌', '序降'],
              axisLabel: {
                interval: 0, // 强制显示所有标签
              }
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              type: 'bar',
              data: data,
              itemStyle: {
                color: function(params:any) { // 根据数值设置颜色
                  return colors[params.dataIndex];
                }
              },
              label: {
                show: true,
                position: 'top',
                formatter: '{@[1]}', // 显示对应的涨跌情况
                color: function(params:any) {
                  return colors[params.dataIndex];
                }
              }
            }]
          };
  myChart.setOption(option);
});
</script>

<style scoped lang="scss">

</style>