const http = require('http');
const fs = require('fs');
const url = require('url')

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        fs.readFile('./Pages/Home.html', (err, data)=>{
            if(!err){
                res.writeHead(200, {'content-type': 'text/html'});
                res.write(data);
                res.end();
            }else{
                res.write("File not found");
                res.end();
            }
        })
    }
    else if(req.url == './Pages/about'){
        fs.readFile('./Pages/About.html', (err, data)=>{
            if(!err){
                res.writeHead(200, {'content-type': 'text/html'});
                res.write(data);
                res.end();
            }else{
                res.write("File not found");
                res.end();
            }
        })
    }
    else if(req.url == '/contact'){
        fs.readFile('./Pages/Contact.html', (err, data)=>{
            if(!err){
                res.writeHead(200, {'content-type': 'text/html'});
                res.write(data);
                res.end();
            }else{
                res.write("File not found");
                res.end();
            }
        })
    }
    else if(req.url == '/terms'){
        fs.readFile('./Pages/Terms.html', (err, data)=>{
            if(!err){
                res.writeHead(200, {'content-type': 'text/html'});
                res.write(data);
                res.end();
            }else{
                res.write("File not found");
                res.end();
            }
        })
    }
    
})

//When we hosting website then we use port number 8080
server.listen(3000);
console.log('Server is running on prot 3000')