var e={name:"arguments",description:"Human-readable host names, nameservers, types, or classes"},o=[{name:["-q","--query"],description:"Host name or IP address to query",args:{name:"HOST"}},{name:["-t","--type"],description:"Type of the DNS record being queried (A, MX, NS...)",args:{name:"TYPE"}},{name:["-n","--nameserver"],description:"Address of the nameserver to send packets to",args:{name:"ADDR"}},{name:"-class",description:"Network class of the DNS record being queried (IN, CH, HS)",args:{name:"CLASS"}},{name:"--edns",description:"Whether to OPT in to EDNS (disable, hide, show)",args:{name:"NUMBER"}},{name:"--txid",description:"Set the transaction ID to a specific value",args:{name:"CLASS"}},{name:"-Z",description:"Set uncommon protocol-level tweaks",args:{name:"TWEAKS"}},{name:["-U","--udp"],description:"Use the DNS protocol over UDP"},{name:["-T","--tcp"],description:"Use the DNS protocol over TCP"},{name:["-S","--tls"],description:"Use the DNS-over-TLS protocol"},{name:["-H","--https"],description:"Use the DNS-over-HTTPS protocol"},{name:["-1","--short"],description:"Short mode: display nothing but the first result"},{name:["-J","--json"],description:"Display the output as JSON"},{name:"--color",description:"When to colourise the output (always, automatic, never)",args:[e,{name:"WHEN"}]},{name:"--seconds",description:"Do not format durations, display them as seconds"},{name:"--time",description:"Print how long the response took to arrive"}],n={name:"dog",description:"A command-line DNS client",args:e,options:o,subcommands:[{name:"A",description:"Query Domain A Record",options:o,args:e},{name:"MX",description:"Query Domain MX Record",options:o,args:e},{name:"CNAME",description:"Query Domain CNAME Record",options:o,args:e},{name:"TXT",description:"Query Domain TXT Record",options:o,args:e},{name:"NS",description:"Query NS Record",options:o,args:e},{name:"SOA",description:"Query SOA Record",options:o,args:e},{name:"TTL",description:"Query TTL Record",options:o,args:e},{name:"ANY +noall +answer",description:"Query ALL DNS Records",options:o,args:e},{name:"+nocomments +noquestion +noauthority +noadditional +nostats",description:"Query only answer section",options:o,args:e}]},t=n;export{t as default};
