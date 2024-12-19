function g(n){let e=/^(-[A-Za-eg-z]*f=?|--justfile(?:=|$))/;for(let[i,t]of n.entries()){let r=t.match(e);if(r===null)continue;let s=t.slice(r[1].length);return s===""?n[i+1]:s}return null}function d(n){return n?["just","--unstable","--dump","--dump-format","json","--justfile",n]:["just","--unstable","--dump","--dump-format","json"]}function m(n,{showRecipeParameters:e=!1}={}){let i=[];for(let[t,r]of Object.entries(n.recipes))r.private||i.push({name:t,insertValue:r.parameters.length===0?t:t+" ",displayName:e?f(r):t,description:r.doc??"Recipe",icon:"fig://icon?type=command"});for(let[t,r]of Object.entries(n.aliases))i.push({name:t,description:`Alias for '${r.target}'`,icon:"fig://icon?type=commandkey"});return i}function f(n){let e=[n.name];for(let i of n.parameters)i.kind==="singular"?e.push(`<${i.name}>`):i.kind==="plus"?e.push(`<${i.name}...>`):i.kind==="star"?e.push(`[${i.name}...]`):console.error(`Unreachable: unknown kind '${i.kind}'`);return e.join(" ")}function h(n){let e=new Map,i=0;for(let[t,r]of Object.entries(n.recipes)){let s=r.parameters,a=s.length;a>0&&s[s.length-1].kind!=="singular"&&(a=1/0),i<a&&(i=a),e.set(t,a)}for(let[t,r]of Object.entries(n.aliases)){let s=e.get(r.target);e.set(t,s)}return{recipeArity:e,maxArity:i}}var o=n=>{let e=g(n);return d(e)};function c(n){try{return JSON.parse(n)}catch(e){return console.error(e),null}}var b={name:"just",description:"Just a command runner",options:[{name:["--help","-h"],description:"Print help information"},{name:"--changelog",description:"Print the changelog"},{name:"--check",description:"Run --fmt in 'check' mode",dependsOn:["--unstable","--fmt"]},{name:"--choose",description:"Select one or more recipes to run using another program"},{name:"--chooser",description:"Override the binary invoked by --choose",args:{name:"program"}},{name:"--color",description:"Print colorful output",args:{suggestions:[{name:"auto",icon:"fig://icon?type=string"},{name:"always",icon:"fig://icon?type=string"},{name:"never",icon:"fig://icon?type=string"}]}},{name:["-c","--command"],description:"Run an arbitrary command with the working directory, .env, overrides, and exports",args:{name:"command",isCommand:!0}},{name:"--completions",description:"Print shell completions",args:{name:"shell",suggestions:[{name:"zsh",icon:"fig://icon?type=string"},{name:"bash",icon:"fig://icon?type=string"},{name:"fish",icon:"fig://icon?type=string"},{name:"powershell",icon:"fig://icon?type=string"},{name:"elvish",icon:"fig://icon?type=string"}]}},{name:"--clear-shell-args",description:"Clear shell arguments"},{name:"--dry-run",description:"Print what just would do, without doing it"},{name:"--dump",description:"Print justfile"},{name:"--dotenv-filename",description:"Use a file with this name instead of .env",args:{name:"name"}},{name:"--dotenv-path",description:"Load the environment file from a path instead of searching for one"},{name:"--dump-format",description:"Specify the format for dumping the justfile",dependsOn:["--dump"],args:{name:"format",suggestions:[{name:"just",icon:"fig://icon?type=string"},{name:"json",icon:"fig://icon?type=string",description:"This value requires --unstable"}]}},{name:["-e","--edit"],description:"Edit the justfile with $VISUAL or $EDITOR, falling back to vim"},{name:"--evaluate",description:"Evaluate and print all variables"},{name:"--fmt",description:"Format and overwrite the justfile",dependsOn:["--unstable"]},{name:"--highlight",description:"Highlight echoed recipe lines in bold",exclusiveOn:["--no-highlight"]},{name:"--init",description:"Initialize a new justfile"},{name:["-f","--justfile"],description:"Use a specific justfile",args:{name:"file",template:"filepaths"}},{name:["-l","--list"],description:"List available recipes and their arguments"},{name:"--list-heading",description:"Print this text before the list",args:{name:"text"}},{name:"--list-prefix",description:"Print this text before each list item",args:{name:"text"}},{name:"--no-dotenv",description:"Don't load the environment file"},{name:"--no-highlight",description:"Don't highlight echoed recipe lines",exclusiveOn:["--highlight"]},{name:["-q","--quiet"],description:"Suppress all output"},{name:"--set",description:"Override a variable with a value",args:[{name:"variable",generators:{script:o,postProcess:n=>{let e=c(n);return e===null?[]:Object.keys(e.assignments).map(i=>({name:i,icon:"fig://icon?type=string"}))}}},{name:"value",description:"The string value the variable will be set to"}]},{name:"--shell",description:"Invoke this shell to run recipes",args:{name:"shell",default:"sh"}},{name:"--shell-arg",description:"Invoke the shell with this as an argument",args:{name:"argument",default:"-cu"}},{name:"--shell-command",description:"Invoke --command with the shell used to run recipe lines and backticks"},{name:["-s","--show"],description:"Show information about a recipe",args:{name:"recipe",generators:{script:o,postProcess:n=>{let e=c(n);return e===null?[]:m(e)}}}},{name:"--summary",description:"List names of available recipes"},{name:["-u","--unsorted"],description:"Return list and summary entries in source order"},{name:"--unstable",description:"Enable unstable features"},{name:"--variables",description:"List names of variables"},{name:["-v","--verbose"],description:"Use verbose output"},{name:["-V","--version"],description:"Print version information"},{name:["-d","--working-directory"],description:"Use this as the working directory",dependsOn:["--justfile"],args:{template:"folders"}}],args:{name:"args",isVariadic:!0,isOptional:!0,optionsCanBreakVariadicArg:!1,generators:{trigger:(n,e)=>n.length===0&&e.length>0,script:o,postProcess:(n,e)=>{let i=c(n);if(i===null)return[];let{recipeArity:t,maxArity:r}=h(i),s=Math.min(r,e.length-2);for(let a=0;a<s;a++){let p=e.length-2-a,u=e[p],l=t.get(u);if(l!==void 0){if(l>a)return[];break}}return m(i,{showRecipeParameters:!0})}}}},y=b;export{y as default};
