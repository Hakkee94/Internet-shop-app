(()=>{"use strict";var e,t,n,r,o,a,c,i,s,d,u,l,p,m,f,v,y={576:(e,t,n)=>{n.d(t,{ej:()=>g});var r=n(379),o=n.n(r),a=n(795),c=n.n(a),i=n(569),s=n.n(i),d=n(565),u=n.n(d),l=n(216),p=n.n(l),m=n(589),f=n.n(m),v=n(65),y={};y.styleTagTransform=f(),y.setAttributes=u(),y.insert=s().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=p(),o()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;var b=n(724),h=n(215);function g(e){const t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}document.addEventListener("DOMContentLoaded",(()=>{(0,b.jo)(h.oX,h.O9)}))},215:(e,t,n)=>{n.d(t,{oX:()=>o,le:()=>a,Fo:()=>c,O9:()=>i});var r=n(576);n(724);let o=(0,r.ej)("prodList")&&JSON.parse((0,r.ej)("prodList"))||[],a=window.localStorage.getItem("cardList")&&JSON.parse(window.localStorage.getItem("cardList"))||[];const c=(e,t,n)=>{let r=e.length;t.map((t=>{if(t.count>0&&(e.map((e=>{e.name===t.name&&(e.count=Number(e.count)+Number(t.count))})),!e.find((e=>e.name===t.name)))){const n={name:t.name,count:t.count};console.log(n),r=e.push(n)}}));const o=e.reduce(((e,t)=>Number(e)+Number(t.count)),0);n(e,r,o),window.localStorage.setItem("cardList",JSON.stringify(e))},i=(e,t)=>{e.count=t}},724:(e,t,n)=>{n.d(t,{bA:()=>s,$s:()=>u,jo:()=>p,bE:()=>m,Qm:()=>f});const r=document.querySelector(".addNewBtn"),o=document.querySelector("#create-new-container .add-product-input"),a=document.querySelector(".products-list > div"),c=document.querySelector("#countItems"),i=document.querySelector("#totalItems"),s=document.querySelector(".add-to-cart-btn"),d=document.querySelector(".cart-list > div"),u=document.querySelector(".clear-cart"),l=document.querySelector(".added-items"),p=(document.querySelector("#create-new-container .add-product-input"),(e,t)=>{a.innerHTML="",o&&(o.value=""),r&&r.setAttribute("disabled","true"),e.forEach((e=>{const n=document.createElement("div"),r=document.createElement("span");r.setAttribute("class","product-name");const o=document.createElement("input");o.setAttribute("class","item-count"),r.innerText=e.name,o.setAttribute("type","number"),o.value=e.count,o.addEventListener("input",(n=>t(e,n.target.value))),n.append(r,o),a.prepend(n)}))}),m=(e,t,n)=>{d.innerHTML="",e.forEach((e=>{const t=document.createElement("div"),n=document.createElement("span"),r=document.createElement("input");n.innerText=e.name,r.value=e.count,t.append(n,r),d.prepend(t)})),c.innerText=t,i.innerText=n,console.log(n)},f=()=>{l.innerHTML="",c.innerText=0,i.innerText=0,console.log(l)}},612:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,".title{display:flex;padding-left:20px;justify-content:space-between}.main-list{padding-bottom:15px}.main-menu{display:flex;justify-content:space-between}.cart{display:flex;justify-content:space-between;border:solid 1px black;padding:10px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;flex-direction:column}.cart-items{display:flex;width:250px;justify-content:space-between;padding-bottom:15px}.cart-header{display:flex;align-items:end}\n",""]);const i=c},65:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,".title{display:flex;padding-left:20px;justify-content:space-between}.link-list{display:flex;align-items:center}.special-link{text-decoration:none;color:black}header{background-color:#9dcad7;margin-bottom:20px}input{margin-bottom:10px}\n",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},b={};function h(e){var t=b[e];if(void 0!==t)return t.exports;var n=b[e]={id:e,exports:{}};return y[e](n,n.exports,h),n.exports}h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var n in t)h.o(t,n)&&!h.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=h(724),t=h(215),n=h(379),r=h.n(n),o=h(795),a=h.n(o),c=h(569),i=h.n(c),s=h(565),d=h.n(s),u=h(216),l=h.n(u),p=h(589),m=h.n(p),f=h(612),(v={}).styleTagTransform=m(),v.setAttributes=d(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),r()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{(0,e.bE)(t.le)})),e.bA&&e.bA.addEventListener("click",(()=>(0,t.Fo)(t.le,t.oX,e.bE))),e.$s&&e.$s.addEventListener("click",e.Qm)})();