var Z=Object.create;var q=Object.defineProperty;var Y=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty;var A=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ie=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ee(t))!ne.call(e,r)&&r!==n&&q(e,r,{get:()=>t[r],enumerable:!(i=Y(t,r))||i.enumerable});return e};var re=(e,t,n)=>(n=e!=null?Z(te(e)):{},ie(t||!e||!e.__esModule?q(n,"default",{value:e,enumerable:!0}):n,e));var W=A(x=>{"use strict";Object.defineProperty(x,"__esModule",{value:!0});x.shellExpand=x.ensureTrailingSlash=void 0;var se=e=>e.endsWith("/")?e:`${e}/`;x.ensureTrailingSlash=se;var ae=(e,t)=>e.startsWith("~")&&(e.length===1||e.charAt(1)==="/")?e.replace("~",t):e,oe=(e,t)=>e.replace(/\$([A-Za-z0-9_]+)/g,r=>{var s;let o=r.slice(1);return(s=t[o])!==null&&s!==void 0?s:r}).replace(/\$\{([A-Za-z0-9_]+)(?::-([^}]+))?\}/g,(r,s,o)=>{var u,c;return(c=(u=t[s])!==null&&u!==void 0?u:o)!==null&&c!==void 0?c:r}),le=(e,t)=>{var n;let{environmentVariables:i}=t;return oe(ae(e,(n=i?.HOME)!==null&&n!==void 0?n:"~"),i)};x.shellExpand=le});var $=A(v=>{"use strict";var ue=v&&v.__awaiter||function(e,t,n,i){function r(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function u(a){try{l(i.next(a))}catch(d){o(d)}}function c(a){try{l(i.throw(a))}catch(d){o(d)}}function l(a){a.done?s(a.value):r(a.value).then(u,c)}l((i=i.apply(e,t||[])).next())})};Object.defineProperty(v,"__esModule",{value:!0});v.filepaths=v.folders=v.getCurrentInsertedDirectory=v.sortFilesAlphabetically=void 0;var V=W();function k(e,t=[]){let n=t.map(r=>r.toLowerCase()),i=e.filter(r=>!n.includes(r.toLowerCase()));return[...i.filter(r=>!r.startsWith(".")).sort((r,s)=>r.localeCompare(s)),...i.filter(r=>r.startsWith(".")).sort((r,s)=>r.localeCompare(s)),"../"]}v.sortFilesAlphabetically=k;var ce=(e,t,n)=>{if(e===null)return"/";let i=(0,V.shellExpand)(t,n),r=i.slice(0,i.lastIndexOf("/")+1);return r===""?(0,V.ensureTrailingSlash)(e):r.startsWith("/")?r:`${(0,V.ensureTrailingSlash)(e)}${r}`};v.getCurrentInsertedDirectory=ce;function R(e={}){let{extensions:t=[],equals:n=[],matches:i,filterFolders:r=!1,editFileSuggestions:s,editFolderSuggestions:o,rootDirectory:u,showFolders:c="always"}=e,l=new Set(t),a=new Set(n),d=()=>t.length>0||n.length>0||i,m=(p=[])=>d()?p.filter(({name:g="",type:O})=>{if(!r&&O==="folder"||a.has(g)||i&&g.match(i))return!0;let[,...f]=g.split(".");if(f.length>=1){let b=f.length-1,_=f[b];do{if(l.has(_))return!0;b-=1,_=[f[b],_].join(".")}while(b>=0)}return!1}):p,S=(p=[])=>!s&&!o?p:p.map(g=>Object.assign(Object.assign({},g),(g.type==="file"?s:o)||{}));return{trigger:(p,g)=>{let O=p.lastIndexOf("/"),f=g.lastIndexOf("/");return O!==f?!0:O===-1&&f===-1?!1:p.slice(0,O)!==g.slice(0,f)},getQueryTerm:p=>p.slice(p.lastIndexOf("/")+1),custom:(p,g,O)=>ue(this,void 0,void 0,function*(){var f;let{isDangerous:b,currentWorkingDirectory:_,searchTerm:h}=O,I=(f=(0,v.getCurrentInsertedDirectory)(u??_,h,O))!==null&&f!==void 0?f:"/";try{let C=yield g({command:"ls",args:["-1ApL"],cwd:I}),X=k(C.stdout.split(`
`),[".DS_Store"]),N=[];for(let T of X)if(T){let F=T.endsWith("/")?"folders":"filepaths";(F==="filepaths"&&c!=="only"||F==="folders"&&c!=="never")&&N.push({type:F==="filepaths"?"file":"folder",name:T,insertValue:T,isDangerous:b,context:{templateType:F}})}return S(m(N))}catch{return[]}})}}v.folders=Object.assign(()=>R({showFolders:"only"}),Object.freeze(R({showFolders:"only"})));v.filepaths=Object.assign(R,Object.freeze(R()))});var z=A(E=>{"use strict";var L=E&&E.__awaiter||function(e,t,n,i){function r(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function u(a){try{l(i.next(a))}catch(d){o(d)}}function c(a){try{l(i.throw(a))}catch(d){o(d)}}function l(a){a.done?s(a.value):r(a.value).then(u,c)}l((i=i.apply(e,t||[])).next())})};Object.defineProperty(E,"__esModule",{value:!0});E.keyValueList=E.keyValue=E.valueList=void 0;var H=new Map;function j(e,t){return e.length===0?t:t.map(n=>n.insertValue?n:Object.assign(Object.assign({},n),{insertValue:n.name+e}))}function K(e,t,n){return L(this,void 0,void 0,function*(){if(typeof e=="function"){let i=yield e(...n);return j(t,i)}if(typeof e[0]=="string"){let i=e.map(r=>({name:r}));return j(t,i)}return j(t,e)})}function D(e,t,n,i){return L(this,void 0,void 0,function*(){if(n||Array.isArray(e)){let r=H.get(e);return r===void 0&&(r=yield K(e,t,i),H.set(e,r)),r}return K(e,t,i)})}function U(e,t){return typeof t=="string"?e&&t==="keys"||!e&&t==="values":t}function M(e,...t){return Math.max(...t.map(n=>e.lastIndexOf(n)))}function P(e,t){let n=new Set(e);return t.filter(i=>{var r;return typeof i.name=="string"?!n.has(i.name):!(!((r=i.name)===null||r===void 0)&&r.some(s=>n.has(s)))})}function de({delimiter:e=",",values:t=[],cache:n=!1,insertDelimiter:i=!1,allowRepeatedValues:r=!1}){return{trigger:(s,o)=>s.lastIndexOf(e)!==o.lastIndexOf(e),getQueryTerm:s=>s.slice(s.lastIndexOf(e)+e.length),custom:(...s)=>L(this,void 0,void 0,function*(){var o;let u=yield D(t,i?e:"",n,s);if(r)return u;let[c]=s,l=(o=c[c.length-1])===null||o===void 0?void 0:o.split(e);return P(l,u)})}}E.valueList=de;function fe({separator:e="=",keys:t=[],values:n=[],cache:i=!1,insertSeparator:r=!0}){return{trigger:(s,o)=>s.indexOf(e)!==o.indexOf(e),getQueryTerm:s=>s.slice(s.indexOf(e)+1),custom:(...s)=>L(this,void 0,void 0,function*(){let[o]=s,c=!o[o.length-1].includes(e),l=c?t:n,a=U(c,i);return D(l,c&&r?e:"",a,s)})}}E.keyValue=fe;function pe({separator:e="=",delimiter:t=",",keys:n=[],values:i=[],cache:r=!1,insertSeparator:s=!0,insertDelimiter:o=!1,allowRepeatedKeys:u=!1,allowRepeatedValues:c=!0}){return{trigger:(l,a)=>{let d=M(l,e,t),m=M(a,e,t);return d!==m},getQueryTerm:l=>{let a=M(l,e,t);return l.slice(a+1)},custom:(...l)=>L(this,void 0,void 0,function*(){let[a]=l,d=a[a.length-1],m=M(d,e,t),S=m===-1||d.slice(m,m+e.length)!==e,p=S?n:i,g=U(S,r),f=yield D(p,S?s?e:"":o?t:"",g,l);if(S){if(u)return f;let _=d.split(t).map(h=>h.slice(0,h.indexOf(e)));return P(_,f)}if(c)return f;let b=d.split(t).map(_=>_.slice(_.indexOf(e)+e.length));return P(b,f)})}}E.keyValueList=pe});var G=A(w=>{"use strict";var he=w&&w.__awaiter||function(e,t,n,i){function r(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function u(a){try{l(i.next(a))}catch(d){o(d)}}function c(a){try{l(i.throw(a))}catch(d){o(d)}}function l(a){a.done?s(a.value):r(a.value).then(u,c)}l((i=i.apply(e,t||[])).next())})};Object.defineProperty(w,"__esModule",{value:!0});w.ai=void 0;var ge=4097,me=4,ve=.8,ye=ge*me*ve;function be({name:e,prompt:t,message:n,postProcess:i,temperature:r,splitOn:s}){return{scriptTimeout:15e3,custom:(o,u,c)=>he(this,void 0,void 0,function*(){var l,a;let d=yield u({command:"fig",args:["settings","--format","json","autocomplete.ai.enabled"]});if(!JSON.parse(d.stdout))return[];let m=typeof t=="function"?yield t({tokens:o,executeCommand:u,generatorContext:c}):t,S=typeof n=="function"?yield n({tokens:o,executeCommand:u,generatorContext:c}):n;if(S===null||S.length===0)return console.warn("No message provided to AI generator"),[];let p=ye-((l=m?.length)!==null&&l!==void 0?l:0),g={model:"gpt-3.5-turbo",source:"autocomplete",name:e,messages:[...m?[{role:"system",content:m}]:[],{role:"user",content:S.slice(0,p)}],temperature:r},O=JSON.stringify(g),f=yield u({command:"fig",args:["_","request","--route","/ai/chat","--method","POST","--body",O]}),b=JSON.parse(f.stdout);return(a=b?.choices.map(h=>{var I;return(I=h?.message)===null||I===void 0?void 0:I.content}).filter(h=>typeof h=="string").flatMap(h=>s?h.split(s).filter(I=>I.trim().length>0):[h]).map(h=>{if(i)return i(h);let I=h.trim().replace(/\n/g," ");return{icon:"\u{1FA84}",name:I,insertValue:`'${I}'`,description:"Generated by Fig AI"}}))!==null&&a!==void 0?a:[]})}}w.ai=be});var J=A(y=>{"use strict";var Oe=y&&y.__createBinding||(Object.create?function(e,t,n,i){i===void 0&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){i===void 0&&(i=n),e[i]=t[n]}),_e=y&&y.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&Oe(t,e,n)};Object.defineProperty(y,"__esModule",{value:!0});y.ai=y.folders=y.filepaths=void 0;var B=$();Object.defineProperty(y,"filepaths",{enumerable:!0,get:function(){return B.filepaths}});Object.defineProperty(y,"folders",{enumerable:!0,get:function(){return B.folders}});_e(z(),y);var Se=G();Object.defineProperty(y,"ai",{enumerable:!0,get:function(){return Se.ai}})});var Q=re(J(),1),Ie={name:"elixir",description:"Elixir Language",args:[{name:"file",description:".exs file",generators:(0,Q.filepaths)({extensions:["exs"],editFileSuggestions:{priority:76}})},{name:"data",isOptional:!0}],options:[{name:["-e","--eval"],description:"Evaluates the given command",isRepeatable:!0,args:{name:"EXPRESSION"}},{name:["-h","--help"],description:"Prints this message and exits"},{name:"-r",description:"Requires the given files/patterns",args:{name:"FILE",template:"filepaths"}},{name:"-S",description:"Finds and executes the given script in $PATH",args:{name:"SCRIPT"}},{name:"-pr",description:"Requires the given files/patterns in parallel",isRepeatable:!0,args:{name:"FILE",template:"filepaths"}},{name:"-pa",description:"Prepends the given path to Erlang code path",isRepeatable:!0,args:{name:"PATH",template:"filepaths"}},{name:"-pz",description:"Appends the given path to Erlang code path",isRepeatable:!0,args:{name:"PATH",template:"filepaths"}},{name:["-v","--version"],description:"Prints Elixir version and exits"},{name:"--app",description:"Starts the given app and its dependencies",isRepeatable:!0,args:{name:"APP"}},{name:"--erl",description:"Switches to be passed down to Erlang",isRepeatable:!0,args:{name:"SWITCHES"}},{name:"--logger-otp-reports",description:"Enables or disables OTP reporting",args:{name:"BOOL"}},{name:"--logger-sasl-reports",description:"Enables or disables SASL reporting",args:{name:"BOOL"}},{name:"--no-halt",description:"Does not halt the Erlang VM after execution"},{name:"--werl",description:"Uses Erlang's Windows shell GUI (Windows only)"},{name:"--cookie",description:"Sets a cookie for this distributed node",args:{name:"COOKIE"}},{name:"--hidden",description:"Makes a hidden node"},{name:"--name",description:"Makes and assigns a name to the distributed node",args:{name:"NAME"}},{name:"--rpc-eval",description:"Evaluates the given command on the given remote node",isRepeatable:!0,args:[{name:"NODE"},{name:"COMMAND"}]},{name:"--sname",description:"Makes and assigns a short name to the distributed node",args:{name:"NAME"}},{name:"--boot",description:"Uses the given FILE.boot to start the system",args:{name:"FILE",template:"filepaths"}},{name:"--boot-var",description:"Makes $VAR available as VALUE to FILE.boot",isRepeatable:!0,args:[{name:"VAR"},{name:"VALUE"}]},{name:"--erl-config",description:"Loads configuration in FILE.config written in Erlang",isRepeatable:!0,args:{name:"FILE"}},{name:"--pipe-to",description:"Starts the Erlang VM as a named PIPEDIR and LOGDIR",args:[{name:"PIPEDIR"},{name:"LOGDIR"}]},{name:"--vm-args",description:"Passes the contents in file as arguments to the VM",args:{name:"FILE",template:"filepaths"}}]},Fe=Ie;export{Fe as default};
