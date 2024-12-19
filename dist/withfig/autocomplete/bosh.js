var e={name:"PATH",template:"filepaths"},s={script:["bosh","--json","deployments"],postProcess:function(n){if(n.startsWith("fatal:"))return[];try{return JSON.parse(n).Tables[0].Rows.forEach(a=>({name:a.name,description:"Deployment"}))}catch{return[]}}},i={name:"bosh",description:"Bosh cli to managed your bosh deployment",subcommands:[{name:"add-blob",description:"Add blob",args:[{name:"PATH",template:"filepaths"},{name:"BLOBS-PATH",template:"filepaths"}]},{name:"unignore",description:"Unignore an instance",args:{name:"INSTANCE-GROUP/INSTANCE-ID",isOptional:!0}},{name:"update-cloud-config",description:"Update current cloud config",args:e},{name:"update-config",description:"Update config",args:{...e,isOptional:!0}},{name:"update-cpi-config",description:"Update current CPI config",args:e},{name:"update-resurrection",description:"Enable/disable resurrection",args:{suggestions:["on","off"]}},{name:"update-runtime-config",description:"Update current runtime config",args:e},{name:"upload-blobs",description:"Upload blobs"},{name:"upload-release",description:"Upload release",args:{name:"URL",isOptional:!0}},{name:"upload-stemcell",description:"Upload stemcell",args:{name:"fileOrUrl",template:"filepaths"}},{name:"variables",description:"List variables"},{name:"vendor-package",description:"Vendor package",args:[{name:"PACKAGE"},{name:"SRC-DIR",template:"folders"}]},{name:"vms",description:"List all VMs in all deployments"},{name:"orphan-disk",description:"Orphan disk",args:{name:"CID"}},{name:"networks",description:"List networks"},{name:"manifest",description:"Show deployment manifest"},{name:"tasks",description:"List running or recent tasks",args:{name:"ID",isOptional:!0}},{name:"task",description:"Show task status and start tracking its output"},{name:"take-snapshot",description:"Take snapshot",args:{name:"INSTANCE-GROUP/INSTANCE-ID",isOptional:!0}},{name:"sync-blobs",description:"Sync blobs"},{name:"stop-env",description:"Stop BOSH environment"},{name:"stop",description:"Stop instance(s)",args:{name:"INSTANCE-GROUP/INSTANCE-ID",isOptional:!0}},{name:"stemcells",description:"List stemcells"},{name:"start-env",description:"Start BOSH environment"},{name:"start",description:"Start instance(s)",args:{name:"INSTANCE-GROUP/INSTANCE-ID",isOptional:!0}},{name:"ssh",description:"SSH into instance(s)",args:{name:"INSTANCE-GROUP/INSTANCE-ID",isOptional:!0}},{name:"snapshots",description:"List snapshots",args:{name:"INSTANCE-GROUP/INSTANCE-ID",isOptional:!0}},{name:"sha2ify-release",description:"Convert release tarball to use SHA256"},{name:"sha1ify-release",description:"Convert release tarball to use SHA1"},{name:"runtime-config",description:"Show current runtime config"},{name:"run-errand",description:"Run errand",args:{name:"NAME"}},{name:"restart",description:"Restart instance(s)",args:{name:"INSTANCE-GROUP/INSTANCE-ID",isOptional:!0}},{name:"reset-release",description:"Reset release"},{name:"repack-stemcell",description:"Repack stemcell",args:[{name:"Path-to-Stemcell",template:"filepaths"},{name:"Path-to-Result",template:"filepaths"}]},{name:"remove-blob",description:"Remove blob"},{name:"releases",description:"List releases"},{name:"recreate",description:"Recreate instance(s)",args:{name:"INSTANCE-GROUP/INSTANCE-ID",isOptional:!0}},{name:"orphaned-vms",description:"List all the orphaned VMs in all deployments"},{name:"scp",description:"SCP to/from instance(s)",args:{name:"PATH...",isVariadic:!0,template:"filepaths"}},{name:"help",description:"Show this help message"},{name:"ignore",description:"Ignore an instance",args:{name:"INSTANCE-GROUP/INSTANCE-ID"}},{name:"init-release",description:"Initialize release"},{name:"inspect-local-release",description:"Display information from release metadata",args:e},{name:"inspect-local-stemcell",description:"Display information from stemcell metadata",args:{name:"PATH-TO-STEMCELL",template:"filepaths"}},{name:"inspect-release",description:"List release contents such as jobs",args:{name:"NAME/VERSION"}},{name:"instances",description:"List all instances in a deployment"},{name:"interpolate",description:"Interpolates variables into a manifest",args:e},{name:"locks",description:"List current locks"},{name:"log-in",description:"Login"},{name:"log-out",description:"Log out"},{name:"logs",description:"Fetch logs from instance(s)",args:{name:"INSTANCE-GROUP/INSTANCE-ID",isOptional:!0}},{name:"deployment",description:"Show deployment information"},{name:"deployments",description:"List deployments"},{name:"diff-config",description:"Diff two configs by ID or content"},{name:"disks",description:"List disks"},{name:"environment",description:"Show environment"},{name:"environments",description:"List environments"},{name:"errands",description:"List errands"},{name:"event",description:"Show event details",args:{name:"ID"}},{name:"events",description:"List events"},{name:"export-release",description:"Export the compiled release to a tarball",args:[{name:"NAME/VERSION"},{name:"OS/VERSION"}]},{name:"finalize-release",description:"Create final release from dev release tarball",args:e},{name:"generate-job",description:"Generate job",args:{name:"NAME"}},{name:"generate-package",description:"Generate package",args:{name:"NAME"}},{name:"create-release",description:"Create release",args:{...e,isOptional:!0}},{name:"curl",description:"Make an HTTP request to the Director",args:e},{name:"delete-config",description:"Delete config",args:{name:"ID",isOptional:!0}},{name:"delete-deployment",description:"Delete deployment"},{name:"delete-disk",description:"Delete disk",args:{name:"CID"}},{name:"delete-env",description:"Delete BOSH environment",args:e},{name:"delete-network",description:"Delete network",args:{name:"NAME"}},{name:"delete-release",description:"Delete release",args:{name:"NAME/VERSION"}},{name:"delete-snapshot",description:"Delete snapshot",args:{name:"CID"}},{name:"delete-snapshots",description:"Delete all snapshots in a deployment"},{name:"delete-stemcell",description:"Delete stemcell",args:{}},{name:"delete-vm",description:"Delete VM",args:{name:"CID"}},{name:"deploy",description:"Update deployment",args:e},{name:"alias-env",description:"Alias environment to save URL and CA certificate",args:{}},{name:"attach-disk",description:"Attach disk to an instance",args:[{name:"INSTANCE-GROUP/INSTANCE-ID"},{name:"DISK-CID"}]},{name:"blobs",description:"List blobs"},{name:"cancel-task",description:"Cancel task at its next checkpoint",args:{name:"ID"}},{name:"cancel-tasks",description:"Cancel tasks at their next checkpoints"},{name:"clean-up",description:"Clean up old unused resources except orphaned disks"},{name:"cloud-check",description:"Cloud consistency check and interactive repair"},{name:"cloud-config",description:"Show current cloud config"},{name:"config",description:"Show current config for either ID or both type and name",args:{name:"ID",isOptional:!0}},{name:"configs",description:"List configs"},{name:"cpi-config",description:"Show current CPI config"},{name:"create-env",description:"Create or update BOSH environment",args:e}],options:[{name:"--version",description:"Show CLI version"},{name:"--config",description:"Config file path (default: ~/.bosh/config)",args:e},{name:["-e","--environment"],description:"Director environment name or URL",args:{name:"name"}},{name:"--ca-cert",description:"Director CA certificate path or value",args:e},{name:"--sha2",description:"Use SHA256 checksums"},{name:"--parallel",description:"The max number of parallel operations (default: 5)",args:{name:"amount",suggestions:Array.from({length:20},(n,t)=>t+1).map(n=>n.toString())}},{name:"--client",description:"Override username or UAA client [$BOSH_CLIENT]",args:{name:"name"}},{name:"--client-secret",description:"Override password or UAA client secret [$BOSH_CLIENT_SECRET]",args:{name:"secret"}},{name:"--deployment",description:"Deployment name [$BOSH_DEPLOYMENT]",args:{generators:s}},{name:"--column",description:"Filter to show only given column(s)",args:{name:"name",isVariadic:!0}},{name:"--json",description:"Output as JSON"},{name:"--tty",description:"Force TTY-like output"},{name:"--no-color",description:"Toggle colorized output"},{name:["-n","--non-interactive"],description:"Don't ask for user input [$BOSH_NON_INTERACTIVE]"}]},r=i;export{r as default};
