"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2846],{4907:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var r=a(6687);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),c=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=c(a),k=n,u=s["".concat(p,".").concat(k)]||s[k]||m[k]||o;return a?r.createElement(u,l(l({ref:e},d),{},{components:a})):r.createElement(u,l({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},88:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var r=a(5177),n=a(4416),o=(a(6687),a(4907)),l=["components"],i={},p="ITokemakERC20Pool",c={unversionedId:"protocol/smart-contract-api/pcv/tokemak/ERC20TokemakPCVDeposit",id:"protocol/smart-contract-api/pcv/tokemak/ERC20TokemakPCVDeposit",title:"ITokemakERC20Pool",description:"Functions",source:"@site/docs/protocol/smart-contract-api/pcv/tokemak/ERC20TokemakPCVDeposit.md",sourceDirName:"protocol/smart-contract-api/pcv/tokemak",slug:"/protocol/smart-contract-api/pcv/tokemak/ERC20TokemakPCVDeposit",permalink:"/docs/docs/protocol/smart-contract-api/pcv/tokemak/ERC20TokemakPCVDeposit",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/protocol/smart-contract-api/pcv/tokemak/ERC20TokemakPCVDeposit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IStabilityPool",permalink:"/docs/docs/protocol/smart-contract-api/pcv/liquity/IStabilityPool"},next:{title:"ITokemakEthPool",permalink:"/docs/docs/protocol/smart-contract-api/pcv/tokemak/EthTokemakPCVDeposit"}},d={},m=[{value:"Functions",id:"functions",level:2},{value:"deposit",id:"deposit",level:3},{value:"Parameters",id:"parameters",level:4},{value:"withdraw",id:"withdraw",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Functions",id:"functions-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"deposit",id:"deposit-1",level:3},{value:"withdraw",id:"withdraw-1",level:3},{value:"Parameters",id:"parameters-3",level:4}],s={toc:m};function k(t){var e=t.components,a=(0,n.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"itokemakerc20pool"},"ITokemakERC20Pool"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"deposit"},"deposit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function deposit(\n    uint256 amount\n) external\n")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"amount")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"withdraw"},"withdraw"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function withdraw(\n    uint256 requestedAmount\n) external\n")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"requestedAmount")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h1",{id:"erc20tokemakpcvdeposit"},"ERC20TokemakPCVDeposit"),(0,o.kt)("h2",{id:"functions-1"},"Functions"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n    address _core,\n    address _pool,\n    address _rewards\n) public\n")),(0,o.kt)("p",null,"Tokemak ERC20 PCV Deposit constructor"),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_core")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Fei Core for reference")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_pool")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Tokemak pool to deposit in")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"_rewards")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Tokemak rewards contract")))),(0,o.kt)("h3",{id:"deposit-1"},"deposit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function deposit() external\n")),(0,o.kt)("p",null,"deposit ERC-20 tokens to Tokemak"),(0,o.kt)("h3",{id:"withdraw-1"},"withdraw"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function withdraw(\n    address to,\n    uint256 amountUnderlying\n) external\n")),(0,o.kt)("p",null,"withdraw tokens from the PCV allocation"),(0,o.kt)("h4",{id:"parameters-3"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"to")),(0,o.kt)("td",{parentName:"tr",align:"left"},"address"),(0,o.kt)("td",{parentName:"tr",align:"left"},"the address to send PCV to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"amountUnderlying")),(0,o.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,o.kt)("td",{parentName:"tr",align:"left"},"of tokens withdrawn")))))}k.isMDXComponent=!0}}]);