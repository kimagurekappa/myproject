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
  <div id="app">
    <h1>{{ msg }}</h1>
    <h3>You Tube へのアクセス</h3>
    <ul>
      <li><a href="https://www.youtube.com/channel/UC3M75vH5Y0kizWKaT2BnNyQ" target="_blank" rel="noopener">You Tube</a></li>
    </ul>
    <h3>Qiita へのアクセス</h3>
    <ul>
      <li><a href="https://qiita.com/kimagurekappa" target="_blank" rel="noopener">Qiita</a></li>
    </ul>
    <h3>Git Hub へのアクセス</h3>
    <ul>
      <li><a href="https://github.com/kimagurekappa" target="_blank" rel="noopener">Git Hub</a></li>
    </ul>
      <el-menu :default-active="activeIndex" mode="horizontal" router>
      <el-menu-item index="home" :route="{ name:'home' , path: '/home-page/' }">Home</el-menu-item>
      <el-menu-item index=about :route="{ name:'about' , path: '/home-page/' }">About</el-menu-item>
      </el-menu>
    <router-view />

  </div>
  <el-container>
    <el-header>Stock Book</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="home" router>
          <el-menu-item index="home" :route="{ name: 'home' }">ユーザー情報</el-menu-item>
          <el-menu-item index="register" :route="{ name: 'register' }">新規アカウント作成</el-menu-item>
          
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