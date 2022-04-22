"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[676],{4907:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(6687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},983:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var n=r(5177),a=r(4416),o=(r(6687),r(4907)),i=["components"],c={},l="OtcEscrow",p={unversionedId:"protocol/smart-contract-api/utils/OtcEscrow",id:"protocol/smart-contract-api/utils/OtcEscrow",title:"OtcEscrow",description:"Functions",source:"@site/docs/protocol/smart-contract-api/utils/OtcEscrow.md",sourceDirName:"protocol/smart-contract-api/utils",slug:"/protocol/smart-contract-api/utils/OtcEscrow",permalink:"/docs/docs/protocol/smart-contract-api/utils/OtcEscrow",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/protocol/smart-contract-api/utils/OtcEscrow.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Incentivized",permalink:"/docs/docs/protocol/smart-contract-api/utils/Incentivized"},next:{title:"RateLimited",permalink:"/docs/docs/protocol/smart-contract-api/utils/RateLimited"}},s={},d=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"swap",id:"swap",level:3},{value:"revoke",id:"revoke",level:3},{value:"revokeReceivedToken",id:"revokereceivedtoken",level:3}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"otcescrow"},"OtcEscrow"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n    address beneficiary_,\n    address recipient_,\n    address receivedToken_,\n    address sentToken_,\n    uint256 receivedAmount_,\n    uint256 sentAmount_\n) public\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"beneficiary_")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"recipient_")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"receivedToken_")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"sentToken_")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"receivedAmount_")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"sentAmount_")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"swap"},"swap"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function swap() public\n")),(0,o.kt)("p",null,"Atomically trade specified amount of receivedToken for control over sentToken in vesting contract\nEither counterparty may execute swap if sufficient token approval is given by recipient"),(0,o.kt)("h3",{id:"revoke"},"revoke"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function revoke() external\n")),(0,o.kt)("p",null,"Return sentToken to Fei Protocol to revoke escrow deal"),(0,o.kt)("h3",{id:"revokereceivedtoken"},"revokeReceivedToken"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function revokeReceivedToken() external\n")))}m.isMDXComponent=!0}}]);