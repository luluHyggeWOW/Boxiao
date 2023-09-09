<template>
  <div>
    <el-carousel height="100px" :autoplay="false" @change="changePage" :indicator-position="none">
      <el-carousel-item v-for="item in Math.ceil(data.length / 7)" :key="item">
        <div class="box">
          <div class="databox" v-for="(data,index) in data.slice(page*7,page*7+7)" :key="index"
            :style="data.num2>0?'background-color:rgb(248, 164, 164);color:red':'background-color:#eefce8;color:#17da24'">
            <p class="title" :style="data.num2>0?'color:rgb(228, 237, 63)':'color:#007ffe;'">{{data.name}}</p>
            <p class="num">{{data.num1}}</p>
            <p class="num">
              <svg v-if="data.num2<=0" t="1694160051545" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1518" width="16" height="16">
                <path
                  d="M972.92032 449.536a51.2 51.2 0 0 0-51.2 51.2v132.608l-301.056-301.056a51.2 51.2 0 0 0-72.192 0L368.76032 512 87.67232 230.912A51.2 51.2 0 0 0 14.96832 303.616l317.44 317.44a51.2 51.2 0 0 0 72.192 0l179.712-179.712 264.704 264.704H716.92032a51.2 51.2 0 0 0 0 102.4h256a51.2 51.2 0 0 0 51.2-51.2v-256a51.2 51.2 0 0 0-51.2-51.712z"
                  fill="#17da24" p-id="1519"></path>
              </svg>
              <svg v-else t="1694227945399" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="4901" width="16" height="16">
                <path
                  d="M859.062857 256l-170.788571 20.48a6.948571 6.948571 0 0 0-4.022857 11.702857l50.834285 49.005714-193.462857 193.828572-87.405714-87.405714a13.897143 13.897143 0 0 0-19.382857 0l-275.748572 275.748571a7.314286 7.314286 0 0 0 0 9.874286L197.851429 768a6.948571 6.948571 0 0 0 9.508571 0l237.348571-236.982857 87.04 87.04a14.262857 14.262857 0 0 0 19.382858 0l232.594285-232.594286 50.834286 50.834286a6.948571 6.948571 0 0 0 11.702857-4.022857l20.48-170.788572a6.582857 6.582857 0 0 0-7.68-5.485714z"
                  p-id="4902" fill="#f15845"></path>
              </svg>
              {{data.num2>0?'+':''}}{{data.num2}}({{data.num3>0?'+':''}}{{data.num3}}%)
            </p>
            <p></p>
          </div>
        </div>

      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let startnum = 0;
let data = [
  { name: "上证指数", num1: 3122.25, num2: -35.72, num3: -1.13 },
  { name: "沪深300", num1: 3122.25, num2: -35.72, num3: -1.13 },
  { name: "中证500", num1: 3122.25, num2: +35.72, num3: +1.13 },
  { name: "CR基石", num1: 3122.25, num2: -35.72, num3: -1.13 },
  { name: "CR新动能", num1: 3122.25, num2: -35.72, num3: -1.13 },
  { name: "创业扳指", num1: 3122.25, num2: +35.72, num3: +1.13 },
  { name: "中证1000", num1: 3122.25, num2: -35.72, num3: -1.13 },
  { name: "上证指数", num1: 3122.25, num2: +35.72, num3: +1.13 },
  { name: "上证指数", num1: 3122.25, num2: -35.72, num3: -1.13 },
  { name: "上证指数", num1: 3122.25, num2: +35.72, num3: +1.13 },
  { name: "上证指数", num1: 3122.25, num2: -35.72, num3: -1.13 },
  { name: "上证指数", num1: 3122.25, num2: -35.72, num3: -1.13 },
  { name: "上证指数", num1: 3122.25, num2: +35.72, num3: +1.13 },
  { name: "上证指数", num1: 3122.25, num2: -35.72, num3: -1.13 },
  { name: "上证指数", num1: 3122.25, num2: -35.72, num3: -1.13 },
  { name: "上证指数", num1: 3122.25, num2: -35.72, num3: -1.13 },
];
let page = ref<number>(0);
const changePage = (index: number) => {
  page.value = index;
  console.log(Math.ceil(data.length / 7));
};
</script>

<style scoped lang="scss">
.box {
  display: flex;
  // justify-content: space-between;
  margin: 0 40px 0 40px;
  .databox {
    height: 80px; /* 设置高度，仅作示例 */
    background: rgb(248, 164, 164);
    margin: 10px;
    font-size: 14px;
    border-radius: 10px;
    padding-left: 15px;
    min-width: 140px;
    p {
      margin: 5px;
    }
    .title {
      font-weight: 600;
    }
  }
}
</style>