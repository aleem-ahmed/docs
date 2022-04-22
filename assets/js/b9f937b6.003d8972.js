"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7485],{4907:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(6687);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,u=m["".concat(d,".").concat(k)]||m[k]||s[k]||l;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7235:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=a(5177),r=a(4416),l=(a(6687),a(4907)),i=["components"],o={},d="ITokenTimelock",p={unversionedId:"protocol/smart-contract-api/timelocks/ITokenTimelock",id:"protocol/smart-contract-api/timelocks/ITokenTimelock",title:"ITokenTimelock",description:"Functions",source:"@site/docs/protocol/smart-contract-api/timelocks/ITokenTimelock.md",sourceDirName:"protocol/smart-contract-api/timelocks",slug:"/protocol/smart-contract-api/timelocks/ITokenTimelock",permalink:"/docs/docs/protocol/smart-contract-api/timelocks/ITokenTimelock",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/protocol/smart-contract-api/timelocks/ITokenTimelock.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ITribe",permalink:"/docs/docs/protocol/smart-contract-api/timelocks/ITimelockedDelegator"},next:{title:"IVotingToken",permalink:"/docs/docs/protocol/smart-contract-api/timelocks/LinearTimelockedDelegator"}},c={},s=[{value:"Functions",id:"functions",level:2},{value:"release",id:"release",level:3},{value:"Parameters",id:"parameters",level:4},{value:"releaseMax",id:"releasemax",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"setPendingBeneficiary",id:"setpendingbeneficiary",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"acceptBeneficiary",id:"acceptbeneficiary",level:3},{value:"lockedToken",id:"lockedtoken",level:3},{value:"beneficiary",id:"beneficiary",level:3},{value:"pendingBeneficiary",id:"pendingbeneficiary",level:3},{value:"initialBalance",id:"initialbalance",level:3},{value:"availableForRelease",id:"availableforrelease",level:3},{value:"totalToken",id:"totaltoken",level:3},{value:"alreadyReleasedAmount",id:"alreadyreleasedamount",level:3},{value:"Events",id:"events",level:2},{value:"Release",id:"release-1",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"BeneficiaryUpdate",id:"beneficiaryupdate",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"PendingBeneficiaryUpdate",id:"pendingbeneficiaryupdate",level:3},{value:"Parameters",id:"parameters-5",level:4}],m={toc:s};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"itokentimelock"},"ITokenTimelock"),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"release"},"release"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function release(\n    address to,\n    uint256 amount\n) external\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"releasemax"},"releaseMax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function releaseMax(\n    address to\n) external\n")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"setpendingbeneficiary"},"setPendingBeneficiary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setPendingBeneficiary(\n    address _pendingBeneficiary\n) external\n")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_pendingBeneficiary")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"acceptbeneficiary"},"acceptBeneficiary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function acceptBeneficiary() external\n")),(0,l.kt)("h3",{id:"lockedtoken"},"lockedToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function lockedToken() external returns (contract IERC20)\n")),(0,l.kt)("h3",{id:"beneficiary"},"beneficiary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function beneficiary() external returns (address)\n")),(0,l.kt)("h3",{id:"pendingbeneficiary"},"pendingBeneficiary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function pendingBeneficiary() external returns (address)\n")),(0,l.kt)("h3",{id:"initialbalance"},"initialBalance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function initialBalance() external returns (uint256)\n")),(0,l.kt)("h3",{id:"availableforrelease"},"availableForRelease"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function availableForRelease() external returns (uint256)\n")),(0,l.kt)("h3",{id:"totaltoken"},"totalToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function totalToken() external returns (uint256)\n")),(0,l.kt)("h3",{id:"alreadyreleasedamount"},"alreadyReleasedAmount"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function alreadyReleasedAmount() external returns (uint256)\n")),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"release-1"},"Release"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event Release(\n    address _beneficiary,\n    address _recipient,\n    uint256 _amount\n)\n")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_beneficiary")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_recipient")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"beneficiaryupdate"},"BeneficiaryUpdate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event BeneficiaryUpdate(\n    address _beneficiary\n)\n")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_beneficiary")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"pendingbeneficiaryupdate"},"PendingBeneficiaryUpdate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event PendingBeneficiaryUpdate(\n    address _pendingBeneficiary\n)\n")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_pendingBeneficiary")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))))}k.isMDXComponent=!0}}]);