(function(){"use strict";var e={83:function(e,t,n){var r=n(9242),o=n(3396);function u(e,t,n,r,u,a){const i=(0,o.up)("el-header"),l=(0,o.up)("el-menu-item"),p=(0,o.up)("el-menu"),c=(0,o.up)("el-aside"),s=(0,o.up)("router-view"),f=(0,o.up)("el-main"),d=(0,o.up)("el-container");return(0,o.wg)(),(0,o.j4)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Uk)("きまぐれかっぱ")])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{width:"200px"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{"default-active":"home",router:""},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{index:"home",route:{name:"home",path:"/"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Wm)(l,{index:"about",route:{name:"about",path:"/about/"}},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s)])),_:1})])),_:1})])),_:1})}var a={data(){return{msg:"きまぐれかっぱ",name:"app",activeIndex:""}},mounted(){this.activeIndex=this.$route.name}},i=n(89);const l=(0,i.Z)(a,[["render",u]]);var p=l,c=n(70),s=n(6423);let f;var d={install(e){e.config.globalProperties.$http.defaults.baseURL="http://localhost:3000",e.config.globalProperties.$http.interceptors.request.use((e=>(e.headers.Accept="application/json",e))),e.config.globalProperties.$http.interceptors.response.use((e=>e),(function(e){return Promise.reject(e)})),f=e.config.globalProperties.$http},get(e){return f.get(e)},post(e){return f.post(e)}},h=n(1674),m=(n(4415),n(2483)),g=n(7139);const b={id:"app",style:{"line-height":"1"}},v=(0,o._)("div",{id:"app",style:{"line-height":"3"}},[(0,o._)("h3",null,"You Tube へのアクセス"),(0,o._)("li",null,[(0,o._)("a",{href:"https://www.youtube.com/channel/UC3M75vH5Y0kizWKaT2BnNyQ",target:"_blank",rel:"noopener"},"You Tube")]),(0,o._)("h3",null,"Qiita へのアクセス"),(0,o._)("li",null,[(0,o._)("a",{href:"https://qiita.com/kimagurekappa",target:"_blank",rel:"noopener"},"Qiita")]),(0,o._)("h3",null,"Git Hub へのアクセス"),(0,o._)("li",null,[(0,o._)("a",{href:"https://github.com/kimagurekappa",target:"_blank",rel:"noopener"},"Git Hub")])],-1);function w(e,t,n,r,u,a){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",b,[(0,o._)("h1",null,(0,g.zw)(u.msg),1)]),v],64)}var _={data(){return{msg:"home page for KimagureKappa!"}}};const k=(0,i.Z)(_,[["render",w]]);var y=k;const x={id:"app"},O=(0,o._)("h3",null,"ページの更新をすると Home に戻らなーーーーーーい！",-1),j=[O];function P(e,t,n,r,u,a){return(0,o.wg)(),(0,o.iD)("div",x,j)}var W={data(){return{msg:"home page for KimagureKappa!"}}};const H=(0,i.Z)(W,[["render",P]]);var U=H;const Z=[{path:"/",name:"home",component:y},{path:"/about/",name:"about",component:U}],K=(0,m.p7)({history:(0,m.PO)(),routes:Z});var T=K;(0,r.ri)(p).use(s.Z,c.ZP).use(d).use(h.Z).use(T).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.loaded=!0,u.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,u){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],u=e[c][2];for(var i=!0,l=0;l<r.length;l++)(!1&u||a>=u)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(i=!1,u<a&&(a=u));if(i){e.splice(c--,1);var p=o();void 0!==p&&(t=p)}}return t}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[r,o,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,u,a=r[0],i=r[1],l=r[2],p=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var c=l(n)}for(t&&t(r);p<a.length;p++)u=a[p],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(c)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(83)}));r=n.O(r)})();
//# sourceMappingURL=app.7a046e43.js.map