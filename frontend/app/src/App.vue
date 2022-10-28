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
        <el-menu :default-openeds="['1','2','3']">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><message /></el-icon>Home
            </template>
            <el-menu-item-group>
              <el-menu default-active="home" router>
              <!-- <template #title>Home</template> -->
              <el-menu-item index="home" :route="{ name:'home' , path: './' }">Home</el-menu-item>
              <el-menu-item index="about" :route="{ name:'about' , path: './' }">About</el-menu-item>
            </el-menu>
            </el-menu-item-group>
            <!-- <el-sub-menu index="1-4">
              <template #title>Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-sub-menu> -->
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><message /></el-icon>株価
            </template>
            <el-menu-item-group>
              <!-- <template #title>Home</template> -->
              <el-menu-item index="2-1">Option 1</el-menu-item>
              <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><message /></el-icon>競馬
            </template>
            <el-menu-item-group>
              <!-- <template #title>Home</template> -->
              <el-menu-item index="3-1">Option 1</el-menu-item>
              <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
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

.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
