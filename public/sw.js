if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,n,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts("fallback-BD3c7vSMPrkTZF7O9HSVb.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/BD3c7vSMPrkTZF7O9HSVb/_buildManifest.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/BD3c7vSMPrkTZF7O9HSVb/_ssgManifest.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/122-3d367808e2df177c4fe8.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/39-ddcdf4f9a49acf6a9acf.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/464-0b5a1b0f0f96bb28a578.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/507-98eeaa8d08b13bda66e7.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/513-14625f6f2f17a964d136.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/604-98edb1dc9c8171e69b0d.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/710-e43904354dee8046680d.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/761-5b49dec1775040c37337.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/798-db2fa50abc68759c6957.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/799-79b3028fb9c65b5d6c96.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/865-a97065f280c93fbd5720.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/942-e32d8800f70541d7b6f4.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/framework-2f612445bd50b211f15a.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/main-acb3bf4f499099e88b4a.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/pages/_app-cc0ebe56d3fe1bf6b8e2.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/pages/_error-ea939aab753d9e9db3bd.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/pages/_offline-29ccf0cc147f16745973.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/pages/diary-0af113eca90ab21bd655.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/pages/enter-382079743b8384223d54.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/pages/index-9923ca6da328af37b75e.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/pages/onboarding-ab62fb960cad4817a128.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/pages/onboarding/%5Bstep%5D-4920d1b48297bd0d9203.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/pages/register-f03d0db42ae74bd48ecc.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/pages/settings-b55460e339666be8ac66.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/pages/settings/%5Bcategory%5D-86be22d5d156609131b3.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/pages/workouts-ac844c0d0f5f2b6f43dc.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/chunks/webpack-613fd858cdb9cf2af3be.js",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/css/4800bd2097af204cc265.css",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_next/static/image/public/logo/round/scalable.262e1c67a6e1eda0bf520768b984b9e1.svg",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/_offline",revision:"BD3c7vSMPrkTZF7O9HSVb"},{url:"/favicon.ico",revision:"f07af6e45cd4b9714abc79876ef77afe"},{url:"/logo/other/UpworkSetup64.exe",revision:"7627c21027260cddcbbaa508b5eacfff"},{url:"/logo/other/apple-touch-icon.png",revision:"f7177a8a877d6b0b2dcc25d987743aa7"},{url:"/logo/other/favicon-16x16.png",revision:"2a61a99479e8d71b4497218e9c235658"},{url:"/logo/other/favicon-32x32.png",revision:"d4a4953ac2bb1a17dcbad4aae46fe2d2"},{url:"/logo/other/safari-pinned-tab.svg",revision:"47b40da4722254c8dcfe6c72260334f6"},{url:"/logo/round/192x192.png",revision:"5c85fdd9eb40497964d99dcd8b3383ef"},{url:"/logo/round/512x512.png",revision:"9a250b6ea4d92b191d38552a256d0ae9"},{url:"/logo/round/scalable.svg",revision:"e70748afbc0e2e8874e60f9ec89c7e9b"},{url:"/logo/square/192x192.jpg",revision:"dbe5c59d8971e9b7f97f68764be203bf"},{url:"/logo/square/512x512.jpg",revision:"c82b30ed93b394837b0658748530c9fa"},{url:"/manifest.json",revision:"991fb6ae35214a890444414133c8e85c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:r,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
