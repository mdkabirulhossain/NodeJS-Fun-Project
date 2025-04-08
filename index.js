const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        fs.readFile('./Pages/Home.html','utf-8', (err, data)=>{
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
    else if(req.url == '/about'){
        fs.readFile('./Pages/About.html','utf-8', (err, data)=>{
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
        fs.readFile('./Pages/Contact.html', 'utf-8', (err, data)=>{
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
        fs.readFile('./Pages/Terms.html','utf-8', (err, data)=>{
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