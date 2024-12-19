function s(a){return new Date(a*1e3).toLocaleString()}var i={name:"help",description:"Display help for command",priority:49,args:{name:"command",isOptional:!0,template:"help"}},r={script:["dcli","devices","list","--json"],postProcess:function(a){try{let t=JSON.parse(a);return t.sort((e,n)=>n.lastActivityDateUnix-e.lastActivityDateUnix),t.map(e=>({name:e.deviceName,description:`Last activity: ${s(e.lastActivityDateUnix)}`,insertValue:e.deviceId}))}catch{return[]}}},o={script:["dcli","team","credentials","list","--json"],postProcess:function(a){try{let t=JSON.parse(a);return t.sort((e,n)=>n.creationDateUnix-e.creationDateUnix),t.map(e=>({name:`${e.deviceName} (${e.accessKey})}`,description:`Created: ${s(e.creationDateUnix)}`,insertValue:e.accessKey}))}catch{return[]}}},c={name:"dcli",description:"Dashlane CLI",icon:"https://avatars.githubusercontent.com/u/2639205?s=200&v=4",subcommands:[{name:["sync","s"],description:"Manually synchronize the local vault with Dashlane"},{name:"read",description:"Retrieve a secret from the local vault via its path",args:{name:"path",description:"Path to the secret (dl://<title>/<field> or dl://<id>/<field>)"}},{name:"exec",description:"Execute a command with secrets injected into the environment variables (-- <command>)",insertValue:"exec --",args:{name:"command",isCommand:!0}},{name:"inject",description:"Inject secrets into a templated string or file (uses stdin and stdout by default)",options:[{name:["-i","--in"],description:"Input file of a template to inject the credential into",args:{name:"file",template:"filepaths"}},{name:["-o","--out"],description:"Output file to write the injected template to",args:{name:"file",template:"filepaths"}}]},{name:["password","p"],description:"Retrieve a password from the local vault and copy it to the clipboard",options:[{name:["-o","--output"],description:"How to print the passwords. The JSON option outputs all the matching credentials",args:{name:"type",suggestions:["clipboard","password","json"],default:"clipboard"}}],args:{name:"filters",description:"Filter credentials based on any parameter using <param>=<value>; if <param> is not specified in the filter, will default to url and title",isOptional:!0,isVariadic:!0}},{name:["otp","o"],description:"Retrieve an OTP code from local vault and copy it to the clipboard",options:[{name:"--print",description:"Prints just the OTP code, instead of copying it to the clipboard"}],args:{name:"filters",description:"Filter credentials based on any parameter using <param>=<value>; if <param> is not specified in the filter, will default to url and title",isOptional:!0,isVariadic:!0}},{name:["note","n"],description:"Retrieve a secure note from the local vault and open it",options:[{name:["-o","--output"],description:"How to print the notes. The JSON option outputs all the matching notes",args:{name:"type",suggestions:["text","json"],default:"text"}}],args:{name:"filters",description:"Filter notes based on any parameter using <param>=<value>; if <param> is not specified in the filter, will default to title only",isOptional:!0,isVariadic:!0}},{name:["accounts","a"],description:"Manage your accounts connected to the CLI",subcommands:[{name:"whoami",description:"Prints the login email of the account currently in use"},i]},{name:["devices","d"],description:"Operations on devices",subcommands:[{name:"list",description:"Lists all registered devices that can access your account",options:[{name:"--json",description:"Output in JSON format"}]},{name:"remove",description:'De-registers a list of devices. De-registering the CLI will implies doing a "dcli logout"',options:[{name:"--all",description:"Remove all devices including this one (dangerous)",isDangerous:!0},{name:"--others",description:"Remove all other devices",isDangerous:!0}],args:{name:"device ids",description:"Ids of the devices to remove",isOptional:!0,isVariadic:!0,generators:r}},{name:"register",description:"Registers a new device to be used in non-interactive mode",options:[{name:"--json",description:"Output in JSON format"}],args:{name:"device name",description:"Name of the device to register"}},i]},{name:["team","t"],description:"Team related commands",subcommands:[{name:["credentials","c"],description:"Team credentials operations",subcommands:[{name:"generate",description:"Generate new team credentials",options:[{name:"--json",description:"Output in JSON format"}]},{name:"list",description:"List all team credentials",options:[{name:"--json",description:"Output in JSON format"}]},{name:"revoke",description:"Revoke credentials by access key",isDangerous:!0,args:{name:"accessKey",description:"Access key of the credentials to revoke",generators:o}},i]},{name:["members","m"],description:"List team members",options:[{name:"--csv",description:"Output in CSV format"},{name:"--human-readable",description:"Output dates in human readable format"}],args:[{name:"page",description:"Page number",isOptional:!0},{name:"limit",description:"Limit of members per page",isOptional:!0}]},{name:["logs","l"],description:"List audit logs",options:[{name:"--start",description:"Start timestamp in ms",args:{name:"start",default:"0"}},{name:"--end",description:'End timestamp in ms (use "now" to get the current timestamp)',args:{name:"end",default:"now"}},{name:"--type",description:"Log type",args:{name:"type"}},{name:"--category",description:"Log category",args:{name:"category"}},{name:"--csv",description:"Output in CSV format"},{name:"--human-readable",description:"Output dates in human readable format"}]},{name:["report","r"],description:"Get team report",args:{name:"days",description:"Number of days in history",isOptional:!0}},i]},{name:["configure","c"],description:"Configure the CLI",subcommands:[{name:"disable-auto-sync",description:"Disable automatic synchronization which is done once per hour (default: false)",args:{name:"boolean",suggestions:["true","false"]}},{name:"save-master-password",description:"Should the encrypted master password be saved and the OS keychain be used (default: true)",args:{name:"boolean",suggestions:["true","false"]}},i]},{name:"backup",description:"Backup your local vault (will use the current directory by default)",options:[{name:"--directory",description:'Output directory of the backup ("." by default)',args:{name:"directory",template:"folders"}},{name:"--filename",description:'Filename of the backup ("dashlane-backup-<unix_timestamp>.db by default")',args:{name:"filename"}}]},{name:"logout",description:"Logout and clean your local database and OS keychain"},i],options:[{name:["-h","--help"],description:"Display help for command",priority:49,isPersistent:!0},{name:["-V","--version"],description:"Output the version number"},{name:"--debug",description:"Print debug messages",priority:48,isPersistent:!0}]},d=c;export{d as default};
