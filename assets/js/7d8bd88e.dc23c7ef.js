"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[217],{120:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=n(4848),i=n(8453);const r={sidebar_position:2},l="Pulsar Theme",o={id:"wordpress/build-tools/pulsar/index",title:"Pulsar Theme",description:"WordPress starter theme with Tailwind CSS, Alpine JS and a modern development workflow",source:"@site/docs/wordpress/build-tools/pulsar/index.md",sourceDirName:"wordpress/build-tools/pulsar",slug:"/wordpress/build-tools/pulsar/",permalink:"/wordpress/build-tools/pulsar/",draft:!1,unlisted:!1,editUrl:"https://github.com/eighteen73/docs/edit/main/docs/wordpress/build-tools/pulsar/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Multisite",permalink:"/wordpress/build-tools/nebula/multisite"},next:{title:"Plugins",permalink:"/wordpress/plugins/"}},a={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Theme structure",id:"theme-structure",level:2},{value:"Theme setup",id:"theme-setup",level:2},{value:"Theme development",id:"theme-development",level:2},{value:"Build commands",id:"build-commands",level:3}];function p(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"pulsar-theme",children:"Pulsar Theme"}),"\n",(0,t.jsx)("repo-link",{name:"pulsar",licence:"MIT"}),"\n",(0,t.jsx)(s.p,{children:"WordPress starter theme with Tailwind CSS, Alpine JS and a modern development workflow"}),"\n",(0,t.jsx)(s.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(s.p,{children:"Make sure all dependencies have been installed before moving on:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://wordpress.org/",children:"WordPress"})," >= 5.9"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://secure.php.net/manual/en/install.php",children:"PHP"})," >= 7.4.0"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"http://nodejs.org/",children:"Node.js"})," >= 16"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"theme-structure",children:"Theme structure"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"themes/your-theme-name/     # \u2192 Root of your theme\n\u251c\u2500\u2500 blocks/                 # \u2192 Custom blocks\n\u251c\u2500\u2500 config/                 # \u2192 Theme configuration files\n\u2502   \u251c\u2500\u2500 bindings.php        # \u2192 Theme container bindings\n\u2502   \u251c\u2500\u2500 block-patterns.php  # \u2192 Custom block patterns\n\u2502   \u251c\u2500\u2500 block-styles.php    # \u2192 Custom block styles\n\u2502   \u251c\u2500\u2500 blocks.php          # \u2192 All enabled blocks\n\u2502   \u2514\u2500\u2500 browsersync.json    # \u2192 Developer-specific configuration for BrowserSync (if wanted)\n\u2502   \u2514\u2500\u2500 mix.json            # \u2192 Mix entries and other settings\n\u251c\u2500\u2500 includes/               # \u2192 Theme functions and classes\n\u2502   \u2514\u2500\u2500 classes/            # \u2192 Theme classes (autoloaded)\n\u2502       \u251c\u2500\u2500 Contracts/      # \u2192 Interfaces and Traits\n\u2502       \u251c\u2500\u2500 Editor/         # \u2192 Editor specific classes\n\u2502       \u251c\u2500\u2500 Blocks.php      # \u2192 Registration of custom blocks\n\u2502       \u251c\u2500\u2500 Patterns.php    # \u2192 Block pattern management\n\u2502       \u251c\u2500\u2500 Styles.php      # \u2192 Block styles management\n\u2502       \u2514\u2500\u2500 Tools/          # \u2192 Various tools used throughout the theme\n\u2502           \u251c\u2500\u2500 Mix.php     # \u2192 Handles asset management with Laravel Mix\n\u2502           \u2514\u2500\u2500 Svg.php     # \u2192 Allows manipulating SVGs and inlining them\n\u2502       \u251c\u2500\u2500 Enqueue.php     # \u2192 Theme assets\n\u2502       \u2514\u2500\u2500 Setup.php       # \u2192 Theme setup\n\u2502   \u2514\u2500\u2500 template-tags/      # \u2192 Theme template tags\n\u2502   \u251c\u2500\u2500 autoload.php        # \u2192 Theme autoloader\n\u2502   \u251c\u2500\u2500 compat.php          # \u2192 Theme compatibility\n\u2502   \u2514\u2500\u2500 theme.php           # \u2192 Theme mini container\n\u251c\u2500\u2500 dist/                   # \u2192 Built theme assets (never edit)\n\u251c\u2500\u2500 parts/                  # \u2192 Theme partial template files\n\u251c\u2500\u2500 patterns/               # \u2192 Theme block pattern template files\n\u251c\u2500\u2500 node_modules/           # \u2192 Node.js packages (never edit)\n\u251c\u2500\u2500 src/                    # \u2192 Theme assets and templates\n\u2502   \u251c\u2500\u2500 css/                # \u2192 Theme stylesheets\n\u2502   \u251c\u2500\u2500 fonts/              # \u2192 Theme fonts\n\u2502   \u251c\u2500\u2500 img/                # \u2192 Theme images\n\u2502   \u251c\u2500\u2500 js/                 # \u2192 Theme javascript\n\u2502   \u251c\u2500\u2500 svg/                # \u2192 Theme SVGs\n\u251c\u2500\u2500 templates/              # \u2192 Theme custom template files\n\u251c\u2500\u2500 functions.php           # \u2192 Theme bootloader\n\u251c\u2500\u2500 package.json            # \u2192 Node.js dependencies and scripts\n\u251c\u2500\u2500 screenshot.png          # \u2192 Theme screenshot for WP admin\n\u251c\u2500\u2500 style.css               # \u2192 Theme meta information\n"})}),"\n",(0,t.jsx)(s.h2,{id:"theme-setup",children:"Theme setup"}),"\n",(0,t.jsxs)(s.p,{children:["Edit ",(0,t.jsx)(s.code,{children:"app/Setup.php"})," to enable or disable theme features, setup navigation menus, post thumbnail sizes, and sidebars."]}),"\n",(0,t.jsx)(s.h2,{id:"theme-development",children:"Theme development"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Run ",(0,t.jsx)(s.code,{children:"npm install"})," from the theme directory to install dependencies"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"build-commands",children:"Build commands"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"npm run watch"})," \u2014 Compile assets when file changes are made, start Browsersync session"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"npm run build"})," \u2014 Compile assets for production"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>o});var t=n(6540);const i={},r=t.createContext(i);function l(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);