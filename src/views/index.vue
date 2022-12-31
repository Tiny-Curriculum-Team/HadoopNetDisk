<template>
  <div>
    <el-container>
      <el-aside width="200px" height="100vh"><el-menu
      :router="true"
      default-active="2"
      class="el-menu-vertical-demo"
     >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/allfile">全部文件</el-menu-item>
                <el-menu-item index="/index/classfy">分类文件</el-menu-item>
                <el-menu-item index="/index/myshare">我的分享</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/index/transmit">
                <i class="el-icon-upload"></i>
                <span slot="title">传输</span>
              </el-menu-item>
      <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-s-custom"></i>
                  <span>个人中心</span>
                </template>
                <el-menu-item index="/index/baseInfo">基本信息</el-menu-item>
                <!-- <el-menu-item index="/index/user-management">账号管理</el-menu-item> -->
              </el-submenu>
    </el-menu></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.el-aside {
  width: 200px;
  .el-menu {
    height: calc(100vh - 80px);
  }
}</style>
