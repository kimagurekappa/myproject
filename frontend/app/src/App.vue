<script>
export default {
  data () {
    return {
      msg: 'きまぐれかっぱ',
      name: 'app',
      activeIndex: '',
    }
  },
  mounted() {
      // 読み込まれたページをアクティブ
      this.activeIndex = this.$route.name;
  }
}
</script>

<template>
  <el-container>
    <el-header>きまぐれかっぱ</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="home" router>
          <el-menu-item index="home" :route="{ name:'home' , path: './' }">Home</el-menu-item>
          <el-menu-item index=about :route="{ name:'about' , path: './' }">About</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header,
.el-footer {
  background-color: #f1f1f1;
  color: var(--el-text-color-primary);
  text-align: left;
  line-height: 60px;
}
.el-menu-item,
.el-aside {
  background-color: #f1f1f1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 600px;
}

.el-main {
  background-color: #ffffff;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 560px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>