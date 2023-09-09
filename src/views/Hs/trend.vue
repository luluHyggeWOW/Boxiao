<template>
  <div>
    <el-input placeholder="请输入行业/指数/股票代码或简称" style="height:40px"></el-input>
    <Carousel class="carousel"></Carousel>
    <div style="display:flex;width:100%">
      <el-card style="flex:1;margin:10px">
        <div>
          <Zhexian />
        </div>
      </el-card>
      <el-card style="flex:1.5;margin:10px">
        <div>
          <Zhexian />
        </div>
      </el-card>

    </div>

  </div>
</template>

<script setup lang="ts">
import Carousel from "@/components/carousel.vue";
import Zhexian from "@/components/zhexian.vue";
</script>

<style scoped lang="scss">
.carousel {
  margin-top: 20px;
}
</style>