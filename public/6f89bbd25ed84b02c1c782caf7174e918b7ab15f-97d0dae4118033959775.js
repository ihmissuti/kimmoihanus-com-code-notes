(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,r){"use strict";var n,o=r("q1tI"),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},"8QA6":function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("q1tI"),o=r.n(n),i=r("izhR"),a=r("MqoU"),c=r.n(a),s=r("2XJv"),u=function(e){var t,r=e.tag,n=e.size,a=void 0===n?"10px":n;if(r){var u=c()(r);t=Object(s.a)(u)}else t="#aaa";return o.a.createElement(i.b,{sx:{bg:t,width:a,height:a,borderRadius:"50%",mr:"0.5em"}})}},"Gr+A":function(e,t,r){"use strict";r.d(t,"a",(function(){return k}));var n=r("q1tI"),o=r("qKvR"),i=r("2A+t"),a=r("PcS7"),c=function(e,t,r,n,o){for(t=t&&t.split?t.split("."):[t],n=0;n<t.length;n++)e=e?e[t[n]]:o;return e===o?r:e},s=[40,52,64].map((function(e){return e+"em"})),u={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},l={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},f={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},d={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},p=function(e,t){if("number"!=typeof t||t>=0)return c(e,t,t);var r=Math.abs(t),n=c(e,r,r);return"string"==typeof n?"-"+n:-1*n},b=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,t){var r;return Object.assign({},e,((r={})[t]=p,r))}),{}),h=function e(t){return function(r){void 0===r&&(r={});var n=Object.assign({},u,r.theme||r),o={},i=function(e){return function(t){var r={},n=c(t,"breakpoints",s),o=[null].concat(n.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var i in e){var a="function"==typeof e[i]?e[i](t):e[i];if(null!=a)if(Array.isArray(a))for(var u=0;u<a.slice(0,o.length).length;u++){var l=o[u];l?(r[l]=r[l]||{},null!=a[u]&&(r[l][i]=a[u])):r[i]=a[u]}else r[i]=a}return r}}("function"==typeof t?t(n):t)(n);for(var a in i){var p=i[a],h="function"==typeof p?p(n):p;if("variant"!==a)if(h&&"object"==typeof h)o[a]=e(h)(n);else{var g=c(l,a,a),m=c(d,g),y=c(n,m,c(n,g,{})),v=c(b,g,c)(y,h,h);if(f[g])for(var T=f[g],O=0;O<T.length;O++)o[T[O]]=v;else o[g]=v}else{var w=e(c(n,h))(n);o=Object.assign({},o,w)}}return o}},g=r("izhR"),m=r("qhky"),y=r("Wbzz"),v=r("Bbii"),T=r("8QA6"),O=function(e){var t=e.tags,r=e.activeTag,o=e.rootPath,a=e.basePath,c=e.hasUntagged,s=Object(n.useContext)(v.SearchContext).setQuery;return Object(i.c)(g.b,{as:"nav",sx:{mb:9}},Object(i.c)(g.l,{sx:{fontWeight:o?"bold":void 0,bg:o?"navHover":void 0,textTransform:"uppercase"},to:a,as:y.Link,onClick:function(){return s("")}},"All Notes"),t.length>0&&Object(i.c)(n.Fragment,null,Object(i.c)(g.b,{sx:{px:3,pt:2,pb:1,fontFamily:"mono",textTransform:"uppercase",fontSize:1}},"Tags"),t.sort((function(e,t){return e.tag.localeCompare(t.tag)})).map((function(e,t){return Object(i.c)(g.l,{sx:{fontWeight:r===e.tag?"bold":void 0,bg:r===e.tag?"navHover":void 0},to:"/tag/"+encodeURI(e.slug),as:y.Link,key:t,onClick:function(){return s("")}},Object(i.c)(T.a,{tag:e.tag}),e.tag)}))),c&&Object(i.c)(g.l,{sx:{fontWeight:"untagged"===r?"bold":void 0,bg:"untagged"===r?"navHover":void 0},to:"/tag/untagged",as:y.Link,onClick:function(){return s("")}},Object(i.c)(T.a,null),"Untagged Notes"))},w=r("rePB"),j=r("MqoU"),S=r.n(j);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){Object(w.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=r("voR5"),k=function(e){var t=e.activeTag,r=e.path,c=e.basePath,s=e.hasUntagged,u=e.title,l=e.children,f=Object(i.e)().theme,d=Object(y.useStaticQuery)("1437003973").allMdx.tags.sort().map((function(e){return x(x({},e),{},{slug:S()(e.tag)})})),p=Object(A.a)(),b=p.showThemeInfo,T=p.showDescriptionInSidebar,w=p.description,j=p.logo,C=p.openSearch,k=Object(n.useState)(!1),E=k[0],P=k[1],L=Object(a.b)(),R=L[0],z=L[1],I=Object(n.useContext)(v.SearchContext).query;return Object(i.c)(n.Fragment,null,Object(i.c)(m.a,{key:"app-metadata",titleTemplate:"%s · "+w,defaultTitle:w},Object(i.c)("html",{lang:"en"}),Object(i.c)("meta",{charSet:"utf-8"}),Object(i.c)("title",null,u),Object(i.c)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),C&&C.siteUrl&&Object(i.c)("link",{rel:"search",type:"application/opensearchdescription+xml",href:"/opensearch.xml",title:C.siteShortName})),Object(i.c)(o.a,{key:"global-styles",styles:h({"*":{boxSizing:"border-box"},body:{margin:0},":root":{fontSize:"16px"},"@media (min-width: 480px)":{":root":{fontSize:"calc(1rem + ((1vw - 4.8px) * 0.2778))"}},"@media (min-width: 1920px)":{":root":{fontSize:"20px"}}})}),Object(i.c)(g.b,{as:"main",sx:{position:["relative","fixed"],top:[0,3],right:[0,3],bottom:[0,3],left:[0,f.sizes.sidebar],overflowX:"hidden",overflowY:"auto",zIndex:"low",p:6,bg:"contentBg",transform:[E&&"translateX("+f.sizes.sidebarSkinny+")","translateX(0)"],transition:"all 200ms ease-in-out ",boxShadow:["md","md"],borderRadius:[0,"default"],minHeight:["100vh","unset"]}},Object(i.c)(g.k,{"aria-label":"Toggle Menu",onClick:function(){return P(!E)},sx:{mb:2,display:["block","none"]}}),Object(i.c)(g.d,{sx:{display:"flex",flexDirection:"column",minHeight:"100%"}},Object(i.c)(g.b,{sx:{mb:5}},Object(i.c)(v.SearchInput,null)),I?Object(i.c)(v.SearchResults,null):l,b&&Object(i.c)(g.b,{sx:{mt:4,fontSize:0}},"Want to make your own site like this?",Object(i.c)("br",null),"Try"," ",Object(i.c)(g.j,{href:"https://github.com/mrmartineau/gatsby-theme-code-notes"},"gatsby-theme-code-notes")," ","by ",Object(i.c)(g.j,{href:"https://zander.wtf"},"Zander Martineau"),"."))),Object(i.c)(g.b,{as:"header",sx:{width:[f.sizes.sidebarSkinny,f.sizes.sidebar],position:"fixed",top:0,right:[0,"auto"],left:0,bottom:0,overflowX:"hidden",overflowY:"auto",pt:4}},Object(i.c)(g.b,{px:3,mb:3},!!j&&Object(i.c)(g.b,{mb:3},Object(i.c)(g.h,{src:j,variant:"logo",alt:"logo"})),T&&w&&Object(i.c)(g.b,{mb:3},Object(i.c)(g.m,{sx:{color:"text",lineHeight:"snug",fontWeight:"bold"}},w))),Object(i.c)(O,{tags:d,activeTag:t,rootPath:r===c,basePath:c,hasUntagged:s}),Object(i.c)(g.b,{sx:{position:"fixed",left:0,width:[f.sizes.sidebarSkinny,f.sizes.sidebar],bottom:0,bg:"backgroundTransparent",py:3}},Object(i.c)(g.g,{onClick:function(e){z("light"===R?"dark":"light")},"aria-label":"Toggle dark mode",sx:{color:"text",zIndex:11,p:0,display:"block",mx:"auto",transition:"all 200ms ease-in-out ",cursor:"pointer","&:hover":{color:"primary"}}},Object(i.c)("svg",{width:"1.5rem",height:"1.5rem",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",fill:"currentColor"},Object(i.c)("path",{d:"M912.1 512c0 20-1.4 39.9-4 59.7.5-3.5 1-7.1 1.4-10.6-5.2 38.4-15.5 75.9-30.5 111.6 1.3-3.2 2.7-6.4 4-9.6-14.8 34.8-34 67.6-57.1 97.6l6.3-8.1c-23 29.7-49.8 56.4-79.5 79.5l8.1-6.3c-30 23.1-62.8 42.3-97.6 57.1 3.2-1.3 6.4-2.7 9.6-4-35.7 15-73.2 25.3-111.6 30.6 3.5-.5 7.1-1 10.6-1.4a450.3 450.3 0 0 1-119.4 0c3.5.5 7.1 1 10.6 1.4-38.5-5.2-76-15.5-111.7-30.5 3.2 1.3 6.4 2.7 9.6 4-34.8-14.8-67.6-34-97.6-57.1l8.1 6.3c-29.7-23-56.4-49.8-79.5-79.5l6.3 8.1c-23.1-30-42.3-62.8-57.1-97.6 1.3 3.2 2.7 6.4 4 9.6-15-35.7-25.3-73.2-30.6-111.6.5 3.5 1 7.1 1.4 10.6a450.3 450.3 0 0 1 0-119.4c-.5 3.5-1 7.1-1.4 10.6 5.3-38.4 15.5-75.9 30.6-111.6-1.3 3.2-2.7 6.4-4 9.6 14.8-34.8 34-67.6 57.1-97.6l-6.3 8.1c23-29.7 49.8-56.4 79.5-79.5l-8.1 6.3c30-23.1 62.8-42.3 97.6-57.1-3.2 1.3-6.4 2.7-9.6 4 35.7-15 73.2-25.3 111.6-30.6-3.5.5-7.1 1-10.6 1.4 39.6-5.3 79.8-5.3 119.4 0-3.5-.5-7.1-1-10.6-1.4 38.4 5.3 75.9 15.5 111.6 30.6-3.2-1.3-6.4-2.7-9.6-4 34.8 14.8 67.6 34 97.6 57.1l-8.1-6.3c29.7 23 56.4 49.8 79.5 79.5l-6.3-8.1c23.1 30 42.3 62.8 57.1 97.6-1.3-3.2-2.7-6.4-4-9.6 15 35.7 25.3 73.2 30.6 111.6-.5-3.5-1-7.1-1.4-10.6 2.7 19.7 4 39.6 4 59.6 0 20.9 18.4 41 40 40s40-17.6 40-40c-.1-49.6-7.6-99.8-22.9-146.9-14.8-45.6-36.2-89.4-64-128.5-14.6-20.5-30.6-40.3-48.1-58.5-17.6-18.2-36.8-34.5-56.9-49.9-38-29.1-80.5-51.4-125.3-67.9-46.3-17.1-95.9-26.1-145.2-28.1-49.8-2-100.5 4.1-148.5 17.7-46.1 13.1-90.9 33.3-131 59.7-39.7 26.1-76 57.8-106.2 94.4-16.1 19.5-31.1 40-44.1 61.7-13.2 21.9-24 45-33.7 68.6-18.8 45.7-29.2 94.3-33 143.4-3.8 49.7.7 100.4 12.5 148.9C57 673.3 75.9 718.9 100.8 760c24.6 40.5 55.3 78 90.8 109.5 35.7 31.7 75.7 58.7 119.2 78.4 23.5 10.6 47.5 19.9 72.3 26.8 25.4 7.1 51.3 11.5 77.4 14.5 50 5.8 100.9 2.8 150.2-7.3 47.3-9.6 93.5-27.2 135.6-50.7 41.2-23 79.4-52.6 112.1-86.7 32.8-34.3 61.2-73.7 82.3-116.3 21.7-43.6 37.5-90.2 44.9-138.4 4-25.8 6.5-51.7 6.5-77.8 0-20.9-18.4-41-40-40-21.7 1-39.9 17.6-40 40z"}),Object(i.c)("path",{d:"M512 187.7v648.6c-179.1 0-324-145.2-324-324.3s144.9-324.3 324-324.3z"}),Object(i.c)("path",{d:"M482 187.7v569c0 26.2-.6 52.4 0 78.6v1.1l30-30c-14.4 0-28.8-1-43.1-2.8 2.7.4 5.3.7 8 1.1-28.6-3.9-56.5-11.5-83.1-22.6l7.2 3c-15-6.4-29.5-13.9-43.4-22.4-6.7-4.1-13.3-8.5-19.7-13.1-1.6-1.2-3.2-2.3-4.8-3.5-.8-.6-2.1-1.2-2.6-2-.1-.1 6.4 5.1 3 2.3-3.2-2.6-6.5-5.2-9.6-7.9-12.1-10.3-23.5-21.5-34.1-33.5-2.6-3-5.1-6-7.6-9-1.1-1.4-2.2-2.7-3.3-4.1-.5-.7-1.1-1.4-1.6-2.1 6.1 7.7 2.9 3.7 1.5 1.9-4.9-6.5-9.5-13.1-13.8-20-9.9-15.4-18.4-31.7-25.5-48.5l3 7.2c-11.2-26.6-18.8-54.5-22.6-83.1.4 2.7.7 5.3 1.1 8-3.7-28.6-3.7-57.6 0-86.2-.4 2.7-.7 5.3-1.1 8 3.9-28.6 11.4-56.5 22.6-83.1l-3 7.2c6.4-15 13.8-29.6 22.4-43.5 4.1-6.7 8.5-13.3 13.1-19.7 1.1-1.6 2.3-3.2 3.5-4.8.5-.7 1.2-2.2 2-2.6.1-.1-5 6.4-2.3 3 2.6-3.3 5.2-6.5 7.9-9.7 10.3-12.2 21.5-23.6 33.4-34.1 3-2.6 5.9-5.1 9-7.6 1.4-1.1 2.7-2.2 4.1-3.3.7-.5 1.4-1.1 2.1-1.6-7.6 6.1-3.7 2.9-1.9 1.5 6.5-4.9 13.1-9.5 19.9-13.9 15.4-9.9 31.6-18.4 48.4-25.6l-7.2 3c26.6-11.2 54.5-18.8 83.1-22.6-2.7.4-5.3.7-8 1.1 14.3-1.9 28.7-2.8 43.1-2.8 15.7 0 30.7-13.8 30-30-.7-16.2-13.2-30-30-30-72.2.2-144.6 22.3-203.4 64.4-59.5 42.6-104.5 101.2-129.7 170-25.2 68.6-27.5 146.1-7.6 216.3C190.5 676.5 230.6 739.1 285 784c57.5 47.4 126.9 75.7 201.2 81.6 8.6.7 17.3 1 25.9 1 16.2 0 30-13.8 30-30v-64.5-155-187.5-162c0-26.2.5-52.4 0-78.6v-1.1c0-15.7-13.8-30.7-30-30-16.4.5-30.1 13-30.1 29.8z"}))))))}},bmMU:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,s,u,l;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(s=c;0!=s--;)if(!e(t[s],a[s]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;for(l=t.entries();!(s=l.next()).done;)if(!e(s.value[1],a.get(s.value[0])))return!1;return!0}if(o&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(s=c;0!=s--;)if(t[s]!==a[s])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,u[s]))return!1;if(r&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!t.$$typeof)&&!e(t[u[s]],a[u[s]]))return!1;return!0}return t!=t&&a!=a}(e,t)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));var n,o,i,a,c=r("17x9"),s=r.n(c),u=r("8+s/"),l=r.n(u),f=r("bmMU"),d=r.n(f),p=r("q1tI"),b=r.n(p),h=r("YVoz"),g=r.n(h),m="bodyAttributes",y="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(T).map((function(e){return T[e]})),"charset"),w="cssText",j="href",S="http-equiv",C="innerHTML",x="itemprop",A="name",k="property",E="rel",P="src",L="target",R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},z="defaultTitle",I="defer",M="encodeSpecialCharacters",B="onChangeClientState",N="titleTemplate",W=Object.keys(R).reduce((function(e,t){return e[R[t]]=t,e}),{}),H=[T.NOSCRIPT,T.SCRIPT,T.STYLE],q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=$(e,T.TITLE),r=$(e,N);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,z);return t||n||void 0},G=function(e){return $(e,B)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||r===E&&"canonical"===e[r].toLowerCase()||s===E&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==C&&c!==w&&c!==x||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=g()({},n[c],o[c]);n[c]=s}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Z=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;se(T.BODY,n),se(T.HTML,o),ce(f,d);var p={baseTag:ue(T.BASE,r),linkTags:ue(T.LINK,i),metaTags:ue(T.META,a),noscriptTags:ue(T.NOSCRIPT,c),scriptTags:ue(T.SCRIPT,u),styleTags:ue(T.STYLE,l)},b={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(b[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,b,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),se(T.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==a.join(",")&&r.setAttribute("data-react-helmet",a.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,o=fe(r,n),[b.a.createElement(T.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=le(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+X(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+X(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case m:case y:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=R[e]||e;if(r===C||r===w){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),b.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+X(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(T.BASE,t,n),bodyAttributes:de(m,r,n),htmlAttributes:de(y,o,n),link:de(T.LINK,i,n),meta:de(T.META,a,n),noscript:de(T.NOSCRIPT,c,n),script:de(T.SCRIPT,s,n),style:de(T.STYLE,u,n),title:de(T.TITLE,{title:f,titleAttributes:d},n)}},be=l()((function(e){return{baseTag:V([j,L],e),bodyAttributes:Q(m,e),defer:$(e,I),encode:$(e,M),htmlAttributes:Q(y,e),linkTags:J(T.LINK,[E,j],e),metaTags:J(T.META,[A,O,S,k,x],e),noscriptTags:J(T.NOSCRIPT,[C],e),onChangeClientState:G(e),scriptTags:J(T.SCRIPT,[P,C],e),styleTags:J(T.STYLE,[w],e),title:K(e),titleAttributes:Q(v,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),he=(o=be,a=i=function(e){function t(){return Y(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},n,((t={})[r.type]=[].concat(n[r.type]||[],[U({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case T.TITLE:return U({},o,((t={})[n.type]=a,t.titleAttributes=U({},i),t));case T.BODY:return U({},o,{bodyAttributes:U({},i)});case T.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((r={})[n.type]=U({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=U({},t);return Object.keys(e).forEach((function(t){var n;r=U({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return b.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[W[r]||r]=e[r],t}),t)}(_(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=_(e,["children"]),n=U({},r);return t&&(n=this.mapChildrenToProps(t,n)),b.a.createElement(o,n)},D(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(b.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind}).call(this,r("yLpj"))},voR5:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("Wbzz"),o=function(){return Object(n.useStaticQuery)("3664657028").site.siteMetadata}}}]);
//# sourceMappingURL=6f89bbd25ed84b02c1c782caf7174e918b7ab15f-97d0dae4118033959775.js.map