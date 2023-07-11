const http = require('http');
const data= "Welcom To The CHARUSAT";
const httpserver = http.createServer(function(req, res){
      res.writeHead(200,"Content-Type: text/plain");
    res.end("Welcome To The CHARUSAT");   

});
httpserver.listen(3000,()=>{
    console.log("This site is listening on port 3000");
});