// req > what we send to server
// res > what server respond us back

var http = require('http');
var server = http.createServer((req,res) =>{
    console.log("file is created")
    res.write(`<h1>welcome to nodeJS </h1>`)
    res.end( )

})

server.listen(9820)

