!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(3)},function(e,t,n){},function(e,t){$(document).ready((function(){$(".slider").slick({infinite:!1,variableWidth:!0,dots:!0,responsive:[]})}))},function(e,t,n){"use strict";n.r(t);n(1);var r=document.querySelector(".button_burger"),o=document.querySelector(".button_close"),i=document.querySelector(".main-nav"),c=document.querySelector(".main-content"),u=function(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)},d=function(){u(i,"hide"),u(c,"main-content_opasity_01")};r.addEventListener("click",d),o.addEventListener("click",d);var s=document.querySelector(".services__description .hide"),l=document.querySelector(".services__description-text .show-hide-button_show"),a=document.querySelector(".services__description-text .show-hide-button_hide"),f=function(){u(l,"hide"),u(a,"hide"),u(s,"hide")};l.addEventListener("click",f),a.addEventListener("click",f);var v=document.querySelectorAll(".services__brands-logo-wrapper .hide"),_=document.querySelector(".services__brands-logo .show-hide-button_show"),b=document.querySelector(".services__brands-logo .show-hide-button_hide"),h=function(){v.forEach((function(e){return u(e,"hide")})),u(_,"hide"),u(b,"hide")};_.addEventListener("click",h),b.addEventListener("click",h);n(2)}]);
//# sourceMappingURL=bundle.js.map