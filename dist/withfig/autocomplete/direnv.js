var re=Object.create;var k=Object.defineProperty;var se=Object.getOwnPropertyDescriptor;var oe=Object.getOwnPropertyNames;var ae=Object.getPrototypeOf,le=Object.prototype.hasOwnProperty;var E=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ue=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of oe(t))!le.call(e,r)&&r!==n&&k(e,r,{get:()=>t[r],enumerable:!(i=se(t,r))||i.enumerable});return e};var ce=(e,t,n)=>(n=e!=null?re(ae(e)):{},ue(t||!e||!e.__esModule?k(n,"default",{value:e,enumerable:!0}):n,e));var $=E(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.shellExpand=A.ensureTrailingSlash=void 0;var de=e=>e.endsWith("/")?e:`${e}/`;A.ensureTrailingSlash=de;var fe=(e,t)=>e.startsWith("~")&&(e.length===1||e.charAt(1)==="/")?e.replace("~",t):e,pe=(e,t)=>e.replace(/\$([A-Za-z0-9_]+)/g,r=>{var s;let a=r.slice(1);return(s=t[a])!==null&&s!==void 0?s:r}).replace(/\$\{([A-Za-z0-9_]+)(?::-([^}]+))?\}/g,(r,s,a)=>{var u,c;return(c=(u=t[s])!==null&&u!==void 0?u:a)!==null&&c!==void 0?c:r}),he=(e,t)=>{var n;let{environmentVariables:i}=t;return pe(fe(e,(n=i?.HOME)!==null&&n!==void 0?n:"~"),i)};A.shellExpand=he});var G=E(v=>{"use strict";var ge=v&&v.__awaiter||function(e,t,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function u(o){try{l(i.next(o))}catch(d){a(d)}}function c(o){try{l(i.throw(o))}catch(d){a(d)}}function l(o){o.done?s(o.value):r(o.value).then(u,c)}l((i=i.apply(e,t||[])).next())})};Object.defineProperty(v,"__esModule",{value:!0});v.filepaths=v.folders=v.getCurrentInsertedDirectory=v.sortFilesAlphabetically=void 0;var H=$();function z(e,t=[]){let n=t.map(r=>r.toLowerCase()),i=e.filter(r=>!n.includes(r.toLowerCase()));return[...i.filter(r=>!r.startsWith(".")).sort((r,s)=>r.localeCompare(s)),...i.filter(r=>r.startsWith(".")).sort((r,s)=>r.localeCompare(s)),"../"]}v.sortFilesAlphabetically=z;var me=(e,t,n)=>{if(e===null)return"/";let i=(0,H.shellExpand)(t,n),r=i.slice(0,i.lastIndexOf("/")+1);return r===""?(0,H.ensureTrailingSlash)(e):r.startsWith("/")?r:`${(0,H.ensureTrailingSlash)(e)}${r}`};v.getCurrentInsertedDirectory=me;function F(e={}){let{extensions:t=[],equals:n=[],matches:i,filterFolders:r=!1,editFileSuggestions:s,editFolderSuggestions:a,rootDirectory:u,showFolders:c="always"}=e,l=new Set(t),o=new Set(n),d=()=>t.length>0||n.length>0||i,m=(p=[])=>d()?p.filter(({name:g="",type:_})=>{if(!r&&_==="folder"||o.has(g)||i&&g.match(i))return!0;let[,...f]=g.split(".");if(f.length>=1){let O=f.length-1,S=f[O];do{if(l.has(S))return!0;O-=1,S=[f[O],S].join(".")}while(O>=0)}return!1}):p,b=(p=[])=>!s&&!a?p:p.map(g=>Object.assign(Object.assign({},g),(g.type==="file"?s:a)||{}));return{trigger:(p,g)=>{let _=p.lastIndexOf("/"),f=g.lastIndexOf("/");return _!==f?!0:_===-1&&f===-1?!1:p.slice(0,_)!==g.slice(0,f)},getQueryTerm:p=>p.slice(p.lastIndexOf("/")+1),custom:(p,g,_)=>ge(this,void 0,void 0,function*(){var f;let{isDangerous:O,currentWorkingDirectory:S,searchTerm:h}=_,T=(f=(0,v.getCurrentInsertedDirectory)(u??S,h,_))!==null&&f!==void 0?f:"/";try{let q=yield g({command:"ls",args:["-1ApL"],cwd:T}),ie=z(q.stdout.split(`
`),[".DS_Store"]),W=[];for(let R of ie)if(R){let P=R.endsWith("/")?"folders":"filepaths";(P==="filepaths"&&c!=="only"||P==="folders"&&c!=="never")&&W.push({type:P==="filepaths"?"file":"folder",name:R,insertValue:R,isDangerous:O,context:{templateType:P}})}return b(m(W))}catch{return[]}})}}v.folders=Object.assign(()=>F({showFolders:"only"}),Object.freeze(F({showFolders:"only"})));v.filepaths=Object.assign(F,Object.freeze(F()))});var Q=E(w=>{"use strict";var D=w&&w.__awaiter||function(e,t,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function u(o){try{l(i.next(o))}catch(d){a(d)}}function c(o){try{l(i.throw(o))}catch(d){a(d)}}function l(o){o.done?s(o.value):r(o.value).then(u,c)}l((i=i.apply(e,t||[])).next())})};Object.defineProperty(w,"__esModule",{value:!0});w.keyValueList=w.keyValue=w.valueList=void 0;var K=new Map;function V(e,t){return e.length===0?t:t.map(n=>n.insertValue?n:Object.assign(Object.assign({},n),{insertValue:n.name+e}))}function U(e,t,n){return D(this,void 0,void 0,function*(){if(typeof e=="function"){let i=yield e(...n);return V(t,i)}if(typeof e[0]=="string"){let i=e.map(r=>({name:r}));return V(t,i)}return V(t,e)})}function M(e,t,n,i){return D(this,void 0,void 0,function*(){if(n||Array.isArray(e)){let r=K.get(e);return r===void 0&&(r=yield U(e,t,i),K.set(e,r)),r}return U(e,t,i)})}function J(e,t){return typeof t=="string"?e&&t==="keys"||!e&&t==="values":t}function j(e,...t){return Math.max(...t.map(n=>e.lastIndexOf(n)))}function C(e,t){let n=new Set(e);return t.filter(i=>{var r;return typeof i.name=="string"?!n.has(i.name):!(!((r=i.name)===null||r===void 0)&&r.some(s=>n.has(s)))})}function ve({delimiter:e=",",values:t=[],cache:n=!1,insertDelimiter:i=!1,allowRepeatedValues:r=!1}){return{trigger:(s,a)=>s.lastIndexOf(e)!==a.lastIndexOf(e),getQueryTerm:s=>s.slice(s.lastIndexOf(e)+e.length),custom:(...s)=>D(this,void 0,void 0,function*(){var a;let u=yield M(t,i?e:"",n,s);if(r)return u;let[c]=s,l=(a=c[c.length-1])===null||a===void 0?void 0:a.split(e);return C(l,u)})}}w.valueList=ve;function ye({separator:e="=",keys:t=[],values:n=[],cache:i=!1,insertSeparator:r=!0}){return{trigger:(s,a)=>s.indexOf(e)!==a.indexOf(e),getQueryTerm:s=>s.slice(s.indexOf(e)+1),custom:(...s)=>D(this,void 0,void 0,function*(){let[a]=s,c=!a[a.length-1].includes(e),l=c?t:n,o=J(c,i);return M(l,c&&r?e:"",o,s)})}}w.keyValue=ye;function Oe({separator:e="=",delimiter:t=",",keys:n=[],values:i=[],cache:r=!1,insertSeparator:s=!0,insertDelimiter:a=!1,allowRepeatedKeys:u=!1,allowRepeatedValues:c=!0}){return{trigger:(l,o)=>{let d=j(l,e,t),m=j(o,e,t);return d!==m},getQueryTerm:l=>{let o=j(l,e,t);return l.slice(o+1)},custom:(...l)=>D(this,void 0,void 0,function*(){let[o]=l,d=o[o.length-1],m=j(d,e,t),b=m===-1||d.slice(m,m+e.length)!==e,p=b?n:i,g=J(b,r),f=yield M(p,b?s?e:"":a?t:"",g,l);if(b){if(u)return f;let S=d.split(t).map(h=>h.slice(0,h.indexOf(e)));return C(S,f)}if(c)return f;let O=d.split(t).map(S=>S.slice(S.indexOf(e)+e.length));return C(O,f)})}}w.keyValueList=Oe});var B=E(L=>{"use strict";var _e=L&&L.__awaiter||function(e,t,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function u(o){try{l(i.next(o))}catch(d){a(d)}}function c(o){try{l(i.throw(o))}catch(d){a(d)}}function l(o){o.done?s(o.value):r(o.value).then(u,c)}l((i=i.apply(e,t||[])).next())})};Object.defineProperty(L,"__esModule",{value:!0});L.ai=void 0;var Se=4097,be=4,Te=.8,we=Se*be*Te;function Ie({name:e,prompt:t,message:n,postProcess:i,temperature:r,splitOn:s}){return{scriptTimeout:15e3,custom:(a,u,c)=>_e(this,void 0,void 0,function*(){var l,o;let d=yield u({command:"fig",args:["settings","--format","json","autocomplete.ai.enabled"]});if(!JSON.parse(d.stdout))return[];let m=typeof t=="function"?yield t({tokens:a,executeCommand:u,generatorContext:c}):t,b=typeof n=="function"?yield n({tokens:a,executeCommand:u,generatorContext:c}):n;if(b===null||b.length===0)return console.warn("No message provided to AI generator"),[];let p=we-((l=m?.length)!==null&&l!==void 0?l:0),g={model:"gpt-3.5-turbo",source:"autocomplete",name:e,messages:[...m?[{role:"system",content:m}]:[],{role:"user",content:b.slice(0,p)}],temperature:r},_=JSON.stringify(g),f=yield u({command:"fig",args:["_","request","--route","/ai/chat","--method","POST","--body",_]}),O=JSON.parse(f.stdout);return(o=O?.choices.map(h=>{var T;return(T=h?.message)===null||T===void 0?void 0:T.content}).filter(h=>typeof h=="string").flatMap(h=>s?h.split(s).filter(T=>T.trim().length>0):[h]).map(h=>{if(i)return i(h);let T=h.trim().replace(/\n/g," ");return{icon:"\u{1FA84}",name:T,insertValue:`'${T}'`,description:"Generated by Fig AI"}}))!==null&&o!==void 0?o:[]})}}L.ai=Ie});var X=E(y=>{"use strict";var xe=y&&y.__createBinding||(Object.create?function(e,t,n,i){i===void 0&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){i===void 0&&(i=n),e[i]=t[n]}),Ae=y&&y.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&xe(t,e,n)};Object.defineProperty(y,"__esModule",{value:!0});y.ai=y.folders=y.filepaths=void 0;var Y=G();Object.defineProperty(y,"filepaths",{enumerable:!0,get:function(){return Y.filepaths}});Object.defineProperty(y,"folders",{enumerable:!0,get:function(){return Y.folders}});Ae(Q(),y);var Le=B();Object.defineProperty(y,"ai",{enumerable:!0,get:function(){return Le.ai}})});var te=ce(X(),1),ne=76,I=49,N=e=>({template:"filepaths",filterTemplateSuggestions:t=>{let n=i=>i.includes(".envrc");return t.filter(i=>n(i.name)||i.name.endsWith("/")).map(i=>({...i,priority:n(i.name)&&ne,...e}))}}),Ee=(0,te.filepaths)({matches:/\.env(?!rc)/g,editFileSuggestions:{priority:ne}}),x=["bash","zsh","fish","tcsh","elvish"].map(e=>({name:e,icon:"\u{1F41A}"})),Z={description:"Help for direnv",args:{name:"SHOW_PRIVATE",description:"Any string",isOptional:!0}},ee={description:"Prints the version or checks that direnv is older than VERSION_AT_LEAST",args:{name:"VERSION_AT_LEAST",isOptional:!0}},De={name:"direnv",description:"Unclutter your .profile",subcommands:[{name:"allow",description:"Grants direnv to load the given .envrc",isDangerous:!0,args:{name:"PATH_TO_RC",generators:N({isDangerous:!0}),isOptional:!0}},{name:"deny",description:"Revokes the authorization of a given .envrc",isDangerous:!0,args:{name:"PATH_TO_RC",generators:N({isDangerous:!0}),isOptional:!0}},{name:"edit",description:"Opens PATH_TO_RC or the current .envrc into an $EDITOR and allow the file to be loaded afterwards",args:{name:"PATH_TO_RC",generators:N(),isOptional:!0}},{name:"exec",description:"Executes a command after loading the first .envrc found in DIR",args:[{name:"DIR",template:"folders"},{name:"COMMAND",isCommand:!0,isDangerous:!0}]},{name:"fetchurl",description:"Fetches a given URL into direnv's CAS",args:[{name:"url"},{name:"integrity-hash",description:"Check if the `integrity hash` is equal to the hash value of the file obtained from the `url`",isOptional:!0}]},{name:"help",...Z},{name:"hook",description:"Used to setup the shell hook",args:{name:"SHELL",suggestions:x}},{name:"prune",description:"Removes old allowed files",isDangerous:!0},{name:"reload",description:"Triggers an env reload",isDangerous:!0},{name:"status",description:"Prints some debug status information"},{name:"stdlib",description:"Displays the stdlib available in the .envrc execution context"},{name:"version",...ee},{name:"apply_dump",description:"Accepts a filename containing `direnv dump` output and generates a series of bash export statements to apply the given env",priority:I,args:{name:"FILE",template:"filepaths",isDangerous:!0}},{name:"show_dump",description:"Show the data inside of a dump for debugging purposes",priority:I,args:{name:"DUMP",template:"filepaths"}},{name:"dotenv",description:"Transforms a .env file to evaluatable `export KEY=PAIR` statements",priority:I,args:[{name:"SHELL",suggestions:x,isOptional:!0},{name:"PATH_TO_DOTENV",generators:Ee}]},{name:"dump",description:"Used to export the inner bash state at the end of execution",priority:I,args:[{name:"SHELL",suggestions:x,isOptional:!0},{name:"FILE",description:"Overwrites by dump data",template:"filepaths",isOptional:!0,isDangerous:!0}]},{name:"export",description:"Loads an .envrc and prints the diff in terms of exports",priority:I,args:{name:"SHELL",suggestions:x}},{name:"watch",description:"Adds a path to the list that direnv watches for changes",priority:I,args:[{name:"SHELL",suggestions:x},{name:"PATH",template:"filepaths",isVariadic:!0}]},{name:"watch-dir",description:"Recursively adds a directory to the list that direnv watches for changes",priority:I,args:[{name:"SHELL",suggestions:x},{name:"DIR",template:"folders"}]},{name:"watch-list",description:"Pipe pairs of `mtime path` to stdin to build a list of files to watch",priority:I,args:{name:"SHELL",suggestions:x,isOptional:!0}},{name:"current",description:"Reports whether direnv's view of a file is current (or stale)",priority:I,args:{name:"PATH",template:"filepaths"}}],options:[{name:"--version",...ee},{name:"--help",...Z}]},Ce=De;export{Ce as default};
