var s={script:["phpunit","--list-tests"],postProcess:function(e){return e.startsWith("fatal:")?[]:e.split(`
`).filter(t=>t.indexOf("::")>0).map(t=>({name:t.substring(t.indexOf("::")+2,t.length),icon:"fig://icon?type=php",description:t.substring(t.indexOf("::")+2,t.length)}))}},i={name:"phpunit-watcher",description:"Automatically rerun PHPUnit tests when source code changes",subcommands:[{name:"watch",description:"This will run the tests and rerun them whenever a file in the app, src or tests directory is modified",options:[{name:"--filter",description:"Watch a specific test",args:{generators:s,name:"filter"}}]}]},n=i;export{n as default};
