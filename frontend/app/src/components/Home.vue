<template>
  <div id="app" style="line-height:1;">
    <h1>{{ msg }}</h1>
  </div>
  <div id="app" style="line-height:3;">
    <h3>You Tube へのアクセス</h3>
      <li><a href="https://www.youtube.com/channel/UC3M75vH5Y0kizWKaT2BnNyQ" target="_blank" rel="noopener">You Tube</a></li>
    <h3>Qiita へのアクセス</h3>
      <li><a href="https://qiita.com/kimagurekappa" target="_blank" rel="noopener">Qiita</a></li>
    <h3>Git Hub へのアクセス</h3>
      <li><a href="https://github.com/kimagurekappa" target="_blank" rel="noopener">Git Hub</a></li>
  </div>
</template>

<script>


export default {
  data () {
    return {
      msg: 'home page for KimagureKappa!'
    }
  }
}
</script>