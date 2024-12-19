var ee=Object.create;var U=Object.defineProperty;var te=Object.getOwnPropertyDescriptor;var ne=Object.getOwnPropertyNames;var re=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty;var x=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var oe=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ne(t))!ie.call(e,i)&&i!==n&&U(e,i,{get:()=>t[i],enumerable:!(r=te(t,i))||r.enumerable});return e};var se=(e,t,n)=>(n=e!=null?ee(re(e)):{},oe(t||!e||!e.__esModule?U(n,"default",{value:e,enumerable:!0}):n,e));var N=x(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.shellExpand=I.ensureTrailingSlash=void 0;var ae=e=>e.endsWith("/")?e:`${e}/`;I.ensureTrailingSlash=ae;var ce=(e,t)=>e.startsWith("~")&&(e.length===1||e.charAt(1)==="/")?e.replace("~",t):e,le=(e,t)=>e.replace(/\$([A-Za-z0-9_]+)/g,i=>{var o;let a=i.slice(1);return(o=t[a])!==null&&o!==void 0?o:i}).replace(/\$\{([A-Za-z0-9_]+)(?::-([^}]+))?\}/g,(i,o,a)=>{var l,u;return(u=(l=t[o])!==null&&l!==void 0?l:a)!==null&&u!==void 0?u:i}),ue=(e,t)=>{var n;let{environmentVariables:r}=t;return le(ce(e,(n=r?.HOME)!==null&&n!==void 0?n:"~"),r)};I.shellExpand=ue});var $=x(y=>{"use strict";var de=y&&y.__awaiter||function(e,t,n,r){function i(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function l(s){try{c(r.next(s))}catch(d){a(d)}}function u(s){try{c(r.throw(s))}catch(d){a(d)}}function c(s){s.done?o(s.value):i(s.value).then(l,u)}c((r=r.apply(e,t||[])).next())})};Object.defineProperty(y,"__esModule",{value:!0});y.filepaths=y.folders=y.getCurrentInsertedDirectory=y.sortFilesAlphabetically=void 0;var V=N();function W(e,t=[]){let n=t.map(i=>i.toLowerCase()),r=e.filter(i=>!n.includes(i.toLowerCase()));return[...r.filter(i=>!i.startsWith(".")).sort((i,o)=>i.localeCompare(o)),...r.filter(i=>i.startsWith(".")).sort((i,o)=>i.localeCompare(o)),"../"]}y.sortFilesAlphabetically=W;var fe=(e,t,n)=>{if(e===null)return"/";let r=(0,V.shellExpand)(t,n),i=r.slice(0,r.lastIndexOf("/")+1);return i===""?(0,V.ensureTrailingSlash)(e):i.startsWith("/")?i:`${(0,V.ensureTrailingSlash)(e)}${i}`};y.getCurrentInsertedDirectory=fe;function F(e={}){let{extensions:t=[],equals:n=[],matches:r,filterFolders:i=!1,editFileSuggestions:o,editFolderSuggestions:a,rootDirectory:l,showFolders:u="always"}=e,c=new Set(t),s=new Set(n),d=()=>t.length>0||n.length>0||r,g=(p=[])=>d()?p.filter(({name:m="",type:_})=>{if(!i&&_==="folder"||s.has(m)||r&&m.match(r))return!0;let[,...f]=m.split(".");if(f.length>=1){let b=f.length-1,O=f[b];do{if(c.has(O))return!0;b-=1,O=[f[b],O].join(".")}while(b>=0)}return!1}):p,S=(p=[])=>!o&&!a?p:p.map(m=>Object.assign(Object.assign({},m),(m.type==="file"?o:a)||{}));return{trigger:(p,m)=>{let _=p.lastIndexOf("/"),f=m.lastIndexOf("/");return _!==f?!0:_===-1&&f===-1?!1:p.slice(0,_)!==m.slice(0,f)},getQueryTerm:p=>p.slice(p.lastIndexOf("/")+1),custom:(p,m,_)=>de(this,void 0,void 0,function*(){var f;let{isDangerous:b,currentWorkingDirectory:O,searchTerm:h}=_,k=(f=(0,y.getCurrentInsertedDirectory)(l??O,h,_))!==null&&f!==void 0?f:"/";try{let R=yield m({command:"ls",args:["-1ApL"],cwd:k}),Z=W(R.stdout.split(`
`),[".DS_Store"]),q=[];for(let j of Z)if(j){let L=j.endsWith("/")?"folders":"filepaths";(L==="filepaths"&&u!=="only"||L==="folders"&&u!=="never")&&q.push({type:L==="filepaths"?"file":"folder",name:j,insertValue:j,isDangerous:b,context:{templateType:L}})}return S(g(q))}catch{return[]}})}}y.folders=Object.assign(()=>F({showFolders:"only"}),Object.freeze(F({showFolders:"only"})));y.filepaths=Object.assign(F,Object.freeze(F()))});var J=x(w=>{"use strict";var A=w&&w.__awaiter||function(e,t,n,r){function i(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function l(s){try{c(r.next(s))}catch(d){a(d)}}function u(s){try{c(r.throw(s))}catch(d){a(d)}}function c(s){s.done?o(s.value):i(s.value).then(l,u)}c((r=r.apply(e,t||[])).next())})};Object.defineProperty(w,"__esModule",{value:!0});w.keyValueList=w.keyValue=w.valueList=void 0;var K=new Map;function M(e,t){return e.length===0?t:t.map(n=>n.insertValue?n:Object.assign(Object.assign({},n),{insertValue:n.name+e}))}function z(e,t,n){return A(this,void 0,void 0,function*(){if(typeof e=="function"){let r=yield e(...n);return M(t,r)}if(typeof e[0]=="string"){let r=e.map(i=>({name:i}));return M(t,r)}return M(t,e)})}function D(e,t,n,r){return A(this,void 0,void 0,function*(){if(n||Array.isArray(e)){let i=K.get(e);return i===void 0&&(i=yield z(e,t,r),K.set(e,i)),i}return z(e,t,r)})}function G(e,t){return typeof t=="string"?e&&t==="keys"||!e&&t==="values":t}function C(e,...t){return Math.max(...t.map(n=>e.lastIndexOf(n)))}function E(e,t){let n=new Set(e);return t.filter(r=>{var i;return typeof r.name=="string"?!n.has(r.name):!(!((i=r.name)===null||i===void 0)&&i.some(o=>n.has(o)))})}function pe({delimiter:e=",",values:t=[],cache:n=!1,insertDelimiter:r=!1,allowRepeatedValues:i=!1}){return{trigger:(o,a)=>o.lastIndexOf(e)!==a.lastIndexOf(e),getQueryTerm:o=>o.slice(o.lastIndexOf(e)+e.length),custom:(...o)=>A(this,void 0,void 0,function*(){var a;let l=yield D(t,r?e:"",n,o);if(i)return l;let[u]=o,c=(a=u[u.length-1])===null||a===void 0?void 0:a.split(e);return E(c,l)})}}w.valueList=pe;function he({separator:e="=",keys:t=[],values:n=[],cache:r=!1,insertSeparator:i=!0}){return{trigger:(o,a)=>o.indexOf(e)!==a.indexOf(e),getQueryTerm:o=>o.slice(o.indexOf(e)+1),custom:(...o)=>A(this,void 0,void 0,function*(){let[a]=o,u=!a[a.length-1].includes(e),c=u?t:n,s=G(u,r);return D(c,u&&i?e:"",s,o)})}}w.keyValue=he;function me({separator:e="=",delimiter:t=",",keys:n=[],values:r=[],cache:i=!1,insertSeparator:o=!0,insertDelimiter:a=!1,allowRepeatedKeys:l=!1,allowRepeatedValues:u=!0}){return{trigger:(c,s)=>{let d=C(c,e,t),g=C(s,e,t);return d!==g},getQueryTerm:c=>{let s=C(c,e,t);return c.slice(s+1)},custom:(...c)=>A(this,void 0,void 0,function*(){let[s]=c,d=s[s.length-1],g=C(d,e,t),S=g===-1||d.slice(g,g+e.length)!==e,p=S?n:r,m=G(S,i),f=yield D(p,S?o?e:"":a?t:"",m,c);if(S){if(l)return f;let O=d.split(t).map(h=>h.slice(0,h.indexOf(e)));return E(O,f)}if(u)return f;let b=d.split(t).map(O=>O.slice(O.indexOf(e)+e.length));return E(b,f)})}}w.keyValueList=me});var Q=x(T=>{"use strict";var ge=T&&T.__awaiter||function(e,t,n,r){function i(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function l(s){try{c(r.next(s))}catch(d){a(d)}}function u(s){try{c(r.throw(s))}catch(d){a(d)}}function c(s){s.done?o(s.value):i(s.value).then(l,u)}c((r=r.apply(e,t||[])).next())})};Object.defineProperty(T,"__esModule",{value:!0});T.ai=void 0;var ye=4097,ve=4,be=.8,_e=ye*ve*be;function Oe({name:e,prompt:t,message:n,postProcess:r,temperature:i,splitOn:o}){return{scriptTimeout:15e3,custom:(a,l,u)=>ge(this,void 0,void 0,function*(){var c,s;let d=yield l({command:"fig",args:["settings","--format","json","autocomplete.ai.enabled"]});if(!JSON.parse(d.stdout))return[];let g=typeof t=="function"?yield t({tokens:a,executeCommand:l,generatorContext:u}):t,S=typeof n=="function"?yield n({tokens:a,executeCommand:l,generatorContext:u}):n;if(S===null||S.length===0)return console.warn("No message provided to AI generator"),[];let p=_e-((c=g?.length)!==null&&c!==void 0?c:0),m={model:"gpt-3.5-turbo",source:"autocomplete",name:e,messages:[...g?[{role:"system",content:g}]:[],{role:"user",content:S.slice(0,p)}],temperature:i},_=JSON.stringify(m),f=yield l({command:"fig",args:["_","request","--route","/ai/chat","--method","POST","--body",_]}),b=JSON.parse(f.stdout);return(s=b?.choices.map(h=>{var k;return(k=h?.message)===null||k===void 0?void 0:k.content}).filter(h=>typeof h=="string").flatMap(h=>o?h.split(o).filter(k=>k.trim().length>0):[h]).map(h=>{if(r)return r(h);let k=h.trim().replace(/\n/g," ");return{icon:"\u{1FA84}",name:k,insertValue:`'${k}'`,description:"Generated by Fig AI"}}))!==null&&s!==void 0?s:[]})}}T.ai=Oe});var B=x(v=>{"use strict";var Se=v&&v.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),ke=v&&v.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&Se(t,e,n)};Object.defineProperty(v,"__esModule",{value:!0});v.ai=v.folders=v.filepaths=void 0;var H=$();Object.defineProperty(v,"filepaths",{enumerable:!0,get:function(){return H.filepaths}});Object.defineProperty(v,"folders",{enumerable:!0,get:function(){return H.folders}});ke(J(),v);var we=Q();Object.defineProperty(v,"ai",{enumerable:!0,get:function(){return we.ai}})});var Y=se(B(),1),Pe={script:["bash","-c",`grep -A5 --include=*.ts --exclude-dir=node_modules -r 'addFormula\\|addSyncTable\\|makeFormula\\|makeSyncTable' . | grep -A3 -i formula | grep name: | grep -oE "['\\"]\\w*['\\"]"`],postProcess:e=>e.trim().length===0?[]:e.split(`
`).map(t=>({name:t.replace(/['"]/g,"").trim(),description:`Execute ${t}`}))},P={name:"path/to/pack.ts",description:"The path to the pack.ts file. E.g. src/pack.ts",generators:(0,Y.filepaths)({extensions:["ts"]})},X={name:"urlOrPackId",description:"The URL or ID of the Pack. E.g. https://coda.io/p/123456 or 123456"},Ie={name:"coda",description:"Coda Local development CLI tool. It comes bundled with the Pack SDK and makes it easy to build and manage Packs from the CLI",subcommands:[{name:"init",description:"Initialize an empty project with the recommended settings and dependencies"},{name:"execute",description:"Execute the formula and print the output to the terminal",args:[P,{name:"formula",description:"Formula name to execute",generators:Pe},{name:"params",description:"Arguments to pass to the formula",isVariadic:!0,isOptional:!0}],options:[{name:"--dynamicUrl",description:"To run a sync for a dynamic sync table, use this parameter to specify which URL to sync from",args:{name:"url",description:"The URL to sync from"}}]},{name:"auth",description:"Set up authentication in your development environment so that you can execute Pack formulas with authentication applied to them",args:P},{name:"register",description:"Create a new API token or register an existing one to be used with future commands",args:{name:"apiToken",description:"The API token to register",isOptional:!0}},{name:"create",description:"Create a new Pack on Coda\u2019s servers and get assigned a Pack ID. Run this command just once for each Pack you create",args:P,options:[{name:"--name",description:"Specify a name for the Pack. You can always set or update the name in the Pack management UI later",args:{name:"name",description:"The desired Pack name"}},{name:"--description",description:"Specify a description for the Pack. You can always set or update the description in the Pack management UI later",args:{name:"description",description:"The Pack description"}}]},{name:"upload",description:"Use this command to upload a new version of your Pack based on your latest code",args:P},{name:"release",description:"Release a Pack version and make it live for your users",args:[P,{name:"version",description:"The release version. Must always be greater than that of any of your previous releases",isOptional:!0}]},{name:"clone",description:"Migrate the development of a Pack from the Pack Studio to a new local CLI Pack development",args:X},{name:"link",description:"Link the development of a Pack from the Pack studio to an existing local CLI Pack development",args:[P,X]},{name:"whoami",description:"Looks up information about the API token that is registered in this environment",args:{name:"apiToken",description:"The API token to look up",isOptional:!0}},{name:"build",description:"Generate a bundle for your Pack",args:P},{name:"validate",description:"Validate your Pack definition",args:P},{name:"setOption",description:"Set a persistent build option for the Pack. This will be used for all builds of the Pack",args:[P,{name:"option",description:"Currently the only supported option is 'timerStrategy'",suggestions:["timerStrategy"]},{name:"value",description:"Value to set for the option",suggestions:["none","error","fake"]}]}],options:[{name:"--version",description:"Show version number",priority:1,isPersistent:!0},{name:"--help",description:"Show help",priority:2,isPersistent:!0}]},Ce=Ie;export{Ce as default};
