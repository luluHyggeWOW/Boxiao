<template>
  <div class="main">
    <el-container>
      <el-aside v-if="menushow">
        <Menu></Menu>
      </el-aside>
      <el-main>
        <div class="view">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Menu from "../components/menu.vue";
import { computed, onMounted, onBeforeUnmount, ref } from "vue";
const menushow = ref<boolean>(true);
const handleResize = () => {
  if (window.innerWidth < 1200) menushow.value = false;
  else menushow.value = true;
};
onMounted(() => {
  window.addEventListener("resize", handleResize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped lang="scss">
.main {
  padding: 0;
  margin: 0;
  // height: 100%;
  // min-height: 100vh;
  // min-width: 100vw;
  width: 94%;
  margin: 0 auto;
  .view {
    margin-top: 50px;
  }
}
</style>