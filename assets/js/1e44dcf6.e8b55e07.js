"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2498],{4907:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var r=a(6687);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=i(a),u=n,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return a?r.createElement(f,l(l({ref:t},s),{},{components:a})):r.createElement(f,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7183:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return m}});var r=a(5177),n=a(4416),o=(a(6687),a(4907)),l=["components"],c={},p="IBaseBalancerPoolManager",i={unversionedId:"protocol/smart-contract-api/pcv/balancer/manager/IBaseBalancerPoolManager",id:"protocol/smart-contract-api/pcv/balancer/manager/IBaseBalancerPoolManager",title:"IBaseBalancerPoolManager",description:"Functions",source:"@site/docs/protocol/smart-contract-api/pcv/balancer/manager/IBaseBalancerPoolManager.md",sourceDirName:"protocol/smart-contract-api/pcv/balancer/manager",slug:"/protocol/smart-contract-api/pcv/balancer/manager/IBaseBalancerPoolManager",permalink:"/docs/docs/protocol/smart-contract-api/pcv/balancer/manager/IBaseBalancerPoolManager",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/protocol/smart-contract-api/pcv/balancer/manager/IBaseBalancerPoolManager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BaseBalancerPoolManager",permalink:"/docs/docs/protocol/smart-contract-api/pcv/balancer/manager/BaseBalancerPoolManager"},next:{title:"IWeightedBalancerPoolManager",permalink:"/docs/docs/protocol/smart-contract-api/pcv/balancer/manager/IWeightedBalancerPoolManager"}},s={},m=[{value:"Functions",id:"functions",level:2},{value:"setSwapFee",id:"setswapfee",level:3},{value:"Parameters",id:"parameters",level:4},{value:"setPaused",id:"setpaused",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"setAssetManagerPoolConfig",id:"setassetmanagerpoolconfig",level:3},{value:"Parameters",id:"parameters-2",level:4}],d={toc:m};function u(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ibasebalancerpoolmanager"},"IBaseBalancerPoolManager"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"setswapfee"},"setSwapFee"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function setSwapFee(\n    contract IBasePool pool,\n    uint256 swapFee\n) external\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"pool")),(0,o.kt)("td",{parentName:"tr",align:"left"},"contract IBasePool"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"swapFee")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"setpaused"},"setPaused"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function setPaused(\n    contract IBasePool pool,\n    bool paused\n) external\n")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"pool")),(0,o.kt)("td",{parentName:"tr",align:"left"},"contract IBasePool"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"paused")),(0,o.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"setassetmanagerpoolconfig"},"setAssetManagerPoolConfig"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function setAssetManagerPoolConfig(\n    contract IBasePool pool,\n    contract IERC20 token,\n    struct IAssetManager.PoolConfig poolConfig\n) external\n")),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"pool")),(0,o.kt)("td",{parentName:"tr",align:"left"},"contract IBasePool"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"token")),(0,o.kt)("td",{parentName:"tr",align:"left"},"contract IERC20"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"poolConfig")),(0,o.kt)("td",{parentName:"tr",align:"left"},"struct IAssetManager.PoolConfig"),(0,o.kt)("td",{parentName:"tr",align:"left"})))))}u.isMDXComponent=!0}}]);