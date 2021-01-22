<template>
  <div id="app">
    <el-menu :router="true" mode="horizontal">
        <!-- 基座里可以放自己的路由 -->
        <el-menu-item index="/">Home</el-menu-item>

        <!-- 引用其他子应用 -->
        <el-menu-item index="/vue">vue应用</el-menu-item>
        <el-menu-item index="/react">react应用</el-menu-item>
    </el-menu>
    <router-view/>
    <div id="vue"></div>
    <div id="react"></div>
  </div>
</template>