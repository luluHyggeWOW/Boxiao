<template>
  <div>
    <el-col>
      <h5>菜单</h5>
      <el-menu background-color="#fbfbfb" :default-openeds="['/hs','/bj']"
        class="el-menu-vertical-demo" router>
        <template v-for="routers in allRouter" :key="routers.path">
          <el-sub-menu :index="routers.path" v-if="routers.children.length">
            <template #title>
              <i class="el-icon-location"></i>
              <span>{{routers.meta.title}}</span>
            </template>
            <el-menu-item-group v-for="children in routers.children" :key="children.path" router>
              <el-menu-item :index="children.path">{{children.meta?.title}}</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-col>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const $router = useRouter();
let allRouter = $router.getRoutes();
console.log($router.getRoutes());
</script>
<style scoped>
</style>