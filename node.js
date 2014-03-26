/**
 * Created by ranko on 26/03/14.
 */

var http = require('http');
var url = require("url");

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;

    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/plain"});

    if (pathname == "/add") {
        response.end((parseInt(query.a) + parseInt(query.b)) + "\n");

    } else if (pathname == "/subtract") {
        response.end((parseInt(query.a) - parseInt(query.b)) + "\n");
    } else if (pathname == "/multiply") {
        response.end((parseInt(query.a) * parseInt(query.b)) + "\n");
    } else if (pathname == "/divide") {
        response.end((parseInt(query.a) / parseInt(query.b)) + "\n");
    } else if (pathname == "/fibonacci") {
        response.end(fibonaci(parseInt(query.num)) + "\n");
    } else {
        response.end("bad request \n");
    }



});

function fibonaci(n) {
    if (n==1) {
        return 1;
    } else if (n==0) {
        return 0;
    } else {
        return fibonaci(n-2) +fibonaci(n-1);
    }
}


server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");
