"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:5,sidebar_label:"style-guide"},a="Publish a Style Guide",l={unversionedId:"wordpress/build-tools/wp-cli/Commands/style-guide",id:"wordpress/build-tools/wp-cli/Commands/style-guide",title:"Publish a Style Guide",description:"This command will publish our /style-guide and its child pages.",source:"@site/docs/wordpress/build-tools/wp-cli/Commands/style-guide.md",sourceDirName:"wordpress/build-tools/wp-cli/Commands",slug:"/wordpress/build-tools/wp-cli/Commands/style-guide",permalink:"/wordpress/build-tools/wp-cli/Commands/style-guide",draft:!1,editUrl:"https://github.com/eighteen73/docs/edit/main/docs/wordpress/build-tools/wp-cli/Commands/style-guide.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"style-guide"},sidebar:"tutorialSidebar",previous:{title:"just-launched",permalink:"/wordpress/build-tools/wp-cli/Commands/just-launched"},next:{title:"Plugins",permalink:"/wordpress/plugins/"}},s={},p=[{value:"Running the command",id:"running-the-command",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"publish-a-style-guide"},"Publish a Style Guide"),(0,i.kt)("p",null,"This command will publish our ",(0,i.kt)("strong",{parentName:"p"},"/style-guide")," and its child pages."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"/style-guide/kitchen-sink"),(0,i.kt)("br",{parentName:"li"}),"Popular HTML elements to assist with the validation of base CSS styling."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"/style-guide/blocks"),(0,i.kt)("br",{parentName:"li"}),"A curated selection of page builder blocks that are commonly used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"/style-guide/patterns"),(0,i.kt)("br",{parentName:"li"}),"All teh block patterns that have been registered in the theme.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Existing content at any of the above paths will be overwritten.")),(0,i.kt)("h2",{id:"running-the-command"},"Running the command"),(0,i.kt)("p",null,"By default it will ask for confirmation before overwriting each page but adding ",(0,i.kt)("inlineCode",{parentName:"p"},"--force")," will instruct the command to automatically overwrite the pages without asking."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wp eighteen73 style-guide\n\n# or to suppress overwrite warnings\nwp eighteen73 style-guide --force\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you have an alias set up you can use this to publish content to a live website as follows:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"wp @production eighteen73 style-guide\n"))))}c.isMDXComponent=!0}}]);