this.window=this.window||{},this.window.HanTool=function(t){"use strict";class e{static setStorage=(t,e)=>{"object"==typeof e?window.localStorage.setItem(t,JSON.stringify(e)):window.localStorage.setItem(t,e)};static getStorage=t=>{const e=window.localStorage.getItem(t);try{return e&&""!==e&&"object"==typeof JSON.parse(e)?JSON.parse(e):e}catch(t){return e}};static updateStorage=(t,r)=>{try{const o=e.getStorage(t);if(o&&r&&""!==r&&"object"==typeof r){const n=Object.assign({},o,r);e.setStorage(t,JSON.stringify(n))}else e.setStorage(t,r)}catch(t){throw t}};static removeStorage=t=>{window.localStorage.removeItem(t)};static clearStorage=()=>{window.localStorage.clear()}}var r="object"==typeof global&&global&&global.Object===Object&&global,o="object"==typeof self&&self&&self.Object===Object&&self,n=r||o||Function("return this")(),i=n.Symbol,a=Object.prototype,c=a.hasOwnProperty,s=a.toString,l=i?i.toStringTag:void 0;var u=Object.prototype.toString;var h=i?i.toStringTag:void 0;function d(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":h&&h in Object(t)?function(t){var e=c.call(t,l),r=t[l];try{t[l]=void 0;var o=!0}catch(t){}var n=s.call(t);return o&&(e?t[l]=r:delete t[l]),n}(t):function(t){return u.call(t)}(t)}var f=Array.isArray;function p(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var g,y=n["__core-js_shared__"],_=(g=/[^.]+$/.exec(y&&y.keys&&y.keys.IE_PROTO||""))?"Symbol(src)_1."+g:"";var w=Function.prototype.toString;var m=/^\[object .+?Constructor\]$/,v=Function.prototype,b=Object.prototype,O=v.toString,S=b.hasOwnProperty,j=RegExp("^"+O.call(S).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function x(t){if(!p(t)||(e=t,_&&_ in e))return!1;var e,r=function(t){if(!p(t))return!1;var e=d(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}(t)?j:m;return r.test(function(t){if(null!=t){try{return w.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function T(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return x(r)?r:void 0}function B(t){return t!=t}function E(t,e){return!!(null==t?0:t.length)&&function(t,e,r){return e==e?function(t,e,r){for(var o=r-1,n=t.length;++o<n;)if(t[o]===e)return o;return-1}(t,e,r):function(t,e,r){for(var o=t.length,n=r+-1;++n<o;)if(e(t[n],n,t))return n;return-1}(t,B,r)}(t,e,0)>-1}var M=T(Object,"create");var $=Object.prototype.hasOwnProperty;var N=Object.prototype.hasOwnProperty;function I(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}function R(t,e){for(var r,o,n=t.length;n--;)if((r=t[n][0])===(o=e)||r!=r&&o!=o)return n;return-1}I.prototype.clear=function(){this.__data__=M?M(null):{},this.size=0},I.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},I.prototype.get=function(t){var e=this.__data__;if(M){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return $.call(e,t)?e[t]:void 0},I.prototype.has=function(t){var e=this.__data__;return M?void 0!==e[t]:N.call(e,t)},I.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=M&&void 0===e?"__lodash_hash_undefined__":e,this};var A=Array.prototype.splice;function F(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}F.prototype.clear=function(){this.__data__=[],this.size=0},F.prototype.delete=function(t){var e=this.__data__,r=R(e,t);return!(r<0)&&(r==e.length-1?e.pop():A.call(e,r,1),--this.size,!0)},F.prototype.get=function(t){var e=this.__data__,r=R(e,t);return r<0?void 0:e[r][1]},F.prototype.has=function(t){return R(this.__data__,t)>-1},F.prototype.set=function(t,e){var r=this.__data__,o=R(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this};var z=T(n,"Map");function C(t,e){var r,o,n=t.__data__;return("string"==(o=typeof(r=e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==r:null===r)?n["string"==typeof e?"string":"hash"]:n.map}function L(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}L.prototype.clear=function(){this.size=0,this.__data__={hash:new I,map:new(z||F),string:new I}},L.prototype.delete=function(t){var e=C(this,t).delete(t);return this.size-=e?1:0,e},L.prototype.get=function(t){return C(this,t).get(t)},L.prototype.has=function(t){return C(this,t).has(t)},L.prototype.set=function(t,e){var r=C(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this};var P=T(n,"Set");function k(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new L;++e<r;)this.add(t[e])}function U(t,e){return t.has(e)}function D(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}k.prototype.add=k.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},k.prototype.has=function(t){return this.__data__.has(t)};var H=P&&1/D(new P([,-0]))[1]==1/0?function(t){return new P(t)}:function(){};function J(t){return t&&t.length?function(t,e,r){var o=-1,n=E,i=t.length,a=!0,c=[],s=c;if(i>=200){var l=H(t);if(l)return D(l);a=!1,n=U,s=new k}else s=c;t:for(;++o<i;){var u=t[o],h=u;if(u=0!==u?u:0,a&&h==h){for(var d=s.length;d--;)if(s[d]===h)continue t;c.push(u)}else n(s,h,r)||(s!==c&&s.push(h),c.push(u))}return c}(t):[]}const G=()=>{const t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(G),window.scrollTo(0,t-t/8))},K=(t=[],e=[],r=0,o)=>{if(!f(t))throw new Error("Expected an array for the tree structure.");return t.forEach((t=>{const n={...t,level:r,parent:o};e.push(n),t.children&&t.children.length>0&&K(t.children,e,r+1,n)})),e},Y=(t,e,r="name")=>{for(const o of t){if(o[r]===e)return o;if(o.children){const t=Y(o.children,r,e);if(t)return t}}return null},Z=(t,e)=>{for(const r of t){if(e(r))return r;if(r.children){const t=Z(r.children,e);if(t)return t}}return null};return t.Storage=e,t.checkBrowser=()=>{const t=window.navigator.userAgent.toLowerCase();return t.indexOf("msie")>=0?{type:"IE",version:Number(t.match(/msie ([\d]+)/)[1])}:t.match(/trident\/.+?rv:(([\d.]+))/)?{type:"IE",version:11}:t.indexOf("edge")>=0?{type:"Edge",version:Number(t.match(/edge\/([\d]+)/)[1])}:t.indexOf("firefox")>=0?{type:"Firefox",version:Number(t.match(/firefox\/([\d]+)/)[1])}:t.indexOf("chrome")>=0?{type:"Chrome",version:Number(t.match(/chrome\/([\d]+)/)[1])}:t.indexOf("opera")>=0?{type:"Opera",version:Number(t.match(/opera.([\d]+)/)[1])}:t.indexOf("Safari")>=0?{type:"Safari",version:Number(t.match(/version\/([\d]+)/)[1])}:{type:t,version:-1}},t.colorHexToRgb=t=>{if(7!==t.length||"#"!==t.charAt(0))throw new Error("必需包含#, 且长度为7位的字符");let e=t.replace("#","0x");return`rgb(${e>>16}, ${e>>8&255}, ${255&e})`},t.colorHexToRgba=(t,e=1)=>{if(7!==t.length||"#"!==t.charAt(0))throw new Error("必需包含#, 且长度为7位的字符");const r=t.slice(1);return`rgba(${parseInt(r.substring(0,2),16)<<16}, ${parseInt(r.substring(2,4),16)<<8}, ${parseInt(r.substring(4,6),16)}, ${e})`},t.colorRgbaToHex=t=>{if(!t.includes("rgba"))throw new Error("必需包含rgba");const[e,r,o,n]=t.split(",").map(Number);return"#"+((1<<24)+e<<16+r<<8+o).toString(16).slice(1)},t.convertFileSize=(t,e,r,o=2)=>{const n=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],i=n.indexOf(e),a=n.indexOf(r);if(-1===i||-1===a)throw new Error("Invalid units");const c=a-i,s=t/Math.pow(1024,c);return parseFloat(s.toFixed(o))+" "+r},t.detectDeviceType=()=>{const t=navigator.userAgent.toLowerCase();return/mobile|android|iphone|ipad|ipod|windows phone|blackberry|webos|opera mini|iemobile|wpdesktop/i.test(t)?"Mobile":/windows|macintosh|linux|unix/i.test(t)?"PC":"Unknown"},t.fileDownload=(t,e)=>{const r=document.createElement("a");return r.style.display="none",r.setAttribute("target","_self"),e&&r.setAttribute("download",e),r.href=t,r.setAttribute("href",t),document.body.appendChild(r),r.click(),document.body.removeChild(r),!0},t.fileDownloadByRes=(t,e,r="vnd.openxmlformats-officedocument.spreadsheetml.sheet")=>{const o=new Blob([e],{type:`application/${r};charset=utf-8`}),n=document.createElement("a"),i=window.URL.createObjectURL(o);n.href=i,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(i)},t.fileDownloadByType=(t,e)=>{fetch(t,{method:"get"}).then((t=>200!==t.status?t.json():t.arrayBuffer())).then((t=>{const r=new Blob([t],{type:"application/octet-stream"}),o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=e,n.click(),window.URL.revokeObjectURL(o)})).catch((t=>{console.error(t)}))},t.findNodeInTree=Y,t.findNodeInTreeByCondition=Z,t.findNodesInTreeByCondition=(t,e)=>{const r=[],o=t=>{e(t)&&r.push(t);for(const e of t.children)o(e)};return o(t),r},t.findParentNodeList=(t,e,r="value")=>{if(!f(t))throw"传入的为非数组，请重新传入";const o=[];let n=!0;const i=function(t,e){t.forEach((t=>{n&&(o.push(t),t[r]===e?n=!1:t.children?i(t.children,e):o.pop())})),n&&o.pop()};return i(t,e),o.map((t=>t[r]))},t.formatFileSize=t=>{if(0===t)return"0 Bytes";const e=Math.floor(Math.log(t)/Math.log(1024));return`${(t/Math.pow(1024,e)).toFixed(2)}${["Bytes","KB","MB","GB","TB"][e]}`},t.formatPrice=function(t=0,e=2){if("number"!=typeof t)throw new Error("参数类型错误，请输入数字类型");if(t<0||t===1/0)throw new Error("参数不能小于0且不能为Infinity");const r=t.toFixed(e);let o,n=Number(r),i="";do{const t=n%1e3;n/=1e3,o=~~t,i=(n>=1?"".concat(o).padStart(3,"0"):o)+(i?","+i:"")}while(n>=1);const a=r+"",c=a.indexOf(".");return c>=0&&(i+=a.substring(c)),i},t.getBetweenYearsArr=function(t,e){const r=[];for(let o=t;o<=e;o++)r.push(o);return[...r].reverse()},t.getExt=t=>t.split(".").pop().toLocaleLowerCase(),t.hasDuplicates=t=>{if(!f(t))throw"请传入数组";return 1!==t.length&&J(t).length!==t.length},t.listToTree=(t=[],e=null)=>{if(!f(t))throw new Error("list must be an array");const r={},o=[];for(let e=0;e<t.length;e++)r[t[e].id]={...t[e],children:[]};for(let n=0;n<t.length;n++){const i=r[t[n].id];t[n].parentId===e?o.push(i):r[t[n].parentId].children.push(i)}return o},t.phoneEncryption=t=>t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"),t.randomNum=t=>t[Math.floor(Math.random()*t.length)],t.randomRange=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,t.randomRgbColor=()=>`rgb(${Math.floor(255*Math.random())},${Math.floor(255*Math.random())},${Math.floor(255*Math.random())})`,t.randomString=t=>{const e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789!@#$%^&#*";let r="";for(let o=0;o<t;o++)r+=e.charAt(Math.floor(59*Math.random()));return r},t.scrollToBottom=()=>{window.scrollTo(0,document.documentElement.clientHeight)},t.scrollToTop=G,t.sleep=(t=500)=>new Promise((e=>setTimeout(e,t))),t.sleepFn=(t=500,e)=>new Promise((r=>{const o=setTimeout((()=>{clearTimeout(o),e&&"function"==typeof e&&e(),r(!0)}),t)})),t.treeToList=K,t}({});
//# sourceMappingURL=index.global.js.map
