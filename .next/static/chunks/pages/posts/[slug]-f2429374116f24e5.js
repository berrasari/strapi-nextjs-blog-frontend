(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{843:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return i(1663)}])},8045:function(e,t,i){"use strict";var n=i(9361).default,a=i(4941).Z,r=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,o=e.unoptimized,f=void 0!==o&&o,h=e.priority,m=void 0!==h&&h,w=e.loading,A=e.lazyRoot,N=void 0===A?null:A,O=e.lazyBoundary,E=e.className,I=e.quality,R=e.width,L=e.height,C=e.style,P=e.objectFit,q=e.objectPosition,U=e.onLoadingComplete,B=e.placeholder,M=void 0===B?"empty":B,W=e.blurDataURL,D=p(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),F=l.useContext(u.ImageConfigContext),H=l.useMemo((function(){var e=b||F||c.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return g({},e,{allSizes:t,deviceSizes:i})}),[F]),T=D,V=i?"responsive":"intrinsic";"layout"in T&&(T.layout&&(V=T.layout),delete T.layout);var G=k;if("loader"in T){if(T.loader){var J=T.loader;G=function(e){e.config;var t=p(e,["config"]);return J(t)}}delete T.loader}var X="";if(function(e){return"object"===typeof e&&(j(e)||function(e){return void 0!==e.src}(e))}(t)){var Z=j(t)?t.default:t;if(!Z.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Z)));if(W=W||Z.blurDataURL,X=Z.src,(!V||"fill"!==V)&&(L=L||Z.height,R=R||Z.width,!Z.height||!Z.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Z)))}t="string"===typeof t?t:X;var Q=z(R),K=z(L),Y=z(I),$=!m&&("lazy"===w||"undefined"===typeof w);(t.startsWith("data:")||t.startsWith("blob:"))&&(f=!0,$=!1);v.has(t)&&($=!1);y&&(f=!0);var ee,te=a(l.useState(!1),2),ie=te[0],ne=te[1],ae=a(d.useIntersection({rootRef:N,rootMargin:O||"200px",disabled:!$}),3),re=ae[0],oe=ae[1],le=ae[2],se=!$||oe,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:q};0;var ge=Object.assign({},C,fe),he="blur"!==M||ie?{}:{backgroundSize:P||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===V)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof K){var pe=K/Q,me=isNaN(pe)?"100%":"".concat(100*pe,"%");"responsive"===V?(ce.display="block",ce.position="relative",ue=!0,de.paddingTop=me):"intrinsic"===V?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",ue=!0,de.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat(K,"%27/%3e")):"fixed"===V&&(ce.display="inline-block",ce.position="relative",ce.width=Q,ce.height=K)}else 0;var ye={src:x,srcSet:void 0,sizes:void 0};se&&(ye=S({config:H,src:t,unoptimized:f,layout:V,width:Q,quality:Y,sizes:i,loader:G}));var be=t;0;var ve,xe="imagesrcset",we="imagesizes";xe="imageSrcSet",we="imageSizes";var je=(n(ve={},xe,ye.srcSet),n(ve,we,ye.sizes),ve),Se=l.default.useLayoutEffect,ze=l.useRef(U),ke=l.useRef(t);l.useEffect((function(){ze.current=U}),[U]),Se((function(){ke.current!==t&&(le(),ke.current=t)}),[le,t]);var Ae=g({isLazy:$,imgAttributes:ye,heightInt:K,widthInt:Q,qualityInt:Y,layout:V,className:E,imgStyle:ge,blurStyle:he,loading:w,config:H,unoptimized:f,placeholder:M,loader:G,srcString:be,onLoadingCompleteRef:ze,setBlurComplete:ne,setIntersection:re,isVisible:se,noscriptSizes:i},T);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:ce},ue?l.default.createElement("span",{style:de},ee?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,l.default.createElement(_,Object.assign({},Ae))),m?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},je))):null)};var o,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=n?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(i,a,r):i[a]=e[a]}i.default=e,t&&t.set(e,i);return i}(i(7294)),s=(o=i(5443))&&o.__esModule?o:{default:o},c=i(9309),d=i(7190),u=i(9977),f=(i(3794),i(2392));function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},g.apply(this,arguments)}function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function p(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalLayoutRaw:!1}||{},y=m.experimentalUnoptimized,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalLayoutRaw:!1},v=new Set,x=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality;0;if(i.endsWith(".svg")&&!t.dangerouslyAllowSVG)return i;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(a||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality,r=new URL("".concat(t.path).concat(N(i))),o=r.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||n.toString()),a&&o.set("q",a.toString());return r.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality,r=["f_auto","c_limit","w_"+n,"q_"+(a||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(N(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(N(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(e){return void 0!==e.default}function S(e){var t=e.config,i=e.src,n=e.unoptimized,a=e.layout,o=e.width,l=e.quality,s=e.sizes,c=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var a=e.deviceSizes,o=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l,s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(n);l)c.push(parseInt(l[2]));if(c.length){var d,u=.01*(d=Math).min.apply(d,r(c));return{widths:o.filter((function(e){return e>=a[0]*u})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:a,kind:"w"}:{widths:r(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,a,s),u=d.widths,f=d.kind,g=u.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:u.map((function(e,n){return"".concat(c({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:c({config:t,src:i,quality:l,width:u[g]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=w.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "),". Received: ").concat(i))}function A(e,t,i,n,a,r){e&&e.src!==x&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===n&&r(!0),null==a?void 0:a.current)){var i=e.naturalWidth,o=e.naturalHeight;a.current({naturalWidth:i,naturalHeight:o})}})))}var _=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,a=e.layout,r=e.className,o=e.imgStyle,s=e.blurStyle,c=e.isLazy,d=e.placeholder,u=e.loading,f=e.srcString,h=e.config,m=e.unoptimized,y=e.loader,b=e.onLoadingCompleteRef,v=e.setBlurComplete,x=e.setIntersection,w=e.onLoad,j=e.onError,z=(e.isVisible,e.noscriptSizes),k=p(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return u=c?"lazy":u,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},k,t,{decoding:"async","data-nimg":a,className:r,style:g({},o,s),ref:l.useCallback((function(e){x(e),(null==e?void 0:e.complete)&&A(e,f,0,d,b,v)}),[x,f,a,d,b,v]),onLoad:function(e){A(e.currentTarget,f,0,d,b,v),w&&w(e)},onError:function(e){"blur"===d&&v(!0),j&&j(e)}})),(c||"blur"===d)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},k,S({config:h,src:f,unoptimized:m,layout:a,width:i,quality:n,sizes:z,loader:y}),{decoding:"async","data-nimg":a,style:o,className:r,loading:u}))))};function N(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1663:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return o}});var n=i(5893),a=i(5675),r=i.n(a);var o=!0;t.default=function(e){var t=e.post;return(0,n.jsxs)("div",{className:"relative py-16 bg-transparent overflow-hidden",children:[(0,n.jsx)("div",{className:"hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full",children:(0,n.jsxs)("div",{className:"relative h-full text-lg max-w-prose mx-auto","aria-hidden":"true",children:[(0,n.jsxs)("svg",{className:"absolute top-12 left-full transform translate-x-32",width:404,height:384,fill:"none",viewBox:"0 0 404 384",children:[(0,n.jsx)("defs",{children:(0,n.jsx)("pattern",{id:"74b3fd99-0a6f-4271-bef2-e80eeafdf357",x:0,y:0,width:20,height:20,patternUnits:"userSpaceOnUse",children:(0,n.jsx)("rect",{x:0,y:0,width:4,height:4,className:"text-gray-200",fill:"currentColor"})})}),(0,n.jsx)("rect",{width:404,height:384,fill:"url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"})]}),(0,n.jsxs)("svg",{className:"absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32",width:404,height:384,fill:"none",viewBox:"0 0 404 384",children:[(0,n.jsx)("defs",{children:(0,n.jsx)("pattern",{id:"f210dbf6-a58d-4871-961e-36d5016a0f49",x:0,y:0,width:20,height:20,patternUnits:"userSpaceOnUse",children:(0,n.jsx)("rect",{x:0,y:0,width:4,height:4,className:"text-gray-200",fill:"currentColor"})})}),(0,n.jsx)("rect",{width:404,height:384,fill:"url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"})]}),(0,n.jsxs)("svg",{className:"absolute bottom-12 left-full transform translate-x-32",width:404,height:384,fill:"none",viewBox:"0 0 404 384",children:[(0,n.jsx)("defs",{children:(0,n.jsx)("pattern",{id:"d3eb07ae-5182-43e6-857d-35c643af9034",x:0,y:0,width:20,height:20,patternUnits:"userSpaceOnUse",children:(0,n.jsx)("rect",{x:0,y:0,width:4,height:4,className:"text-gray-200",fill:"currentColor"})})}),(0,n.jsx)("rect",{width:404,height:384,fill:"url(#d3eb07ae-5182-43e6-857d-35c643af9034)"})]})]})}),(0,n.jsxs)("div",{className:"relative px-4 sm:px-6 lg:px-8",children:[(0,n.jsxs)("div",{className:"text-lg max-w-prose mx-auto",children:[(0,n.jsxs)("h1",{children:[(0,n.jsx)("span",{className:"block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase",children:"Introducing"}),(0,n.jsx)("span",{className:"mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl",children:t.data.attributes.title})]}),(0,n.jsx)("p",{className:"mt-8 text-xl text-gray-500 leading-8",children:t.data.attributes.content})]}),(0,n.jsx)("figure",{children:(0,n.jsx)(r(),{className:"w-full rounded-lg",src:t.data.attributes.coverlink,alt:"",width:1310,height:873})})]})]})}},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=843,e(e.s=t);var t}));var t=e.O();_N_E=t}]);