<template>
  <div>
    <el-input placeholder="请输入行业/指数/股票代码或简称" style="height:40px"></el-input>
    <Carousel class="carousel" @updata="update"></Carousel>
    <div style="display:flex;width:100%">
      <el-card style="flex:1;margin:10px">
        <div>
          <Broken :data="showData" />
        </div>
      </el-card>
      <el-card style="flex:1.5;margin:10px">
        <div>
          <Tree />
        </div>
      </el-card>
    </div>
    <div style="display:flex;width:100%">
      <el-card style="flex:2;margin:10px">
        <div>
          <Columnar />
        </div>
      </el-card>
      <el-card style="flex:1;margin:10px">
        <div>
          <Top />
        </div>
      </el-card>
    </div>
    <div style="display:flex;width:100%">
      <el-card style="flex:1;margin:10px">
        <div>
          <Risefall />
        </div>
      </el-card>
      <el-card style="flex:1;margin:10px">
        <div>
          <MyTop />
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Carousel from "@/components/carousel.vue";
import Broken from "@/components/broken.vue";
import Tree from "@/components/tree.vue";
import Columnar from "@/components/columnar.vue";
import Top from "@/components/top.vue";
import MyTop from "@/components/mytop.vue";
import Risefall from "@/components/risefall.vue";
import { ref } from "vue";
let showData =ref( { name: '上证指数', num1: 3122.25, num2: -35.72, num3: -1.13 })
const update = (data:any) => {
  showData.value = data;
}
</script>

<style scoped lang="scss">
.carousel {
  margin-top: 20px;
}
</style>