!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3553)}({2391:function(e,t){!function(t){var n="Modernizr"in t,r=t.Modernizr;!function(e,t,n){function r(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,n,r,o){var s,l,a,u,f="modernizr",d=i("div"),c=function(){var e=t.body;return e||((e=i(S?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(a=i("div")).id=o?o[r]:f+(r+1),d.appendChild(a);return(s=i("style")).type="text/css",s.id="s"+f,(c.fake?c:d).appendChild(s),c.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=f,c.fake&&(c.style.background="",c.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(c)),l=n(d,e),c.fake?(c.parentNode.removeChild(c),w.style.overflow=u,w.offsetHeight):d.parentNode.removeChild(d),!!l}function l(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function a(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function u(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(l(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+l(t[o])+":"+r+")");return s("@supports ("+(i=i.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"===a(e,null,"position")})}return n}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t,s,l){function a(){c&&(delete P.style,delete P.modElem)}if(l=!r(l,"undefined")&&l,!r(s,"undefined")){var d=u(e,s);if(!r(d,"undefined"))return d}for(var c,p,m,y,v,h=["modernizr","tspan","samp"];!P.style&&h.length;)c=!0,P.modElem=i(h.shift()),P.style=P.modElem.style;for(m=e.length,p=0;p<m;p++)if(y=e[p],v=P.style[y],o(y,"-")&&(y=f(y)),P.style[y]!==n){if(l||r(s,"undefined"))return a(),"pfx"!==t||y;try{P.style[y]=s}catch(e){}if(P.style[y]!==v)return a(),"pfx"!==t||y}return a(),!1}function c(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+C.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?d(l,t,o,i):function(e,t,n){var o;for(var i in e)if(e[i]in t)return!1===n?e[i]:r(o=t[e[i]],"function")?c(o,n||t):o;return!1}(l=(e+" "+z.join(s+" ")+s).split(" "),t,n)}function m(e,t,r){return p(e,n,n,t,r)}var y=[],v={_version:"3.7.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},h=function(){};h.prototype=v,h=new h;var g=[],x="Moz O ms Webkit",C=v._config.usePrefixes?x.split(" "):[];v._cssomPrefixes=C;var w=t.documentElement,S="svg"===w.nodeName.toLowerCase(),b={elem:i("modernizr")};h._q.push(function(){delete b.elem});var P={style:b.elem.style};h._q.unshift(function(){delete P.style});var z=v._config.usePrefixes?x.toLowerCase().split(" "):[];v._domPrefixes=z,v.testAllProps=p,v.testAllProps=m,h.addTest("flexbox",m("flexBasis","1px",!0)),h.addTest("flexwrap",m("flexWrap","wrap",!0)),h.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}),function(){var e,t,n,o,i,s;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],(t=y[l]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(s=e[i].split(".")).length?h[s[0]]=o:(!h[s[0]]||h[s[0]]instanceof Boolean||(h[s[0]]=new Boolean(h[s[0]])),h[s[0]][s[1]]=o),g.push((o?"":"no-")+s.join("-"))}}(),delete v.addTest,delete v.addAsyncTest;for(var _=0;_<h._q.length;_++)h._q[_]();e.Modernizr=h}(t,document),e.exports=t.Modernizr,n?t.Modernizr=r:delete t.Modernizr}(window)},3553:function(e,t,n){"use strict";n.r(t);var r=n(2391),o=n.n(r);const i=["flexbox","flexwrap","localstorage"],s=e=>{if(o.a[e])return!0;const t=document.getElementsByClassName("BadBrowser")[0];return t.className+=" is-open",/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)&&(t.className+=" is-mobile"),console.warn(`Feature '${e}' not supported.`),!1};document.addEventListener("DOMContentLoaded",()=>{i.every(s)})}});
//# sourceMappingURL=badBrowserCheck.ca73cf4a9144f17c0912.js.map