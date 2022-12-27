<!-- 左侧边栏 -->
<template>
    <div class="nav">
            <el-row class="tac">
            <el-col :span="12">
            <h3 class="title">网盘系统</h3>
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">

                <el-submenu index="1">
                    <template slot="title">
                    <span>首页</span>
                    </template>
                    <el-menu-item index="1-1">全部文件</el-menu-item>
                    <el-menu-item index="1-2">分类文件</el-menu-item>
                    <el-menu-item index="1-3">我的分享</el-menu-item>
                </el-submenu>

                <el-menu-item index="2">
                    <span slot="title">传输</span>
                </el-menu-item>

                <el-submenu index="3">
                    <template slot="title">
                    <span>个人中心</span>
                    </template>
                    <el-menu-item index="1-1">基本信息</el-menu-item>
                    <el-menu-item index="1-2">账号管理</el-menu-item>
                </el-submenu>

                <el-button class="drop">退出账号</el-button>
            </el-menu>
        </el-col>
        </el-row>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .nav{
    width: 200px;
    height: 700px;
    box-shadow: 2px 2px 2px 2px rgba(147, 147, 147, 0.1);
  }
  .tac{
    width: 400px;
  }
  .el-menu-vertical-demo{
    margin-top: 30px;
  }
  .title{
    color: black;
    text-align: center;
    margin-top: 30px;
  }
  .drop{
    margin-top: 100px;
    margin-left: 50px;
  }
  </style>
  