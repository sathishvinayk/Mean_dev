//Fs stands for filesystem
//__dirname stands for the directory name in your system
//response code stands for the response return to the client
//Content-type stands for type of the view which needs to be rendered on the browser.
//err stands for error
//Path stands for the path in your system , example c:/program_files/gouse/myfirstapp/index.html
//toLowerCase() makes all the input to lowercase

var http = require('http'),
    fs = require('fs');
function serveStaticFile(res, path, contentType, responseCode) {
  if(!responseCode) responseCode = 200;
  fs.readFile(__dirname + path, function(err,data) {
      if(err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('500 - Internal Error');
        } else{
        res.writeHead(responseCode,{ 'Content-Type': contentType });
        res.end(data);
} });

http.createServer(function(req,res){
// normalize url by removing querystring, optional // trailing slash, and making lowercase
  var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch(path) {
    case '':
      serveStaticFile(res, '/public/home.html', 'text/html'); break;
    case '/about':
      serveStaticFile(res, '/public/about.html', 'text/html'); break;
    case '/img/logo.jpg':
      serveStaticFile(res, '/public/img/logo.jpg','image/jpeg'); break;
    default:
      serveStaticFile(res, '/public/404.html', 'text/html',404); break;
    }
}).listen(3000);
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
