"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1181],{4907:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(6687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5567:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(5177),a=r(4416),o=(r(6687),r(4907)),c=["components"],i={},s="ReEntrancyGuard",u={unversionedId:"protocol/smart-contract-api/sentinel/guards/examples/ReEntrancyGuard",id:"protocol/smart-contract-api/sentinel/guards/examples/ReEntrancyGuard",title:"ReEntrancyGuard",description:"Functions",source:"@site/docs/protocol/smart-contract-api/sentinel/guards/examples/ReEntrancyGuard.md",sourceDirName:"protocol/smart-contract-api/sentinel/guards/examples",slug:"/protocol/smart-contract-api/sentinel/guards/examples/ReEntrancyGuard",permalink:"/docs/docs/protocol/smart-contract-api/sentinel/guards/examples/ReEntrancyGuard",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/sentinel/guards/examples/ReEntrancyGuard.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NoOpGuard",permalink:"/docs/docs/protocol/smart-contract-api/sentinel/guards/examples/NoOpGuard"},next:{title:"RecoverEthGuard",permalink:"/docs/docs/protocol/smart-contract-api/sentinel/guards/examples/RecoverEthGuard"}},l={},p=[{value:"Functions",id:"functions",level:2},{value:"check",id:"check",level:3},{value:"getProtecActions",id:"getprotecactions",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reentrancyguard"},"ReEntrancyGuard"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"check"},"check"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function check() external returns (bool)\n")),(0,o.kt)("h3",{id:"getprotecactions"},"getProtecActions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function getProtecActions() external returns (address[] targets, bytes[] datas, uint256[] values)\n")))}m.isMDXComponent=!0}}]);