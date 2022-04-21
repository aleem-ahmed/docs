"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1011],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,g=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(g,c(c({ref:t},u),{},{components:r})):n.createElement(g,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4345:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],l={},i="IExchanger",p={unversionedId:"protocol/smart-contract-api/merger/ExchangerTimelock",id:"protocol/smart-contract-api/merger/ExchangerTimelock",title:"IExchanger",description:"Functions",source:"@site/docs/protocol/smart-contract-api/merger/ExchangerTimelock.md",sourceDirName:"protocol/smart-contract-api/merger",slug:"/protocol/smart-contract-api/merger/ExchangerTimelock",permalink:"/docs/docs/protocol/smart-contract-api/merger/ExchangerTimelock",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/merger/ExchangerTimelock.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UintArrayOps",permalink:"/docs/docs/protocol/smart-contract-api/libs/UintArrayOps"},next:{title:"MergerBase",permalink:"/docs/docs/protocol/smart-contract-api/merger/MergerBase"}},u={},m=[{value:"Functions",id:"functions",level:2},{value:"exchange",id:"exchange",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Functions",id:"functions-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"exchangeToTimelock",id:"exchangetotimelock",level:3},{value:"recoverRGT",id:"recoverrgt",level:3}],s={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iexchanger"},"IExchanger"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"exchange"},"exchange"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function exchange(\n    uint256 amount\n) external\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"amount")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h1",{id:"exchangertimelock"},"ExchangerTimelock"),(0,o.kt)("h2",{id:"functions-1"},"Functions"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n    contract IExchanger _exchanger,\n    address _timelock\n) public\n")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_exchanger")),(0,o.kt)("td",{parentName:"tr",align:"left"},"contract IExchanger"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_timelock")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"exchangetotimelock"},"exchangeToTimelock"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function exchangeToTimelock() external\n")),(0,o.kt)("p",null,"exchange RGT to TRIBE and send to timelock"),(0,o.kt)("h3",{id:"recoverrgt"},"recoverRGT"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function recoverRGT() external\n")),(0,o.kt)("p",null,"guardian sends back RGT"))}d.isMDXComponent=!0}}]);