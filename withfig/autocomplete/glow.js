var Z=Object.create;var W=Object.defineProperty;var Y=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty;var j=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ie=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ee(t))!ne.call(e,r)&&r!==n&&W(e,r,{get:()=>t[r],enumerable:!(i=Y(t,r))||i.enumerable});return e};var re=(e,t,n)=>(n=e!=null?Z(te(e)):{},ie(t||!e||!e.__esModule?W(n,"default",{value:e,enumerable:!0}):n,e));var R=j(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.shellExpand=I.ensureTrailingSlash=void 0;var se=e=>e.endsWith("/")?e:`${e}/`;I.ensureTrailingSlash=se;var oe=(e,t)=>e.startsWith("~")&&(e.length===1||e.charAt(1)==="/")?e.replace("~",t):e,le=(e,t)=>e.replace(/\$([A-Za-z0-9_]+)/g,r=>{var s;let l=r.slice(1);return(s=t[l])!==null&&s!==void 0?s:r}).replace(/\$\{([A-Za-z0-9_]+)(?::-([^}]+))?\}/g,(r,s,l)=>{var u,c;return(c=(u=t[s])!==null&&u!==void 0?u:l)!==null&&c!==void 0?c:r}),ae=(e,t)=>{var n;let{environmentVariables:i}=t;return le(oe(e,(n=i?.HOME)!==null&&n!==void 0?n:"~"),i)};I.shellExpand=ae});var $=j(m=>{"use strict";var ue=m&&m.__awaiter||function(e,t,n,i){function r(s){return s instanceof n?s:new n(function(l){l(s)})}return new(n||(n=Promise))(function(s,l){function u(o){try{a(i.next(o))}catch(f){l(f)}}function c(o){try{a(i.throw(o))}catch(f){l(f)}}function a(o){o.done?s(o.value):r(o.value).then(u,c)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(m,"__esModule",{value:!0});m.filepaths=m.folders=m.getCurrentInsertedDirectory=m.sortFilesAlphabetically=void 0;var C=R();function k(e,t=[]){let n=t.map(r=>r.toLowerCase()),i=e.filter(r=>!n.includes(r.toLowerCase()));return[...i.filter(r=>!r.startsWith(".")).sort((r,s)=>r.localeCompare(s)),...i.filter(r=>r.startsWith(".")).sort((r,s)=>r.localeCompare(s)),"../"]}m.sortFilesAlphabetically=k;var ce=(e,t,n)=>{if(e===null)return"/";let i=(0,C.shellExpand)(t,n),r=i.slice(0,i.lastIndexOf("/")+1);return r===""?(0,C.ensureTrailingSlash)(e):r.startsWith("/")?r:`${(0,C.ensureTrailingSlash)(e)}${r}`};m.getCurrentInsertedDirectory=ce;function M(e={}){let{extensions:t=[],equals:n=[],matches:i,filterFolders:r=!1,editFileSuggestions:s,editFolderSuggestions:l,rootDirectory:u,showFolders:c="always"}=e,a=new Set(t),o=new Set(n),f=()=>t.length>0||n.length>0||i,y=(p=[])=>f()?p.filter(({name:g="",type:O})=>{if(!r&&O==="folder"||o.has(g)||i&&g.match(i))return!0;let[,...d]=g.split(".");if(d.length>=1){let _=d.length-1,w=d[_];do{if(a.has(w))return!0;_-=1,w=[d[_],w].join(".")}while(_>=0)}return!1}):p,b=(p=[])=>!s&&!l?p:p.map(g=>Object.assign(Object.assign({},g),(g.type==="file"?s:l)||{}));return{trigger:(p,g)=>{let O=p.lastIndexOf("/"),d=g.lastIndexOf("/");return O!==d?!0:O===-1&&d===-1?!1:p.slice(0,O)!==g.slice(0,d)},getQueryTerm:p=>p.slice(p.lastIndexOf("/")+1),custom:(p,g,O)=>ue(this,void 0,void 0,function*(){var d;let{isDangerous:_,currentWorkingDirectory:w,searchTerm:h}=O,S=(d=(0,m.getCurrentInsertedDirectory)(u??w,h,O))!==null&&d!==void 0?d:"/";try{let z=yield g({command:"ls",args:["-1ApL"],cwd:S}),X=k(z.stdout.split(`
`),[".DS_Store"]),N=[];for(let A of X)if(A){let F=A.endsWith("/")?"folders":"filepaths";(F==="filepaths"&&c!=="only"||F==="folders"&&c!=="never")&&N.push({type:F==="filepaths"?"file":"folder",name:A,insertValue:A,isDangerous:_,context:{templateType:F}})}return b(y(N))}catch{return[]}})}}m.folders=Object.assign(()=>M({showFolders:"only"}),Object.freeze(M({showFolders:"only"})));m.filepaths=Object.assign(M,Object.freeze(M()))});var Q=j(x=>{"use strict";var V=x&&x.__awaiter||function(e,t,n,i){function r(s){return s instanceof n?s:new n(function(l){l(s)})}return new(n||(n=Promise))(function(s,l){function u(o){try{a(i.next(o))}catch(f){l(f)}}function c(o){try{a(i.throw(o))}catch(f){l(f)}}function a(o){o.done?s(o.value):r(o.value).then(u,c)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(x,"__esModule",{value:!0});x.keyValueList=x.keyValue=x.valueList=void 0;var H=new Map;function D(e,t){return e.length===0?t:t.map(n=>n.insertValue?n:Object.assign(Object.assign({},n),{insertValue:n.name+e}))}function J(e,t,n){return V(this,void 0,void 0,function*(){if(typeof e=="function"){let i=yield e(...n);return D(t,i)}if(typeof e[0]=="string"){let i=e.map(r=>({name:r}));return D(t,i)}return D(t,e)})}function P(e,t,n,i){return V(this,void 0,void 0,function*(){if(n||Array.isArray(e)){let r=H.get(e);return r===void 0&&(r=yield J(e,t,i),H.set(e,r)),r}return J(e,t,i)})}function K(e,t){return typeof t=="string"?e&&t==="keys"||!e&&t==="values":t}function L(e,...t){return Math.max(...t.map(n=>e.lastIndexOf(n)))}function E(e,t){let n=new Set(e);return t.filter(i=>{var r;return typeof i.name=="string"?!n.has(i.name):!(!((r=i.name)===null||r===void 0)&&r.some(s=>n.has(s)))})}function fe({delimiter:e=",",values:t=[],cache:n=!1,insertDelimiter:i=!1,allowRepeatedValues:r=!1}){return{trigger:(s,l)=>s.lastIndexOf(e)!==l.lastIndexOf(e),getQueryTerm:s=>s.slice(s.lastIndexOf(e)+e.length),custom:(...s)=>V(this,void 0,void 0,function*(){var l;let u=yield P(t,i?e:"",n,s);if(r)return u;let[c]=s,a=(l=c[c.length-1])===null||l===void 0?void 0:l.split(e);return E(a,u)})}}x.valueList=fe;function de({separator:e="=",keys:t=[],values:n=[],cache:i=!1,insertSeparator:r=!0}){return{trigger:(s,l)=>s.indexOf(e)!==l.indexOf(e),getQueryTerm:s=>s.slice(s.indexOf(e)+1),custom:(...s)=>V(this,void 0,void 0,function*(){let[l]=s,c=!l[l.length-1].includes(e),a=c?t:n,o=K(c,i);return P(a,c&&r?e:"",o,s)})}}x.keyValue=de;function pe({separator:e="=",delimiter:t=",",keys:n=[],values:i=[],cache:r=!1,insertSeparator:s=!0,insertDelimiter:l=!1,allowRepeatedKeys:u=!1,allowRepeatedValues:c=!0}){return{trigger:(a,o)=>{let f=L(a,e,t),y=L(o,e,t);return f!==y},getQueryTerm:a=>{let o=L(a,e,t);return a.slice(o+1)},custom:(...a)=>V(this,void 0,void 0,function*(){let[o]=a,f=o[o.length-1],y=L(f,e,t),b=y===-1||f.slice(y,y+e.length)!==e,p=b?n:i,g=K(b,r),d=yield P(p,b?s?e:"":l?t:"",g,a);if(b){if(u)return d;let w=f.split(t).map(h=>h.slice(0,h.indexOf(e)));return E(w,d)}if(c)return d;let _=f.split(t).map(w=>w.slice(w.indexOf(e)+e.length));return E(_,d)})}}x.keyValueList=pe});var U=j(T=>{"use strict";var he=T&&T.__awaiter||function(e,t,n,i){function r(s){return s instanceof n?s:new n(function(l){l(s)})}return new(n||(n=Promise))(function(s,l){function u(o){try{a(i.next(o))}catch(f){l(f)}}function c(o){try{a(i.throw(o))}catch(f){l(f)}}function a(o){o.done?s(o.value):r(o.value).then(u,c)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(T,"__esModule",{value:!0});T.ai=void 0;var ge=4097,ye=4,me=.8,ve=ge*ye*me;function _e({name:e,prompt:t,message:n,postProcess:i,temperature:r,splitOn:s}){return{scriptTimeout:15e3,custom:(l,u,c)=>he(this,void 0,void 0,function*(){var a,o;let f=yield u({command:"fig",args:["settings","--format","json","autocomplete.ai.enabled"]});if(!JSON.parse(f.stdout))return[];let y=typeof t=="function"?yield t({tokens:l,executeCommand:u,generatorContext:c}):t,b=typeof n=="function"?yield n({tokens:l,executeCommand:u,generatorContext:c}):n;if(b===null||b.length===0)return console.warn("No message provided to AI generator"),[];let p=ve-((a=y?.length)!==null&&a!==void 0?a:0),g={model:"gpt-3.5-turbo",source:"autocomplete",name:e,messages:[...y?[{role:"system",content:y}]:[],{role:"user",content:b.slice(0,p)}],temperature:r},O=JSON.stringify(g),d=yield u({command:"fig",args:["_","request","--route","/ai/chat","--method","POST","--body",O]}),_=JSON.parse(d.stdout);return(o=_?.choices.map(h=>{var S;return(S=h?.message)===null||S===void 0?void 0:S.content}).filter(h=>typeof h=="string").flatMap(h=>s?h.split(s).filter(S=>S.trim().length>0):[h]).map(h=>{if(i)return i(h);let S=h.trim().replace(/\n/g," ");return{icon:"\u{1FA84}",name:S,insertValue:`'${S}'`,description:"Generated by Fig AI"}}))!==null&&o!==void 0?o:[]})}}T.ai=_e});var G=j(v=>{"use strict";var Oe=v&&v.__createBinding||(Object.create?function(e,t,n,i){i===void 0&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){i===void 0&&(i=n),e[i]=t[n]}),we=v&&v.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&Oe(t,e,n)};Object.defineProperty(v,"__esModule",{value:!0});v.ai=v.folders=v.filepaths=void 0;var B=$();Object.defineProperty(v,"filepaths",{enumerable:!0,get:function(){return B.filepaths}});Object.defineProperty(v,"folders",{enumerable:!0,get:function(){return B.folders}});we(Q(),v);var be=U();Object.defineProperty(v,"ai",{enumerable:!0,get:function(){return be.ai}})});var q=re(G(),1),Se={name:"glow",description:"Render markdown on the CLI, with pizzazz!",args:{name:"source|dir",isOptional:!0,isVariadic:!0,generators:(0,q.filepaths)({extensions:["md"],editFileSuggestions:{priority:52},editFolderSuggestions:{priority:51}})},options:[{name:["-a","--all"],description:"Show system files and directories (TUI-mode only)"},{name:"--config",args:{name:"path",template:"filepaths"},description:"Config file",isPersistent:!0},{name:["-h","--help"],description:"Help for glow",isPersistent:!0},{name:["-l","--local"],description:"Show local files only; no network (TUI-mode only)"},{name:["-p","--pager"],description:"Display with pager"},{name:["-s","--style"],description:"Style name or JSON path (default 'auto')",args:{name:"name",suggestions:["auto","light","dark","notty"],template:"filepaths"}},{name:["-v","--version"],description:"Version for glow"},{name:["-w","--width"],args:{name:"column"},description:"Word-wrap at width"}],subcommands:[{name:"config",description:"Edit the glow config file"},{name:"help",description:"Help about any command",args:{name:"command",template:"help",isOptional:!0}},{name:"stash",description:"Manage your stash of markdown files",args:{name:"path",isOptional:!0,generators:(0,q.filepaths)({extensions:["md"]})},options:[{name:["-m","--memo"],description:"Memo/note for stashing",args:{name:"note"},insertValue:"--memo '{cursor}'"}]}]},Fe=Se;export{Fe as default};
