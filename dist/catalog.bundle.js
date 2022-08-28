(()=>{"use strict";var e,t,n,r,o,a,c,i,s,u,d,l,p,m,f,v,y={576:(e,t,n)=>{n.d(t,{WL:()=>h,ej:()=>x});var r=n(379),o=n.n(r),a=n(795),c=n.n(a),i=n(569),s=n.n(i),u=n(565),d=n.n(u),l=n(216),p=n.n(l),m=n(589),f=n.n(m),v=n(65),y={};y.styleTagTransform=f(),y.setAttributes=d(),y.insert=s().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=p(),o()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;var b=n(724),g=n(215);function h(e,t,n){let r=(n=n||{}).expires;if("number"==typeof r&&r){const e=new Date;e.setTime(e.getTime()+1e3*r),r=n.expires=e}r&&r.toUTCString&&(n.expires=r.toUTCString());let o=e+"="+(t=encodeURIComponent(t));for(var a in n){o+="; "+a;var c=n[a];!0!==c&&(o+="="+c)}document.cookie=o}function x(e){const t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}document.addEventListener("DOMContentLoaded",(()=>{(0,b.jo)(g.oX,g.O9)}))},215:(e,t,n)=>{n.d(t,{oX:()=>o,jX:()=>a,O9:()=>c});var r=n(576);n(724);let o=(0,r.ej)("prodList")&&JSON.parse((0,r.ej)("prodList"))||[];window.localStorage.getItem("cardList")&&JSON.parse(window.localStorage.getItem("cardList"));const a=(e,t,n)=>{console.log(t);const o={name:t,count:0};e.push(o),n(e,c),(0,r.WL)("prodList",JSON.stringify(e))},c=(e,t)=>{e.count=t}},724:(e,t,n)=>{n.d(t,{aA:()=>r,uv:()=>o,pi:()=>c,jo:()=>i,Bb:()=>s,_I:()=>u});const r=document.querySelector(".addNewBtn"),o=document.querySelector("#create-new-container .add-product-input"),a=document.querySelector(".products-list > div"),c=(document.querySelector("#countItems"),document.querySelector("#totalItems"),document.querySelector(".add-to-cart-btn"),document.querySelector(".cart-list > div"),document.querySelector(".clear-cart"),document.querySelector(".added-items"),document.querySelector("#create-new-container .add-product-input")),i=(e,t)=>{a.innerHTML="",o&&(o.value=""),r&&r.setAttribute("disabled","true"),e.forEach((e=>{const n=document.createElement("div"),r=document.createElement("span");r.setAttribute("class","product-name");const o=document.createElement("input");o.setAttribute("class","item-count"),r.innerText=e.name,o.setAttribute("type","number"),o.value=e.count,o.addEventListener("input",(n=>t(e,n.target.value))),n.append(r,o),a.prepend(n)}))},s=()=>{o.textContent=""},u=e=>{e.target.value?r.removeAttribute("disabled"):r.setAttribute("disabled","true")}},937:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,".title{display:flex;padding-left:20px;justify-content:space-between}.main-list{padding-bottom:15px}.main-menu{display:flex;justify-content:space-between}\n",""]);const i=c},65:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,".title{display:flex;padding-left:20px;justify-content:space-between}.link-list{display:flex;align-items:center}.special-link{text-decoration:none;color:black}header{background-color:#9dcad7;margin-bottom:20px}input{margin-bottom:10px}\n",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),u=0;u<a.length;u++){var d=n(a[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},b={};function g(e){var t=b[e];if(void 0!==t)return t.exports;var n=b[e]={id:e,exports:{}};return y[e](n,n.exports,g),n.exports}g.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return g.d(t,{a:t}),t},g.d=(e,t)=>{for(var n in t)g.o(t,n)&&!g.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},g.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=g(724),t=g(215),n=g(379),r=g.n(n),o=g(795),a=g.n(o),c=g(569),i=g.n(c),s=g(565),u=g.n(s),d=g(216),l=g.n(d),p=g(589),m=g.n(p),f=g(937),(v={}).styleTagTransform=m(),v.setAttributes=u(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),r()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals,g(576),e.uv&&e.uv.addEventListener("input",e._I),e.aA&&e.aA.addEventListener("click",(()=>(0,t.jX)(t.oX,e.pi.value,e.jo))),e.aA&&e.aA.addEventListener("click",e.Bb)})();