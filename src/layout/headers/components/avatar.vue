<!--  -->
<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="circleUrl"></el-avatar>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const circleUrl = ref(
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F784db74dd8ec20aea02d2dddbd69317bcaed0c6c5374-5KFVoE_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648998863&t=45d916fd078ba47293a6320786e64616'
)

const logout = () => {
  store.dispatch('app/logout')
}
</script>
<style lang="scss" scoped>
::v-deep .el-dropdown-menu__item {
  white-space: nowrap;
}
//@import url(); 引入公共css类
</style>
