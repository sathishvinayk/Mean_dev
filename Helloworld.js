//Simple hello world displaying on the browser
//Try to type this code on ur editor and some ideas abt it. please dont copy pase this code
var http=require('http');  //Requiring or importing http module to a variable named http

//Run server by creating new node server on http and pass request and response inside a function.
http.createServer(function(req,res){
  res.writeHead(200,{'Content-type':'text/plain'});  // 200 stands for request OK, Content-type stands for the format of the page.
  res.end('Hello World');  //return the response to browser as 'hello world'
}).listen(3000);  //Run on port 3000. Port 3000 stands for http requests.

console.log('Server started on localhost:3000') //Debug the output on node commands or in cmd 
