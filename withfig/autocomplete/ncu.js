var e={cache:{name:"--cache",description:"Cache versions to a local cache file. Default --cacheFile is ~/.ncu-cache.json and default --cacheExpiration is 10 minutes"},cacheClear:{name:"--cacheClear",description:"Clear the default cache, or the cache file specified by --cacheFile"},cacheExpiration:{name:"--cacheExpiration",dependsOn:["--cache"],description:"Cache expiration in minutes. Only works with --cache. (default: 10)",args:{name:"min",default:"10"}},cacheFile:{name:"--cacheFile",dependsOn:["--cache"],description:'Filepath for the cache file. Only works with --cache. (default: "~/.ncu-cache.json")',args:{name:"path",template:"filepaths",default:"~/.ncu-cache.json"}},color:{name:"--color",description:"Force color in terminal"},concurrency:{name:"--concurrency",description:"Max number of concurrent HTTP requests to registry. (default: 8)",args:{name:"n",default:"8"}},configFileName:{name:"--configFileName",description:"Config file name. (default: .ncurc.{json,yml,js,cjs})",args:{name:"s",template:"filepaths",default:".ncurc.{json,yml,js,cjs}"}},configFilePath:{name:"--configFilePath",description:"Directory of .ncurc config file. (default: directory of packageFile)",args:{name:"path",template:"folders",default:"directory of packageFile"}},cwd:{name:"--cwd",description:"Working directory in which npm will be executed",args:{name:"path",template:"folders"}},deep:{name:"--deep",description:"Run recursively in current working directory. Alias of (--packageFile '**/package.json')"},dep:{name:"--dep",description:'Check one or more sections of dependencies only: dev, optional, peer, prod, or packageManager (comma-delimited). (default: ["prod","dev","optional"])',args:{name:"value",suggestions:["dev","optional","peer","prod","packageManager"],default:"prod,dev,optional"}},deprecated:{name:"--deprecated",description:"Include deprecated packages"},doctor:{name:["--doctor","-d"],description:'Iteratively installs upgrades and runs tests to identify breaking upgrades. Requires -u to execute. Run "ncu --help --doctor" for details'},doctorInstall:{name:"--doctorInstall",description:"Specifies the install script to use in doctor mode. (default: npm install/yarn)",args:{name:"command",default:"npm install/yarn"}},doctorTest:{name:"--doctorTest",description:"Specifies the test script to use in doctor mode. (default: npm test)",args:{name:"command",default:"npm test"}},enginesNode:{name:"--enginesNode",description:"Include only packages that satisfy engines.node as specified in the package file"},errorLevel:{name:["--errorLevel","-e"],description:"Set the error level. 1: exits with error code 0 if no errors occur. 2: exits with error code 0 if no packages need updating (useful for continuous integration). (default: 1)",args:{name:"n",default:"1"}},filter:{name:["--filter","-f"],description:"Include only package names matching the given string, wildcard, glob, comma-or-space-delimited list, /regex/, or predicate function",args:{name:"p"}},filterResults:{name:"--filterResults",description:'Filters out upgrades based on a user provided function. Run "ncu --help --filterResults" for details'},filterVersion:{name:"--filterVersion",description:"Filter on package version using comma-or-space-delimited list, /regex/, or predicate function",args:{name:"p"}},format:{name:"--format",description:'Modify the output formatting or show additional information. Specify one or more comma-delimited values: group, ownerChanged, repo, time, lines. Run "ncu --help --format" for details. (default: [])',args:{name:"value",suggestions:["group","ownerChanged","repo","time","lines"]}},global:{name:["--global","-g"],description:"Check global packages instead of in the current project"},groupFunction:{name:"--groupFunction",description:'Customize how packages are divided into groups when using --format group. Run "ncu --help --groupFunction" for details'},help:{name:["--help","-h"],description:"Show help"},interactive:{name:["--interactive","-i"],description:"Enable interactive prompts for each dependency; implies -u unless one of the json options are set"},jsonAll:{name:["--jsonAll","-j"],description:"Output new package file instead of human-readable message"},jsonDeps:{name:"--jsonDeps",description:"Like jsonAll but only lists dependencies, devDependencies, optionalDependencies, etc of the new package data"},jsonUpgraded:{name:"--jsonUpgraded",description:"Output upgraded dependencies in json"},loglevel:{name:["--loglevel","-l"],description:'Amount to log: silent, error, minimal, warn, info, verbose, silly. (default: "warn")',args:{name:"n",suggestions:["silent","error","minimal","warn","info","verbose","silly"],default:"warn"}},mergeConfig:{name:"--mergeConfig",description:"Merges nested configs with the root config file for --deep or --packageFile options. (default: false)"},minimal:{name:["--minimal","-m"],description:"Do not upgrade newer versions that are already satisfied by the version range according to semver"},packageData:{name:"--packageData",description:"Package file data (you can also use stdin)",args:{name:"value"}},packageFile:{name:"--packageFile",description:"Package file(s) location. (default: ./package.json)",args:{name:"path|glob",template:"filepaths",default:"./package.json"}},packageManager:{name:["--packageManager","-p"],description:'Npm, yarn, pnpm, deno, staticRegistry (default: npm). Run "ncu --help --packageManager" for details',args:{name:"s",suggestions:["npm","yarn","pnpm","deno","staticRegistry"],default:"npm"}},peer:{name:"--peer",description:'Check peer dependencies of installed packages and filter updates to compatible versions. Run "ncu --help --peer" for details'},pre:{name:"--pre",description:"Include prerelease versions, e.g. -alpha.0, -beta.5, -rc.2. Automatically set to 1 when --target is newest or greatest, or when the current version is a prerelease. (default: 0)",args:{name:"n",default:"0"}},prefix:{name:"--prefix",description:"Current working directory of npm",args:{name:"path",template:"folders"}},registry:{name:["--registry","-r"],description:'Third-party npm registry. Run "ncu --help --registry" for details',args:{name:"uri"}},reject:{name:["--reject","-x"],description:"Exclude packages matching the given string, wildcard, glob, comma-or-space-delimited list, /regex/, or predicate function",args:{name:"p"}},rejectVersion:{name:"--rejectVersion",description:"Exclude package.json versions using comma-or-space-delimited list, /regex/, or predicate function",args:{name:"p"}},removeRange:{name:"--removeRange",description:"Remove version ranges from the final package version"},retry:{name:"--retry",description:"Number of times to retry failed requests for package info. (default: 3)",args:{name:"n",default:"3"}},root:{name:"--root",description:"Runs updates on the root project in addition to specified workspaces. Only allowed with --workspace or --workspaces. (default: false)"},silent:{name:["--silent","-s"],description:"Don't output anything. Alias for --loglevel silent"},stdin:{name:"--stdin",description:"Read package.json from stdin"},target:{name:["--target","-t"],description:'Determines the version to upgrade to: latest, newest, greatest, minor, patch, @[tag], or [function]. (default: latest) Run "ncu --help --target" for details',args:{name:"value",suggestions:["latest","newest","greatest","minor","patch"],default:"latest"}},timeout:{name:"--timeout",description:"Global timeout in milliseconds. (default: no global timeout and 30 seconds per npm-registry-fetch)",args:{name:"ms"}},upgrade:{name:["--upgrade","-u"],description:"Overwrite package file with upgraded versions instead of just outputting to console"},verbose:{name:"--verbose",description:"Log additional information for debugging. Alias for --loglevel verbose"},version:{name:["--version","-v"],description:"Output the version number of npm-check-updates"},workspace:{name:["--workspace","-w"],description:"Run on one or more specified workspaces. Add --root to also upgrade the root project. (default: [])",args:{name:"s"}},workspaces:{name:["--workspaces","-ws"],description:"Run on all workspaces. Add --root to also upgrade the root project"}},i={name:"ncu",description:"Upgrade your npm package.json dependencies to the latest versions, ignoring specified versions",parserDirectives:{flagsArePosixNoncompliant:!0},args:{name:"filter",description:"A list or regex of package names to check (all others will be ignored)",isOptional:!0,isVariadic:!0},options:[e.cache,e.cacheClear,e.cacheExpiration,e.cacheFile,e.color,e.concurrency,e.configFileName,e.configFilePath,e.cwd,e.deep,e.dep,e.deprecated,e.doctor,e.doctorInstall,e.doctorTest,e.enginesNode,e.errorLevel,e.filter,e.filterResults,e.filterVersion,e.format,e.global,e.groupFunction,e.help,e.interactive,e.jsonAll,e.jsonDeps,e.jsonUpgraded,e.loglevel,e.mergeConfig,e.minimal,e.packageData,e.packageFile,e.packageManager,e.peer,e.pre,e.prefix,e.registry,e.reject,e.rejectVersion,e.removeRange,e.retry,e.root,e.silent,e.stdin,e.target,e.timeout,e.upgrade,e.verbose,e.version,e.workspace,e.workspaces]},n=i;export{n as default};
