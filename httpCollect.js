/**
 * Created by Aleksandar Babic on 22.4.17..
 * Take a look at my portfolio at https://aleksandar.alfa-ing.com
 */

if(process.argv.length < 3)
    throw new Error("Not enough arguments");

var url = process.argv[2];
var http = (url.match("https"))?require('https'):require('http');
var result = '';
http.get(url,function (res) {
    res.on('error',function (err) {
        throw new Error(err.message);
    })
    res.on('data',function (data) {
        result += data
    })
    res.on('end',function () {
        console.log(result.split('').length)
        console.log(result)
    })
})