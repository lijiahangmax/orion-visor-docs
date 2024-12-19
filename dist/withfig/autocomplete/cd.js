var U=Object.create;var W=Object.defineProperty;var Y=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty;var j=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var re=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ee(t))!ne.call(e,i)&&i!==n&&W(e,i,{get:()=>t[i],enumerable:!(r=Y(t,i))||r.enumerable});return e};var ie=(e,t,n)=>(n=e!=null?U(te(e)):{},re(t||!e||!e.__esModule?W(n,"default",{value:e,enumerable:!0}):n,e));var z=j(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.shellExpand=I.ensureTrailingSlash=void 0;var se=e=>e.endsWith("/")?e:`${e}/`;I.ensureTrailingSlash=se;var oe=(e,t)=>e.startsWith("~")&&(e.length===1||e.charAt(1)==="/")?e.replace("~",t):e,le=(e,t)=>e.replace(/\$([A-Za-z0-9_]+)/g,i=>{var s;let l=i.slice(1);return(s=t[l])!==null&&s!==void 0?s:i}).replace(/\$\{([A-Za-z0-9_]+)(?::-([^}]+))?\}/g,(i,s,l)=>{var c,a;return(a=(c=t[s])!==null&&c!==void 0?c:l)!==null&&a!==void 0?a:i}),ue=(e,t)=>{var n;let{environmentVariables:r}=t;return le(oe(e,(n=r?.HOME)!==null&&n!==void 0?n:"~"),r)};I.shellExpand=ue});var $=j(g=>{"use strict";var ce=g&&g.__awaiter||function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(l){l(s)})}return new(n||(n=Promise))(function(s,l){function c(o){try{u(r.next(o))}catch(f){l(f)}}function a(o){try{u(r.throw(o))}catch(f){l(f)}}function u(o){o.done?s(o.value):i(o.value).then(c,a)}u((r=r.apply(e,t||[])).next())})};Object.defineProperty(g,"__esModule",{value:!0});g.filepaths=g.folders=g.getCurrentInsertedDirectory=g.sortFilesAlphabetically=void 0;var C=z();function R(e,t=[]){let n=t.map(i=>i.toLowerCase()),r=e.filter(i=>!n.includes(i.toLowerCase()));return[...r.filter(i=>!i.startsWith(".")).sort((i,s)=>i.localeCompare(s)),...r.filter(i=>i.startsWith(".")).sort((i,s)=>i.localeCompare(s)),"../"]}g.sortFilesAlphabetically=R;var ae=(e,t,n)=>{if(e===null)return"/";let r=(0,C.shellExpand)(t,n),i=r.slice(0,r.lastIndexOf("/")+1);return i===""?(0,C.ensureTrailingSlash)(e):i.startsWith("/")?i:`${(0,C.ensureTrailingSlash)(e)}${i}`};g.getCurrentInsertedDirectory=ae;function L(e={}){let{extensions:t=[],equals:n=[],matches:r,filterFolders:i=!1,editFileSuggestions:s,editFolderSuggestions:l,rootDirectory:c,showFolders:a="always"}=e,u=new Set(t),o=new Set(n),f=()=>t.length>0||n.length>0||r,p=(h=[])=>f()?h.filter(({name:v="",type:b})=>{if(!i&&b==="folder"||o.has(v)||r&&v.match(r))return!0;let[,...d]=v.split(".");if(d.length>=1){let O=d.length-1,m=d[O];do{if(u.has(m))return!0;O-=1,m=[d[O],m].join(".")}while(O>=0)}return!1}):h,S=(h=[])=>!s&&!l?h:h.map(v=>Object.assign(Object.assign({},v),(v.type==="file"?s:l)||{}));return{trigger:(h,v)=>{let b=h.lastIndexOf("/"),d=v.lastIndexOf("/");return b!==d?!0:b===-1&&d===-1?!1:h.slice(0,b)!==v.slice(0,d)},getQueryTerm:h=>h.slice(h.lastIndexOf("/")+1),custom:(h,v,b)=>ce(this,void 0,void 0,function*(){var d;let{isDangerous:O,currentWorkingDirectory:m,searchTerm:y}=b,w=(d=(0,g.getCurrentInsertedDirectory)(c??m,y,b))!==null&&d!==void 0?d:"/";try{let N=yield v({command:"ls",args:["-1ApL"],cwd:w}),Z=R(N.stdout.split(`
`),[".DS_Store"]),P=[];for(let V of Z)if(V){let F=V.endsWith("/")?"folders":"filepaths";(F==="filepaths"&&a!=="only"||F==="folders"&&a!=="never")&&P.push({type:F==="filepaths"?"file":"folder",name:V,insertValue:V,isDangerous:O,context:{templateType:F}})}return S(p(P))}catch{return[]}})}}g.folders=Object.assign(()=>L({showFolders:"only"}),Object.freeze(L({showFolders:"only"})));g.filepaths=Object.assign(L,Object.freeze(L()))});var k=j(x=>{"use strict";var A=x&&x.__awaiter||function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(l){l(s)})}return new(n||(n=Promise))(function(s,l){function c(o){try{u(r.next(o))}catch(f){l(f)}}function a(o){try{u(r.throw(o))}catch(f){l(f)}}function u(o){o.done?s(o.value):i(o.value).then(c,a)}u((r=r.apply(e,t||[])).next())})};Object.defineProperty(x,"__esModule",{value:!0});x.keyValueList=x.keyValue=x.valueList=void 0;var K=new Map;function D(e,t){return e.length===0?t:t.map(n=>n.insertValue?n:Object.assign(Object.assign({},n),{insertValue:n.name+e}))}function J(e,t,n){return A(this,void 0,void 0,function*(){if(typeof e=="function"){let r=yield e(...n);return D(t,r)}if(typeof e[0]=="string"){let r=e.map(i=>({name:i}));return D(t,r)}return D(t,e)})}function q(e,t,n,r){return A(this,void 0,void 0,function*(){if(n||Array.isArray(e)){let i=K.get(e);return i===void 0&&(i=yield J(e,t,r),K.set(e,i)),i}return J(e,t,r)})}function Q(e,t){return typeof t=="string"?e&&t==="keys"||!e&&t==="values":t}function M(e,...t){return Math.max(...t.map(n=>e.lastIndexOf(n)))}function E(e,t){let n=new Set(e);return t.filter(r=>{var i;return typeof r.name=="string"?!n.has(r.name):!(!((i=r.name)===null||i===void 0)&&i.some(s=>n.has(s)))})}function fe({delimiter:e=",",values:t=[],cache:n=!1,insertDelimiter:r=!1,allowRepeatedValues:i=!1}){return{trigger:(s,l)=>s.lastIndexOf(e)!==l.lastIndexOf(e),getQueryTerm:s=>s.slice(s.lastIndexOf(e)+e.length),custom:(...s)=>A(this,void 0,void 0,function*(){var l;let c=yield q(t,r?e:"",n,s);if(i)return c;let[a]=s,u=(l=a[a.length-1])===null||l===void 0?void 0:l.split(e);return E(u,c)})}}x.valueList=fe;function de({separator:e="=",keys:t=[],values:n=[],cache:r=!1,insertSeparator:i=!0}){return{trigger:(s,l)=>s.indexOf(e)!==l.indexOf(e),getQueryTerm:s=>s.slice(s.indexOf(e)+1),custom:(...s)=>A(this,void 0,void 0,function*(){let[l]=s,a=!l[l.length-1].includes(e),u=a?t:n,o=Q(a,r);return q(u,a&&i?e:"",o,s)})}}x.keyValue=de;function he({separator:e="=",delimiter:t=",",keys:n=[],values:r=[],cache:i=!1,insertSeparator:s=!0,insertDelimiter:l=!1,allowRepeatedKeys:c=!1,allowRepeatedValues:a=!0}){return{trigger:(u,o)=>{let f=M(u,e,t),p=M(o,e,t);return f!==p},getQueryTerm:u=>{let o=M(u,e,t);return u.slice(o+1)},custom:(...u)=>A(this,void 0,void 0,function*(){let[o]=u,f=o[o.length-1],p=M(f,e,t),S=p===-1||f.slice(p,p+e.length)!==e,h=S?n:r,v=Q(S,i),d=yield q(h,S?s?e:"":l?t:"",v,u);if(S){if(c)return d;let m=f.split(t).map(y=>y.slice(0,y.indexOf(e)));return E(m,d)}if(a)return d;let O=f.split(t).map(m=>m.slice(m.indexOf(e)+e.length));return E(O,d)})}}x.keyValueList=he});var H=j(T=>{"use strict";var ye=T&&T.__awaiter||function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(l){l(s)})}return new(n||(n=Promise))(function(s,l){function c(o){try{u(r.next(o))}catch(f){l(f)}}function a(o){try{u(r.throw(o))}catch(f){l(f)}}function u(o){o.done?s(o.value):i(o.value).then(c,a)}u((r=r.apply(e,t||[])).next())})};Object.defineProperty(T,"__esModule",{value:!0});T.ai=void 0;var ve=4097,pe=4,ge=.8,_e=ve*pe*ge;function Oe({name:e,prompt:t,message:n,postProcess:r,temperature:i,splitOn:s}){return{scriptTimeout:15e3,custom:(l,c,a)=>ye(this,void 0,void 0,function*(){var u,o;let f=yield c({command:"fig",args:["settings","--format","json","autocomplete.ai.enabled"]});if(!JSON.parse(f.stdout))return[];let p=typeof t=="function"?yield t({tokens:l,executeCommand:c,generatorContext:a}):t,S=typeof n=="function"?yield n({tokens:l,executeCommand:c,generatorContext:a}):n;if(S===null||S.length===0)return console.warn("No message provided to AI generator"),[];let h=_e-((u=p?.length)!==null&&u!==void 0?u:0),v={model:"gpt-3.5-turbo",source:"autocomplete",name:e,messages:[...p?[{role:"system",content:p}]:[],{role:"user",content:S.slice(0,h)}],temperature:i},b=JSON.stringify(v),d=yield c({command:"fig",args:["_","request","--route","/ai/chat","--method","POST","--body",b]}),O=JSON.parse(d.stdout);return(o=O?.choices.map(y=>{var w;return(w=y?.message)===null||w===void 0?void 0:w.content}).filter(y=>typeof y=="string").flatMap(y=>s?y.split(s).filter(w=>w.trim().length>0):[y]).map(y=>{if(r)return r(y);let w=y.trim().replace(/\n/g," ");return{icon:"\u{1FA84}",name:w,insertValue:`'${w}'`,description:"Generated by Fig AI"}}))!==null&&o!==void 0?o:[]})}}T.ai=Oe});var G=j(_=>{"use strict";var be=_&&_.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),me=_&&_.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&be(t,e,n)};Object.defineProperty(_,"__esModule",{value:!0});_.ai=_.folders=_.filepaths=void 0;var B=$();Object.defineProperty(_,"filepaths",{enumerable:!0,get:function(){return B.filepaths}});Object.defineProperty(_,"folders",{enumerable:!0,get:function(){return B.folders}});me(k(),_);var Se=H();Object.defineProperty(_,"ai",{enumerable:!0,get:function(){return Se.ai}})});var X=ie(G(),1),we={name:"cd",description:"Change the shell working directory",args:{generators:(0,X.filepaths)({showFolders:"only"}),filterStrategy:"fuzzy",suggestions:[{name:"-",description:"Switch to the last used folder",hidden:!0},{name:"~",description:"Switch to the home directory",hidden:!0}]}},Fe=we;export{Fe as default};
