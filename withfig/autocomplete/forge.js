var e={name:"@forge/cli",description:"A command line interface for managing Atlassian-hosted apps",subcommands:[{name:"autocomplete",description:"Configures autocomplete for the Forge CLI",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-h","--help"],description:"Display help for command",priority:49}],args:{name:"install|uninstall",suggestions:["install","uninstall"]},priority:10},{name:"create",description:"Create an app",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-t","--template"],description:"Specify the template to use",args:{name:"template name"}},{name:["-d","--directory"],description:"Specify the directory to create (uses the template name by default)",args:{name:"directory name"}},{name:["-h","--help"],description:"Display help for command",priority:49}],args:{name:"name",isOptional:!0},icon:"\u{1F195}",priority:60},{name:"deploy",description:"Deploy your app to an environment",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-f","--no-verify"],description:"Disable pre-deployment checks"},{name:["-e","--environment"],description:"Specify the environment from options: development, staging, production (default: development)",args:{name:"environment",isOptional:!0}},{name:"--non-interactive",description:"Run the command without input prompts"},{name:["-h","--help"],description:"Display help for command",priority:49}],icon:"\u{1F680}",priority:60},{name:"feedback",description:"Let us know what you think about Forge",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-h","--help"],description:"Display help for command",priority:49}],icon:"\u{1F4E2}"},{name:"install",description:"Manage app installations",subcommands:[{name:"list",description:"List app installations",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-h","--help"],description:"Display help for command",priority:49}]},{name:"help",description:"Display help for command",priority:49,args:{name:"command",isOptional:!0}}],options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-e","--environment"],description:"Specify the environment from options: development, staging, production (default: development)",args:{name:"environment",isOptional:!0}},{name:["-s","--site"],description:"Site URL (example.atlassian.net)",args:{name:"site",isOptional:!0}},{name:["-p","--product"],description:"Product (Jira, Confluence, Compass)",args:{name:"product",isOptional:!0}},{name:"--upgrade",description:"Upgrade an existing installation"},{name:"--confirm-scopes",description:"Skip confirmation of scopes for the app before installing or upgrading the app"},{name:"--non-interactive",description:"Run the command without input prompts"},{name:["-h","--help"],description:"Display help for command",priority:49}],icon:"\u{1F4BF}",priority:60},{name:"lint",description:"Check the source files for common errors",options:[{name:"--verbose",description:"Enable verbose mode"},{name:"--fix",description:"Attempt to automatically fix any issues encountered"},{name:["-e","--environment"],description:"Specify the environment from options: development, staging, production (default: development)",args:{name:"environment",isOptional:!0}},{name:["-h","--help"],description:"Display help for command",priority:49}],icon:"\u{1F9F9}"},{name:"login",description:"Log in to your Atlassian account",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-u","--email"],description:"Specify the email to use",args:{name:"user email"}},{name:["-t","--token"],description:"Specify the API token to use",args:{name:"api token"}},{name:"--non-interactive",description:"Run the command without input prompts"},{name:["-h","--help"],description:"Display help for command",priority:49}],icon:"\u{1F510}"},{name:"logout",description:"Log out of your Atlassian account",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-h","--help"],description:"Display help for command",priority:49}],icon:"\u{1F513}"},{name:"logs",description:"View app logs",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-e","--environment"],description:"Specify the environment from options: development, staging, production (default: development)",args:{name:"environment",isOptional:!0}},{name:["-i","--invocation"],description:"View logs for a given invocation ID",args:{name:"invocation"}},{name:["-n","--limit"],description:"Number of invocations to return",args:{name:"limit",default:"20"}},{name:["-s","--since"],description:"View logs since the specified time. valid formats: YYYY-MM-DD, ISO 8061 timestamp or a relative time (e.g: 5m, 10h, 2d)",args:{name:"since"}},{name:["-g","--grouped"],description:"Group logs by invocation ID"},{name:["-h","--help"],description:"Display help for command",priority:49}],icon:"\u{1F4C3}"},{name:"providers",description:"Manage external providers",subcommands:[{name:"configure",description:"Configure provider credentials",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-s","--oauth-client-secret"],description:"Client secret",args:{name:"oauthClientSecret",isOptional:!0}},{name:["-e","--environment"],description:"Specify the environment from options: development, staging, production (default: development)",args:{name:"environment",isOptional:!0}},{name:["-h","--help"],description:"Display help for command",priority:49}],args:{name:"providerKey",isOptional:!0}},{name:"help",description:"Display help for command",priority:49,args:{name:"command",isOptional:!0}}],options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-h","--help"],description:"Display help for command",priority:49}],icon:"\u{1F465}"},{name:"register",description:"Register an app you didn't create so you can run commands for it",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-h","--help"],description:"Display help for command",priority:49}],args:{name:"name",isOptional:!0},icon:"\u{1F4DD}"},{name:"settings",description:"Manage Forge CLI settings",subcommands:[{name:"list",description:"List Forge CLI settings",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-h","--help"],description:"Display help for command",priority:49}]},{name:"set",description:"Update Forge CLI setting (choices: usage-analytics)",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-h","--help"],description:"Display help for command",priority:49}],args:[{name:"setting"},{name:"boolean"}]},{name:"help",description:"Display help for command",priority:49,args:{name:"command",isOptional:!0}}],options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-h","--help"],description:"Display help for command",priority:49}],icon:"\u2699\uFE0F"},{name:"tunnel",description:"Start a tunnel to connect your local code with the app running in the development environment",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-d","--debug"],description:"Enable debugger mode"},{name:["-h","--help"],description:"Display help for command",priority:49}],icon:"\u{1F52E}",priority:60},{name:"uninstall",description:"Uninstall the app from an Atlassian site",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-h","--help"],description:"Display help for command",priority:49}],args:{name:"installationId",isOptional:!0},icon:"\u274C"},{name:"variables",description:"Manage app environment variables",subcommands:[{name:"set",description:"Set an environment variable",options:[{name:"--verbose",description:"Enable verbose mode"},{name:"--encrypt",description:"Encrypt variable"},{name:["-e","--environment"],description:"Specify the environment from options: development, staging, production (default: development)",args:{name:"environment",isOptional:!0}},{name:["-h","--help"],description:"Display help for command",priority:49}],args:[{name:"key",isOptional:!0},{name:"value",isOptional:!0}]},{name:"unset",description:"Remove an environment variable",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-e","--environment"],description:"Specify the environment from options: development, staging, production (default: development)",args:{name:"environment",isOptional:!0}},{name:["-h","--help"],description:"Display help for command",priority:49}],args:{name:"key"}},{name:"list",description:"List the environment variables",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-e","--environment"],description:"Specify the environment from options: development, staging, production (default: development)",args:{name:"environment",isOptional:!0}},{name:["-h","--help"],description:"Display help for command",priority:49}]},{name:"help",description:"Display help for command",priority:49,args:{name:"command",isOptional:!0}}],options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-h","--help"],description:"Display help for command",priority:49}],icon:"\u{1F170}\uFE0F"},{name:"webtrigger",description:"Get a web trigger URL",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-f","--functionKey"],description:"Web trigger key from the manifest.yml file",args:{name:"function",isOptional:!0}},{name:["-h","--help"],description:"Display help for command",priority:49}],args:{name:"installationId",isOptional:!0},icon:"\u{1F310}"},{name:"whoami",description:"Display the account information of the logged in user",options:[{name:"--verbose",description:"Enable verbose mode"},{name:["-h","--help"],description:"Display help for command",priority:49}],icon:"\u{1F464}"},{name:"help",description:"Display help for command",priority:49,args:{name:"command",isOptional:!0},icon:"\u2753"}],options:[{name:["-V","--version"],description:"Output the version number"},{name:"--verbose",description:"Enable verbose mode"},{name:["-h","--help"],description:"Display help for command",priority:49}]},n=e;export{n as default};
