/**
 * Created by Aleksandar Babic on 22.4.17..
 * Take a look at my portfolio at https://aleksandar.alfa-ing.com
 */

if(process.argv.length < 3)
    throw new Error("Not enough arguments");

var url = [];

process.argv.slice(2).forEach(function (website) {
    url.push(website);
})

var http = require('http'), concat = require('concat-stream');
var result = [], count = 0;

url.forEach(function (current, index) {
    http.get(current,function (res) {
        res.pipe(concat(function (data) {
            result[index] = data;
            count++;
            if(count === url.length)
                console.log(result.join('\n'))
        }))
    })
})

