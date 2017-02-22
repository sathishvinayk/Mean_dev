
var http = require('http');

http.createServer(function(req,res){
// normalize url by removing querystring, optional
// trailing slash, and making it lowercase
var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();  //path stands for path u give in the browser url field

//Route the user as per requests
switch(path) {
    case '':
        res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('Homepage');  //http://localhost:3000
        break;   //Break if satisfies the above condition
    case '/about':
        res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('About');    //http://localhost:3000/about
        break;
    default:
        res.writeHead(404, { 'Content-Type': 'text/plain' }); res.end('Not Found'); //http://localhost:3000/someothernameyoucangivehere
        break;
  }
}).listen(3000);
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
