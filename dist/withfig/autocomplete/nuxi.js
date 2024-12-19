var o=["component","composable","layout","plugin","page","middleware","api"],e={name:"rootDir",description:"The directory of the target application",template:"folders",isOptional:!0},i=[{name:"--help",description:"Show help",isPersistent:!0}],n=[{name:"info",displayName:"Info",icon:"\u{1F4DD}",description:"The info command logs information about the current or specified Nuxt project",args:e},{name:["init","create"],description:"The init command initializes a fresh Nuxt project",args:{name:"dir",description:"Name of the install directory"},options:[{name:["--verbose","-v"],description:"Log information about the installation process"},{name:["--template","-t"],description:"Specify a Git repository to use as a template"},{name:"--force",description:"Force clone to any existing directory"},{name:"--prefer-offline",description:"Try local cache first to download templates"},{name:"--shell",description:"Open shell in cloned directory (experimental)"}]},{name:["add","new"],displayName:"Add",icon:"fig://template?color=2ecc71&badge=+",description:"Generate a entity into your Nuxt application",args:[{name:"TEMPLATE",description:"Specify a template of the file to be generated",suggestions:o.map(t=>({name:t,description:`Generate a nuxt ${t}`,icon:"fig://template?color=0079ff&badge=+"}))},{name:"NAME",description:"Specify a name of the file that will be created"}],options:[{name:"--cwd",description:"The current working directory of the target application"},{name:"--force",description:"Force override file if it already exists"}]},{name:"analyze",displayName:"Analyze",icon:"\u2728",description:"The analyze command builds Nuxt and analyzes the production bundle (experimental)",args:e},{name:"build",displayName:"Build",icon:"\u{1F3D7}",description:"The build command creates a .output directory with all your application, server and dependencies ready for production",args:e,options:[{name:"--dotenv",description:"Point to another .env file to load, relative to the root directory"},{name:"--prerender",description:"Pre-render every route of your application. (note: This is an experimental flag. The behavior might be changed)"}]},{name:"dev",displayName:"Dev",icon:"\u{1F4BB}",description:"The dev command starts a development server with hot module replacement at http://localhost:3000",args:e,options:[{name:"--dotenv",description:"Point to another .env file to load, relative to the root directory"},{name:"--clipboard",description:"Copy URL to clipboard"},{name:["--open","-o"],description:"Open URL in browser"},{name:"--no-clear",description:"Does not clear the console after startup"},{name:["--port","-p"],description:"Port to listen"},{name:["--host","-h"],description:"Hostname of the server"},{name:"--https",description:"Listen with https protocol with a self-signed certificate by default"},{name:"--ssl-cert",description:"Specify a certificate for https"},{name:"--ssl-key",description:"Specify the key for the https certificate"}]},{icon:"\u{1F4E6}",name:"prepare",description:"The prepare command creates a .nuxt directory in your application and generates ts types"},{name:"preview",displayName:"Preview",icon:"\u{1F517}",description:"The preview command starts a server to preview your Nuxt application after running the build command",args:e,options:[{name:"--dotenv",description:"Point to another .env file to load, relative to the root directory"}]},{name:"generate",displayName:"Generate",icon:"\u{1F4E6}",description:"Build Nuxt and prerender static routes",args:e},{icon:"\u{1F9FC}",name:["clean","cleanup"],displayName:"Cleanup",description:"The cleanup command removes common generated Nuxt files and caches including .nuxt/, .output/, node_modules/.vite and node_modules/.cache",args:e},{icon:"\u{1F9EA}",name:"test",displayName:"Test",description:"Run the test files for your Nuxt application",args:e,options:[{name:"--dev",description:"Run tests in development mode"},{name:"--watch",description:"Actively watch for changes and rerun tests"}]},{icon:"\u2B50\uFE0F",name:"upgrade",displayName:"Upgrade",description:"The upgrade command upgrades Nuxt 3 to the latest version",options:[{name:["--force","-f"],description:"Removes node_modules and lock files before upgrade"}]},{name:"typecheck",icon:"\u2705",description:"The typecheck command runs vue-tsc to check types throughout your app",args:e},{name:"usage",displayName:"Usage",icon:"\u{1F4CA}",description:"The usage command shows the usage of the Nuxt CLI"}],a={name:"nuxi",description:"Nuxt 3 CLI",icon:"https://v3.nuxtjs.org/icon.png",subcommands:n,options:i},r=a;export{r as default};
