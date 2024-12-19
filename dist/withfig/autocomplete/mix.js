var ee=Object.create;var M=Object.defineProperty;var te=Object.getOwnPropertyDescriptor;var ne=Object.getOwnPropertyNames;var ie=Object.getPrototypeOf,re=Object.prototype.hasOwnProperty;var K=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var se=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ne(t))!re.call(e,r)&&r!==n&&M(e,r,{get:()=>t[r],enumerable:!(i=te(t,r))||i.enumerable});return e};var Ae=(e,t,n)=>(n=e!=null?ee(ie(e)):{},se(t||!e||!e.__esModule?M(n,"default",{value:e,enumerable:!0}):n,e));var z=K(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.shellExpand=T.ensureTrailingSlash=void 0;var oe=e=>e.endsWith("/")?e:`${e}/`;T.ensureTrailingSlash=oe;var ae=(e,t)=>e.startsWith("~")&&(e.length===1||e.charAt(1)==="/")?e.replace("~",t):e,le=(e,t)=>e.replace(/\$([A-Za-z0-9_]+)/g,r=>{var s;let o=r.slice(1);return(s=t[o])!==null&&s!==void 0?s:r}).replace(/\$\{([A-Za-z0-9_]+)(?::-([^}]+))?\}/g,(r,s,o)=>{var l,c;return(c=(l=t[s])!==null&&l!==void 0?l:o)!==null&&c!==void 0?c:r}),ce=(e,t)=>{var n;let{environmentVariables:i}=t;return le(ae(e,(n=i?.HOME)!==null&&n!==void 0?n:"~"),i)};T.shellExpand=ce});var F=K(v=>{"use strict";var ue=v&&v.__awaiter||function(e,t,n,i){function r(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(A){try{a(i.next(A))}catch(u){o(u)}}function c(A){try{a(i.throw(A))}catch(u){o(u)}}function a(A){A.done?s(A.value):r(A.value).then(l,c)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(v,"__esModule",{value:!0});v.filepaths=v.folders=v.getCurrentInsertedDirectory=v.sortFilesAlphabetically=void 0;var N=z();function _(e,t=[]){let n=t.map(r=>r.toLowerCase()),i=e.filter(r=>!n.includes(r.toLowerCase()));return[...i.filter(r=>!r.startsWith(".")).sort((r,s)=>r.localeCompare(s)),...i.filter(r=>r.startsWith(".")).sort((r,s)=>r.localeCompare(s)),"../"]}v.sortFilesAlphabetically=_;var de=(e,t,n)=>{if(e===null)return"/";let i=(0,N.shellExpand)(t,n),r=i.slice(0,i.lastIndexOf("/")+1);return r===""?(0,N.ensureTrailingSlash)(e):r.startsWith("/")?r:`${(0,N.ensureTrailingSlash)(e)}${r}`};v.getCurrentInsertedDirectory=de;function I(e={}){let{extensions:t=[],equals:n=[],matches:i,filterFolders:r=!1,editFileSuggestions:s,editFolderSuggestions:o,rootDirectory:l,showFolders:c="always"}=e,a=new Set(t),A=new Set(n),u=()=>t.length>0||n.length>0||i,h=(f=[])=>u()?f.filter(({name:m="",type:x})=>{if(!r&&x==="folder"||A.has(m)||i&&m.match(i))return!0;let[,...d]=m.split(".");if(d.length>=1){let y=d.length-1,S=d[y];do{if(a.has(S))return!0;y-=1,S=[d[y],S].join(".")}while(y>=0)}return!1}):f,V=(f=[])=>!s&&!o?f:f.map(m=>Object.assign(Object.assign({},m),(m.type==="file"?s:o)||{}));return{trigger:(f,m)=>{let x=f.lastIndexOf("/"),d=m.lastIndexOf("/");return x!==d?!0:x===-1&&d===-1?!1:f.slice(0,x)!==m.slice(0,d)},getQueryTerm:f=>f.slice(f.lastIndexOf("/")+1),custom:(f,m,x)=>ue(this,void 0,void 0,function*(){var d;let{isDangerous:y,currentWorkingDirectory:S,searchTerm:p}=x,O=(d=(0,v.getCurrentInsertedDirectory)(l??S,p,x))!==null&&d!==void 0?d:"/";try{let D=yield m({command:"ls",args:["-1ApL"],cwd:O}),$=_(D.stdout.split(`
`),[".DS_Store"]),R=[];for(let L of $)if(L){let w=L.endsWith("/")?"folders":"filepaths";(w==="filepaths"&&c!=="only"||w==="folders"&&c!=="never")&&R.push({type:w==="filepaths"?"file":"folder",name:L,insertValue:L,isDangerous:y,context:{templateType:w}})}return V(h(R))}catch{return[]}})}}v.folders=Object.assign(()=>I({showFolders:"only"}),Object.freeze(I({showFolders:"only"})));v.filepaths=Object.assign(I,Object.freeze(I()))});var J=K(b=>{"use strict";var k=b&&b.__awaiter||function(e,t,n,i){function r(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(A){try{a(i.next(A))}catch(u){o(u)}}function c(A){try{a(i.throw(A))}catch(u){o(u)}}function a(A){A.done?s(A.value):r(A.value).then(l,c)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(b,"__esModule",{value:!0});b.keyValueList=b.keyValue=b.valueList=void 0;var G=new Map;function U(e,t){return e.length===0?t:t.map(n=>n.insertValue?n:Object.assign(Object.assign({},n),{insertValue:n.name+e}))}function X(e,t,n){return k(this,void 0,void 0,function*(){if(typeof e=="function"){let i=yield e(...n);return U(t,i)}if(typeof e[0]=="string"){let i=e.map(r=>({name:r}));return U(t,i)}return U(t,e)})}function P(e,t,n,i){return k(this,void 0,void 0,function*(){if(n||Array.isArray(e)){let r=G.get(e);return r===void 0&&(r=yield X(e,t,i),G.set(e,r)),r}return X(e,t,i)})}function H(e,t){return typeof t=="string"?e&&t==="keys"||!e&&t==="values":t}function E(e,...t){return Math.max(...t.map(n=>e.lastIndexOf(n)))}function C(e,t){let n=new Set(e);return t.filter(i=>{var r;return typeof i.name=="string"?!n.has(i.name):!(!((r=i.name)===null||r===void 0)&&r.some(s=>n.has(s)))})}function fe({delimiter:e=",",values:t=[],cache:n=!1,insertDelimiter:i=!1,allowRepeatedValues:r=!1}){return{trigger:(s,o)=>s.lastIndexOf(e)!==o.lastIndexOf(e),getQueryTerm:s=>s.slice(s.lastIndexOf(e)+e.length),custom:(...s)=>k(this,void 0,void 0,function*(){var o;let l=yield P(t,i?e:"",n,s);if(r)return l;let[c]=s,a=(o=c[c.length-1])===null||o===void 0?void 0:o.split(e);return C(a,l)})}}b.valueList=fe;function pe({separator:e="=",keys:t=[],values:n=[],cache:i=!1,insertSeparator:r=!0}){return{trigger:(s,o)=>s.indexOf(e)!==o.indexOf(e),getQueryTerm:s=>s.slice(s.indexOf(e)+1),custom:(...s)=>k(this,void 0,void 0,function*(){let[o]=s,c=!o[o.length-1].includes(e),a=c?t:n,A=H(c,i);return P(a,c&&r?e:"",A,s)})}}b.keyValue=pe;function me({separator:e="=",delimiter:t=",",keys:n=[],values:i=[],cache:r=!1,insertSeparator:s=!0,insertDelimiter:o=!1,allowRepeatedKeys:l=!1,allowRepeatedValues:c=!0}){return{trigger:(a,A)=>{let u=E(a,e,t),h=E(A,e,t);return u!==h},getQueryTerm:a=>{let A=E(a,e,t);return a.slice(A+1)},custom:(...a)=>k(this,void 0,void 0,function*(){let[A]=a,u=A[A.length-1],h=E(u,e,t),V=h===-1||u.slice(h,h+e.length)!==e,f=V?n:i,m=H(V,r),d=yield P(f,V?s?e:"":o?t:"",m,a);if(V){if(l)return d;let S=u.split(t).map(p=>p.slice(0,p.indexOf(e)));return C(S,d)}if(c)return d;let y=u.split(t).map(S=>S.slice(S.indexOf(e)+e.length));return C(y,d)})}}b.keyValueList=me});var Z=K(j=>{"use strict";var he=j&&j.__awaiter||function(e,t,n,i){function r(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(A){try{a(i.next(A))}catch(u){o(u)}}function c(A){try{a(i.throw(A))}catch(u){o(u)}}function a(A){A.done?s(A.value):r(A.value).then(l,c)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(j,"__esModule",{value:!0});j.ai=void 0;var ve=4097,ge=4,ye=.8,xe=ve*ge*ye;function Se({name:e,prompt:t,message:n,postProcess:i,temperature:r,splitOn:s}){return{scriptTimeout:15e3,custom:(o,l,c)=>he(this,void 0,void 0,function*(){var a,A;let u=yield l({command:"fig",args:["settings","--format","json","autocomplete.ai.enabled"]});if(!JSON.parse(u.stdout))return[];let h=typeof t=="function"?yield t({tokens:o,executeCommand:l,generatorContext:c}):t,V=typeof n=="function"?yield n({tokens:o,executeCommand:l,generatorContext:c}):n;if(V===null||V.length===0)return console.warn("No message provided to AI generator"),[];let f=xe-((a=h?.length)!==null&&a!==void 0?a:0),m={model:"gpt-3.5-turbo",source:"autocomplete",name:e,messages:[...h?[{role:"system",content:h}]:[],{role:"user",content:V.slice(0,f)}],temperature:r},x=JSON.stringify(m),d=yield l({command:"fig",args:["_","request","--route","/ai/chat","--method","POST","--body",x]}),y=JSON.parse(d.stdout);return(A=y?.choices.map(p=>{var O;return(O=p?.message)===null||O===void 0?void 0:O.content}).filter(p=>typeof p=="string").flatMap(p=>s?p.split(s).filter(O=>O.trim().length>0):[p]).map(p=>{if(i)return i(p);let O=p.trim().replace(/\n/g," ");return{icon:"\u{1FA84}",name:O,insertValue:`'${O}'`,description:"Generated by Fig AI"}}))!==null&&A!==void 0?A:[]})}}j.ai=Se});var q=K(g=>{"use strict";var Ve=g&&g.__createBinding||(Object.create?function(e,t,n,i){i===void 0&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){i===void 0&&(i=n),e[i]=t[n]}),Oe=g&&g.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&Ve(t,e,n)};Object.defineProperty(g,"__esModule",{value:!0});g.ai=g.folders=g.filepaths=void 0;var Y=F();Object.defineProperty(g,"filepaths",{enumerable:!0,get:function(){return Y.filepaths}});Object.defineProperty(g,"folders",{enumerable:!0,get:function(){return Y.folders}});Oe(J(),g);var be=Z();Object.defineProperty(g,"ai",{enumerable:!0,get:function(){return be.ai}})});var B=Ae(q(),1),Te={elixir_logo_url:"data:image/jpeg;base64,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"},W=(0,B.filepaths)({extensions:["exs"],editFileSuggestions:{priority:76}}),je={name:"mix",description:"Build tool for Elixir",icon:Te.elixir_logo_url,subcommands:[{name:"new",description:"Creates a new Elixir project at the given path",args:{name:"path"},options:[{name:["-h","--help"],description:"Output usage information"},{name:"--app",description:"Name the OTP application for the project",args:{name:"app"}},{name:"--modules",description:"Name the modules in the generated code skeleton",args:{name:"module"}},{name:"--sup",description:"Generate an OTP application skeleton including a supervision tree. Normally an app is generated without a supervisor and without the app callback"},{name:"--umbrella",description:"Generate an umbrella project"}]},{name:"run",description:"Starts the current application and runs code",args:{name:"file",generators:W,isOptional:!0},options:[{name:"--config",description:"Loads the given configuration files",args:{name:"file",template:"filepaths"}},{name:["-e","--eval"],description:"Evaluates the given code",args:{name:"code",description:"String containing code to execute",isScript:!0}},{name:["-r","--require"],description:"Executes the given pattern/file",args:{name:"file|pattern",description:"The file|pattern to execute",generators:W}},{name:["-p","--parallel"],description:"Executes the given pattern/file",args:{name:"file|pattern",generators:W}},{name:"--preload-modules",description:"Preloads all modules defined in applications"},{name:"--no-compile",description:"Does not compile even if files require compilation"},{name:"--no-deps-check",description:"Does not check dependencies"},{name:"--no-archives-check",description:"Does not check archives"},{name:"--no-halt",description:"Does not halt the system after running the command"},{name:"--no-mix-exs",description:"Allows the command to run even if there is no mix.exs"},{name:"--no-start",description:"Does not start applications after compilation"},{name:"--no-elixir-version-check",description:"Does not check the Elixir version from mix.exs"}]},{name:"help",description:"Prints documentation for a given task (Lists all the tasks if no task is specified)",args:{name:"task",isOptional:!0,description:"Prints documentation for a given task",generators:{cache:{ttl:1e4},script:["mix","help"],postProcess:Q}},options:[{name:"--search",description:"Prints all tasks and aliases that contain 'pattern' in the name",args:{name:"pattern"}},{name:"--names",description:"Prints all task names and aliases"}]}],args:{name:"task",description:"Invokes the task (mix run) in a project",isOptional:!0,generators:{cache:{ttl:1e4},script:["mix","help"],postProcess:Q}},options:[{name:["-h","--help"],description:"Shows usage information"},{name:["-v","--version"],description:"Shows versioning information"}]};function Q(e){return e.split(`
`).map(t=>{let[n,i]=t.split("#").map(r=>r.trim());return{name:n.replace(/^mix /,""),description:i}}).filter(t=>!["mix","help","new","run","iex -S mix"].includes(t.name))}var Ne=je;export{Ne as default};
