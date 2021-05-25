(self.webpackChunk_graphql_scalars_website=self.webpackChunk_graphql_scalars_website||[]).push([[6537],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6301:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={id:"time",title:"Time",sidebar_label:"Time"},s={unversionedId:"scalars/time",id:"scalars/time",isDocsHomePage:!1,title:"Time",description:"A time string at UTC, such as 1030Z, compliant with the full-time format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.",source:"@site/docs/scalars/time.md",sourceDirName:"scalars",slug:"/scalars/time",permalink:"/docs/scalars/time",editUrl:"https://github.com/urigo/graphql-scalars/edit/master/website/docs/scalars/time.md",version:"current",sidebar_label:"Time",frontMatter:{id:"time",title:"Time",sidebar_label:"Time"},sidebar:"sidebar",previous:{title:"SafeInt",permalink:"/docs/scalars/safe-int"},next:{title:"Timestamp",permalink:"/docs/scalars/timestamp"}},c=[],l={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A time string at UTC, such as 10:15:30Z, compliant with the ",(0,i.kt)("inlineCode",{parentName:"p"},"full-time")," format outlined in section 5.6 of the ",(0,i.kt)("a",{parentName:"p",href:"./rfc3339.txt"},"RFC 3339")," profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar."),(0,i.kt)("p",null,"This scalar is a description of a time instant such as the opening bell of the New York Stock Exchange for example. It cannot represent an exact instant on the time-line."),(0,i.kt)("p",null,"This scalar ignores leap seconds (thereby assuming that a minute constitutes of 59 seconds), in this respect it diverges from the RFC 3339 profile."),(0,i.kt)("p",null,'Where an RFC 3339 compliant time string has a time-zone other than UTC, it is shifted to UTC. For example, the time string "14:10:20+01:00" is shifted to "13:10:20Z".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result Coercion")),(0,i.kt)("p",null,"Javascript Date instances are coerced to an RFC 3339 compliant time string by extracting the UTC time part. Invalid Date instances raise a field error."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Input Coercion")),(0,i.kt)("p",null,"When expected as an input type, only RFC 3339 compliant time strings are accepted. All other input values raise a query error indicating an incorrect type."))}p.isMDXComponent=!0}}]);