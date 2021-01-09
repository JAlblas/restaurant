(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"body {\r\n    background-color:#f1f1f1;\r\n    margin: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n#container {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    height: 100%;\r\n}\r\n\r\n#content {\r\n    background-color: #f1f1f1;\r\n    height: 100%;\r\n    width: 1280px;\r\n    margin: 0 auto;\r\n}\r\n\r\nnav {\r\n    background-color: rgb(245, 220, 81);\r\n    padding: 20px;\r\n}\r\n\r\nbutton {\r\n    background-color: rgb(167, 81, 41);\r\n    font-size: 1.2em;\r\n    border-radius: 10px;\r\n    padding: 10px 20px;\r\n    cursor: hand;\r\n    color: white;\r\n}\r\n\r\nh1 {\r\n    padding-top: 25px;\r\n    padding-bottom: 10px;\r\n    margin: 0 0 0 25px;\r\n}\r\n\r\nimg {\r\n    margin-top: 25px;\r\n}\r\n\r\np {\r\n    padding: 25px;\r\n}\r\n\r\ntable {\r\n    border: 1px solid orange;\r\n}\r\n\r\ntd {\r\n    padding: 5px;\r\n}",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var u=this[a][0];null!=u&&(i[u]=!0)}for(var o=0;o<e.length;o++){var s=[].concat(e[o]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function u(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function o(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],l=n[s]||0,c="".concat(s," ").concat(l);n[s]=l+1;var d=u(c),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:c,updater:v(p,t),references:1}),r.push(c)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var u=i(e.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(t)}return t}var l,c=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=c(t,i);else{var a=document.createTextNode(i),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(a,u[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function v(e,t){var n,r,i;if(t.singleton){var a=f++;n=m||(m=s(t)),r=d.bind(null,n,a,!1),i=d.bind(null,n,a,!0)}else n=s(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=o(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=u(n[r]);a[i].references--}for(var s=o(e,t),l=0;l<n.length;l++){var c=u(n[l]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}n=s}}}},845:(e,t,n)=>{e.exports=n.p+"db4252ab876244985554.jpg"}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),r=n(426);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var i=n(845);const a=function(){const e=document.createElement("div"),t=document.createElement("h1");t.textContent="Kaas Imperium",e.appendChild(t);const n=new Image;return n.src=i,e.appendChild(n),e};document.querySelector("#home-button").addEventListener("click",(()=>{let e=document.querySelector("#content");e.innerHTML="",e.append(a())})),document.querySelector("#menu-button").addEventListener("click",(()=>{let e=document.querySelector("#content");e.innerHTML="",e.append(function(){const e=document.createElement("div"),t=document.createElement("h1");t.textContent="Kaas Imperium Menu",e.appendChild(t);const n=function(){var e=document.createElement("table");e.style.width="100%",e.setAttribute("border","1");for(var t=document.createElement("tbody"),n=0;n<3;n++){for(var r=document.createElement("tr"),i=0;i<2;i++){var a=document.createElement("td");a.textContent="Burger",r.appendChild(a)}t.appendChild(r)}return e.appendChild(t),e}();return e.appendChild(n),e}())})),document.querySelector("#about-button").addEventListener("click",(()=>{let e=document.querySelector("#content");e.innerHTML="",e.append(function(){const e=document.createElement("div"),t=document.createElement("h1");t.textContent="About Kaas Imperium",e.appendChild(t);const n=document.createElement("p");return n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere finibus felis, nec luctus sapien lacinia quis. Curabitur tincidunt urna leo, ut accumsan libero pretium in. In at metus maximus, porttitor erat quis, rutrum sem. Aliquam non accumsan libero. Vivamus quis augue at ex pretium vulputate. Praesent sagittis porttitor neque, a faucibus dolor. Cras est libero, luctus sed velit id, ultrices tristique ex. Integer tristique dui risus, sed porta ante posuere a. Nulla eu vehicula sapien, et facilisis augue. Vestibulum laoreet felis enim, at vehicula dolor mollis ut. Vestibulum efficitur dapibus finibus. Nulla facilisi.Integer non sollicitudin tortor, sit amet venenatis quam. Proin pharetra vel orci eget vehicula. Donec ullamcorper suscipit interdum. Vestibulum at tortor tellus. Cras fermentum felis et purus sagittis, quis tincidunt arcu tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris pellentesque, nisl vitae ullamcorper accumsan, ex ex mattis mauris, eu convallis libero arcu sed erat. Aliquam dolor dolor, feugiat quis dui in, tristique commodo lacus. Donec vulputate odio sed vulputate ullamcorper. Duis ut elit ultrices, interdum massa vel, maximus odio. Sed ut augue et neque aliquam pellentesque quis ac ligula. Ut posuere tortor vel ex dignissim, eu porta ante ultricies. Etiam vitae velit quis nibh tincidunt placerat maximus nec libero. Nunc et magna dolor.Proin nec nisl vel lacus ullamcorper condimentum sed et purus. Morbi pulvinar neque vel purus facilisis ornare. Suspendisse vitae convallis velit, vitae convallis arcu. In pellentesque nibh vel tellus maximus pellentesque. Ut sed nisi pellentesque, egestas elit a, congue purus. Integer eleifend aliquet massa vitae tempor. Aenean dapibus lacus vel lectus tristique lobortis. Integer sed placerat quam.",e.appendChild(n),e}())})),document.querySelector("#staff-button").addEventListener("click",(()=>{let e=document.querySelector("#content");e.innerHTML="",e.append(function(){const e=document.createElement("div"),t=document.createElement("h1");t.textContent="Kaas Imperiums Staff",e.appendChild(t);const n=document.createElement("p");return n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere finibus felis, nec luctus sapien lacinia quis. Curabitur tincidunt urna leo, ut accumsan libero pretium in. In at metus maximus, porttitor erat quis, rutrum sem. Aliquam non accumsan libero. Vivamus quis augue at ex pretium vulputate. Praesent sagittis porttitor neque, a faucibus dolor. Cras est libero, luctus sed velit id, ultrices tristique ex. Integer tristique dui risus, sed porta ante posuere a. Nulla eu vehicula sapien, et facilisis augue. Vestibulum laoreet felis enim, at vehicula dolor mollis ut. Vestibulum efficitur dapibus finibus. Nulla facilisi.Integer non sollicitudin tortor, sit amet venenatis quam. Proin pharetra vel orci eget vehicula. Donec ullamcorper suscipit interdum. Vestibulum at tortor tellus. Cras fermentum felis et purus sagittis, quis tincidunt arcu tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris pellentesque, nisl vitae ullamcorper accumsan, ex ex mattis mauris, eu convallis libero arcu sed erat. Aliquam dolor dolor, feugiat quis dui in, tristique commodo lacus. Donec vulputate odio sed vulputate ullamcorper. Duis ut elit ultrices, interdum massa vel, maximus odio. Sed ut augue et neque aliquam pellentesque quis ac ligula. Ut posuere tortor vel ex dignissim, eu porta ante ultricies. Etiam vitae velit quis nibh tincidunt placerat maximus nec libero. Nunc et magna dolor.Proin nec nisl vel lacus ullamcorper condimentum sed et purus. Morbi pulvinar neque vel purus facilisis ornare. Suspendisse vitae convallis velit, vitae convallis arcu. In pellentesque nibh vel tellus maximus pellentesque. Ut sed nisi pellentesque, egestas elit a, congue purus. Integer eleifend aliquet massa vitae tempor. Aenean dapibus lacus vel lectus tristique lobortis. Integer sed placerat quam.",e.appendChild(n),e}())}));let u=document.querySelector("#content");u.innerHTML="",u.append(a())})()})();