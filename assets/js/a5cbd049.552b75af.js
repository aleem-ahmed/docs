"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8554],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return N}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),d=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=d(t.components);return r.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},o=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),o=d(a),N=n,c=o["".concat(m,".").concat(N)]||o[N]||s[N]||l;return a?r.createElement(c,p(p({ref:e},k),{},{components:a})):r.createElement(c,p({ref:e},k))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=o;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},76:function(t,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),p=["components"],i={},m="Vm",d={unversionedId:"protocol/smart-contract-api/test/utils/Vm",id:"protocol/smart-contract-api/test/utils/Vm",title:"Vm",description:"Functions",source:"@site/docs/protocol/smart-contract-api/test/utils/Vm.md",sourceDirName:"protocol/smart-contract-api/test/utils",slug:"/protocol/smart-contract-api/test/utils/Vm",permalink:"/docs/docs/protocol/smart-contract-api/test/utils/Vm",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/test/utils/Vm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"StdLib",permalink:"/docs/docs/protocol/smart-contract-api/test/utils/StdLib"},next:{title:"ITribe",permalink:"/docs/docs/protocol/smart-contract-api/timelocks/ITimelockedDelegator"}},k={},s=[{value:"Functions",id:"functions",level:2},{value:"warp",id:"warp",level:3},{value:"Parameters",id:"parameters",level:4},{value:"roll",id:"roll",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"fee",id:"fee",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"load",id:"load",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"store",id:"store",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"sign",id:"sign",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"addr",id:"addr",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"ffi",id:"ffi",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"prank",id:"prank",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"startPrank",id:"startprank",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"prank",id:"prank-1",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"startPrank",id:"startprank-1",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"stopPrank",id:"stopprank",level:3},{value:"deal",id:"deal",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"etch",id:"etch",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"expectRevert",id:"expectrevert",level:3},{value:"Parameters",id:"parameters-14",level:4},{value:"expectRevert",id:"expectrevert-1",level:3},{value:"Parameters",id:"parameters-15",level:4},{value:"record",id:"record",level:3},{value:"accesses",id:"accesses",level:3},{value:"Parameters",id:"parameters-16",level:4},{value:"expectEmit",id:"expectemit",level:3},{value:"Parameters",id:"parameters-17",level:4},{value:"mockCall",id:"mockcall",level:3},{value:"Parameters",id:"parameters-18",level:4},{value:"clearMockedCalls",id:"clearmockedcalls",level:3},{value:"expectCall",id:"expectcall",level:3},{value:"Parameters",id:"parameters-19",level:4},{value:"getCode",id:"getcode",level:3},{value:"Parameters",id:"parameters-20",level:4},{value:"label",id:"label",level:3},{value:"Parameters",id:"parameters-21",level:4}],o={toc:s};function N(t){var e=t.components,a=(0,n.Z)(t,p);return(0,l.kt)("wrapper",(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vm"},"Vm"),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"warp"},"warp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function warp(\n    uint256 \n) external\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"roll"},"roll"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function roll(\n    uint256 \n) external\n")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"fee"},"fee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function fee(\n    uint256 \n) external\n")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"load"},"load"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function load(\n    address ,\n    bytes32 \n) external returns (bytes32)\n")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"store"},"store"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function store(\n    address ,\n    bytes32 ,\n    bytes32 \n) external\n")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"sign"},"sign"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function sign(\n    uint256 ,\n    bytes32 \n) external returns (uint8, bytes32, bytes32)\n")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"addr"},"addr"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function addr(\n    uint256 \n) external returns (address)\n")),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"ffi"},"ffi"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function ffi(\n    string[] \n) external returns (bytes)\n")),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string[]"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"prank"},"prank"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function prank(\n    address \n) external\n")),(0,l.kt)("h4",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"startprank"},"startPrank"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function startPrank(\n    address \n) external\n")),(0,l.kt)("h4",{id:"parameters-9"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"prank-1"},"prank"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function prank(\n    address ,\n    address \n) external\n")),(0,l.kt)("h4",{id:"parameters-10"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"startprank-1"},"startPrank"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function startPrank(\n    address ,\n    address \n) external\n")),(0,l.kt)("h4",{id:"parameters-11"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"stopprank"},"stopPrank"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function stopPrank() external\n")),(0,l.kt)("h3",{id:"deal"},"deal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function deal(\n    address ,\n    uint256 \n) external\n")),(0,l.kt)("h4",{id:"parameters-12"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"etch"},"etch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function etch(\n    address ,\n    bytes \n) external\n")),(0,l.kt)("h4",{id:"parameters-13"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"expectrevert"},"expectRevert"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function expectRevert(\n    bytes \n) external\n")),(0,l.kt)("h4",{id:"parameters-14"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"expectrevert-1"},"expectRevert"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function expectRevert(\n    bytes4 \n) external\n")),(0,l.kt)("h4",{id:"parameters-15"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes4"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"record"},"record"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function record() external\n")),(0,l.kt)("h3",{id:"accesses"},"accesses"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function accesses(\n    address \n) external returns (bytes32[] reads, bytes32[] writes)\n")),(0,l.kt)("h4",{id:"parameters-16"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"expectemit"},"expectEmit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function expectEmit(\n    bool ,\n    bool ,\n    bool ,\n    bool \n) external\n")),(0,l.kt)("h4",{id:"parameters-17"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"mockcall"},"mockCall"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function mockCall(\n    address ,\n    bytes ,\n    bytes \n) external\n")),(0,l.kt)("h4",{id:"parameters-18"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"clearmockedcalls"},"clearMockedCalls"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function clearMockedCalls() external\n")),(0,l.kt)("h3",{id:"expectcall"},"expectCall"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function expectCall(\n    address ,\n    bytes \n) external\n")),(0,l.kt)("h4",{id:"parameters-19"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"getcode"},"getCode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function getCode(\n    string \n) external returns (bytes)\n")),(0,l.kt)("h4",{id:"parameters-20"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"label"},"label"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function label(\n    address ,\n    string \n) external\n")),(0,l.kt)("h4",{id:"parameters-21"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"``"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"})))))}N.isMDXComponent=!0}}]);