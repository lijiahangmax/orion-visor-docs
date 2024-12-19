var n={script:["envchain","--list"],postProcess:s=>Array.from(new Set(s.split(`
`))).map(e=>({name:e,description:`NAMESPACE ${e}`}))},a={name:"envchain",description:"Set environment variables with macOS keychain or D-Bus secret service",args:[{name:"NAMESPACE",generators:n},{name:"CMD",isCommand:!0}],subcommands:[{name:["-s","--set"],description:"Add keychain item of environment variable +ENV+ for namespace +NAMESPACE+",icon:"fig://icon?type=option",args:[{name:"NAMESPACE",generators:n},{name:"ENV",isVariadic:!0}],options:[{name:["-n","--noecho"],description:"Do not echo user input"},{name:["-p","--require-passphrase"],description:"Always ask for keychain passphrase",exclusiveOn:["--no-require-passphrase"]},{name:["-P","--no-require-passphrase"],description:"Do not ask for keychain passphrase",exclusiveOn:["--require-passphrase"]}]},{name:["-l","--list"],description:"List namespaces that have been created",icon:"fig://icon?type=option"}]},i=a;export{i as default};
