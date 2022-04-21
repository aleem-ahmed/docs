"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9137],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:e},s),{},{components:n})):a.createElement(f,o({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5707:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},c="UniswapLens",p={unversionedId:"protocol/smart-contract-api/pcv/uniswap/UniswapLens",id:"protocol/smart-contract-api/pcv/uniswap/UniswapLens",title:"UniswapLens",description:"a contract to read tokens & fei out of a contract that reports balance in Uniswap LP tokens.",source:"@site/docs/protocol/smart-contract-api/pcv/uniswap/UniswapLens.md",sourceDirName:"protocol/smart-contract-api/pcv/uniswap",slug:"/protocol/smart-contract-api/pcv/uniswap/UniswapLens",permalink:"/docs/docs/protocol/smart-contract-api/pcv/uniswap/UniswapLens",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/pcv/uniswap/UniswapLens.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IUniswapPCVDeposit",permalink:"/docs/docs/protocol/smart-contract-api/pcv/uniswap/IUniswapPCVDeposit"},next:{title:"UniswapPCVDeposit",permalink:"/docs/docs/protocol/smart-contract-api/pcv/uniswap/UniswapPCVDeposit"}},s={},u=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"balance",id:"balance",level:3},{value:"resistantBalanceAndFei",id:"resistantbalanceandfei",level:3},{value:"_ratioOwned",id:"_ratioowned",level:3},{value:"liquidityOwned",id:"liquidityowned",level:3},{value:"Return Values",id:"return-values",level:4}],d={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"uniswaplens"},"UniswapLens"),(0,i.kt)("p",null,"a contract to read tokens & fei out of a contract that reports balance in Uniswap LP tokens."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n    address _depositAddress,\n    address _core,\n    address _oracle,\n    address _backupOracle\n) public\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_depositAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_core")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_oracle")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_backupOracle")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"balance"},"balance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function balance() public returns (uint256)\n")),(0,i.kt)("p",null,'gets the effective balance of "balanceReportedIn" token if the deposit were fully withdrawn'),(0,i.kt)("h3",{id:"resistantbalanceandfei"},"resistantBalanceAndFei"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function resistantBalanceAndFei() public returns (uint256, uint256)\n")),(0,i.kt)("p",null,"gets the resistant token balance and protocol owned fei of this deposit"),(0,i.kt)("h3",{id:"_ratioowned"},"_ratioOwned"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function _ratioOwned() internal returns (struct Decimal.D256)\n")),(0,i.kt)("p",null,"ratio of all pair liquidity owned by the deposit contract"),(0,i.kt)("h3",{id:"liquidityowned"},"liquidityOwned"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function liquidityOwned() public returns (uint256)\n")),(0,i.kt)("p",null,"amount of pair liquidity owned by the deposit contract"),(0,i.kt)("h4",{id:"return-values"},"Return Values"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[0]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"amount of LP tokens")))))}m.isMDXComponent=!0}}]);