(function(){"use strict";var t={778:function(t,e,n){var r=n(242),o=n(396);function i(t,e){const n=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(n,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Work")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(n,{to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1})]),(0,o.Wm)(r)],64)}var a=n(89);const u={},c=(0,a.Z)(u,[["render",i]]);var s=c,l=n(483);const f={class:"home"};function p(t,e,n,r,i,a){const u=(0,o.up)("galleryView");return(0,o.wg)(),(0,o.iD)("div",f,[(0,o.Wm)(u,{msg:"Welcome to Your Vue.js App"})])}const d={class:"gallery__container"},m=["src"];function g(t,e,n,r,i,a){return(0,o.wg)(),(0,o.iD)("section",null,[(0,o._)("ul",d,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.images,((t,e)=>((0,o.wg)(),(0,o.iD)("li",{key:e},[(0,o._)("img",{src:t.attributes.Image.data[0].attributes.url,alt:"image",loading:"lazy"},null,8,m)])))),128))])])}var v={props:{msg:String},created(){this.getImages()},data(){return{images:[]}},methods:{async getImages(){const t=await fetch("https://strapi-production-4272.up.railway.app/api/illustrations?populate=Image",{method:"GET",headers:{"Content-Type":"application/json"}}),e=await t.json();console.log(e.data),this.images=e.data}}};const h=(0,a.Z)(v,[["render",g],["__scopeId","data-v-bb181e80"]]);var b=h,y={name:"HomeView",components:{galleryView:b}};const w=(0,a.Z)(y,[["render",p]]);var k=w;const j=[{path:"/",name:"home",component:k},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,381))}],O=(0,l.p7)({history:(0,l.r5)(),routes:j});var _=O,T=n(65),C=(0,T.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(s).use(C).use(_).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){t.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.5de11cf6.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="strapi:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+i),u.src=r),t[r]=[o];var p=function(e,n){u.onerror=u.onload=null,clearTimeout(d);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),u=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(e&&e(r);s<a.length;s++)i=a[s],n.o(t,i)&&t[i]&&t[i][0](),t[a[s]]=0;return n.O(l)},r=self["webpackChunkstrapi"]=self["webpackChunkstrapi"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(778)}));r=n.O(r)})();
//# sourceMappingURL=app.e8e5441f.js.map