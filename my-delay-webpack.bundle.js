(()=>{var t={740:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,"body {\n  background-color: #6bb868;\n}\n\n.timer {\n  display: flex;\n  font-size: 45px;\n}\n.field {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffcb3ba8;\n  border: 1px solid black;\n  position: relative;\n  min-width: 60px;\n  margin-left: 10px;\n  margin-right: 10px;\n  padding-bottom: 15px;\n  text-align: center;\n  width: 100%;\n  margin-top: 20%;\n  border-radius: 55%;\n  -webkit-box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,\n    red 0 -18px 40px, 5px 5px 15px 5px rgba(0, 0, 0, 0);\n  box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,\n    red 0 -18px 40px, 5px 5px 15px 5px rgba(0, 0, 0, 0);\n}\n.value {\n  text-align: center;\n}\n",""]);const s=i},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=a(f,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),l=0;l<o.length;l++){var u=n(o[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},693:()=>{const t={daysEl:document.querySelector('[data-value="days"]'),hoursEl:document.querySelector('[data-value="hours"]'),minsEl:document.querySelector('[data-value="mins"]'),secsEl:document.querySelector('[data-value="secs"]'),blocEL:document.querySelector("#timer-1")},{daysEl:e,hoursEl:n,minsEl:r,secsEl:a}=t;new class{constructor(t){this.finishDate=t,this.initId=null,this.deltaTime=0}start(){this.initId=setInterval((()=>{let t=Date.now();this.deltaTime=this.finishDate.targetDate-t,this.deltaTime<=0&&clearInterval(this.initId);const o=this.pad(Math.floor(this.deltaTime/864e5)),i=this.pad(Math.floor(this.deltaTime%864e5/36e5)),s=this.pad(Math.floor(this.deltaTime%36e5/6e4)),c=this.pad(Math.floor(this.deltaTime%6e4/1e3));e.textContent=o,n.textContent=i,r.textContent=s,a.textContent=c}),1e3)}stop(){clearInterval(this.initId),console.log(this.initId)}pad(t){return String(t).padStart(2,"0")}}({selector:"#timer-1",targetDate:new Date("Jan 01, 2022").getTime()}).start()}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),i=n.n(o),s=n(565),c=n.n(s),l=n(216),u=n.n(l),d=n(589),p=n.n(d),f=n(740),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,n(693)})()})();