(function(e){function t(t){for(var r,o,s=t[0],u=t[1],i=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-4b9fad18":"60960d52","chunk-971040f0":"651f1686","chunk-bdf850a2":"d8f98382"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-4b9fad18":1,"chunk-971040f0":1,"chunk-bdf850a2":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-4b9fad18":"1a51f7f0","chunk-971040f0":"86dd193f","chunk-bdf850a2":"5c870e76"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var i=c[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],l=i.getAttribute("data-href");if(l===r||l===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],b.parentNode.removeChild(b),n(c)},b.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var b=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1915:function(e,t,n){},"2b20":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var r=n("bc3a"),o=n.n(r);const a=window.location.origin.includes("localhost")?"http://localhost:3000":"",c=o.a.create({baseURL:a,timeout:8e3}),s=function(e){c.defaults.headers.authorization=e}},3342:function(e,t,n){"use strict";n.r(t);var r=n("7a23");const o=Object(r["H"])("data-v-f0a83e9c");Object(r["t"])("data-v-f0a83e9c");const a={class:"BugsComponent row border"},c={class:"col-3"},s={class:"col-3"},u={class:"col-3"},i={class:"col-3"};Object(r["r"])();const l=o((function(e,t,n,o,l,d){return Object(r["q"])(),Object(r["e"])("div",a,[Object(r["g"])("div",c,Object(r["A"])(o.bug.closed),1),Object(r["g"])("div",s,Object(r["A"])(o.bug.title),1),Object(r["g"])("div",u,Object(r["A"])(o.bug.creatorEmail),1),Object(r["g"])("div",i,Object(r["A"])(o.bug.createdAt),1)])}));var d={name:"BugsComponent",props:{bugProp:{type:Object,default:()=>{alert("bug prop does not exist")}}},setup(e){return{bug:Object(r["c"])(()=>e.bugProp)}},components:{}};d.render=l,d.__scopeId="data-v-f0a83e9c";t["default"]=d},"3ef3":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const o=Object(r["H"])("data-v-63fdd0ba");Object(r["t"])("data-v-63fdd0ba");const a={class:"MenuControls col-2 bg-dark"},c=Object(r["g"])("div",{class:"col-3 text-center"},[Object(r["g"])("i",{class:"fa fa-dashcube","aria-hidden":"true"})],-1),s=Object(r["g"])("div",{class:"col-9 text-left flex-nowrap"}," Dashboard ",-1),u=Object(r["g"])("div",{class:"col-3 text-center"},[Object(r["g"])("i",{class:"fa fa-bug","aria-hidden":"true"})],-1),i=Object(r["g"])("div",{class:"col-9 text-left"}," Report Bug ",-1);Object(r["r"])();const l=o((function(e,t,n,l,d,b){const f=Object(r["x"])("router-link");return Object(r["q"])(),Object(r["e"])("div",a,[Object(r["g"])(f,{class:"row text-light menu-control align-items-center flex-nowrap text-nowrap",to:{name:"Home"}},{default:o(()=>[c,s]),_:1}),Object(r["g"])(f,{class:"row text-light menu-control align-items-center flex-nowrap text-nowrap",to:{name:"ReportBug"}},{default:o(()=>[u,i]),_:1})])}));var d={name:"MenuControls",setup(){return{}},components:{}};n("c559");d.render=l,d.__scopeId="data-v-63fdd0ba";t["default"]=d},"41cb":function(e,t,n){"use strict";var r=n("6c02"),o=n("8816");function a(e){return()=>n("a2f9")(`./${e}.vue`)}const c=[{path:"/",name:"Home",component:a("HomePage"),beforeEnter:o["a"]},{path:"/report-bug",name:"ReportBug",component:a("ReportBugPage"),beforeEnter:o["a"]},{path:"/profile",name:"Profile",component:a("ProfilePage"),beforeEnter:o["a"]}],s=Object(r["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(r["b"])(),routes:c});t["a"]=s},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const o=Object(r["g"])("footer",null,[Object(r["g"])("div",{class:"bg-dark text-light text-center p-4"}," Made with 💖 by CodeWorks ")],-1);function a(e,t,n,a,c,s){const u=Object(r["x"])("Navbar"),i=Object(r["x"])("MenuControls"),l=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["g"])("header",null,[Object(r["g"])(u)]),Object(r["g"])("main",null,[Object(r["g"])(i),Object(r["g"])(l,null,{default:Object(r["E"])(({Component:e})=>[Object(r["g"])(r["b"],{name:"route",mode:"out-in"},{default:Object(r["E"])(()=>[(Object(r["q"])(),Object(r["e"])(Object(r["y"])(e)))]),_:2},1024)]),_:1})]),o],64)}var c=n("83fc"),s={name:"App",setup(){return{appState:Object(r["c"])(()=>c["a"])}}};n("9cdc");s.render=a;var u=s;function i(e){const t=n("ccc2");t.keys().forEach(n=>{const r=t(n),o=r.default||r,a=o.name||n.substr(n.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(a,o)})}var l=n("41cb");const d=Object(r["d"])(u);i(d),d.use(l["a"]).mount("#app")},"83fc":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("7a23");const o=Object(r["u"])({user:{},profile:{},bugs:[],bug:{},notes:[],note:{}})},"8a4e":function(e,t,n){"use strict";function r(e,t){window.location.origin.includes("localhost")&&console[e](...t)}n.d(t,"a",(function(){return o}));const o={log(){r("log",arguments)},error(){r("error",arguments)},warn(){r("warn",arguments)},assert(){r("assert",arguments)},trace(){r("trace",arguments)}}},"954d":function(e,t,n){e.exports=n.p+"img/sleuthr-logo.9175011c.png"},"9cdc":function(e,t,n){"use strict";n("d673")},"9d8d":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=n("954d"),a=n.n(o);const c=Object(r["H"])("data-v-5b0db06e");Object(r["t"])("data-v-5b0db06e");const s={class:"navbar navbar-expand-lg navbar-dark bg-dark"},u=Object(r["g"])("div",{class:"d-flex flex-column align-items-center"},[Object(r["g"])("img",{alt:"logo",src:a.a,height:"45"})],-1),i=Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarText"},d={class:"navbar-text ml-auto"},b={key:1,class:"dropdown"},f={class:"mx-3"},p=Object(r["g"])("div",{class:"list-group-item list-group-item-action hoverable"}," Profile ",-1);Object(r["r"])();const g=c((function(e,t,n,o,a,g){const v=Object(r["x"])("router-link");return Object(r["q"])(),Object(r["e"])("nav",s,[Object(r["g"])(v,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:c(()=>[u]),_:1}),i,Object(r["g"])("div",l,[Object(r["g"])("span",d,[o.user.isAuthenticated?(Object(r["q"])(),Object(r["e"])("div",b,[Object(r["g"])("div",{class:"dropdown-toggle",onClick:t[2]||(t[2]=e=>o.state.dropOpen=!o.state.dropOpen)},[Object(r["g"])("img",{src:o.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(r["g"])("span",f,Object(r["A"])(o.user.name),1)]),Object(r["g"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:o.state.dropOpen}],onClick:t[4]||(t[4]=e=>o.state.dropOpen=!1)},[Object(r["g"])(v,{to:{name:"Profile"}},{default:c(()=>[p]),_:1}),Object(r["g"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:t[3]||(t[3]=(...e)=>o.logout(...e))}," logout ")],2)])):(Object(r["q"])(),Object(r["e"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:t[1]||(t[1]=(...e)=>o.login(...e))}," Login "))])])])}));var v=n("8816"),O=n("83fc");const j="bcwclassroom.us.auth0.com",h="9VombUlSc1JATRkt6d3nUh7Zf53ozsr7",m="https://sleuthr/api";var w=n("41cb"),y=n("2b20"),k=n("8a4e");class x{async getProfile(){try{const e=await y["a"].get("/profile");O["a"].profile=e.data}catch(e){k["a"].error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const E=new x,P=Object(v["b"])({domain:j,clientId:h,audience:m,onRedirectCallback:e=>{w["a"].push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});P.on(P.AUTH_EVENTS.AUTHENTICATED,(async function(){Object(y["b"])(P.bearer),await E.getProfile(),O["a"].user=P.user}));var _={name:"Navbar",setup(){const e=Object(r["u"])({dropOpen:!1});return{state:e,user:Object(r["c"])(()=>O["a"].user),async login(){P.loginWithPopup()},async logout(){await P.logout({returnTo:window.location.origin})}}}};n("a1fb");_.render=g,_.__scopeId="data-v-5b0db06e";t["default"]=_},a1fb:function(e,t,n){"use strict";n("1915")},a2f9:function(e,t,n){var r={"./HomePage.vue":["78a7","chunk-971040f0"],"./ProfilePage.vue":["1a3e","chunk-bdf850a2"],"./ReportBugPage.vue":["eff9","chunk-4b9fad18"]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="a2f9",e.exports=o},baa7:function(e,t,n){},c559:function(e,t,n){"use strict";n("baa7")},ccc2:function(e,t,n){var r={"./BugsComponent.vue":"3342","./menucontrols.vue":"3ef3","./navbar.vue":"9d8d"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="ccc2"},d673:function(e,t,n){}});