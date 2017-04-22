/**
 * Created by Aleksandar Babic on 22.4.17..
 * Take a look at my portfolio at https://aleksandar.alfa-ing.com
 */

if(process.argv.length != 3)
    throw new Error("No port provided");

var http = require('http'), url = require('url')

function getHourMinSec(date){
    return JSON.stringify({
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
    });
}

function getUnixTime(date) {
    return JSON.stringify({
        "unixtime":date.getTime()
    });
}

var server = http.createServer(function (req,res) {

        var requestedURL = url.parse(req.url)

        if(!requestedURL.query || (requestedURL.query.split('=')[0] != 'iso') || req.method != 'GET'){
            res.writeHead(404);
            res.end();
        }

        if(requestedURL.pathname == '/api/parsetime'){
            var requestDate = new Date(requestedURL.query.split('=')[1]);
            res.writeHead(200,{ 'Content-Type': 'application/json' })
            res.write(getHourMinSec(requestDate))
            res.end()
        }else if(requestedURL.pathname == '/api/unixtime'){
            var requestDate = new Date(requestedURL.query.split('=')[1]);
            res.writeHead(200,{ 'Content-Type': 'application/json' })
            res.write(getUnixTime(requestDate))
            res.end()
        } else {
            res.writeHead(404);
            res.end();
        }
})

server.on('error',function (err) {
    throw new Error(err)
});

server.listen(process.argv[2],function () {
    console.log('Web server is up! Listening on : http://127.0.0.1:' + process.argv[2])
})