<template>
  <div>
    <el-col>
      <h5>菜单</h5>
      <el-menu background-color="#fbfbfb" :default-openeds="['/hsnpm install echarts vue-echarts@5','/bj']"
        class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
        <template v-for="routers in allRouter" :key="routers.path">
          <el-sub-menu :index="routers.path" v-if="routers.children.length">
            <template #title>
              <i class="el-icon-location"></i>
              <span>{{routers.meta.title}}</span>
            </template>
            <el-menu-item-group v-for="routerschildren in routers.children" :key="routerschildren.path" router>
              <el-menu-item :index="routerschildren.path">{{routerschildren.meta.title}}</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-col>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const $route = useRoute();
const $router = useRouter();
let allRouter = $router.getRoutes();
console.log($router.getRoutes());
</script>
<style scoped>
</style>