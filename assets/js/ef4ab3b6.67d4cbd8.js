"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6016],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1508:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:2},p="Monitoring Infrastructure",s={unversionedId:"protocol/Operation/Monitoring",id:"protocol/Operation/Monitoring",title:"Monitoring Infrastructure",description:"Montioring of protocol events and metrics is done through a combination of OpenZeppelin Defender and Datadog.",source:"@site/docs/protocol/Operation/Monitoring.md",sourceDirName:"protocol/Operation",slug:"/protocol/Operation/Monitoring",permalink:"/docs/docs/protocol/Operation/Monitoring",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/Operation/Monitoring.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"DAO",permalink:"/docs/docs/protocol/Governance/DAO"},next:{title:"Security",permalink:"/docs/docs/protocol/Operation/Security"}},u={},l=[{value:"OpenZeppelin Defender",id:"openzeppelin-defender",level:2},{value:"Datadog",id:"datadog",level:2}],d={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"monitoring-infrastructure"},"Monitoring Infrastructure"),(0,i.kt)("p",null,"Montioring of protocol events and metrics is done through a combination of OpenZeppelin Defender and Datadog."),(0,i.kt)("h2",{id:"openzeppelin-defender"},"OpenZeppelin Defender"),(0,i.kt)("p",null,"The Fei Labs OpenZeppelin Defender instance contains a set of scripts that monitor particular protocol statistics - such as PSM balances, PCV deposits balances, and so on. These scripts are compiled and uploaded to Defender to run every 5 minutes, pushing the stats to Datadog to be displayed. See the fei-protocol/internal (private) repository for more specific information on this."),(0,i.kt)("h2",{id:"datadog"},"Datadog"),(0,i.kt)("p",null,"Stats pushed from the Defender instance go into Datadog, and can be indexed and graphed on Dashboards. The primary monitoring dashboard is ",(0,i.kt)("a",{parentName:"p",href:"https://p.datadoghq.com/sb/03e91a80-2ae7-11ec-8f45-da7ad0900002-c8e87f93a08b60e64b5b372440b916a2"},"here")))}f.isMDXComponent=!0}}]);