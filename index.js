const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'text/html'});
    res.write("welcome to the server!");
    res.end();
})

//When we hosting website then we use port number 8080
server.listen(3000);
console.log('Server is running on prot 3000')