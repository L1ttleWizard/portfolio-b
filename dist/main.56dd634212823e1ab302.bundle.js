(() => { "use strict"; var e = {}; e.g = function () { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (e) { if ("object" == typeof window) return window } }(), (() => { var t; e.g.importScripts && (t = e.g.location + ""); var r = e.g.document; if (!t && r && (r.currentScript && (t = r.currentScript.src), !t)) { var a = r.getElementsByTagName("script"); a.length && (t = a[a.length - 1].src) } if (!t) throw new Error("Automatic publicPath is not supported in this browser"); t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), e.p = t })(); var t = [e.p + "img/9384e58a09e03f46311a.jpg", e.p + "img/7187e618c4f7aa874b0d.jpg", e.p + "img/21426e09c130c645651e.jpg", e.p + "img/5e72e4865c7ea7fd7b25.jpg", e.p + "img/b65e0f64a51d070467bc.jpg", e.p + "img/b8196fad61a1c42a6fd2.jpg"]; console.log(t); var r = document.querySelector(".navbar"), a = document.querySelectorAll(".nav-link"); a.forEach((function (e) { e.addEventListener("click", (function () { var e = document.getElementById("navbarNav"); e.classList.remove("show"), console.log(e) })) })), window.addEventListener("scroll", (function (e) { if (e.preventDefault(), window.scrollY <= 300) { r.classList.remove("navbar-light"), r.classList.remove("sticky-top"), r.classList.add("animated"), r.classList.add("pt-lg-4"), r.classList.add("navbar-dark"); for (var t = 0; t < a.length; t++)a[t].style.color = "white" } else { r.classList.remove("bg-transparent"), r.classList.remove("navbar-dark"), r.classList.add("navbar-light"), r.classList.add("sticky-top"), r.classList.add("animated"), r.classList.remove("pt-lg-4"); for (t = 0; t < a.length; t++)a[t].style.color = "black" } })); for (var s = document.querySelectorAll(".height-portfolio"), c = 0; c < s.length; c++)s[c].style.backgroundImage = "url(" + String(t[c]) + ")", s[c].style.backgroundSize = "cover", s[c].style.backgroundPosition = "center", s[c].style.backgroundRepeat = "no-repeat" })();F