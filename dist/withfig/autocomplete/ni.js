function b(a){return{name:a,description:"Uninstall a package",args:{name:"package",generators:T,filterStrategy:"fuzzy",isVariadic:!0},options:A}}var j=a=>(a.match(/@/g)||[]).length,C=a=>async(s,c,p)=>{let t=s[s.length-1];if(t==="")return[];let r=a?.length>0?`+keywords:${a.join(",")}`:"",g=["-s","-H","Accept: application/json",r?`https://api.npms.io/v2/search?size=20&q=${t}${r}`:`https://api.npms.io/v2/search/suggestions?q=${t}&size=20`],d=["-s","-H","Accept: application/vnd.npm.install-v1+json",`https://registry.npmjs.org/${t.slice(0,-1)}`],P=m=>c({command:"curl",args:m[m.length-1]==="@"?d:g}),x=t.startsWith("@")?j(t)>1:t.includes("@");try{let m=JSON.parse((await P(t)).stdout);if(x){let w=Object.entries(m["dist-tags"]||{}).map(([D,R])=>({name:D,description:R}));return w.push(...Object.keys(m.versions).map(D=>({name:D})).reverse()),w}return(r?m.results:m).map(w=>({name:w.package.name,description:w.package.description}))}catch(m){return console.error({error:m}),[]}},y={trigger:(a,s)=>s.startsWith("@")?!(j(s)>1&&j(a)>1):!(s.includes("@")&&a.includes("@")),getQueryTerm:"@",cache:{ttl:1e3*60*60*24*2},custom:C()},I={custom:async(a,s)=>{let{stdout:c}=await s({command:"npm",args:["prefix"]}),{stdout:p}=await s({command:"cat",args:[`${c}/package.json`]}),t=[];try{if(p.trim()=="")return t;let h=JSON.parse(p).workspaces;if(h)for(let g of h)t.push({name:g,description:"Workspaces"})}catch(r){console.log(r)}return t}},T={trigger:a=>a==="-g"||a==="--global",custom:async function(a,s){if(!a.includes("-g")&&!a.includes("--global")){let{stdout:c}=await s({command:"npm",args:["prefix"]}),{stdout:p}=await s({command:"cat",args:[`${c}/package.json`]}),t=JSON.parse(p),r=t.dependencies??{},h=t.devDependencies,g=t.optionalDependencies??{};return Object.assign(r,h,g),Object.keys(r).filter(d=>!a.some(x=>x===d)).map(d=>({name:d,icon:"\u{1F4E6}",description:r[d]?"dependency":g[d]?"optionalDependency":"devDependency"}))}else{let{stdout:c}=await s({command:"bash",args:["-c","ls -1 `npm root -g`"]});return c.split(`
`).map(p=>({name:p,icon:"\u{1F4E6}",description:"Global dependency"}))}}},V={cache:{strategy:"stale-while-revalidate",cacheByDirectory:!0},script:["bash","-c","until [[ -f package.json ]] || [[ $PWD = '/' ]]; do cd ..; done; cat package.json"],postProcess:function(a,[s]){if(a.trim()=="")return[];try{let c=JSON.parse(a),p=c.scripts,t=c.fig||{};if(p)return Object.entries(p).map(([r,h])=>{let g=s==="yarn"?"fig://icon?type=yarn":"fig://icon?type=npm",d=t[r];return{name:r,icon:g,description:h,priority:51,...d}})}catch(c){console.error(c)}return[]}},O={name:["-g","--global"],description:"Operates in 'global' mode, so that packages are installed into the prefix folder instead of the current working directory"},o={name:"--json",description:"Show output in json format"},v={name:"--omit",description:"Dependency types to omit from the installation tree on disk",args:{name:"Package type",default:"dev",suggestions:["dev","optional","peer"]},isRepeatable:3},u={name:["-p","--parseable"],description:"Output parseable results from commands that write to standard output"},S={name:["-l","--long"],description:"Show extended information"},n=[{name:["-w","--workspace"],description:"Enable running a command in the context of the configured workspaces of the current project",args:{name:"workspace",generators:I,isVariadic:!0}},{name:["-ws","--workspaces"],description:"Enable running a command in the context of all the configured workspaces"}],A=[{name:["-S","--save"],description:"Package will be removed from your dependencies"},{name:["-D","--save-dev"],description:"Package will appear in your `devDependencies`"},{name:["-O","--save-optional"],description:"Package will appear in your `optionalDependencies`"},{name:"--no-save",description:"Prevents saving to `dependencies`"},{name:"-g",description:"Uninstall global package"},...n],z=[{name:["-a","-all"],description:"Show all outdated or installed packages"},o,S,u,{name:"--depth",description:"The depth to go when recursing packages",args:{name:"depth"}},{name:"--link",description:"Limits output to only those packages that are linked"},{name:"--package-lock-only",description:"Current operation will only use the package-lock.json, ignoring node_modules"},{name:"--no-unicode",description:"Uses unicode characters in the tree output"},O,v,...n],e={name:"--registry",description:"The base URL of the npm registry",args:{name:"registry"}},F={name:"--verbose",description:"Show extra information",args:{name:"verbose"}},i={name:"--otp",description:"One-time password from a two-factor authenticator",args:{name:"otp"}},l={name:"--ignore-scripts",description:"If true, npm does not run scripts specified in package.json files"},k={name:"--script-shell",description:"The shell to use for scripts run with the npm exec, npm run and npm init <pkg> commands",args:{name:"script-shell"}},f={name:"--dry-run",description:"Indicates that you don't want npm to make any changes and that it should only report what it would have done"},G={name:"npm",parserDirectives:{flagsArePosixNoncompliant:!0},description:"Node package manager",subcommands:[{name:["install","i","add"],description:"Install a package and its dependencies",args:{name:"package",isOptional:!0,generators:y,debounce:!0,isVariadic:!0},options:[{name:["-P","--save-prod"],description:"Package will appear in your `dependencies`. This is the default unless `-D` or `-O` are present"},{name:["-D","--save-dev"],description:"Package will appear in your `devDependencies`"},{name:["-O","--save-optional"],description:"Package will appear in your `optionalDependencies`"},{name:"--no-save",description:"Prevents saving to `dependencies`"},{name:["-E","--save-exact"],description:"Saved dependencies will be configured with an exact version rather than using npm's default semver range operator"},{name:["-B","--save-bundle"],description:"Saved dependencies will also be added to your bundleDependencies list"},O,{name:"--global-style",description:"Causes npm to install the package into your local node_modules folder with the same layout it uses with the global node_modules folder"},{name:"--legacy-bundling",description:"Causes npm to install the package such that versions of npm prior to 1.4, such as the one included with node 0.8, can install the package"},{name:"--legacy-peer-deps",description:"Bypass peerDependency auto-installation. Emulate install behavior of NPM v4 through v6"},{name:"--strict-peer-deps",description:"If set to true, and --legacy-peer-deps is not set, then any conflicting peerDependencies will be treated as an install failure"},{name:"--no-package-lock",description:"Ignores package-lock.json files when installing"},e,F,v,l,{name:"--no-audit",description:"Submit audit reports alongside the current npm command to the default registry and all registries configured for scopes"},{name:"--no-bin-links",description:"Tells npm to not create symlinks (or .cmd shims on Windows) for package executables"},{name:"--no-fund",description:"Hides the message at the end of each npm install acknowledging the number of dependencies looking for funding"},f,...n]},{name:["run","run-script"],description:"Run arbitrary package scripts",options:[...n,{name:"--if-present",description:"Npm will not exit with an error code when run-script is invoked for a script that isn't defined in the scripts section of package.json"},{name:"--silent",description:""},l,k,{name:"--",args:{name:"args",isVariadic:!0}}],args:{name:"script",description:"Script to run from your package.json",filterStrategy:"fuzzy",generators:V}},{name:"init",description:"Trigger the initialization",options:[{name:["-y","--yes"],description:"Automatically answer 'yes' to any prompts that npm might print on the command line"},{name:"-w",description:"Create the folders and boilerplate expected while also adding a reference to your project workspaces property",args:{name:"dir"}}]},{name:"access",description:"Set access controls on private packages"},{name:["adduser","login"],description:"Add a registry user account",options:[e,{name:"--scope",description:"Associate an operation with a scope for a scoped registry",args:{name:"scope",description:"Scope name"}}]},{name:"audit",description:"Run a security audit",subcommands:[{name:"fix",description:"If the fix argument is provided, then remediations will be applied to the package tree",options:[f,{name:["-f","--force"],description:"Removes various protections against unfortunate side effects, common mistakes, unnecessary performance degradation, and malicious input",isDangerous:!0},...n]}],options:[...n,{name:"--audit-level",description:"The minimum level of vulnerability for npm audit to exit with a non-zero exit code",args:{name:"audit",suggestions:["info","low","moderate","high","critical","none"]}},{name:"--package-lock-only",description:"Current operation will only use the package-lock.json, ignoring node_modules"},o,v]},{name:"bin",description:"Print the folder where npm will install executables",options:[O]},{name:["bugs","issues"],description:"Report bugs for a package in a web browser",args:{name:"package",isOptional:!0,generators:y,debounce:!0,isVariadic:!0},options:[{name:"--no-browser",description:"Display in command line instead of browser",exclusiveOn:["--browser"]},{name:"--browser",description:"The browser that is called by the npm bugs command to open websites",args:{name:"browser"},exclusiveOn:["--no-browser"]},e]},{name:"cache",description:"Manipulates packages cache",subcommands:[{name:"add",description:"Add the specified packages to the local cache"},{name:"clean",description:"Delete all data out of the cache folder"},{name:"verify",description:"Verify the contents of the cache folder, garbage collecting any unneeded data, and verifying the integrity of the cache index and all cached data"}],options:[{name:"--cache",args:{name:"cache"},description:"The location of npm's cache directory"}]},{name:["ci","clean-install","install-clean"],description:"Install a project with a clean slate",options:[{name:"--audit",description:'When "true" submit audit reports alongside the current npm command to the default registry and all registries configured for scopes',args:{name:"audit",suggestions:["true","false"]},exclusiveOn:["--no-audit"]},{name:"--no-audit",description:"Do not submit audit reports alongside the current npm command",exclusiveOn:["--audit"]},l,k,F,e]},{name:"cit",description:"Install a project with a clean slate and run tests"},{name:"clean-install-test",description:"Install a project with a clean slate and run tests"},{name:"completion",description:"Tab completion for npm"},{name:["config","c"],description:"Manage the npm configuration files",subcommands:[{name:"set",description:"Sets the config key to the value",args:[{name:"key"},{name:"value"}],options:[{name:["-g","--global"],description:"Sets it globally"}]},{name:"get",description:"Echo the config value to stdout",args:{name:"key"}},{name:"list",description:"Show all the config settings",options:[{name:"-g",description:"Lists globally installed packages"},{name:"-l",description:"Also shows defaults"},o]},{name:"delete",description:"Deletes the key from all configuration files",args:{name:"key"}},{name:"edit",description:"Opens the config file in an editor",options:[{name:"--global",description:"Edits the global config"}]}]},{name:"create",description:"Create a package.json file"},{name:["dedupe","ddp"],description:"Reduce duplication in the package tree"},{name:"deprecate",description:"Deprecate a version of a package",options:[e]},{name:"dist-tag",description:"Modify package distribution tags"},{name:["docs","home"],description:"Open documentation for a package in a web browser",args:{name:"package",isOptional:!0,generators:y,debounce:!0,isVariadic:!0},options:[...n,e,{name:"--no-browser",description:"Display in command line instead of browser",exclusiveOn:["--browser"]},{name:"--browser",description:"The browser that is called by the npm docs command to open websites",args:{name:"browser"},exclusiveOn:["--no-browser"]}]},{name:"doctor",description:"Check your npm environment",options:[e]},{name:"edit",description:"Edit an installed package",options:[{name:"--editor",description:"The command to run for npm edit or npm config edit"}]},{name:"explore",description:"Browse an installed package",args:{name:"package",filterStrategy:"fuzzy",generators:T}},{name:"fund",description:"Retrieve funding information"},{name:"get",description:"Echo the config value to stdout"},{name:"help",description:"Get help on npm",args:{name:"term",isVariadic:!0,description:"Terms to search for"},options:[{name:"--viewer",description:"The program to use to view help content",args:{name:"viewer"}}]},{name:"help-search",description:"Search npm help documentation",args:{name:"text",description:"Text to search for"},options:[S]},{name:"hook",description:"Manage registry hooks"},{name:"install-ci-test",description:"Install a project with a clean slate and run tests"},{name:"install-test",description:"Install package(s) and run tests"},{name:"it",description:"Install package(s) and run tests"},{name:"link",description:"Symlink a package folder",args:{name:"path",template:"filepaths"}},{name:"ln",description:"Symlink a package folder"},{name:"logout",description:"Log out of the registry",options:[e,{name:"--scope",description:"Associate an operation with a scope for a scoped registry",args:{name:"scope",description:"Scope name"}}]},{name:["ls","list"],description:"List installed packages",options:z,args:{name:"[@scope]/pkg",isVariadic:!0}},{name:"org",description:"Manage orgs",subcommands:[{name:"set",description:"Add a user to an org or manage roles",args:[{name:"orgname",description:"Organization name"},{name:"username",description:"User name"},{name:"role",isOptional:!0,suggestions:["developer","admin","owner"]}],options:[e,i]},{name:"rm",description:"Remove a user from an org",args:[{name:"orgname",description:"Organization name"},{name:"username",description:"User name"}],options:[e,i]},{name:"ls",description:"List users in an org or see what roles a particular user has in an org",args:[{name:"orgname",description:"Organization name"},{name:"username",description:"User name",isOptional:!0}],options:[e,i,o,u]}]},{name:"outdated",description:"Check for outdated packages",args:{name:"[<@scope>/]<pkg>",isVariadic:!0,isOptional:!0},options:[{name:["-a","-all"],description:"Show all outdated or installed packages"},o,S,u,{name:"-g",description:"Checks globally"},...n]},{name:["owner","author"],description:"Manage package owners",subcommands:[{name:"ls",description:"List all the users who have access to modify a package and push new versions. Handy when you need to know who to bug for help",args:{name:"[@scope/]pkg"},options:[e]},{name:"add",description:"Add a new user as a maintainer of a package. This user is enabled to modify metadata, publish new versions, and add other owners",args:[{name:"user"},{name:"[@scope/]pkg"}],options:[e,i]},{name:"rm",description:"Remove a user from the package owner list. This immediately revokes their privileges",args:[{name:"user"},{name:"[@scope/]pkg"}],options:[e,i]}]},{name:"pack",description:"Create a tarball from a package",args:{name:"[<@scope>/]<pkg>"},options:[o,f,...n,{name:"--pack-destination",description:"Directory in which npm pack will save tarballs",args:{name:"pack-destination",template:["folders"]}}]},{name:"ping",description:"Ping npm registry",options:[e]},{name:"pkg",description:"Manages your package.json",subcommands:[{name:"get",description:"Retrieves a value key, defined in your package.json file. It is possible to get multiple values and values for child fields",args:{name:"field",description:"Name of the field to get. You can view child fields by separating them with a period",isVariadic:!0},options:[o,...n]},{name:"set",description:"Sets a value in your package.json based on the field value. It is possible to set multiple values and values for child fields",args:{name:"field",description:"Name of the field to set. You can set child fields by separating them with a period",isVariadic:!0},options:[o,...n,{name:["-f","--force"],description:"Removes various protections against unfortunate side effects, common mistakes, unnecessary performance degradation, and malicious input. Allow clobbering existing values in npm pkg",isDangerous:!0}]},{name:"delete",description:"Deletes a key from your package.json",args:{name:"key",description:"Name of the key to delete. You can delete child fields by separating them with a period",isVariadic:!0},options:[...n,{name:["-f","--force"],description:"Removes various protections against unfortunate side effects, common mistakes, unnecessary performance degradation, and malicious input. Allow clobbering existing values in npm pkg",isDangerous:!0}]}]},{name:"prefix",description:"Display prefix",options:[{name:["-g","--global"],description:"Print the global prefix to standard out"}]},{name:"profile",description:"Change settings on your registry profile",subcommands:[{name:"get",description:"Display all of the properties of your profile, or one or more specific properties",args:{name:"property",isOptional:!0,description:"Property name"},options:[e,o,u,i]},{name:"set",description:"Set the value of a profile property",args:[{name:"property",description:"Property name",suggestions:["email","fullname","homepage","freenode","twitter","github"]},{name:"value",description:"Property value"}],options:[e,o,u,i],subcommands:[{name:"password",description:"Change your password. This is interactive, you'll be prompted for your current password and a new password"}]},{name:"enable-2fa",description:"Enables two-factor authentication",args:{name:"mode",description:"Mode for two-factor authentication. Defaults to auth-and-writes mode",isOptional:!0,suggestions:[{name:"auth-only",description:"Require an OTP when logging in or making changes to your account's authentication"},{name:"auth-and-writes",description:"Requires an OTP at all the times auth-only does, and also requires one when publishing a module, setting the latest dist-tag, or changing access via npm access and npm owner"}]},options:[e,i]},{name:"disable-2fa",description:"Disables two-factor authentication",options:[e,i]}]},{name:"prune",description:"Remove extraneous packages",args:{name:"[<@scope>/]<pkg>",isOptional:!0},options:[v,f,o,{name:"--production",description:"Remove the packages specified in your devDependencies"},...n]},{name:"publish",description:"Publish a package",args:{name:"tarball|folder",isOptional:!0,description:"A url or file path to a gzipped tar archive containing a single folder with a package.json file inside | A folder containing a package.json file",template:["folders"]},options:[{name:"--tag",description:"Registers the published package with the given tag",args:{name:"tag"}},...n,{name:"--access",description:"Sets scoped package to be publicly viewable if set to 'public'",args:{default:"restricted",suggestions:["restricted","public"]}},f,i]},{name:["rebuild","rb"],description:"Rebuild a package",args:{name:"[<@scope>/]<pkg>[@<version>]"},options:[O,...n,l,{name:"--no-bin-links",description:"Tells npm to not create symlinks (or .cmd shims on Windows) for package executables"}]},{name:"repo",description:"Open package repository page in the browser",args:{name:"package",isOptional:!0,generators:y,debounce:!0,isVariadic:!0},options:[...n,{name:"--no-browser",description:"Display in command line instead of browser",exclusiveOn:["--browser"]},{name:"--browser",description:"The browser that is called by the npm repo command to open websites",args:{name:"browser"},exclusiveOn:["--no-browser"]}]},{name:"restart",description:"Restart a package",options:[l,k,{name:"--",args:{name:"arg",description:"Arguments to be passed to the restart script"}}]},{name:"root",description:"Display npm root",options:[{name:["-g","--global"],description:"Print the effective global node_modules folder to standard out"}]},{name:["search","s","se","find"],description:"Search for packages",args:{name:"search terms",isVariadic:!0},options:[S,o,{name:"--color",description:"Show colors",args:{name:"always",suggestions:["always"],description:"Always show colors"},exclusiveOn:["--no-color"]},{name:"--no-color",description:"Do not show colors",exclusiveOn:["--color"]},u,{name:"--no-description",description:"Do not show descriptions"},{name:"--searchopts",description:"Space-separated options that are always passed to search",args:{name:"searchopts"}},{name:"--searchexclude",description:"Space-separated options that limit the results from search",args:{name:"searchexclude"}},e,{name:"--prefer-online",description:"If true, staleness checks for cached data will be forced, making the CLI look for updates immediately even for fresh package data",exclusiveOn:["--prefer-offline","--offline"]},{name:"--prefer-offline",description:"If true, staleness checks for cached data will be bypassed, but missing data will be requested from the server",exclusiveOn:["--prefer-online","--offline"]},{name:"--offline",description:"Force offline mode: no network requests will be done during install",exclusiveOn:["--prefer-online","--prefer-offline"]}]},{name:"set",description:"Sets the config key to the value"},{name:"set-script",description:"Set tasks in the scripts section of package.json",args:[{name:"script",description:"Name of the task to be added to the scripts section of package.json"},{name:"command",description:"Command to run when script is called"}],options:n},{name:"shrinkwrap",description:"Lock down dependency versions for publication"},{name:"star",description:"Mark your favorite packages",args:{name:"pkg",description:"Package to mark as favorite"},options:[e,{name:"--no-unicode",description:"Do not use unicode characters in the tree output"}]},{name:"stars",description:"View packages marked as favorites",args:{name:"user",isOptional:!0,description:"View packages marked as favorites by <user>"},options:[e]},{name:"start",description:"Start a package",options:[l,k,{name:"--",args:{name:"arg",description:"Arguments to be passed to the start script"}}]},{name:"stop",description:"Stop a package",options:[l,k,{name:"--",args:{name:"arg",description:"Arguments to be passed to the stop script"}}]},{name:"team",description:"Manage organization teams and team memberships",subcommands:[{name:"create",args:{name:"scope:team"},options:[e,i]},{name:"destroy",args:{name:"scope:team"},options:[e,i]},{name:"add",args:[{name:"scope:team"},{name:"user"}],options:[e,i]},{name:"rm",args:[{name:"scope:team"},{name:"user"}],options:[e,i]},{name:"ls",args:{name:"scope|scope:team"},options:[e,o,u]}]},{name:["test","tst","t"],description:"Test a package",options:[l,k]},{name:"token",description:"Manage your authentication tokens",subcommands:[{name:"list",description:"Shows a table of all active authentication tokens",options:[o,u]},{name:"create",description:"Create a new authentication token",options:[{name:"--read-only",description:"This is used to mark a token as unable to publish when configuring limited access tokens with the npm token create command"},{name:"--cidr",description:"This is a list of CIDR address to be used when configuring limited access tokens with the npm token create command",isRepeatable:!0,args:{name:"cidr"}}]},{name:"revoke",description:"Immediately removes an authentication token from the registry. You will no longer be able to use it",args:{name:"idtoken"}}],options:[e,i]},b("uninstall"),b(["r","rm"]),b("un"),b("remove"),b("unlink"),{name:"unpublish",description:"Remove a package from the registry",args:{name:"[<@scope>/]<pkg>[@<version>]"},options:[f,{name:["-f","--force"],description:"Allow unpublishing all versions of a published package. Removes various protections against unfortunate side effects, common mistakes, unnecessary performance degradation, and malicious input",isDangerous:!0},...n]},{name:"unstar",description:"Remove an item from your favorite packages",args:{name:"pkg",description:"Package to unmark as favorite"},options:[e,i,{name:"--no-unicode",description:"Do not use unicode characters in the tree output"}]},{name:["update","upgrade","up"],description:"Update a package",options:[{name:"-g",description:"Update global package"},{name:"--global-style",description:"Causes npm to install the package into your local node_modules folder with the same layout it uses with the global node_modules folder"},{name:"--legacy-bundling",description:"Causes npm to install the package such that versions of npm prior to 1.4, such as the one included with node 0.8, can install the package"},{name:"--strict-peer-deps",description:"If set to true, and --legacy-peer-deps is not set, then any conflicting peerDependencies will be treated as an install failure"},{name:"--no-package-lock",description:"Ignores package-lock.json files when installing"},v,l,{name:"--no-audit",description:"Submit audit reports alongside the current npm command to the default registry and all registries configured for scopes"},{name:"--no-bin-links",description:"Tells npm to not create symlinks (or .cmd shims on Windows) for package executables"},{name:"--no-fund",description:"Hides the message at the end of each npm install acknowledging the number of dependencies looking for funding"},{name:"--save",description:"Update the semver values of direct dependencies in your project package.json"},f,...n]},{name:"version",description:"Bump a package version",options:[...n,o,{name:"--allow-same-version",description:"Prevents throwing an error when npm version is used to set the new version to the same value as the current version"},{name:"--no-commit-hooks",description:"Do not run git commit hooks when using the npm version command"},{name:"--no-git-tag-version",description:"Do not tag the commit when using the npm version command"},{name:"--preid",description:'The "prerelease identifier" to use as a prefix for the "prerelease" part of a semver. Like the rc in 1.2.0-rc.8',args:{name:"prerelease-id"}},{name:"--sign-git-tag",description:"If set to true, then the npm version command will tag the version using -s to add a signature"}]},{name:["view","v","info","show"],description:"View registry info",options:[...n,o]},{name:"whoami",description:"Display npm username",options:[e]}]};var U={name:"ni",description:"Use the right package manager - install",options:[{name:"-g",description:"Operates in 'global' mode, so that packages are installed into the prefix folder instead of the current working directory"},{name:"-D",description:"Package will appear in your `devDependencies`"},{name:"-P",description:"Save package to your `peerDependencies`"},{name:"-O",description:"Save package to your `optionalDependencies`"},{name:"--frozen",description:"Don't generate a lockfile and fail if an update is needed"},{name:"-C",description:"Change directory",args:[{name:"directory",description:"The directory to move",template:"folders"},{name:"target",description:"The target directory",template:"folders"}]},{name:["-h","--help"],description:"Output usage information"}],args:{name:"package",generators:y,debounce:!0,isVariadic:!0}},E=U;export{E as default};
