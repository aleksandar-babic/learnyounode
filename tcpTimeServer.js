/**
 * Created by Aleksandar Babic on 22.4.17..
 * Take a look at my portfolio at https://aleksandar.alfa-ing.com
 */

if(process.argv.length != 3)
    throw new Error("No port provided");

var net = require('net');

function getdate() {
    var date = new Date();
    var month = ((date.getMonth()+1) < 10)?('0' + (date.getMonth()+1)):(date.getMonth()+1);
    return date.getFullYear() + "-" + month + "-" + date.getDate() + " "
        + date.getHours()+ ":" + date.getMinutes();
}

var server = net.createServer(function (sock) {
    console.log('Got new connection at : ' + getdate())
    sock.end(getdate() + "\n")
})

server.on('error',function (err) {
    throw err;
})

server.listen(process.argv[2], function () {
    console.log("Raw TCP server is up. Listening on port: " + process.argv[2])

})

