/**
 * Created by Aleksandar Babic on 22.4.17..
 * Take a look at my portfolio at https://aleksandar.alfa-ing.com
 */

if(process.argv.length != 4)
    throw new Error("Not enough/too many arguments");

var http = require('http'), fs = require('fs');

var server = http.createServer(function (req,res) {

        var reader = fs.createReadStream(process.argv[3]), content = "";
        reader.on('error',function (err) {
            res.writeHead(404);
            res.end();
        })
        reader.on('data',function (data) {
            content += data;
        })
        reader.on('end',function () {
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write(content)
            res.end()
        })
})

server.on('error',function (err) {
    throw new Error(err)
});

server.listen(process.argv[2],function () {
    console.log('Web server is up! Listening on : http://127.0.0.1:' + process.argv[2])
})