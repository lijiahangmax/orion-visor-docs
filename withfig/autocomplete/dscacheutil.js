var o={group:["name","gid"],host:["name","ip_address"],mount:["name"],protocol:["name","number"],rpc:["name","number"],service:["name","port"],user:["name","uid"]},c=Array.from(Object.keys(o)),d=e=>n=>{let{attributeKey:t}=e,a=new Set;n.split(`

`).map(s=>{s.split(`
`).forEach(u=>{let[m,p]=u.trim().split(": ");m===t&&a.add(p)})});let r=[];return a.forEach(s=>r.push({name:s})),r},i={keys:{custom:async(e,n)=>{let t=e[e.length-3];return c.includes(t)?o[t].map(a=>({name:a})):[]}},values:{custom:async(e,n)=>{let t=e[e.length-4],a=e[e.length-2];return d({attributeKey:a})((await n({command:"dscacheutil",args:["-q",t]})).stdout,e)}}},g={name:"dscacheutil",description:"Utility for managing the Directory Service cache",subcommands:[{name:"-h",description:"List the options for calling dscacheutil"},{name:"-q",description:"Query the Directory Service cache",options:[{name:"-a",description:"Attribute to query",args:[{name:"attributeKey",generators:i.keys},{name:"attributeValue",generators:i.values}]}],args:{name:"category",description:"Category to query",suggestions:c}},{name:"-cachedump",description:"Get an overview of the cache by default",options:[{name:"-buckets",description:"Get an overview of the cache by default"},{name:"-entries",description:"Dump detailed information about cache entries",args:{name:"entry",suggestions:c}}]},{name:"-configuration",description:"Get the current configuration information, such as the search policy and cache parameters"},{name:"-flushcache",description:"Flush the entire cache"},{name:"-statistics",description:"Get statistics from the cache, including an overview an detailed call statistics"}]},h=g;export{h as default};
