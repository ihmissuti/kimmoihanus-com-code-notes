(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),c=n("ZhPi"),a=n("Bnag");t.exports=function(t){return r(t)||o(t)||c(t)||a()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},Ubkt:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return O}));var r=n("q1tI"),o=n.n(r),c=n("2A+t"),a=n("izhR"),i=n("A2+M"),u=n("WFMo"),l=n("voR5"),s=function(t){var e=t.items;return o.a.createElement("ul",null,e.map((function(t){return o.a.createElement(f,{key:t.url+"-item",item:t})})))},f=function(t){var e=t.item;return o.a.createElement("li",null,o.a.createElement(a.j,{href:e.url},e.title),e.items&&e.items.length&&o.a.createElement(s,{key:e.url+"-list",items:e.items}))},p=function(t){var e=t.toc;return e.items?o.a.createElement(a.b,{as:"details",sx:{my:4}},o.a.createElement("summary",null,"Table of contents"),o.a.createElement(s,{items:e.items,key:"toc-list"})):null},b=n("Gr+A"),m=n("46ic"),O=(e.default=function(t){var e=t.data,n=t.pageContext,o=t.location;if(!e)return null;var s=e.mdx,f=s.frontmatter,O=f.title,y=f.tags,j=f.emoji,h=f.link,d=s.body,v=s.parent.relativePath,g=s.tableOfContents,x=Object(l.a)().gitRepoContentPath,w=!!h,P=Object(r.useState)(h),E=P[0],S=P[1];return Object(r.useEffect)((function(){if(h&&"URL"in window){var t=new URL(h),e=t.hostname,n=t.pathname;S(""+e+n)}}),[h]),Object(c.c)(b.a,{hasUntagged:n.hasUntagged,basePath:n.basePath,path:o.pathname,title:O},Object(c.c)("article",null,Object(c.c)(a.b,{as:"header",mb:4},j&&Object(c.c)(a.b,{sx:{fontSize:7,lineHeight:1,mb:3}},Object(c.c)("span",{role:"img"},j)),Object(c.c)(a.f,{as:"h1",variant:"noteTitle"},O),w&&Object(c.c)(a.e,{sx:{mb:3,alignItems:"center"}},h&&Object(c.c)(r.Fragment,null,Object(c.c)(u.a,{sx:{color:"input",pointerEvents:"none",mr:2}}),Object(c.c)(a.j,{href:h,sx:{mr:4,fontSize:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},E))),y&&Object(c.c)(a.e,null,Object(c.c)(u.c,{sx:{color:"input",pointerEvents:"none",mr:2}}),Object(c.c)(m.a,{tags:y}))),Object(c.c)(p,{toc:g}),Object(c.c)(i.MDXRenderer,null,d),Object(c.c)(a.b,{sx:{mt:6,pt:4,borderTop:"2px solid",borderTopColor:"background"}},x&&Object(c.c)(a.j,{href:""+x+v},"Edit this page"))))},"156538837")},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){var r=n("sXyB"),o=n("RIqP"),c=n("lSNA"),a=n("8OQS");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=n("q1tI"),s=n("7ljp").mdx,f=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,c=a(t,["scope","children"]),i=f(e),p=l.useMemo((function(){if(!n)return null;var t=u({React:l,mdx:s},i),e=Object.keys(t),c=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(c)))}),[n,e]);return l.createElement(p,u({},c))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},sXyB:function(t,e,n){var r=n("SksO"),o=n("b48C");function c(e,n,a){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,n){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return n&&r(c,n.prototype),c},c.apply(null,arguments)}t.exports=c}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-code-notes-src-templates-note-js-927bc8fadc5d57622a1b.js.map