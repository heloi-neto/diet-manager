if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,n,t)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=t(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts("fallback-f-_7lNs_oCIMkajQYxUzz.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/122-5ff91d2e0dde51b11df1.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/277-bf86ce5592d8f5c9cbad.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/346-b007bb106c669d2c82ab.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/39-37ead26f078f7758fec7.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/464-dad7cdea711530d138c5.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/604-035905823312ed97b40a.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/798-6b4cc2bc68c4707c807d.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/809-aa2481ac46b705aaa0bf.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/865-ecef330ec58fe33e2a4e.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/866-8ff3f4b8cb98b2d5cbb8.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/965-a82c872d7350a129052b.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/framework-2f612445bd50b211f15a.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/main-9edbe294de2f0f2d105e.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/pages/_app-a827cc2d662bdb65c02c.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/pages/_error-ea939aab753d9e9db3bd.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/pages/_offline-29ccf0cc147f16745973.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/pages/diary-ec586aca8782fd720d39.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/pages/enter-2dac880373aae9ce4522.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/pages/index-575149c02a3bb0b1c0c4.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/pages/onboarding-ab62fb960cad4817a128.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/pages/onboarding/%5Bstep%5D-0bdd9907cbd7180ae20b.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/pages/register-8a0a277ad808fb40686f.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/pages/settings-b55460e339666be8ac66.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/pages/settings/%5Bcategory%5D-a4089849403ad571dd74.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/pages/workouts-69a0f6077ec8e7a1cb0c.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/polyfills-e7a279300235e161e32a.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/chunks/webpack-0e0f5c5c9fa5a29e0d78.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/css/e61e8d23f936fd0655f2.css",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/f-_7lNs_oCIMkajQYxUzz/_buildManifest.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/f-_7lNs_oCIMkajQYxUzz/_ssgManifest.js",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_next/static/image/public/logo/scalable.262e1c67a6e1eda0bf520768b984b9e1.svg",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/_offline",revision:"f-_7lNs_oCIMkajQYxUzz"},{url:"/favicon.ico",revision:"f07af6e45cd4b9714abc79876ef77afe"},{url:"/logo/192x192.png",revision:"a44239e6e7da5d56bf40d0a0166ea2a4"},{url:"/logo/512x512.png",revision:"caa5142687d3aebedf9737cb091ff423"},{url:"/logo/scalable.svg",revision:"e70748afbc0e2e8874e60f9ec89c7e9b"},{url:"/manifest.json",revision:"57c5bf47f2694127902e3e041b5f053b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
