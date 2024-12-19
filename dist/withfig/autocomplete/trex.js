var r={script:["cat","import_map.json"],postProcess:function(n){if(n)try{let e=JSON.parse(n);if(e.imports)return Object.entries(e.imports).map(([t,a])=>({name:t,icon:"\u{1F996}",description:a}))}catch{return[]}return[]}},c={script:["cat","run.json"],postProcess:function(n){if(n)try{let e=JSON.parse(n);if(e.scripts)return Object.entries(e.scripts).map(([t,a])=>({name:t,icon:"\u{1F680}",description:"trex script"}))}catch{return[]}return[]}},s={version:{name:["-v","--version"],description:"Print version"},map:{name:["-m","--map"],description:"Install package from deno.land",args:{name:"package name",description:"Deno.land package name"}},nest:{name:["-n","--nest"],description:"Install package from nest.land",args:{name:"package name",description:"Nest.land package name"}},pkg:{name:["-p","--pkg"],description:"Install package from some repository",args:[{name:"repository",description:"[user]/[repo or repo@tag/branch]/[path/to/file]"},{name:"Package Name",description:"Prefered package alias"}]},custom:{name:["-c","--custom"],description:"Install custom package",args:{name:"custom package",description:"Install a package from a custom URL source, eg: React=https://dev.jspm.io/react/index.js"}}},p={name:"trex",description:"Advanced package management for deno, based on import_map.json",subcommands:[{name:["i","install"],description:"Install a package",options:[s.map,s.nest,s.pkg]},{name:"delete",description:"Delete a package",args:{name:"package name",generators:r,filterStrategy:"fuzzy"}},{name:"upgrade",description:"Upgrade trex",options:[{name:"--canary",description:"Install from dev branch"}]},{name:"tree",description:"View dependency tree"},{name:"run",description:"Run a script alias in a file run.json",options:[{name:["-w","--watch"],description:"Use reboot script alias protocol (rsap)"},{name:"-wv",description:"Verbose output in --watch mode (rsap)"}],args:{name:"script alias",generators:c}},{name:"purge",description:"Remove a package or url from cache",args:{name:"package | url",generators:r,filterStrategy:"fuzzy"}},{name:"ls",description:"Shows the list of installed packages"},{name:"exec",description:"Execute a cli tool with out install then",options:[{name:"--perms",description:"Specify cli permisions"}],args:{name:"cli tool"}},{name:"check",description:"Check deno.land [std/x] dependencies updates",options:[{name:["-f","--fix"],description:"Update outdated dependencies"}]}],options:[{name:["-h","--help"],description:"Print help info",isPersistent:!0},s.version,s.custom]},m=p;export{m as default};
