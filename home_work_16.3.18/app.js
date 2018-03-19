var funck=require("./funck.js");
var fs=require("fs");
var http=require("http");
var website="<h1>default msg</h1>";
var hour=funck.time();

if(hour>6 && hour<12){
    fs.readFile("./morning.html", "utf-8", function(err, data){
        website=data;
    });
}
else if(hour>12 && hour<16){
    fs.readFile("./mid.html", "utf-8", function(err, data){
        website=data;
    });
}
else if(hour>16 && hour<20){
    fs.readFile("./evning.html", "utf-8", function(err, data){
        website=data;
    });
}
else{
    fs.readFile("./night.html", "utf-8", function(err, data){
        website=data;
    });
}

var server=http.createServer(function(req,repos){
    repos.writeHead(200,{"Content-Type": "text/html"});
    repos.write(website);
    repos.end();
})
server.listen(3500);





