parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\font\\Calibre-SemiBold.woff":[["Calibre-SemiBold.21cc3335.woff","Mg7X"],"Mg7X"],"./..\\font\\Calibre-SemiBold.ttf":[["Calibre-SemiBold.2c27f793.ttf","rJ82"],"rJ82"],"./..\\font\\Calibre-Semibold.svg":[["Calibre-Semibold.2fac62c2.svg","u7ET"],"u7ET"],"./..\\font\\Calibre-Medium.woff":[["Calibre-Medium.bb31c6b1.woff","t3eK"],"t3eK"],"./..\\font\\Calibre-Medium.ttf":[["Calibre-Medium.cb484263.ttf","LVc2"],"LVc2"],"./..\\font\\Calibre-Regular.woff":[["Calibre-Regular.0e30637c.woff","ktK6"],"ktK6"],"./..\\font\\Calibre-Regular.ttf":[["Calibre-Regular.ad23bcd8.ttf","GVeT"],"GVeT"],"./..\\img\\svg\\home-bg.svg":[["home-bg.19753168.svg","LI0O"],"LI0O"]}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=gsap.timeline();e.to("#logo",{yPercent:-20,opacity:0,delay:4}),e.to(".preloader",{transform:"scaleY(0)",transformOrigin:"top",delay:"-=3"});var o=document.querySelectorAll(".social-links--box a");o.forEach(function(e){e.target="_blank"});var t=document.querySelector(".cursor");window.onmousemove=function(e){t.setAttribute("style","top: ".concat(e.pageY,"px; left: ").concat(e.pageX,"px; z-index: 2;"))};var r=gsap.timeline({paused:!0,reversed:!0});r.to(".box",{height:"100vh",duration:.5,transformOrigin:"bottom",stagger:.3}),r.to(".mobile-logo",{opacity:"1"}),r.to(".nav-main__content",{opacity:"1",visibility:"visible",yPercent:-5,duration:.5,transformOrigin:"bottom",stagger:.3});var a=document.querySelector(".nav-icon");a.onclick=function(){r.reversed()?(this.classList.add("nav-anim"),r.play(),document.body.classList.add("noScroll")):(this.classList.remove("nav-anim"),r.reverse(),document.body.classList.remove("noScroll"))};var n=document.querySelectorAll(".list__item a");n.forEach(function(e){e.addEventListener("click",function(){document.body.classList.remove("noScroll"),r.reverse(),a.classList.remove("nav-anim")})});
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=src.ba351ac3.js.map