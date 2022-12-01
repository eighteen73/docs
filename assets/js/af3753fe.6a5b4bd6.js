"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="Nebula Framework",o={unversionedId:"wordpress/nebula/index",id:"wordpress/nebula/index",title:"Nebula Framework",description:"https://github.com/eighteen73/nebula",source:"@site/docs/wordpress/nebula/index.md",sourceDirName:"wordpress/nebula",slug:"/wordpress/nebula/",permalink:"/wordpress/nebula/",draft:!1,editUrl:"https://github.com/eighteen73/docs/docs/wordpress/nebula/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"WordPress",permalink:"/wordpress/"},next:{title:"Installation",permalink:"/wordpress/nebula/installation"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nebula-framework"},"Nebula Framework"),(0,r.kt)("admonition",{title:"Package URL",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/eighteen73/nebula"},"https://github.com/eighteen73/nebula"))),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Nebula is a modern WordPress stack that helps you get started with the best development tools and project structure."),(0,r.kt)("p",null,"Much of the philosophy behind Nebula is inspired by the ",(0,r.kt)("a",{parentName:"p",href:"http://12factor.net/"},"Twelve-Factor App")," methodology including the ",(0,r.kt)("a",{parentName:"p",href:"https://roots.io/twelve-factor-wordpress/"},"WordPress specific version"),"."),(0,r.kt)("p",null,"Nebula is heavily based on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/roots/bedrock"},"Bedrock")," by ",(0,r.kt)("a",{parentName:"p",href:"https://roots.io/"},"Roots")," with an eighteen73 flavour."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Better folder structure"),(0,r.kt)("li",{parentName:"ul"},"Dependency management with ",(0,r.kt)("a",{parentName:"li",href:"https://getcomposer.org"},"Composer")),(0,r.kt)("li",{parentName:"ul"},"Easy WordPress configuration with environment specific files"),(0,r.kt)("li",{parentName:"ul"},"Environment variables with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/vlucas/phpdotenv"},"Dotenv")),(0,r.kt)("li",{parentName:"ul"},"Autoloader for mu-plugins (use regular plugins as mu-plugins)"),(0,r.kt)("li",{parentName:"ul"},"Enhanced security (separated web root and more secure password algorithm)")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PHP >= 7.4"),(0,r.kt)("li",{parentName:"ul"},"Composer - ",(0,r.kt)("a",{parentName:"li",href:"https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx"},"Install"))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new project:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ composer create-project eighteen73/nebula\n"))),(0,r.kt)("li",{parentName:"ol"},"Update environment variables in the ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file. Wrap values that may contain non-alphanumeric characters with quotes, or they may be incorrectly parsed.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Database variables",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB_NAME")," - Database name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB_USER")," - Database user"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB_PASSWORD")," - Database password"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB_HOST")," - Database host"),(0,r.kt)("li",{parentName:"ul"},"Optionally, you can define ",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_URL")," for using a DSN instead of using the variables above (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"mysql://user:password@127.0.0.1:3306/db_name"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WP_ENVIRONMENT_TYPE")," - Set to environment (",(0,r.kt)("inlineCode",{parentName:"li"},"development"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"staging"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"production"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WP_HOME")," - Full URL to WordPress home (",(0,r.kt)("a",{parentName:"li",href:"https://example.com"},"https://example.com"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WP_SITEURL")," - Full URL to WordPress including subdirectory (",(0,r.kt)("a",{parentName:"li",href:"https://example.com/wp"},"https://example.com/wp"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AUTH_KEY"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SECURE_AUTH_KEY"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"LOGGED_IN_KEY"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"NONCE_KEY"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"AUTH_SALT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SECURE_AUTH_SALT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"LOGGED_IN_SALT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"NONCE_SALT"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Generate with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aaemnnosttv/wp-cli-dotenv-command"},"wp-cli-dotenv-command")),(0,r.kt)("li",{parentName:"ul"},"Generate with ",(0,r.kt)("a",{parentName:"li",href:"https://nebula-keys.eighteen73.co.uk/"},"the Nebula keys generator"))))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add theme(s) in ",(0,r.kt)("inlineCode",{parentName:"li"},"web/app/themes/")," as you would for a normal WordPress site"),(0,r.kt)("li",{parentName:"ol"},"Set the document root on your webserver to Nebula's ",(0,r.kt)("inlineCode",{parentName:"li"},"web")," folder: ",(0,r.kt)("inlineCode",{parentName:"li"},"/path/to/site/web/")),(0,r.kt)("li",{parentName:"ol"},"Access WordPress admin at ",(0,r.kt)("inlineCode",{parentName:"li"},"https://example.com/wp/wp-admin/"))))}u.isMDXComponent=!0}}]);