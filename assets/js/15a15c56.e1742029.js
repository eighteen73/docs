"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[882],{4292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var s=n(4848),i=n(8453);const o={sidebar_position:2,sidebar_label:"Multisite"},r="Multisite",l={id:"wordpress/build-tools/nebula/multisite",title:"Multisite",description:"NGINX",source:"@site/docs/wordpress/build-tools/nebula/multisite.md",sourceDirName:"wordpress/build-tools/nebula",slug:"/wordpress/build-tools/nebula/multisite",permalink:"/wordpress/build-tools/nebula/multisite",draft:!1,unlisted:!1,editUrl:"https://github.com/eighteen73/docs/edit/main/docs/wordpress/build-tools/nebula/multisite.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Multisite"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/wordpress/build-tools/nebula/installation"},next:{title:"Pulsar Theme",permalink:"/wordpress/build-tools/pulsar/"}},d={},u=[{value:"NGINX",id:"nginx",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"multisite",children:"Multisite"}),"\n",(0,s.jsx)(t.h2,{id:"nginx",children:"NGINX"}),"\n",(0,s.jsx)(t.p,{children:"If you're using NGINX you will need to add one of the following two snippets to your host's config. Select the one that matches your website configuration."}),"\n",(0,s.jsx)(t.p,{children:"For subdomain mode:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-nginx",children:"rewrite ^/(wp-.*.php)$ /wp/$1 last;\nrewrite ^/(wp-(content|admin|includes).*) /wp/$1 last;\n"})}),"\n",(0,s.jsx)(t.p,{children:"or, for subdirectory mode:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"if (!-e $request_filename) {\n  rewrite /wp-admin$ $scheme://$host$uri/ permanent;\n  rewrite ^(/[^/]+)?(/wp-.*) /wp$2 last;\n  rewrite ^(/[^/]+)?(/.*.php) /wp$2 last;\n}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);