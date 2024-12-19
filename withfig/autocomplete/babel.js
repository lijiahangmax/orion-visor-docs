var e={name:"babel",icon:"https://raw.githubusercontent.com/babel/logo/master/babel.png",options:[{name:["-f","--filename"],description:"The filename to use when reading from stdin. This will be used in source-maps, errors etc",args:{name:"filename"}},{name:"--presets",description:"A comma-separated list of preset names",args:{name:"list"}},{name:"--plugins",description:"A comma-separated list of plugin names",args:{name:"list"}},{name:"--config-file",description:"Path to a .babelrc file to use",args:{name:"path",template:"filepaths"}},{name:"--env-name",description:"The name of the 'env' to use when loading configs and plugins. Defaults to the value of BABEL_ENV, or else NODE_ENV, or else 'development'",args:{name:"env",suggestions:["production","development"]}},{name:"--root-mode",description:"The project-root resolution mode",args:{name:"mode",suggestions:[{name:"root",description:'Passes the "root" value through as unchanged'},{name:"upward",description:'Walks upward from the "root" directory, looking for a directory containing a babel.config.json file, and throws an error if a babel.config.json is not found'},{name:"upward-optional",description:'Walk upward from the "root" directory, looking for a directory containing a babel.config.json file, and falls back to "root" if a babel.config.json is not found'}],default:"root"}},{name:"--source-type",args:{name:"type",suggestions:["script","module"]}},{name:"--no-babelrc",description:"Whether or not to look up .babelrc and .babelignore files"},{name:"--ignore",description:"List of glob paths to **not** compile",args:{name:"list"}},{name:"--only",description:"List of glob paths to **only** compile",args:{name:"list"}},{name:"--no-highlight-code",description:"Enable or disable ANSI syntax highlighting of code frames"},{name:"--no-comments",description:"Write comments to generated output"},{name:"--retain-lines",description:"Retain line numbers. This will result in really ugly code"},{name:"--compact",description:"Do not include superfluous whitespace characters and line terminators",args:{name:"mode",suggestions:["true","false","auto"]}},{name:"--minified",description:"Save as many bytes when printing. (false by default)"},{name:"--auxiliary-comment-before",description:"Print a comment before any injected non-user code",args:{name:"comment"}},{name:"--auxiliary-comment-after",description:"Print a comment after any injected non-user code",args:{name:"comment"}},{name:["-s","--source-maps"],args:{name:"mode",suggestions:["true","false","inline","both"]}},{name:"--source-map-target",description:"Set `file` on returned source map",args:{name:"string"}},{name:"--source-file-name",description:"Set `sources[0]` on returned source map",args:{name:"string"}},{name:"--source-root",description:"The root from which all sources are relative",args:{name:"filename"}},{name:["-x","--extensions"],description:"Comma separated list of extensions to compile when a directory has been the input. [js,ts,jsx,tsx]",args:{name:"extensions"}},{name:"--keep-file-extension",description:"Preserve the file extensions of the input files"},{name:["-w","--watch"],description:"Recompile files on changes"},{name:"--skip-initial-build",description:"Do not compile files before watching"},{name:["-o","--out-file"],description:"Compile all input files into a single file",args:{name:"file",template:"filepaths"}},{name:["-d","--out-dir"],description:"Compile an input directory of modules into an output directory",args:{name:"directory",template:"folders"}},{name:"--relative",description:"Compile into an output directory relative to input directory or file",dependsOn:["--out-dir"]},{name:["-D","--copy-files"],description:"When compiling a directory copy over non-compilable files"},{name:"--include-dotfiles",description:"Include dotfiles when compiling and copying non-compilable files"},{name:"--no-copy-ignored",description:"Exclude ignored files when copying non-compilable files"},{name:"--verbose",description:"Log everything. This option conflicts with --quiet",exclusiveOn:["--quiet"]},{name:"--quiet",description:"Don't log anything. This option conflicts with --verbose",exclusiveOn:["--verbose"]},{name:"--delete-dir-on-start",description:"Delete the out directory before compilation"},{name:"--out-file-extension",description:"Use a specific extension for the output files",args:{name:"extension",suggestions:[".es6",".js",".es",".jsx",".mjs"]}},{name:["-V","--version"],description:"Output the version number"},{name:["-h","--help"],description:"Output usage information"}]},n=e;export{n as default};
