var t={name:"string"},e=[{name:"--envfile",description:".env filename to load ENV vars from",args:{name:"string",template:"filepaths"}},{name:["-h","--help"],description:"Help for hasura"},{name:"--log-level",description:"Log level",args:{name:"string",suggestions:["DEBUG","INFO","WARN","ERROR","FATAL"],default:"INFO"}},{name:"--no-color",description:"Do not colorize output"},{name:"--project",description:"Directory where commands are executed",args:{name:"string",template:"folders"}},{name:"--skip-update-check",description:"Skip automatic update check on command execution"}],i={name:"--admin-secret",description:"Admin secret for Hasura GraphQL engine",args:t},o={name:"--certificate-authority",description:"Path to a cert file for the certificate authority",args:{name:"string",template:"filepaths"}},n={name:"--endpoint",description:"Http(s) endpoint for Hasura GraphQL engine (env `HASURA_GRAPHQL_ENDPOINT`)",args:t},s={name:"--insecure-skip-tls-verify",description:"Skip TLS verification and disable cert checking"},a=[i,o,n,s],r={name:"hasura",description:"Hasura GraphQL engine command line tool",subcommands:[{name:"actions",description:"Manage Hasura actions",subcommands:[{name:"codegen",description:"Generate code for actions",options:[{name:"--derive-from",description:"Derive action from a hasura operation",args:t},...a,...e],args:{name:"action name",isOptional:!0,isVariadic:!0}},{name:"create",description:"Create a Hasura action",options:[{name:"--derive-from",description:"Derive action from a Hasura operation",args:t},{name:"--kind",description:"Kind to use in action",args:{name:"string",isOptional:!0,suggestions:["synchronous","asynchronous"]}},{name:"--webhook",description:"Webhook to use in action",args:{name:"webhook",isOptional:!0}},{name:"--with-codegen",description:"Create action along with codegen"},...a,...e],args:{name:"action name",isOptional:!0}},{name:"use-codegen",description:"Use the codegen to generate code for Hasura actions",options:[{name:"--framework",description:"Framework to be used by codegen",args:t},{name:"--output-dir",description:"Directory to create the codegen files",args:{name:"string",template:"folders"}},{name:"--with-starter-kit",description:"Clone starter kit for a framework"},...a,...e]}],options:[...a,...e]},{name:"completions",description:"Generate auto completion code",options:[{name:"--file",description:"File to which output has to be written",args:{name:"string",template:"filepaths"}},...e],args:{name:"shell",isOptional:!0,suggestions:["bash","zsh"]}},{name:"console",description:"Open the console to manage the database and try out APIs",options:[{name:"--address",description:"Address to serve console and migration API from",args:{name:"string",default:"localhost",isOptional:!0}},{name:"--api-port",description:"Port for serving migrate api",args:{name:"string",isOptional:!0,default:"9693"}},{name:"--browser",description:"Open console in a specific browser",args:t},{name:"--console-port",description:"Port for serving console",args:{name:"string",default:"9695",isOptional:!0}},{name:"--insecure-skip-tls-verify",description:"Skip TLS verification and disable cert checking"},{name:"--no-browser",description:"Do not automatically open console in browser"},{name:"--static-dir",description:"Directory where static assets mentioned in the console html template can be served from",args:{name:"string",template:"folders"}},{name:"--use-server-assets",description:"When rendering console, use assets provided by HGE server"},...a,...e]},{name:"init",description:"Initialize a directory for Hasura GraphQL engine migrations",options:[i,n,{name:"--install-manifest",description:"Install manifest to be cloned",args:t},{name:"--version",description:"Config version to be used",args:{name:"int",default:"3"}}],args:{name:"directory name",isOptional:!0}},{name:["md","metadata"],subcommands:[{name:"apply",description:"Apply Hasura metadata on a database",options:[{name:"--dry-run",description:"Show metadata generated from project directory without applying to server"},{name:["-o","--output"],description:"Specify an output format to show applied metadata",args:{name:"string",isOptional:!0,suggestions:["json","yaml"],default:"json"}},...a,...e]},{name:"clear",description:"Clear Hasura GraphQL engine metadata on the database",options:[...a,...e]},{name:"diff",description:"Show a highlighted diff of Hasura metadata",options:[...a,...e],args:[{name:"file1",isOptional:!0,template:"filepaths"},{name:"file2",isOptional:!0,template:"filepaths"}]},{name:"export",description:"Export Hasura GraphQL engine metadata from the database",options:[{name:["-o","--output"],description:"Specify an output format for exported metadata",args:t}]},{name:["ic","inconsistency","inconsistencies"],description:"Manage inconsistent objects in Hasura metadata",subcommands:[{name:"drop",description:"Drop inconsistent objects from the metadata",options:[...a,...e]},{name:["ls","list"],description:"List all inconsistent objects from the metadata",options:[...a,...e]},{name:"status",description:"Check if the metadata is inconsistent or not",options:[...a,...e]}],options:[...a,...e]},{name:"reload",description:"Reload Hasura GraphQL engine metadata on the database",options:[...a,...e]}],options:[...a,...e]},{name:"migrate",description:"Manage migrations on the database",subcommands:[{name:"apply",description:"Apply migrations on the database",options:[{name:"--up",description:"Apply all or N up migration steps",args:{name:"string",isOptional:!0}},{name:"--down",description:"Apply all or N up migration steps",args:{name:"string",isOptional:!0}},{name:"goto",description:"Apply migration chain up to to the version specified",args:t},{name:"--version",description:"Only apply this particular migration",args:t},{name:"--skip-execution",description:"Skip executing the migration action, but mark them as applied"},{name:"--type",description:"Type of migration to be used with version flag",args:{name:"string",suggestions:["up","down"],default:"up"}},{name:"--dry-run",description:"Print the names of migrations which are going to be applied"},{name:"--all-databases",description:"Set this flag to attempt to apply migrations on all databases present on server"},...a,...e]},{name:"create",description:"Create files required for a migration",options:[{name:"--down-sql",description:"Sql string/query that is to be used to create a down migration",args:t},{name:"--from-server",description:"Take pg_dump of schema and Hasura metadata from the server"},{name:"--metadata-from-file",description:"Path to a hasura metadata file to be used for up actions",args:{name:"string",template:"filepaths"}},{name:"--metadata-from-server",description:"Take metadata from the server and write it as an up migration file"},{name:"--schema",description:"Name of Postgres schema to export as a migration",args:{name:"strings",isVariadic:!0}},{name:"--sql-from-file",description:"Path to an SQL file which contains the SQL statements",args:{name:"string",template:"filepaths"}},{name:"--sql-from-server",description:"Take pg_dump from the server and save it as a migration"},{name:"--up-sql",description:"Sql string/query that is to be used to create an up migration",args:t},...a,...e],args:{name:"migration name",isOptional:!0}},{name:"delete",description:"Clear migrations from local project and server",options:[{name:"--all",description:"Clears all migrations for selected database"},{name:"--force",description:"Executes operation without any confirmation",isDangerous:!0},{name:"--version",description:"Deletes the specified version in migrations",args:{name:"uint"}},...a,...e]},{name:"squash",description:"Squash multiple migrations into a single one",options:[{name:"--delete-source",description:"Delete the source files after squashing without any confirmation"},{name:"--from",description:"Start squashing from this version",args:{name:"uint"}},{name:"--name",description:"Name for the new squashed migration",args:{name:"string",default:"squashed"}},...a,...e]},{name:"status",description:"Display current status of migrations on a database",...a,...e}],options:[...a,...e]},{name:["plugin","plugins"],description:"Manage plugins for the CLI",subcommands:[{name:"install",description:"Install a plugin from the index",options:[{name:"--version",description:"Version to be installed",args:t},...e],args:{name:"plugin name",isOptional:!0}},{name:"list",description:"List all available plugins from index, versions and installation status",options:[{name:"--dont-update-index",description:"Do not update the plugin index local cache, only show the list"},...e]},{name:"uninstall",description:"Uninstall a plugin",options:e,args:{name:"plugin name",isOptional:!0}},{name:"upgrade",description:"Upgrade a plugin to a newer version",options:[{name:"--version",description:"Version to be upgraded",args:t},...e],args:{name:"plugin name",isOptional:!0}}],options:e},{name:"scripts",description:"Execute helper scripts to manage Hasura projects",subcommands:[{name:"update-project-v2",description:"Update the Hasura project from config v1 to v2",options:[{name:"--metadata-dir",description:"Metadata directory",args:{name:"string",template:"folders"}},...a,...e]},{name:"update-project-v3",description:"Update the Hasura project from config v2 to v3",options:[{name:"--database-name",description:"Database name for which the current migrations / seeds belong to",args:t},{name:"--force",description:"Do not ask for confirmation",isDangerous:!0},{name:"--move-state-only",description:"Do only a state migration from old hdb_catalog"},...a,...e]}],options:e},{name:["sd","seed","seeds"],description:"Manage seed data",subcommands:[{name:"apply",description:"Apply seed data",options:[{name:["-f","--file"],description:"Seed file to apply",args:{name:"string array",template:"filepaths"}},...a,...e]},{name:"create",description:"Create a new seed file",options:[{name:"--from-table",description:"Name of table from which seed file has to be initialized",args:{name:"string array"}},...a,...e],args:{name:"seed name"}}],options:[{name:"--database-name",description:"Database name for which the current migrations / seeds belong to",args:t},...a,...e]},{name:"update-cli",description:"Update the CLI to latest or a specific version",options:[{name:"--version",description:"A specific version to install",args:{name:"string",isOptional:!0}},...e]},{name:"version",description:"Print the CLI version",options:e}],options:e},p=r;export{p as default};
