(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var a=t.g.document;if(!e&&a&&(a.currentScript&&(e=a.currentScript.src),!e)){var r=a.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"img/9384e58a09e03f46311a.jpg",a=t.p+"img/7187e618c4f7aa874b0d.jpg",r=t.p+"img/21426e09c130c645651e.jpg",s=t.p+"img/5e72e4865c7ea7fd7b25.jpg",c=t.p+"img/b65e0f64a51d070467bc.jpg",i=t.p+"img/b8196fad61a1c42a6fd2.jpg";arr=[e,a,r,s,c,i];var o=document.querySelector(".navbar");window.addEventListener("scroll",(function(t){t.preventDefault(),window.scrollY<=300?(o.classList.remove("navbar-light"),o.classList.remove("sticky-top"),o.classList.add("animated"),o.classList.add("pt-lg-4"),o.classList.add("navbar-dark")):(o.classList.remove("bg-transparent"),o.classList.remove("navbar-dark"),o.classList.add("navbar-light"),o.classList.add("sticky-top"),o.classList.add("animated"),o.classList.remove("pt-lg-4"))}));for(var n=document.querySelectorAll(".height-portfolio"),l=0;l<n.length;l++)n[l].style.backgroundImage=arr[l].src,console.log(n[l].style.backgroundImage)})();