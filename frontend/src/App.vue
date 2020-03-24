<template>
  <div id="app">
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/login' }">登录</el-breadcrumb-item>
      </el-breadcrumb>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>