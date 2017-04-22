/**
 * Created by Aleksandar Babic on 22.4.17..
 * Take a look at my portfolio at https://aleksandar.alfa-ing.com
 */

if(process.argv.length != 3)
    throw new Error("No port provided");

var http = require('http')

var server = http.createServer(function (req,res) {

    if(req.method == 'POST'){
        console.log('GOT POST REQUEST');
        var content = '';
        req.on('data',function (data) {
            content += data;
        })
        req.on('end',function () {
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write(content.toUpperCase());
            res.end();
        })

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