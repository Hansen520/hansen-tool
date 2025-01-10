class t{static setStorage=(t,e)=>{"object"==typeof e?window.localStorage.setItem(t,JSON.stringify(e)):window.localStorage.setItem(t,e)};static getStorage=t=>{const e=window.localStorage.getItem(t);try{return e&&""!==e&&"object"==typeof JSON.parse(e)?JSON.parse(e):e}catch(t){return e}};static updateStorage=(e,r)=>{try{const n=t.getStorage(e);if(n&&r&&""!==r&&"object"==typeof r){const o=Object.assign({},n,r);t.setStorage(e,JSON.stringify(o))}else t.setStorage(e,r)}catch(t){throw t}};static removeStorage=t=>{window.localStorage.removeItem(t)};static clearStorage=()=>{window.localStorage.clear()}}function e(t,e){const r=[];for(let n=t;n<=e;n++)r.push(n);return[...r].reverse()}const r=()=>{const t=navigator.userAgent.toLowerCase();return/mobile|android|iphone|ipad|ipod|windows phone|blackberry|webos|opera mini|iemobile|wpdesktop/i.test(t)?"Mobile":/windows|macintosh|linux|unix/i.test(t)?"PC":"Unknown"},n=()=>{const t=window.navigator.userAgent.toLowerCase();return t.indexOf("msie")>=0?{type:"IE",version:Number(t.match(/msie ([\d]+)/)[1])}:t.match(/trident\/.+?rv:(([\d.]+))/)?{type:"IE",version:11}:t.indexOf("edge")>=0?{type:"Edge",version:Number(t.match(/edge\/([\d]+)/)[1])}:t.indexOf("firefox")>=0?{type:"Firefox",version:Number(t.match(/firefox\/([\d]+)/)[1])}:t.indexOf("chrome")>=0?{type:"Chrome",version:Number(t.match(/chrome\/([\d]+)/)[1])}:t.indexOf("opera")>=0?{type:"Opera",version:Number(t.match(/opera.([\d]+)/)[1])}:t.indexOf("Safari")>=0?{type:"Safari",version:Number(t.match(/version\/([\d]+)/)[1])}:{type:t,version:-1}},o=t=>{if(!t.includes("rgba"))throw new Error("必需包含rgba");const[e,r,n,o]=t.split(",").map(Number);return"#"+((1<<24)+e<<16+r<<8+n).toString(16).slice(1)},i=t=>{if(7!==t.length||"#"!==t.charAt(0))throw new Error("必需包含#, 且长度为7位的字符");let e=t.replace("#","0x");return`rgb(${e>>16}, ${e>>8&255}, ${255&e})`},a=(t,e=1)=>{if(7!==t.length||"#"!==t.charAt(0))throw new Error("必需包含#, 且长度为7位的字符");const r=t.slice(1);return`rgba(${parseInt(r.substring(0,2),16)<<16}, ${parseInt(r.substring(2,4),16)<<8}, ${parseInt(r.substring(4,6),16)}, ${e})`},c=(t,e,r,n=2)=>{const o=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],i=o.indexOf(e),a=o.indexOf(r);if(-1===i||-1===a)throw new Error("Invalid units");const c=a-i,s=t/Math.pow(1024,c);return parseFloat(s.toFixed(n))+" "+r},s=t=>{if(0===t)return"0 Bytes";const e=Math.floor(Math.log(t)/Math.log(1024));return`${(t/Math.pow(1024,e)).toFixed(2)}${["Bytes","KB","MB","GB","TB"][e]}`},l=(t,e)=>{const r=document.createElement("a");return r.style.display="none",r.setAttribute("target","_self"),e&&r.setAttribute("download",e),r.href=t,r.setAttribute("href",t),document.body.appendChild(r),r.click(),document.body.removeChild(r),!0},u=(t,e)=>{fetch(t,{method:"get"}).then((t=>200!==t.status?t.json():t.arrayBuffer())).then((t=>{const r=new Blob([t],{type:"application/octet-stream"}),n=window.URL.createObjectURL(r),o=document.createElement("a");o.href=n,o.download=e,o.click(),window.URL.revokeObjectURL(n)})).catch((t=>{console.error(t)}))},h=(t,e,r="vnd.openxmlformats-officedocument.spreadsheetml.sheet")=>{const n=new Blob([e],{type:`application/${r};charset=utf-8`}),o=document.createElement("a"),i=window.URL.createObjectURL(n);o.href=i,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(i)},f=function(t=0){if(0===t)return"0";if(!t)return;let e,r=t,n="";do{const t=r%1e3;r/=1e3,e=~~t,n=(r>=1?"".concat(e).padStart(3,"0"):e)+(n?","+n:"")}while(r>=1);const o=t+"",i=o.indexOf(".");return i>=0&&(n+=o.substring(i)),n},d=(t,e=0)=>{if(isNaN(t)||null===t||t===1/0)return t;let r=Math.round(parseFloat(`${t}`)*10**8)/10**8;if(r=""+Math.ceil(r)/100,e>0){-1===r.indexOf(".")&&(r=`${r}.`);const t=e-r.split(".")[1]?.length;for(let e=0;e<t;e++)r=`${r}0`}return r},p=t=>t.split(".").pop().toLocaleLowerCase();var _="object"==typeof global&&global&&global.Object===Object&&global,g="object"==typeof self&&self&&self.Object===Object&&self,y=_||g||Function("return this")(),v=y.Symbol,m=Object.prototype,w=m.hasOwnProperty,b=m.toString,O=v?v.toStringTag:void 0;var j=Object.prototype.toString;var S=v?v.toStringTag:void 0;function x(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":S&&S in Object(t)?function(t){var e=w.call(t,O),r=t[O];try{t[O]=void 0;var n=!0}catch(t){}var o=b.call(t);return n&&(e?t[O]=r:delete t[O]),o}(t):function(t){return j.call(t)}(t)}var $=Array.isArray;function M(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var E,B=y["__core-js_shared__"],A=(E=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||""))?"Symbol(src)_1."+E:"";var N=Function.prototype.toString;var z=/^\[object .+?Constructor\]$/,F=Function.prototype,I=Object.prototype,T=F.toString,L=I.hasOwnProperty,P=RegExp("^"+T.call(L).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function k(t){if(!M(t)||(e=t,A&&A in e))return!1;var e,r=function(t){if(!M(t))return!1;var e=x(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}(t)?P:z;return r.test(function(t){if(null!=t){try{return N.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function C(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return k(r)?r:void 0}function R(t){return t!=t}function U(t,e){return!!(null==t?0:t.length)&&function(t,e,r){return e==e?function(t,e,r){for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}(t,e,r):function(t,e,r){for(var n=t.length,o=r+-1;++o<n;)if(e(t[o],o,t))return o;return-1}(t,R,r)}(t,e,0)>-1}var J=C(Object,"create");var G=Object.prototype.hasOwnProperty;var K=Object.prototype.hasOwnProperty;function H(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Y(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}H.prototype.clear=function(){this.__data__=J?J(null):{},this.size=0},H.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},H.prototype.get=function(t){var e=this.__data__;if(J){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return G.call(e,t)?e[t]:void 0},H.prototype.has=function(t){var e=this.__data__;return J?void 0!==e[t]:K.call(e,t)},H.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=J&&void 0===e?"__lodash_hash_undefined__":e,this};var Z=Array.prototype.splice;function q(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}q.prototype.clear=function(){this.__data__=[],this.size=0},q.prototype.delete=function(t){var e=this.__data__,r=Y(e,t);return!(r<0)&&(r==e.length-1?e.pop():Z.call(e,r,1),--this.size,!0)},q.prototype.get=function(t){var e=this.__data__,r=Y(e,t);return r<0?void 0:e[r][1]},q.prototype.has=function(t){return Y(this.__data__,t)>-1},q.prototype.set=function(t,e){var r=this.__data__,n=Y(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var D=C(y,"Map");function Q(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function W(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}W.prototype.clear=function(){this.size=0,this.__data__={hash:new H,map:new(D||q),string:new H}},W.prototype.delete=function(t){var e=Q(this,t).delete(t);return this.size-=e?1:0,e},W.prototype.get=function(t){return Q(this,t).get(t)},W.prototype.has=function(t){return Q(this,t).has(t)},W.prototype.set=function(t,e){var r=Q(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};var X=C(y,"Set");function V(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new W;++e<r;)this.add(t[e])}function tt(t,e){return t.has(e)}function et(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}V.prototype.add=V.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},V.prototype.has=function(t){return this.__data__.has(t)};var rt=X&&1/et(new X([,-0]))[1]==1/0?function(t){return new X(t)}:function(){};function nt(t){return t&&t.length?function(t,e,r){var n=-1,o=U,i=t.length,a=!0,c=[],s=c;if(i>=200){var l=rt(t);if(l)return et(l);a=!1,o=tt,s=new V}else s=c;t:for(;++n<i;){var u=t[n],h=u;if(u=0!==u?u:0,a&&h==h){for(var f=s.length;f--;)if(s[f]===h)continue t;c.push(u)}else o(s,h,r)||(s!==c&&s.push(h),c.push(u))}return c}(t):[]}const ot=t=>{if(!$(t))throw"请传入数组";return 1!==t.length&&nt(t).length!==t.length},it=t=>t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"),at=()=>`rgb(${Math.floor(255*Math.random())},${Math.floor(255*Math.random())},${Math.floor(255*Math.random())})`,ct=t=>{const e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789!@#$%^&#*";let r="";for(let n=0;n<t;n++)r+=e.charAt(Math.floor(59*Math.random()));return r},st=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,lt=t=>t[Math.floor(Math.random()*t.length)],ut=()=>{const t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(ut),window.scrollTo(0,t-t/8))},ht=()=>{window.scrollTo(0,document.documentElement.clientHeight)},ft=(t=500,e)=>new Promise((r=>{const n=setTimeout((()=>{clearTimeout(n),e&&"function"==typeof e&&e(),r(!0)}),t)})),dt=(t=500)=>new Promise((e=>setTimeout(e,t))),pt=(t,e,r="value")=>{if(!$(t))throw"传入的为非数组，请重新传入";const n=[];let o=!0;const i=function(t,e){t.forEach((t=>{o&&(n.push(t),t[r]===e?o=!1:t.children?i(t.children,e):n.pop())})),o&&n.pop()};return i(t,e),n.map((t=>t[r]))},_t=(t=[],e=[],r=0,n)=>{if(!$(t))throw new Error("Expected an array for the tree structure.");return t.forEach((t=>{const o={...t,level:r,parent:n};e.push(o),t.children&&t.children.length>0&&_t(t.children,e,r+1,o)})),e},gt=(t=[],e=null)=>{if(!$(t))throw new Error("list must be an array");const r={},n=[];for(let e=0;e<t.length;e++)r[t[e].id]={...t[e],children:[]};for(let o=0;o<t.length;o++){const i=r[t[o].id];t[o].parentId===e?n.push(i):r[t[o].parentId].children.push(i)}return n},yt=(t,e,r="name")=>{for(const n of t){if(n[r]===e)return n;if(n.children){const t=yt(n.children,r,e);if(t)return t}}return null},vt=(t,e)=>{for(const r of t){if(e(r))return r;if(r.children){const t=vt(r.children,e);if(t)return t}}return null},mt=(t,e)=>{const r=[],n=t=>{e(t)&&r.push(t);for(const e of t.children)n(e)};return n(t),r};export{t as Storage,n as checkBrowser,i as colorHexToRgb,a as colorHexToRgba,o as colorRgbaToHex,c as convertFileSize,r as detectDeviceType,l as fileDownload,h as fileDownloadByRes,u as fileDownloadByType,yt as findNodeInTree,vt as findNodeInTreeByCondition,mt as findNodesInTreeByCondition,pt as findParentNodeList,s as formatFileSize,f as formatPrice,e as getBetweenYearsArr,p as getExt,ot as hasDuplicates,gt as listToTree,it as phoneEncryption,d as priceFormat,lt as randomNum,st as randomRange,at as randomRgbColor,ct as randomString,ht as scrollToBottom,ut as scrollToTop,dt as sleep,ft as sleepFn,_t as treeToList};
//# sourceMappingURL=index.esm.js.map
