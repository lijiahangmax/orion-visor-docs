var Z=Object.create;var L=Object.defineProperty;var Y=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty;var I=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ne=(e,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ee(t))!ie.call(e,r)&&r!==i&&L(e,r,{get:()=>t[r],enumerable:!(n=Y(t,r))||n.enumerable});return e};var re=(e,t,i)=>(i=e!=null?Z(te(e)):{},ne(t||!e||!e.__esModule?L(i,"default",{value:e,enumerable:!0}):i,e));var U=I(_=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});_.shellExpand=_.ensureTrailingSlash=void 0;var oe=e=>e.endsWith("/")?e:`${e}/`;_.ensureTrailingSlash=oe;var se=(e,t)=>e.startsWith("~")&&(e.length===1||e.charAt(1)==="/")?e.replace("~",t):e,ae=(e,t)=>e.replace(/\$([A-Za-z0-9_]+)/g,r=>{var o;let a=r.slice(1);return(o=t[a])!==null&&o!==void 0?o:r}).replace(/\$\{([A-Za-z0-9_]+)(?::-([^}]+))?\}/g,(r,o,a)=>{var l,d;return(d=(l=t[o])!==null&&l!==void 0?l:a)!==null&&d!==void 0?d:r}),ce=(e,t)=>{var i;let{environmentVariables:n}=t;return ae(se(e,(i=n?.HOME)!==null&&i!==void 0?i:"~"),n)};_.shellExpand=ce});var W=I(y=>{"use strict";var le=y&&y.__awaiter||function(e,t,i,n){function r(o){return o instanceof i?o:new i(function(a){a(o)})}return new(i||(i=Promise))(function(o,a){function l(s){try{c(n.next(s))}catch(p){a(p)}}function d(s){try{c(n.throw(s))}catch(p){a(p)}}function c(s){s.done?o(s.value):r(s.value).then(l,d)}c((n=n.apply(e,t||[])).next())})};Object.defineProperty(y,"__esModule",{value:!0});y.filepaths=y.folders=y.getCurrentInsertedDirectory=y.sortFilesAlphabetically=void 0;var J=U();function N(e,t=[]){let i=t.map(r=>r.toLowerCase()),n=e.filter(r=>!i.includes(r.toLowerCase()));return[...n.filter(r=>!r.startsWith(".")).sort((r,o)=>r.localeCompare(o)),...n.filter(r=>r.startsWith(".")).sort((r,o)=>r.localeCompare(o)),"../"]}y.sortFilesAlphabetically=N;var de=(e,t,i)=>{if(e===null)return"/";let n=(0,J.shellExpand)(t,i),r=n.slice(0,n.lastIndexOf("/")+1);return r===""?(0,J.ensureTrailingSlash)(e):r.startsWith("/")?r:`${(0,J.ensureTrailingSlash)(e)}${r}`};y.getCurrentInsertedDirectory=de;function F(e={}){let{extensions:t=[],equals:i=[],matches:n,filterFolders:r=!1,editFileSuggestions:o,editFolderSuggestions:a,rootDirectory:l,showFolders:d="always"}=e,c=new Set(t),s=new Set(i),p=()=>t.length>0||i.length>0||n,g=(f=[])=>p()?f.filter(({name:h="",type:b})=>{if(!r&&b==="folder"||s.has(h)||n&&h.match(n))return!0;let[,...u]=h.split(".");if(u.length>=1){let S=u.length-1,w=u[S];do{if(c.has(w))return!0;S-=1,w=[u[S],w].join(".")}while(S>=0)}return!1}):f,x=(f=[])=>!o&&!a?f:f.map(h=>Object.assign(Object.assign({},h),(h.type==="file"?o:a)||{}));return{trigger:(f,h)=>{let b=f.lastIndexOf("/"),u=h.lastIndexOf("/");return b!==u?!0:b===-1&&u===-1?!1:f.slice(0,b)!==h.slice(0,u)},getQueryTerm:f=>f.slice(f.lastIndexOf("/")+1),custom:(f,h,b)=>le(this,void 0,void 0,function*(){var u;let{isDangerous:S,currentWorkingDirectory:w,searchTerm:m}=b,O=(u=(0,y.getCurrentInsertedDirectory)(l??w,m,b))!==null&&u!==void 0?u:"/";try{let R=yield h({command:"ls",args:["-1ApL"],cwd:O}),Q=N(R.stdout.split(`
`),[".DS_Store"]),V=[];for(let k of Q)if(k){let T=k.endsWith("/")?"folders":"filepaths";(T==="filepaths"&&d!=="only"||T==="folders"&&d!=="never")&&V.push({type:T==="filepaths"?"file":"folder",name:k,insertValue:k,isDangerous:S,context:{templateType:T}})}return x(g(V))}catch{return[]}})}}y.folders=Object.assign(()=>F({showFolders:"only"}),Object.freeze(F({showFolders:"only"})));y.filepaths=Object.assign(F,Object.freeze(F()))});var z=I(E=>{"use strict";var D=E&&E.__awaiter||function(e,t,i,n){function r(o){return o instanceof i?o:new i(function(a){a(o)})}return new(i||(i=Promise))(function(o,a){function l(s){try{c(n.next(s))}catch(p){a(p)}}function d(s){try{c(n.throw(s))}catch(p){a(p)}}function c(s){s.done?o(s.value):r(s.value).then(l,d)}c((n=n.apply(e,t||[])).next())})};Object.defineProperty(E,"__esModule",{value:!0});E.keyValueList=E.keyValue=E.valueList=void 0;var X=new Map;function A(e,t){return e.length===0?t:t.map(i=>i.insertValue?i:Object.assign(Object.assign({},i),{insertValue:i.name+e}))}function q(e,t,i){return D(this,void 0,void 0,function*(){if(typeof e=="function"){let n=yield e(...i);return A(t,n)}if(typeof e[0]=="string"){let n=e.map(r=>({name:r}));return A(t,n)}return A(t,e)})}function M(e,t,i,n){return D(this,void 0,void 0,function*(){if(i||Array.isArray(e)){let r=X.get(e);return r===void 0&&(r=yield q(e,t,n),X.set(e,r)),r}return q(e,t,n)})}function B(e,t){return typeof t=="string"?e&&t==="keys"||!e&&t==="values":t}function C(e,...t){return Math.max(...t.map(i=>e.lastIndexOf(i)))}function P(e,t){let i=new Set(e);return t.filter(n=>{var r;return typeof n.name=="string"?!i.has(n.name):!(!((r=n.name)===null||r===void 0)&&r.some(o=>i.has(o)))})}function pe({delimiter:e=",",values:t=[],cache:i=!1,insertDelimiter:n=!1,allowRepeatedValues:r=!1}){return{trigger:(o,a)=>o.lastIndexOf(e)!==a.lastIndexOf(e),getQueryTerm:o=>o.slice(o.lastIndexOf(e)+e.length),custom:(...o)=>D(this,void 0,void 0,function*(){var a;let l=yield M(t,n?e:"",i,o);if(r)return l;let[d]=o,c=(a=d[d.length-1])===null||a===void 0?void 0:a.split(e);return P(c,l)})}}E.valueList=pe;function ue({separator:e="=",keys:t=[],values:i=[],cache:n=!1,insertSeparator:r=!0}){return{trigger:(o,a)=>o.indexOf(e)!==a.indexOf(e),getQueryTerm:o=>o.slice(o.indexOf(e)+1),custom:(...o)=>D(this,void 0,void 0,function*(){let[a]=o,d=!a[a.length-1].includes(e),c=d?t:i,s=B(d,n);return M(c,d&&r?e:"",s,o)})}}E.keyValue=ue;function fe({separator:e="=",delimiter:t=",",keys:i=[],values:n=[],cache:r=!1,insertSeparator:o=!0,insertDelimiter:a=!1,allowRepeatedKeys:l=!1,allowRepeatedValues:d=!0}){return{trigger:(c,s)=>{let p=C(c,e,t),g=C(s,e,t);return p!==g},getQueryTerm:c=>{let s=C(c,e,t);return c.slice(s+1)},custom:(...c)=>D(this,void 0,void 0,function*(){let[s]=c,p=s[s.length-1],g=C(p,e,t),x=g===-1||p.slice(g,g+e.length)!==e,f=x?i:n,h=B(x,r),u=yield M(f,x?o?e:"":a?t:"",h,c);if(x){if(l)return u;let w=p.split(t).map(m=>m.slice(0,m.indexOf(e)));return P(w,u)}if(d)return u;let S=p.split(t).map(w=>w.slice(w.indexOf(e)+e.length));return P(S,u)})}}E.keyValueList=fe});var G=I(j=>{"use strict";var me=j&&j.__awaiter||function(e,t,i,n){function r(o){return o instanceof i?o:new i(function(a){a(o)})}return new(i||(i=Promise))(function(o,a){function l(s){try{c(n.next(s))}catch(p){a(p)}}function d(s){try{c(n.throw(s))}catch(p){a(p)}}function c(s){s.done?o(s.value):r(s.value).then(l,d)}c((n=n.apply(e,t||[])).next())})};Object.defineProperty(j,"__esModule",{value:!0});j.ai=void 0;var he=4097,ge=4,ye=.8,ve=he*ge*ye;function Se({name:e,prompt:t,message:i,postProcess:n,temperature:r,splitOn:o}){return{scriptTimeout:15e3,custom:(a,l,d)=>me(this,void 0,void 0,function*(){var c,s;let p=yield l({command:"fig",args:["settings","--format","json","autocomplete.ai.enabled"]});if(!JSON.parse(p.stdout))return[];let g=typeof t=="function"?yield t({tokens:a,executeCommand:l,generatorContext:d}):t,x=typeof i=="function"?yield i({tokens:a,executeCommand:l,generatorContext:d}):i;if(x===null||x.length===0)return console.warn("No message provided to AI generator"),[];let f=ve-((c=g?.length)!==null&&c!==void 0?c:0),h={model:"gpt-3.5-turbo",source:"autocomplete",name:e,messages:[...g?[{role:"system",content:g}]:[],{role:"user",content:x.slice(0,f)}],temperature:r},b=JSON.stringify(h),u=yield l({command:"fig",args:["_","request","--route","/ai/chat","--method","POST","--body",b]}),S=JSON.parse(u.stdout);return(s=S?.choices.map(m=>{var O;return(O=m?.message)===null||O===void 0?void 0:O.content}).filter(m=>typeof m=="string").flatMap(m=>o?m.split(o).filter(O=>O.trim().length>0):[m]).map(m=>{if(n)return n(m);let O=m.trim().replace(/\n/g," ");return{icon:"\u{1FA84}",name:O,insertValue:`'${O}'`,description:"Generated by Fig AI"}}))!==null&&s!==void 0?s:[]})}}j.ai=Se});var $=I(v=>{"use strict";var be=v&&v.__createBinding||(Object.create?function(e,t,i,n){n===void 0&&(n=i);var r=Object.getOwnPropertyDescriptor(t,i);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,r)}:function(e,t,i,n){n===void 0&&(n=i),e[n]=t[i]}),we=v&&v.__exportStar||function(e,t){for(var i in e)i!=="default"&&!Object.prototype.hasOwnProperty.call(t,i)&&be(t,e,i)};Object.defineProperty(v,"__esModule",{value:!0});v.ai=v.folders=v.filepaths=void 0;var H=W();Object.defineProperty(v,"filepaths",{enumerable:!0,get:function(){return H.filepaths}});Object.defineProperty(v,"folders",{enumerable:!0,get:function(){return H.folders}});we(z(),v);var xe=G();Object.defineProperty(v,"ai",{enumerable:!0,get:function(){return xe.ai}})});var K=re($(),1),Oe={name:"tsc",description:"CLI tool for TypeScript compiler",options:[{name:"--all",description:"Show all compiler options"},{name:"--generateTrace",description:"Generates an event trace and a list of types"},{name:"--help",description:"Gives local information for help on the CLI"},{name:"--init",description:"Initializes a TypeScript project and creates a tsconfig.json file"},{name:"--listFilesOnly",description:"Print names of files that are part of the compilation and then stop processing"},{name:"--locale",description:"Set the language of the messaging from TypeScript. This does not affect emit"},{name:"--project",description:"Compile the project given the path to its configuration file, or to a folder with a tsconfig.json",args:{name:"path",template:["filepaths","folders"]}},{name:"--showConfig",description:"Print the final configuration instead of building"},{name:"--version",description:"Print the compiler's version"},{name:"--build",description:"Build one or more projects and their dependencies, if out of date"},{name:"--clean",description:"Delete the outputs of all projects"},{name:"--dry",description:"Show what would be built (or deleted, if specified with '--clean')"},{name:"--force",description:"Build all projects, including those that appear to be up to date"},{name:"--verbose",description:"Enable verbose logging"},{name:"--excludeDirectories",description:"Remove a list of directories from the watch process",args:{name:"dir",template:"folders",isVariadic:!0}},{name:"--excludeFiles",description:"Remove a list of files from the watch mode's processing",args:{name:"files",template:"filepaths",isVariadic:!0}},{name:"--fallbackPolling",description:"Specify what approach the watcher should use if the system runs out of native file watchers",args:{name:"approach",suggestions:["fixedPollingInterval","priorityPollingInterval","dynamicPriorityPolling"]}},{name:"--synchronousWatchDirectory",description:"Synchronously call callbacks and update the state of directory watchers on platforms that don`t support recursive watching natively"},{name:"--watch",description:"Watch input files"},{name:"--watchDirectory",description:"Specify how directories are watched on systems that lack recursive file-watching functionality",args:{name:"approach",suggestions:["fixedPollingInterval","dynamicPriorityPolling","useFsEvents"]}},{name:"--watchFile",description:"Specify how the TypeScript watch mode works",args:{name:"approach",suggestions:["fixedPollingInterval","priorityPollingInterval","dynamicPriorityPolling","useFsEvents","useFsEventsOnParentDirectory"]}},{name:"--allowJs",description:"Allow JavaScript files to be a part of your program. Use the checkJS option to get errors from these files"},{name:"--allowSyntheticDefaultImports",description:"Allow 'import x from y' when a module doesn't have a default export"},{name:"--allowUmdGlobalAccess",description:"Allow accessing UMD globals from modules"},{name:"--allowUnreachableCode",description:"Disable error reporting for unreachable code"},{name:"--allowUnusedLabels",description:"Disable error reporting for unused label"},{name:"--alwaysStrict",description:"Ensure 'use strict' is always emitted"},{name:"--assumeChangesOnlyAffectDirectDependencies",description:"Have recompiles in projects that use incremental and watch mode assume that changes within a file will only affect files directly depending on it"},{name:"--baseUrl",description:"Specify the base directory to resolve non-relative module names",args:{name:"directory",template:"filepaths"}},{name:"--checkJs",description:"Enable error reporting in type-checked JavaScript files"},{name:"--composite",description:"Enable constraints that allow a TypeScript project to be used with project references"},{name:"--declaration",description:"Generate .d.ts files from TypeScript and JavaScript files in your project"},{name:"--declarationDir",description:"Specify the output directory for generated declaration files",args:{name:"string",template:"folders"}},{name:"--declarationMap",description:"Create sourcemaps for d.ts files"},{name:"--diagnostics",description:"Output compiler performance information after building"},{name:"--disableReferencedProjectLoad",description:"Reduce the number of projects loaded automatically by TypeScript"},{name:"--disableSizeLimit",description:"Remove the 20mb cap on total source code size for JavaScript files in the TypeScript language server"},{name:"--disableSolutionSearching",description:"Opt a project out of multi-project reference checking when editing"},{name:"--disableSourceOfProjectReferenceRedirect",description:"Disable preferring source files instead of declaration files when referencing composite projects"},{name:"--downlevelIteration",description:"Emit more compliant, but verbose and less performant JavaScript for iteration"},{name:"--emitBOM",description:"Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files"},{name:"--emitDeclarationOnly",description:"Only output d.ts files and not JavaScript files"},{name:"--emitDecoratorMetadata",description:"Emit design-type metadata for decorated declarations in source files"},{name:"--esModuleInterop",description:"Emit additional JavaScript to ease support for importing CommonJS modules. This enables allowSyntheticDefaultImports for type compatibility"},{name:"--exactOptionalPropertyTypes",description:"Differentiate between undefined and not present when type checking"},{name:"--experimentalDecorators",description:"Enable experimental support for TC39 stage 2 draft decorators"},{name:"--explainFiles",description:"Print files read during the compilation including why it was included"},{name:"--extendedDiagnostics",description:"Output more detailed compiler performance information after building"},{name:"--forceConsistentCasingInFileNames",description:"Ensure that casing is correct in imports"},{name:"--generateCpuProfile",description:"Emit a v8 CPU profile of the compiler run for debugging"},{name:"--importHelpers",description:"Allow importing helper functions from tslib once per project, instead of including them per-file"},{name:"--importsNotUsedAsValues",description:"Specify emit/checking behavior for imports that are only used for types",args:{name:"type",suggestions:["remove","preserve","error"]}},{name:"--incremental",description:"Save .tsbuildinfo files to allow for incremental compilation of projects"},{name:"--inlineSourceMap",description:"Include sourcemap files inside the emitted JavaScript"},{name:"--inlineSources",description:"Include source code in the sourcemaps inside the emitted JavaScript"},{name:"--isolatedModules",description:"Ensure that each file can be safely transpiled without relying on other imports"},{name:"--jsx",description:"Specify what JSX code is generated",args:{name:"type",suggestions:["react","react-jsx","react-jsxdev","react-native","preserve"]}},{name:"--jsxFactory",description:"Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'",args:{name:"JSX factory function",default:"React.createElement"}},{name:"--jsxFragmentFactory",description:"Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'",args:{name:"JSX fragment"}},{name:"--jsxImportSource",description:"Specify module specifier used to import the JSX factory functions when using jsx: react-jsx*",args:{name:"string",default:"react"}},{name:"--keyofStringsOnly",description:"Make keyof only return strings instead of string, numbers or symbols. Legacy option"},{name:"--lib",description:"Specify a set of bundled library declaration files that describe the target runtime environment",args:{name:"list",template:"filepaths",isVariadic:!0}},{name:"--listEmittedFiles",description:"Print the names of emitted files after a compilation"},{name:"--listFiles",description:"Print all of the files read during the compilation"},{name:"--mapRoot",description:"Specify the location where debugger should locate map files instead of generated locations",args:{name:"string",template:"folders"}},{name:"--maxNodeModuleJsDepth",description:"Specify the maximum folder depth used for checking JavaScript files from node_modules. Only applicable with allowJs",dependsOn:["--allowJs"],args:{name:"number",default:"0"}},{name:"--module",description:"Specify what module code is generated",args:{name:"module",default:"CommonJS",suggestions:["ES6","ES2015","ES2020","None","UMD","AMD","System","ESNext","CommonJS"]}},{name:"--moduleResolution",description:"Specify how TypeScript looks up a file from a given module specifier",args:{name:"module"}},{name:"--newLine",description:"Set the newline character for emitting files",args:{name:"character"}},{name:"--noEmit",description:"Disable emitting file from a compilation"},{name:"--noEmitHelpers",description:"Disable generating custom helper functions like __extends in compiled output"},{name:"--noEmitOnError",description:"Disable emitting files if any type checking errors are reported"},{name:"--noErrorTruncation",description:"Disable truncating types in error messages"},{name:"--noFallthroughCasesInSwitch",description:"Enable error reporting for fallthrough cases in switch statements"},{name:"--noImplicitAny",description:"Enable error reporting for expressions and declarations with an implied any type"},{name:"--noImplicitOverride",description:"Ensure overriding members in derived classes are marked with an override modifier"},{name:"--noImplicitReturns",description:"Enable error reporting for codepaths that do not explicitly return in a function"},{name:"--noImplicitThis",description:"Enable error reporting when this is given the type any"},{name:"--noImplicitUseStrict",description:"Disable adding 'use strict' directives in emitted JavaScript files"},{name:"--noLib",description:"Disable including any library files, including the default lib.d.ts"},{name:"--noPropertyAccessFromIndexSignature",description:"Enforces using indexed accessors for keys declared using an indexed type"},{name:"--noResolve",description:"Disallow imports, requires or <reference>s from expanding the number of files TypeScript should add to a project"},{name:"--noStrictGenericChecks",description:"Disable strict checking of generic signatures in function types"},{name:"--noUncheckedIndexedAccess",description:"Add undefined to a type when accessed using an index"},{name:"--noUnusedLocals",description:"Enable error reporting when a local variables aren't read"},{name:"--noUnusedParameters",description:"Raise an error when a function parameter isn't read"},{name:"--outDir",description:"Specify an output folder for all emitted files",args:{name:"string",template:"folders"}},{name:"--outFile",description:"Specify a file that bundles all outputs into one JavaScript file. If declaration is true, also designates a file that bundles all .d.ts output",args:{name:"string",template:"filepaths"}},{name:"--paths",description:"Specify a set of entries that re-map imports to additional lookup locations",args:{name:"object"}},{name:"--plugins",description:"Specify a list of language service plugins to include",args:{name:"plugins",isVariadic:!0}},{name:"--preserveConstEnums",description:"Disable erasing const enum declarations in generated code"},{name:"--preserveSymlinks",description:"Disable resolving symlinks to their realpath. This correlates to the same flag in node"},{name:"--preserveWatchOutput",description:"Disable wiping the console in watch mode"},{name:"--pretty",description:"Enable color and formatting in output to make compiler errors easier to read"},{name:"--reactNamespace",description:"Specify the object invoked for createElement. This only applies when targeting react JSX emit",args:{name:"object",default:"React"}},{name:"--removeComments",description:"Disable emitting comments"},{name:"--resolveJsonModule",description:"Enable importing .json files"},{name:"--rootDir",description:"Specify the root folder within your source files",args:{name:"string",template:"folders"}},{name:"--rootDirs",description:"Allow multiple folders to be treated as one when resolving modules",args:{name:"string",template:"folders",isVariadic:!0}},{name:"--skipDefaultLibCheck",description:"Skip type checking .d.ts files that are included with TypeScript"},{name:"--skipLibCheck",description:"Skip type checking all .d.ts files"},{name:"--sourceMap",description:"Create source map files for emitted JavaScript files"},{name:"--sourceRoot",description:"Specify the root path for debuggers to find the reference source code",args:{name:"string",template:["filepaths","folders"]}},{name:"--strict",description:"Enable all strict type checking options"},{name:"--strictBindCallApply",description:"Check that the arguments for bind, call, and apply methods match the original function"},{name:"--strictFunctionTypes",description:"When assigning functions, check to ensure parameters and the return values are subtype-compatible"},{name:"--strictNullChecks",description:"When type checking, take into account null and undefined"},{name:"--strictPropertyInitialization",description:"Check for class properties that are declared but not set in the constructor"},{name:"--stripInternal",description:"Disable emitting declarations that have @internal in their JSDoc comments"},{name:"--suppressExcessPropertyErrors",description:"Disable reporting of excess property errors during the creation of object literals"},{name:"--suppressImplicitAnyIndexErrors",description:"Suppress noImplicitAny errors when indexing objects that lack index signatures"},{name:"--target",description:"Set the JavaScript language version for emitted JavaScript and include compatible library declarations",args:{default:"ES3",suggestions:["ES3","ES5","ES6","ES2015","ES7","ES2016","ES2017","ES2018","ES2019","ES2020","ESNext"]}},{name:"--traceResolution",description:"Log paths used during the moduleResolution process"},{name:"--tsBuildInfoFile",description:"Specify the folder for .tsbuildinfo incremental compilation files",args:{name:"string",template:"folders"}},{name:"--typeRoots",description:"Specify multiple folders that act like ./node_modules/@types",args:{name:"folders",template:"folders",isVariadic:!0}},{name:"--types",description:"Specify type package names to be included without being referenced in a source file",args:{name:"package names",isVariadic:!0}},{name:"--useDefineForClassFields",description:"Emit ECMAScript-standard-compliant class fields"},{name:"--useUnknownInCatchVariables",description:"Default catch clause variables as unknown instead of any"}],args:{name:"tsc script",isScript:!0,generators:(0,K.filepaths)({extensions:["ts"],editFileSuggestions:{priority:76},editFolderSuggestions:{priority:70}})}},Te=Oe;export{Te as default};
