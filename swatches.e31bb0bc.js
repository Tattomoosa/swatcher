// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/@simonwep/pickr/dist/pickr.min.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/tingle.js/dist/tingle.min.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"swatches.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"/node_modules/@simonwep/pickr/dist/pickr.min.css":"node_modules/@simonwep/pickr/dist/pickr.min.css","./node_modules/tingle.js/dist/tingle.min.css":"node_modules/tingle.js/dist/tingle.min.css","_css_loader":"../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/@simonwep/pickr/dist/pickr.min.js":[function(require,module,exports) {
var define;
/*! Pickr 0.5.1 MIT | https://github.com/Simonwep/pickr */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Pickr=e():t.Pickr=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const i=r.bind(null,"addEventListener"),s=r.bind(null,"removeEventListener");function r(t,e,n,i){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return e instanceof HTMLCollection||e instanceof NodeList?e=Array.from(e):Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]),e.forEach(e=>n.forEach(n=>e[t](n,i,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){o(t,e,n[e])})}return t}({capture:!1},s)))),Array.prototype.slice.call(arguments,1)}function a(t){const e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}function c(t,e){const n=t.getAttribute(e);return t.removeAttribute(e),n}function l(t){return function t(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=c(e,"data-con"),i=c(e,"data-key");i&&(n[i]=e);const s=Array.from(e.children),r=o?n[o]={}:n;for(let e of s){const n=c(e,"data-arr");n?(r[n]||(r[n]=[])).push(e):t(e,r)}return n}(a(t))}function p(t){let e=t.path||t.composedPath&&t.composedPath();if(e)return e;let n=t.target.parentElement;for(e=[t.target,n];n=n.parentElement;)e.push(n);return e.push(document,window),e}function u(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=t=>t>="0"&&t<="9"||"-"===t||"."===t;function o(o){const i=t.value,s=t.selectionStart;let r=s,a="";for(let t=s-1;t>0&&n(i[t]);t--)a=i[t]+a,r--;for(let t=s,e=i.length;t<e&&n(i[t]);t++)a+=i[t];if(a.length>0&&!isNaN(a)&&isFinite(a)){const n=o.deltaY<0?1:-1,s=[1,10,100][Number(o.shiftKey||2*o.ctrlKey)]*n;let c=Number(a)+s;!e&&c<0&&(c=0);const l=i.substr(0,r)+c+i.substring(r+a.length,i.length),p=r+String(c).length;t.value=l,t.focus(),t.setSelectionRange(p,p)}o.preventDefault(),t.dispatchEvent(new Event("input"))}i(t,"focus",()=>i(window,"wheel",o,{passive:!1})),i(t,"blur",()=>s(window,"wheel",o))}function h(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:" ";return(e-=t.length)<=0||!n.length?String(t):(e>n.length&&(n+=n.repeat(e/n.length)),n.slice(0,e)+String(t))}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],o=!0,i=!1,s=void 0;try{for(var r,a=t[Symbol.iterator]();!(o=(r=a.next()).done)&&(n.push(r.value),!e||n.length!==e);o=!0);}catch(t){i=!0,s=t}finally{try{o||null==a.return||a.return()}finally{if(i)throw s}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const f=Math.min,v=Math.max,y=Math.floor,g=Math.round;function m(t,e,n){e/=100,n/=100;let o=y(t=t/360*6),i=t-o,s=n*(1-e),r=n*(1-i*e),a=n*(1-(1-i)*e),c=o%6;return[255*[n,r,s,s,a,n][c],255*[a,n,n,r,s,s][c],255*[s,s,a,n,n,r][c]]}function b(t,e,n){let o,i,s;const r=f(t/=255,e/=255,n/=255),a=v(t,e,n),c=a-r;if(0===c)o=i=0;else{i=c/a;let s=((a-t)/6+c/2)/c,r=((a-e)/6+c/2)/c,l=((a-n)/6+c/2)/c;t===a?o=l-r:e===a?o=1/3+s-l:n===a&&(o=2/3+r-s),o<0?o+=1:o>1&&(o-=1)}return[360*o,100*i,100*(s=a)]}function _(t,e,n,o){return e/=100,n/=100,[...b(255*(1-f(1,(t/=100)*(1-(o/=100))+o)),255*(1-f(1,e*(1-o)+o)),255*(1-f(1,n*(1-o)+o)))]}function w(t,e,n){return e/=100,[t,2*(e*=(n/=100)<.5?n:1-n)/(n+e)*100,100*(n+e)]}function k(t){return b(...t.match(/.{2}/g).map(t=>parseInt(t,16)))}function A(t){t=t.match(/^[a-zA-Z]+$/)?function(t){const e=document.createElement("canvas").getContext("2d");return e.fillStyle=t,e.fillStyle}(t):t;const e={cmyk:/^cmyk[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)/i,rgba:/^(rgb|rgba)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,hsla:/^(hsl|hsla)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,hsva:/^(hsv|hsva)[\D]+(\d+)[\D]+(\d+)[\D]+(\d+)[\D]*?([\d.]+|$)/i,hex:/^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i},n=t=>t.map(t=>/^(|\d+)\.\d+|\d+$/.test(t)?Number(t):void 0);let o;for(const r in e)if(o=e[r].exec(t))switch(r){case"cmyk":{let t=d(n(o),5),e=t[1],i=t[2],s=t[3],a=t[4];if(e>100||i>100||s>100||a>100)break;return{values:[..._(e,i,s,a),1],type:r}}case"rgba":{let t=d(n(o),6),e=t[2],i=t[3],s=t[4],a=t[5],c=void 0===a?1:a;if(e>255||i>255||s>255||c<0||c>1)break;return{values:[...b(e,i,s),c],type:r}}case"hex":{const t=(t,e)=>[t.substring(0,e),t.substring(e,t.length)];let e,n=d(o,2)[1];if(3===n.length?n+="F":6===n.length&&(n+="FF"),4===n.length){var i=d(t(n,3).map(t=>t+t),2);n=i[0],e=i[1]}else if(8===n.length){var s=d(t(n,6),2);n=s[0],e=s[1]}return e=parseInt(e,16)/255,{values:[...k(n),e],type:r}}case"hsla":{let t=d(n(o),6),e=t[2],i=t[3],s=t[4],a=t[5],c=void 0===a?1:a;if(e>360||i>100||s>100||c<0||c>1)break;return{values:[...w(e,i,s),c],type:r}}case"hsva":{let t=d(n(o),6),e=t[2],i=t[3],s=t[4],a=t[5],c=void 0===a?1:a;if(e>360||i>100||s>100||c<0||c>1)break;return{values:[e,i,s,c],type:r}}}return{values:null,type:null}}function C(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;const i=Math.ceil,s={h:t,s:e,v:n,a:o,toHSVA(){const t=[s.h,s.s,s.v],e=t.map(i);return t.push(s.a),t.toString=(()=>"hsva(".concat(e[0],", ").concat(e[1],"%, ").concat(e[2],"%, ").concat(s.a.toFixed(1),")")),t},toHSLA(){const t=function(t,e,n){let o=(2-(e/=100))*(n/=100)/2;return 0!==o&&(e=1===o?0:o<.5?e*n/(2*o):e*n/(2-2*o)),[t,100*e,100*o]}(s.h,s.s,s.v),e=t.map(i);return t.push(s.a),t.toString=(()=>"hsla(".concat(e[0],", ").concat(e[1],"%, ").concat(e[2],"%, ").concat(s.a.toFixed(1),")")),t},toRGBA(){const t=m(s.h,s.s,s.v),e=t.map(i);return t.push(s.a),t.toString=(()=>"rgba(".concat(e[0],", ").concat(e[1],", ").concat(e[2],", ").concat(s.a.toFixed(1),")")),t},toCMYK(){const t=function(t,e,n){const o=m(t,e,n),i=o[0]/255,s=o[1]/255,r=o[2]/255;let a,c,l,p;return[100*(c=1===(a=f(1-i,1-s,1-r))?0:(1-i-a)/(1-a)),100*(l=1===a?0:(1-s-a)/(1-a)),100*(p=1===a?0:(1-r-a)/(1-a)),100*a]}(s.h,s.s,s.v),e=t.map(i);return t.toString=(()=>"cmyk(".concat(e[0],"%, ").concat(e[1],"%, ").concat(e[2],"%, ").concat(e[3],"%)")),t},toHEXA(){const t=(e=s.h,n=s.s,o=s.v,m(e,n,o).map(t=>h(g(t).toString(16),2,"0")));var e,n,o;return t.toString=(()=>{const e=s.a>=1?"":h(Number((255*s.a).toFixed(0)).toString(16).toUpperCase(),2,"0");return"#".concat(t.join("").toUpperCase()+e)}),t},clone:()=>C(s.h,s.s,s.v,s.a)};return s}function S(t){const e={options:Object.assign({lockX:!1,lockY:!1,onchange:()=>0},t),_tapstart(t){i(document,["mouseup","touchend","touchcancel"],e._tapstop),i(document,["mousemove","touchmove"],e._tapmove),t.preventDefault(),e._tapmove(t)},_tapmove(t){const n=e.options,o=e.cache,i=n.element,s=e.options.wrapper.getBoundingClientRect();let r=0,a=0;if(t){const e=t&&t.touches&&t.touches[0];r=t?(e||t).clientX:0,a=t?(e||t).clientY:0,r<s.left?r=s.left:r>s.left+s.width&&(r=s.left+s.width),a<s.top?a=s.top:a>s.top+s.height&&(a=s.top+s.height),r-=s.left,a-=s.top}else o&&(r=o.x*s.width,a=o.y*s.height);n.lockX||(i.style.left="calc(".concat(r/s.width*100,"% - ").concat(i.offsetWidth/2,"px)")),n.lockY||(i.style.top="calc(".concat(a/s.height*100,"% - ").concat(i.offsetWidth/2,"px)")),e.cache={x:r/s.width,y:a/s.height},n.onchange(r,a)},_tapstop(){s(document,["mouseup","touchend","touchcancel"],e._tapstop),s(document,["mousemove","touchmove"],e._tapmove)},trigger(){e._tapmove()},update(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const o=e.options.wrapper.getBoundingClientRect();e._tapmove({clientX:o.left+t,clientY:o.top+n})},destroy(){const t=e.options,n=e._tapstart;s([t.wrapper,t.element],"mousedown",n),s([t.wrapper,t.element],"touchstart",n,{passive:!1})}},n=e.options,o=e._tapstart;return i([n.wrapper,n.element],"mousedown",o),i([n.wrapper,n.element],"touchstart",o,{passive:!1}),e}function O(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({onchange:()=>0,className:"",elements:[]},t);const e=i(t.elements,"click",e=>{t.elements.forEach(n=>n.classList[e.target===n?"add":"remove"](t.className)),t.onchange(e)});return{destroy:()=>s(...e)}}var E=t=>{const e=t.components,n=t.strings,o=t.useAsButton,i=t.inline,s=t.appClass,r=t=>t?"":'style="display:none" hidden',a=l('\n        <div data-key="root" class="pickr">\n        \n            '.concat(o?"":'<button type="button" data-key="button" class="pcr-button"></button>','\n\n            <div data-key="app" class="pcr-app ').concat(s||"",'" ').concat(i?'style="position: unset"':"",'>\n                <div class="pcr-selection" ').concat(r(e.palette),'>\n                    <div data-con="preview" class="pcr-color-preview" ').concat(r(e.preview),'>\n                        <button type="button" data-key="lastColor" class="pcr-last-color"></button>\n                        <div data-key="currentColor" class="pcr-current-color"></div>\n                    </div>\n\n                    <div data-con="palette" class="pcr-color-palette">\n                        <div data-key="picker" class="pcr-picker"></div>\n                        <div data-key="palette" class="pcr-palette"></div>\n                    </div>\n\n                    <div data-con="hue" class="pcr-color-chooser" ').concat(r(e.hue),'>\n                        <div data-key="picker" class="pcr-picker"></div>\n                        <div data-key="slider" class="pcr-hue pcr-slider"></div>\n                    </div>\n\n                    <div data-con="opacity" class="pcr-color-opacity" ').concat(r(e.opacity),'>\n                        <div data-key="picker" class="pcr-picker"></div>\n                        <div data-key="slider" class="pcr-opacity pcr-slider"></div>\n                    </div>\n                </div>\n\n                <div class="pcr-swatches ').concat(e.palette?"":" pcr-last",'" data-key="swatches"></div> \n\n                <div data-con="interaction" class="pcr-interaction" ').concat(r(Object.keys(e.interaction).length),'>\n                    <input data-key="result" class="pcr-result" type="text" spellcheck="false" ').concat(r(e.interaction.input),'>\n\n                    <input data-arr="options" class="pcr-type" data-type="HEXA" value="HEXA" type="button" ').concat(r(e.interaction.hex),'>\n                    <input data-arr="options" class="pcr-type" data-type="RGBA" value="RGBA" type="button" ').concat(r(e.interaction.rgba),'>\n                    <input data-arr="options" class="pcr-type" data-type="HSLA" value="HSLA" type="button" ').concat(r(e.interaction.hsla),'>\n                    <input data-arr="options" class="pcr-type" data-type="HSVA" value="HSVA" type="button" ').concat(r(e.interaction.hsva),'>\n                    <input data-arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ').concat(r(e.interaction.cmyk),'>\n\n                    <input data-key="save" class="pcr-save" value="').concat(n.save||"Save",'" type="button" ').concat(r(e.interaction.save),'>\n                    <input data-key="clear" class="pcr-clear" value="').concat(n.clear||"Clear",'" type="button" ').concat(r(e.interaction.clear),">\n                </div>\n            </div>\n        </div>\n    ")),c=a.interaction;return c.options.find(t=>!t.hidden&&!t.classList.add("active")),c.type=(()=>c.options.find(t=>t.classList.contains("active"))),a};function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class j{constructor(t){x(this,"_initializingActive",!0),x(this,"_recalc",!0),x(this,"_color",C()),x(this,"_lastColor",C()),x(this,"_swatchColors",[]),x(this,"_eventListener",{swatchselect:[],change:[],save:[],init:[]}),x(this,"u",void 0),x(this,"_rePositioningPicker",(()=>{let t,e;return()=>{if(this.options.inline)return;const n=this._root,o=n.app,i=n.button,s=window,r=s.innerWidth,a=s.innerHeight,c=i.getBoundingClientRect(),l=o.getBoundingClientRect();e=a-(c.bottom+l.height+8)<0?c.top-l.height-8:c.bottom+8;const p={left:c.left+c.width-l.width,middle:-l.width/2+(c.left+c.width/2),right:c.left},u=p[this.options.position];t=t+u>r?p.left:u<0?p.right:u,Object.assign(o.style,{left:"".concat(t,"px"),top:"".concat(e,"px")})}})()),this.options=t=Object.assign({appClass:null,useAsButton:!1,disabled:!1,comparison:!0,components:{interaction:{}},strings:{},swatches:null,inline:!1,default:"fff",defaultRepresentation:null,position:"middle",adjustableNumbers:!0,showAlways:!1,closeWithKey:"Escape"},t);const e=t,n=e.swatches,o=e.inline,i=e.components;i.interaction||(i.interaction={});const s=i.preview,r=i.opacity,a=i.hue,c=i.palette;i.palette=c||s||r||a,o&&(t.showAlways=!0),this._preBuild(),this._buildComponents(),this._bindEvents(),this._finalBuild(),n&&n.length&&n.forEach(t=>this.addSwatch(t));const l=this._root.button;requestAnimationFrame(function e(){if(null===l.offsetParent&&l!==document.body)return requestAnimationFrame(e.bind(this));this.setColor(t.default),this._rePositioningPicker(),t.defaultRepresentation&&(this._representation=t.defaultRepresentation,this.setColorRepresentation(this._representation)),t.showAlways&&this.show(),this._initializingActive=!1,this._emit("init")}.bind(this))}_preBuild(){const t=this.options;"string"==typeof t.el&&(t.el=t.el.split(/>>/g).reduce((t,e,n,o)=>(t=t.querySelector(e),n<o.length-1?t.shadowRoot:t),document)),this._root=E(t),t.useAsButton&&(this._root.button=t.el),document.body.appendChild(this._root.root)}_finalBuild(){const t=this.options,e=this._root;if(document.body.removeChild(e.root),t.inline){const n=t.el.parentElement;n.lastChild===t.el?n.appendChild(e.app):n.insertBefore(e.app,t.el.nextSibling)}else document.body.appendChild(e.app);t.useAsButton||t.el.parentNode.replaceChild(e.root,t.el),t.disabled&&this.disable(),t.comparison||(e.button.style.transition="none",t.useAsButton||(e.preview.lastColor.style.transition="none")),this.hide()}_buildComponents(){const t=this,e=this.options.components,n={palette:S({element:t._root.palette.picker,wrapper:t._root.palette.palette,onchange(n,o){if(!e.palette)return;const i=t._color,s=t._root,r=t.options;i.s=n/this.wrapper.offsetWidth*100,i.v=100-o/this.wrapper.offsetHeight*100,i.v<0&&(i.v=0);const a=i.toRGBA().toString();this.element.style.background=a,this.wrapper.style.background="\n                        linear-gradient(to top, rgba(0, 0, 0, ".concat(i.a,"), transparent), \n                        linear-gradient(to left, hsla(").concat(i.h,", 100%, 50%, ").concat(i.a,"), rgba(255, 255, 255, ").concat(i.a,"))\n                    "),r.comparison||(s.button.style.color=a,r.useAsButton||(s.preview.lastColor.style.color=a)),s.preview.currentColor.style.color=a,t._recalc&&t._updateOutput(),s.button.classList.remove("clear")}}),hue:S({lockX:!0,element:t._root.hue.picker,wrapper:t._root.hue.slider,onchange(o,i){e.hue&&e.palette&&(t._color.h=i/this.wrapper.offsetHeight*360,this.element.style.backgroundColor="hsl(".concat(t._color.h,", 100%, 50%)"),n.palette.trigger())}}),opacity:S({lockX:!0,element:t._root.opacity.picker,wrapper:t._root.opacity.slider,onchange(n,o){e.opacity&&e.palette&&(t._color.a=Math.round(o/this.wrapper.offsetHeight*100)/100,this.element.style.background="rgba(0, 0, 0, ".concat(t._color.a,")"),t.components.palette.trigger())}}),selectable:O({elements:t._root.interaction.options,className:"active",onchange(e){t._representation=e.target.getAttribute("data-type").toUpperCase(),t._updateOutput()}})};this.components=n}_bindEvents(){const t=this._root,e=this.options,n=[i(t.interaction.clear,"click",()=>this._clearColor()),i(t.preview.lastColor,"click",()=>this.setHSVA(...this._lastColor.toHSVA())),i(t.interaction.save,"click",()=>{!this.applyColor()&&!e.showAlways&&this.hide()}),i(t.interaction.result,["keyup","input"],t=>{this._recalc=!1,this.setColor(t.target.value,!0)&&!this._initializingActive&&this._emit("change",this._color),t.stopImmediatePropagation()}),i([t.palette.palette,t.palette.picker,t.hue.slider,t.hue.picker,t.opacity.slider,t.opacity.picker],["mousedown","touchstart"],()=>this._recalc=!0)];if(!e.showAlways){const o=e.closeWithKey;n.push(i(t.button,"click",()=>this.isOpen()?this.hide():this.show()),i(document,"keyup",t=>this.isOpen()&&(t.key===o||t.code===o)&&this.hide()),i(document,["touchstart","mousedown"],e=>{this.isOpen()&&!p(e).some(e=>e===t.app||e===t.button)&&this.hide()},{capture:!0}))}if(e.adjustableNumbers&&u(t.interaction.result,!1),!e.inline){let t;n.push(i(window,["scroll","resize"],()=>{this.isOpen()&&(this.hide(),t&&clearTimeout(t),t=setTimeout(()=>this.show(),250))}))}this._eventBindings=n}_updateOutput(){if(this._root.interaction.type()){const t="to".concat(this._root.interaction.type().getAttribute("data-type"));this._root.interaction.result.value="function"==typeof this._color[t]?this._color[t]().toString():""}this._initializingActive||this._emit("change",this._color)}_clearColor(){const t=this._root,e=this.options;e.useAsButton||(t.button.style.color="rgba(0, 0, 0, 0.15)"),t.button.classList.add("clear"),e.showAlways||this.hide(),this._initializingActive||this._emit("save",null)}_emit(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];this._eventListener[t].forEach(t=>t(...n,this))}on(t,e){return"function"==typeof e&&"string"==typeof t&&t in this._eventListener&&this._eventListener[t].push(e),this}off(t,e){const n=this._eventListener[t];if(n){const t=n.indexOf(e);~t&&n.splice(t,1)}return this}addSwatch(t){const e=A(t).values;if(e){const t=this._swatchColors,n=this._root,o=C(...e),s=a('<button type="button" style="color: '.concat(o.toRGBA(),'"></button>'));return n.swatches.appendChild(s),t.push({element:s,hsvaColorObject:o}),this._eventBindings.push(i(s,"click",()=>{this.setHSVA(...o.toHSVA(),!0),this._emit("swatchselect",o)})),!0}return!1}removeSwatch(t){if("number"==typeof t){const e=this._swatchColors[t];if(e){const n=e.element;return this._root.swatches.removeChild(n),this._swatchColors.splice(t,1),!0}}return!1}applyColor(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const e=this._root,n=e.preview,o=e.button,i=this._color.toRGBA().toString();n.lastColor.style.color=i,this.options.useAsButton||(o.style.color=i),o.classList.remove("clear"),this._lastColor=this._color.clone(),this._initializingActive||t||this._emit("save",this._color)}destroy(){this._eventBindings.forEach(t=>s(...t)),Object.keys(this.components).forEach(t=>this.components[t].destroy())}destroyAndRemove(){this.destroy();const t=this._root.root;t.parentElement.removeChild(t);const e=this._root.app;e.parentElement.removeChild(e);const n=this;Object.keys(n).forEach(t=>n[t]=null)}hide(){return this._root.app.classList.remove("visible"),this}show(){if(!this.options.disabled)return this._root.app.classList.add("visible"),this._rePositioningPicker(),this}isOpen(){return this._root.app.classList.contains("visible")}setHSVA(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:360,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const s=this._recalc;if(this._recalc=!1,t<0||t>360||e<0||e>100||n<0||n>100||o<0||o>1)return!1;const r=this.components,a=r.hue,c=r.opacity,l=r.palette,p=a.options.wrapper.offsetHeight*(t/360);a.update(0,p);const u=c.options.wrapper.offsetHeight*o;c.update(0,u);const h=l.options.wrapper,d=h.offsetWidth*(e/100),f=h.offsetHeight*(1-n/100);return l.update(d,f),this._color=C(t,e,n,o),this._recalc=s,this._recalc&&this._updateOutput(),i||this.applyColor(),!0}setColor(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null===t)return this._clearColor(),!0;const n=A(t),o=n.values,i=n.type;if(o){const t=i.toUpperCase(),n=this._root.interaction.options,s=n.find(e=>e.getAttribute("data-type").startsWith(t));if(s&&!s.hidden)for(const t of n)t.classList[t===s?"add":"remove"]("active");return this.setHSVA(...o,e)}}setColorRepresentation(t){return t=t.toUpperCase(),!!this._root.interaction.options.find(e=>e.getAttribute("data-type").startsWith(t)&&!e.click())}getColorRepresentation(){return this._representation}getColor(){return this._color}getRoot(){return this._root}disable(){return this.hide(),this.options.disabled=!0,this._root.button.classList.add("disabled"),this}enable(){return this.options.disabled=!1,this._root.button.classList.remove("disabled"),this}}j.utils={once:(t,e,n,o)=>i(t,e,function t(){n.apply(this,arguments),this.removeEventListener(e,t)},o),on:i,off:s,eventPath:p,createElementFromString:a,adjustableInputNumbers:u,removeAttribute:c,createFromTemplate:l},j.create=(t=>new j(t)),j.version="0.5.1";e.default=j}]).default});

},{}],"node_modules/tingle.js/dist/tingle.js":[function(require,module,exports) {
var define;
/* !
* tingle.js
* @author  robin_parisi
* @version 0.15.1
* @url
*/

/* global define,module*/
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory)
    } else if (typeof exports === 'object') {
        module.exports = factory()
    } else {
        root.tingle = factory()
    }
}(this, function() {

    /* ----------------------------------------------------------- */
    /* == modal */
    /* ----------------------------------------------------------- */

    var isBusy = false

    function Modal(options) {
        var defaults = {
            onClose: null,
            onOpen: null,
            beforeOpen: null,
            beforeClose: null,
            stickyFooter: false,
            footer: false,
            cssClass: [],
            closeLabel: 'Close',
            closeMethods: ['overlay', 'button', 'escape']
        }

        // extends config
        this.opts = extend({}, defaults, options)
        
        // init modal
        this.init()
    }

    Modal.prototype.init = function() {
        if (this.modal) {
            return
        }

        _build.call(this)
        _bindEvents.call(this)
        
        // insert modal in dom
        document.body.insertBefore(this.modal, document.body.firstChild)

        if (this.opts.footer) {
            this.addFooter()
        }

        return this
    }

    Modal.prototype._busy = function(state) {
        isBusy = state
    }

    Modal.prototype._isBusy = function() {
        return isBusy
    }

    Modal.prototype.destroy = function() {
        if (this.modal === null) {
            return
        }

        // restore scrolling
        if (this.isOpen()) {
            this.close(true)
        }

        // unbind all events
        _unbindEvents.call(this)

        // remove modal from dom
        this.modal.parentNode.removeChild(this.modal)

        this.modal = null
    }

    Modal.prototype.isOpen = function() {
        return !!this.modal.classList.contains('tingle-modal--visible')
    }

    Modal.prototype.open = function() {
        if(this._isBusy()) return
        this._busy(true)

        var self = this

        // before open callback
        if (typeof self.opts.beforeOpen === 'function') {
            self.opts.beforeOpen()
        }

        if (this.modal.style.removeProperty) {
            this.modal.style.removeProperty('display')
        } else {
            this.modal.style.removeAttribute('display')
        }

        // prevent double scroll
        this._scrollPosition = window.pageYOffset
        document.body.classList.add('tingle-enabled')
        document.body.style.top = -this._scrollPosition + 'px'

        // sticky footer
        this.setStickyFooter(this.opts.stickyFooter)

        // show modal
        this.modal.classList.add('tingle-modal--visible')

        // onOpen callback
        if (typeof self.opts.onOpen === 'function') {
            self.opts.onOpen.call(self)
        }

        self._busy(false)
        
        // check if modal is bigger than screen height
        this.checkOverflow()

        return this
    }

    Modal.prototype.close = function(force) {
        if(this._isBusy()) return
        this._busy(true)
        force = force || false

        //  before close
        if (typeof this.opts.beforeClose === 'function') {
            var close = this.opts.beforeClose.call(this)
            if (!close) {
                this._busy(false)
                return
            }
        }

        document.body.classList.remove('tingle-enabled')
        window.scrollTo(0, this._scrollPosition)
        document.body.style.top = null

        this.modal.classList.remove('tingle-modal--visible')

        // using similar setup as onOpen
        var self = this

        self.modal.style.display = 'none'

        // onClose callback
        if (typeof self.opts.onClose === 'function') {
            self.opts.onClose.call(this)
        }

        // release modal
        self._busy(false)
        
    }

    Modal.prototype.setContent = function(content) {
        // check type of content : String or Node
        if (typeof content === 'string') {
            this.modalBoxContent.innerHTML = content
        } else {
            this.modalBoxContent.innerHTML = ''
            this.modalBoxContent.appendChild(content)
        }

        if (this.isOpen()) {
            // check if modal is bigger than screen height
            this.checkOverflow()
        }
        
        return this
    }

    Modal.prototype.getContent = function() {
        return this.modalBoxContent
    }

    Modal.prototype.addFooter = function() {
        // add footer to modal
        _buildFooter.call(this)

        return this
    }

    Modal.prototype.setFooterContent = function(content) {
        // set footer content
        this.modalBoxFooter.innerHTML = content

        return this
    }

    Modal.prototype.getFooterContent = function() {
        return this.modalBoxFooter
    }

    Modal.prototype.setStickyFooter = function(isSticky) {
        // if the modal is smaller than the viewport height, we don't need sticky
        if (!this.isOverflow()) {
            isSticky = false
        }

        if (isSticky) {
            if (this.modalBox.contains(this.modalBoxFooter)) {
                this.modalBox.removeChild(this.modalBoxFooter)
                this.modal.appendChild(this.modalBoxFooter)
                this.modalBoxFooter.classList.add('tingle-modal-box__footer--sticky')
                _recalculateFooterPosition.call(this)
                this.modalBoxContent.style['padding-bottom'] = this.modalBoxFooter.clientHeight + 20 + 'px'
            }
        } else if (this.modalBoxFooter) {
            if (!this.modalBox.contains(this.modalBoxFooter)) {
                this.modal.removeChild(this.modalBoxFooter)
                this.modalBox.appendChild(this.modalBoxFooter)
                this.modalBoxFooter.style.width = 'auto'
                this.modalBoxFooter.style.left = ''
                this.modalBoxContent.style['padding-bottom'] = ''
                this.modalBoxFooter.classList.remove('tingle-modal-box__footer--sticky')
            }
        }

        return this
    }


    Modal.prototype.addFooterBtn = function(label, cssClass, callback) {
        var btn = document.createElement('button')
                
        // set label
        btn.innerHTML = label

        // bind callback
        btn.addEventListener('click', callback)

        if (typeof cssClass === 'string' && cssClass.length) {
            // add classes to btn
            cssClass.split(' ').forEach(function(item) {
                btn.classList.add(item)
            })
        }

        this.modalBoxFooter.appendChild(btn)

        return btn
    }

    Modal.prototype.resize = function() {
        // eslint-disable-next-line no-console
        console.warn('Resize is deprecated and will be removed in version 1.0')
    }

    Modal.prototype.isOverflow = function() {
        var viewportHeight = window.innerHeight
        var modalHeight = this.modalBox.clientHeight

        return modalHeight >= viewportHeight
    }

    Modal.prototype.checkOverflow = function() {
        // only if the modal is currently shown
        if (this.modal.classList.contains('tingle-modal--visible')) {
            if (this.isOverflow()) {
                this.modal.classList.add('tingle-modal--overflow')
            } else {
                this.modal.classList.remove('tingle-modal--overflow')
            }

            // tODO: remove offset
            // _offset.call(this);
            if (!this.isOverflow() && this.opts.stickyFooter) {
                this.setStickyFooter(false)
            } else if (this.isOverflow() && this.opts.stickyFooter) {
                _recalculateFooterPosition.call(this)
                this.setStickyFooter(true)
            }
        }
    }


    /* ----------------------------------------------------------- */
    /* == private methods */
    /* ----------------------------------------------------------- */

    function closeIcon() {
        return '<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.3 9.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L5 6.4l3.3 3.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L6.4 5l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L5 3.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L3.6 5 .3 8.3c-.4.4-.4 1 0 1.4z" fill="#000" fill-rule="nonzero"/></svg>'
    }

    function _recalculateFooterPosition() {
        if (!this.modalBoxFooter) { 
            return
        }
        this.modalBoxFooter.style.width = this.modalBox.clientWidth + 'px'
        this.modalBoxFooter.style.left = this.modalBox.offsetLeft + 'px'
    }

    function _build() {

        // wrapper
        this.modal = document.createElement('div')
        this.modal.classList.add('tingle-modal')

        // remove cusor if no overlay close method
        if (this.opts.closeMethods.length === 0 || this.opts.closeMethods.indexOf('overlay') === -1) {
            this.modal.classList.add('tingle-modal--noOverlayClose')
        }

        this.modal.style.display = 'none'

        // custom class
        this.opts.cssClass.forEach(function(item) {
            if (typeof item === 'string') {
                this.modal.classList.add(item)
            }
        }, this)

        // close btn
        if (this.opts.closeMethods.indexOf('button') !== -1) {
            this.modalCloseBtn = document.createElement('button')
            this.modalCloseBtn.type = 'button'
            this.modalCloseBtn.classList.add('tingle-modal__close')

            this.modalCloseBtnIcon = document.createElement('span')
            this.modalCloseBtnIcon.classList.add('tingle-modal__closeIcon')
            this.modalCloseBtnIcon.innerHTML = closeIcon()

            this.modalCloseBtnLabel = document.createElement('span')
            this.modalCloseBtnLabel.classList.add('tingle-modal__closeLabel')
            this.modalCloseBtnLabel.innerHTML = this.opts.closeLabel

            this.modalCloseBtn.appendChild(this.modalCloseBtnIcon)
            this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)
        }

        // modal
        this.modalBox = document.createElement('div')
        this.modalBox.classList.add('tingle-modal-box')

        // modal box content
        this.modalBoxContent = document.createElement('div')
        this.modalBoxContent.classList.add('tingle-modal-box__content')

        this.modalBox.appendChild(this.modalBoxContent)

        if (this.opts.closeMethods.indexOf('button') !== -1) {
            this.modal.appendChild(this.modalCloseBtn)
        }

        this.modal.appendChild(this.modalBox)

    }

    function _buildFooter() {
        this.modalBoxFooter = document.createElement('div')
        this.modalBoxFooter.classList.add('tingle-modal-box__footer')
        this.modalBox.appendChild(this.modalBoxFooter)
    }

    function _bindEvents() {

        this._events = {
            clickCloseBtn: this.close.bind(this),
            clickOverlay: _handleClickOutside.bind(this),
            resize: this.checkOverflow.bind(this),
            keyboardNav: _handleKeyboardNav.bind(this)
        }

        if (this.opts.closeMethods.indexOf('button') !== -1) {
            this.modalCloseBtn.addEventListener('click', this._events.clickCloseBtn)
        }

        this.modal.addEventListener('mousedown', this._events.clickOverlay)
        window.addEventListener('resize', this._events.resize)
        document.addEventListener('keydown', this._events.keyboardNav)
    }

    function _handleKeyboardNav(event) {
        // escape key
        if (this.opts.closeMethods.indexOf('escape') !== -1 && event.which === 27 && this.isOpen()) {
            this.close()
        }
    }

    function _handleClickOutside(event) {
        // if click is outside the modal
        if (this.opts.closeMethods.indexOf('overlay') !== -1 && !_findAncestor(event.target, 'tingle-modal') &&
        event.clientX < this.modal.clientWidth) {
            this.close()
        }
    }

    function _findAncestor(el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls));
        return el
    }

    function _unbindEvents() {
        if (this.opts.closeMethods.indexOf('button') !== -1) {
            this.modalCloseBtn.removeEventListener('click', this._events.clickCloseBtn)
        }
        this.modal.removeEventListener('mousedown', this._events.clickOverlay)
        window.removeEventListener('resize', this._events.resize)
        document.removeEventListener('keydown', this._events.keyboardNav)
    }

    /* ----------------------------------------------------------- */
    /* == helpers */
    /* ----------------------------------------------------------- */

    function extend() {
        for (var i = 1; i < arguments.length; i++) {
            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    arguments[0][key] = arguments[i][key]
                }
            }
        }
        return arguments[0]
    }

    /* ----------------------------------------------------------- */
    /* == return */
    /* ----------------------------------------------------------- */

    return {
        modal: Modal
    }

}))

},{}],"node_modules/clipboard/dist/clipboard.min.js":[function(require,module,exports) {
var define;
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
!function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e();
}(this, function () {
  return function (n) {
    var o = {};

    function r(t) {
      if (o[t]) return o[t].exports;
      var e = o[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports;
    }

    return r.m = n, r.c = o, r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
      return n;
    }, r.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return r.d(e, "a", e), e;
    }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, r.p = "", r(r.s = 0);
  }([function (t, e, n) {
    "use strict";

    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    },
        i = function () {
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      return function (t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t;
      };
    }(),
        a = o(n(1)),
        c = o(n(3)),
        u = o(n(4));

    function o(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var l = function (t) {
      function o(t, e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, o);

        var n = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != typeof e && "function" != typeof e ? t : e;
        }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));

        return n.resolveOptions(e), n.listenClick(t), n;
      }

      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(o, c.default), i(o, [{
        key: "resolveOptions",
        value: function () {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === r(t.container) ? t.container : document.body;
        }
      }, {
        key: "listenClick",
        value: function (t) {
          var e = this;
          this.listener = (0, u.default)(t, "click", function (t) {
            return e.onClick(t);
          });
        }
      }, {
        key: "onClick",
        value: function (t) {
          var e = t.delegateTarget || t.currentTarget;
          this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new a.default({
            action: this.action(e),
            target: this.target(e),
            text: this.text(e),
            container: this.container,
            trigger: e,
            emitter: this
          });
        }
      }, {
        key: "defaultAction",
        value: function (t) {
          return s("action", t);
        }
      }, {
        key: "defaultTarget",
        value: function (t) {
          var e = s("target", t);
          if (e) return document.querySelector(e);
        }
      }, {
        key: "defaultText",
        value: function (t) {
          return s("text", t);
        }
      }, {
        key: "destroy",
        value: function () {
          this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null);
        }
      }], [{
        key: "isSupported",
        value: function () {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
              e = "string" == typeof t ? [t] : t,
              n = !!document.queryCommandSupported;
          return e.forEach(function (t) {
            n = n && !!document.queryCommandSupported(t);
          }), n;
        }
      }]), o;
    }();

    function s(t, e) {
      var n = "data-clipboard-" + t;
      if (e.hasAttribute(n)) return e.getAttribute(n);
    }

    t.exports = l;
  }, function (t, e, n) {
    "use strict";

    var o,
        r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    },
        i = function () {
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      return function (t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t;
      };
    }(),
        a = n(2),
        c = (o = a) && o.__esModule ? o : {
      default: o
    };

    var u = function () {
      function e(t) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.resolveOptions(t), this.initSelection();
      }

      return i(e, [{
        key: "resolveOptions",
        value: function () {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = "";
        }
      }, {
        key: "initSelection",
        value: function () {
          this.text ? this.selectFake() : this.target && this.selectTarget();
        }
      }, {
        key: "selectFake",
        value: function () {
          var t = this,
              e = "rtl" == document.documentElement.getAttribute("dir");
          this.removeFake(), this.fakeHandlerCallback = function () {
            return t.removeFake();
          }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
          var n = window.pageYOffset || document.documentElement.scrollTop;
          this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, c.default)(this.fakeElem), this.copyText();
        }
      }, {
        key: "removeFake",
        value: function () {
          this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null);
        }
      }, {
        key: "selectTarget",
        value: function () {
          this.selectedText = (0, c.default)(this.target), this.copyText();
        }
      }, {
        key: "copyText",
        value: function () {
          var e = void 0;

          try {
            e = document.execCommand(this.action);
          } catch (t) {
            e = !1;
          }

          this.handleResult(e);
        }
      }, {
        key: "handleResult",
        value: function (t) {
          this.emitter.emit(t ? "success" : "error", {
            action: this.action,
            text: this.selectedText,
            trigger: this.trigger,
            clearSelection: this.clearSelection.bind(this)
          });
        }
      }, {
        key: "clearSelection",
        value: function () {
          this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
        }
      }, {
        key: "destroy",
        value: function () {
          this.removeFake();
        }
      }, {
        key: "action",
        set: function () {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
          if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
        },
        get: function () {
          return this._action;
        }
      }, {
        key: "target",
        set: function (t) {
          if (void 0 !== t) {
            if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
            if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
            this._target = t;
          }
        },
        get: function () {
          return this._target;
        }
      }]), e;
    }();

    t.exports = u;
  }, function (t, e) {
    t.exports = function (t) {
      var e;
      if ("SELECT" === t.nodeName) t.focus(), e = t.value;else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
        var n = t.hasAttribute("readonly");
        n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value;
      } else {
        t.hasAttribute("contenteditable") && t.focus();
        var o = window.getSelection(),
            r = document.createRange();
        r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString();
      }
      return e;
    };
  }, function (t, e) {
    function n() {}

    n.prototype = {
      on: function (t, e, n) {
        var o = this.e || (this.e = {});
        return (o[t] || (o[t] = [])).push({
          fn: e,
          ctx: n
        }), this;
      },
      once: function (t, e, n) {
        var o = this;

        function r() {
          o.off(t, r), e.apply(n, arguments);
        }

        return r._ = e, this.on(t, r, n);
      },
      emit: function (t) {
        for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++) n[o].fn.apply(n[o].ctx, e);

        return this;
      },
      off: function (t, e) {
        var n = this.e || (this.e = {}),
            o = n[t],
            r = [];
        if (o && e) for (var i = 0, a = o.length; i < a; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
        return r.length ? n[t] = r : delete n[t], this;
      }
    }, t.exports = n;
  }, function (t, e, n) {
    var d = n(5),
        h = n(6);

    t.exports = function (t, e, n) {
      if (!t && !e && !n) throw new Error("Missing required arguments");
      if (!d.string(e)) throw new TypeError("Second argument must be a String");
      if (!d.fn(n)) throw new TypeError("Third argument must be a Function");
      if (d.node(t)) return s = e, f = n, (l = t).addEventListener(s, f), {
        destroy: function () {
          l.removeEventListener(s, f);
        }
      };
      if (d.nodeList(t)) return a = t, c = e, u = n, Array.prototype.forEach.call(a, function (t) {
        t.addEventListener(c, u);
      }), {
        destroy: function () {
          Array.prototype.forEach.call(a, function (t) {
            t.removeEventListener(c, u);
          });
        }
      };
      if (d.string(t)) return o = t, r = e, i = n, h(document.body, o, r, i);
      throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
      var o, r, i, a, c, u, l, s, f;
    };
  }, function (t, n) {
    n.node = function (t) {
      return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
    }, n.nodeList = function (t) {
      var e = Object.prototype.toString.call(t);
      return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]));
    }, n.string = function (t) {
      return "string" == typeof t || t instanceof String;
    }, n.fn = function (t) {
      return "[object Function]" === Object.prototype.toString.call(t);
    };
  }, function (t, e, n) {
    var a = n(7);

    function i(t, e, n, o, r) {
      var i = function (e, n, t, o) {
        return function (t) {
          t.delegateTarget = a(t.target, n), t.delegateTarget && o.call(e, t);
        };
      }.apply(this, arguments);

      return t.addEventListener(n, i, r), {
        destroy: function () {
          t.removeEventListener(n, i, r);
        }
      };
    }

    t.exports = function (t, e, n, o, r) {
      return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
        return i(t, e, n, o, r);
      }));
    };
  }, function (t, e) {
    if ("undefined" != typeof Element && !Element.prototype.matches) {
      var n = Element.prototype;
      n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;
    }

    t.exports = function (t, e) {
      for (; t && 9 !== t.nodeType;) {
        if ("function" == typeof t.matches && t.matches(e)) return t;
        t = t.parentNode;
      }
    };
  }]);
});
},{}],"index.js":[function(require,module,exports) {
"use strict";

require("/swatches.css");

var _pickr = _interopRequireDefault(require("/node_modules/@simonwep/pickr/dist/pickr.min"));

var _tingle = _interopRequireDefault(require("./node_modules/tingle.js/dist/tingle"));

var _clipboard = _interopRequireDefault(require("./node_modules/clipboard/dist/clipboard.min"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = 'Swatch.in';
var white = '#cfcfcf';
var black = '#222222';
var defaultColor = '#2A9663';
var uiColorPivotValue = 58.0;
var infoElement = document.querySelector('.info');
var backgroundStyle = document.body.style;
var titleStyle = document.querySelector('h1').style;
var infoStyle = infoElement.style;
var swatch = document.querySelector('#swatch');
var containerStyle = document.querySelector('.container').style;
var swatchImg = document.querySelector('#swatchimg');
var canvasContainerStyle = document.querySelector('.canvas-container').style;
var textFields = document.querySelectorAll('h6');
var buttons = document.querySelectorAll('input[type="button"]');
var lastPaint = 0;
var urlColors = getURLVars();
if (urlColors != "") defaultColor = urlColors[0];
var infoModal = new _tingle.default.modal({
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: 'Close'
});
console.log(_clipboard.default);
console.log(_clipboard.default.isSupported());
var clip = new _clipboard.default('.copy');
clip.on('success', function (e) {
  console.log("SUCCESS");
  console.info('Action: ', e.action);
  console.info('Text: ', e.text);
  console.info('Trigger: ', e.trigger);
  e.clearSelection();
});
clip.on('error', function () {
  return console.log("failure");
});
var infoTextElement = document.querySelector('.info-text');
var infoText = infoTextElement.innerHTML;
infoTextElement.parentNode.removeChild(infoTextElement);
infoModal.setContent(infoText);

infoElement.onclick = function () {
  return infoModal.open();
};

var pickr = _pickr.default.create({
  el: '.color-picker',
  showAlways: true,
  position: 'middle',
  useAsButton: true,
  inline: true,
  default: defaultColor,
  components: {
    preview: false,
    opacity: false,
    hue: true,
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: false,
      save: false
    }
  }
});

pickr.on('init', function () {
  buttons = document.querySelectorAll('input[type="button"]');

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var color = args[0]._color;
  updateUi(color);
}).on('change', function () {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var color = args[1]._color;
  updateUi(color);
});

function updateUi(color) {
  backgroundStyle.backgroundColor = color.toHEXA();
  var textColor = white;
  var altColor = black;

  if (color.v > uiColorPivotValue) {
    textColor = black;
    altColor = white;
  }

  titleStyle.color = color.toHEXA();
  titleStyle['-webkit-text-stroke'] = '1px ' + textColor;
  titleStyle['text-stroke'] = '1px ' + textColor;
  infoStyle.color = textColor;
  infoStyle.borderColor = textColor;

  for (var i = 0; i < textFields.length; ++i) {
    textFields[i].style.color = textColor;
  }

  canvasContainerStyle.backgroundColor = textColor;
  containerStyle.borderColor = textColor;
  window.cancelAnimationFrame(lastPaint);
  lastPaint = window.requestAnimationFrame(function () {
    return updateSwatch(color);
  });

  for (var _i = 0; _i < buttons.length; ++_i) {
    var button = buttons[_i];
    if (!button.classList.contains('active')) button.style.background = 'transparent';else button.style.background = altColor;
    button.style.color = textColor;
    button.style.borderColor = textColor;
  }
}

function updateSwatch(color) {
  var c = swatch.getContext('2d');
  var height = c.canvas.height;
  var width = c.canvas.width;
  c.beginPath();
  c.rect(0, 0, width, height);
  c.fillStyle = color.toHEXA();
  c.fill();
  c.font = "14px Arial";
  c.fillStyle = color.v < uiColorPivotValue ? white : black;
  c.fillText(color.toHEXA(), 10, height - 10);
  swatchImg.src = c.canvas.toDataURL('image/png');
  swatchImg.setAttribute('download', color.toHEXA() + '.png');
  swatchImg.setAttribute('title', color.toHEXA() + '.png');
  swatchImg.setAttribute('alt', color.toHEXA() + '.png'); // swatchImg['data-clipboard-text'] = c.canvas.toDataURL('image/png')
  // swatchImg.setAttribute('data-clipboard-text', color.toHEXA())
  // swatchImg.value = color.toHEXA()
}

function copyCanvasAsImage() {
  var canvas = swatch.getContext('2d').canvas;
  var img = document.createElement('img');
  img.src = canvas.toDataURL();
  var div = document.createElement('div');
  div.contentEditable = true;
  div.appendChild(img);
  document.body.appendChild(div);
  selectText(div);
  document.execCommand('copy');
  document.body.removeChild(div);
}

function getURLVars() {
  return new URL(window.location.href).pathname.split('/').slice(1);
}
},{"/swatches.css":"swatches.css","/node_modules/@simonwep/pickr/dist/pickr.min":"node_modules/@simonwep/pickr/dist/pickr.min.js","./node_modules/tingle.js/dist/tingle":"node_modules/tingle.js/dist/tingle.js","./node_modules/clipboard/dist/clipboard.min":"node_modules/clipboard/dist/clipboard.min.js"}],"../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "41641" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/swatches.e31bb0bc.js.map