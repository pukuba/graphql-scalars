(self.webpackChunk_graphql_scalars_website=self.webpackChunk_graphql_scalars_website||[]).push([[2314],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9959:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i={id:"local-date",title:"LocalDate",sidebar_label:"LocalDate"},l={unversionedId:"scalars/local-date",id:"scalars/local-date",isDocsHomePage:!1,title:"LocalDate",description:"A local date string (i.e., with no associated timezone) in YYYY-MM-DD format, e.g. 2020-01-01. The value is serialized and deserialized as a string as a signal to both clients and resolvers that special care must be taken with the value when converting it to any date/time type that includes a timezone, e.g., a JavaScript Date.",source:"@site/docs/scalars/local-date.md",sourceDirName:"scalars",slug:"/scalars/local-date",permalink:"/docs/scalars/local-date",editUrl:"https://github.com/urigo/graphql-scalars/edit/master/website/docs/scalars/local-date.md",version:"current",sidebar_label:"LocalDate",frontMatter:{id:"local-date",title:"LocalDate",sidebar_label:"LocalDate"},sidebar:"sidebar",previous:{title:"Latitude",permalink:"/docs/scalars/latitude"},next:{title:"LocalEndTime",permalink:"/docs/scalars/local-end-time"}},c=[],s={toc:c};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A local date string (i.e., with no associated timezone) in ",(0,o.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"2020-01-01"),". The value is serialized and deserialized as a string as a signal to both clients and resolvers that special care must be taken with the value when converting it to any date/time type that includes a timezone, e.g., a JavaScript ",(0,o.kt)("inlineCode",{parentName:"p"},"Date"),"."))}u.isMDXComponent=!0}}]);