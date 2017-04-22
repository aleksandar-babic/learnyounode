/**
 * Created by aleksandar on 9.4.17..
 */

if(process.argv.length != 4)
    throw new Error('Not enough parameters');

var fs = require('fs');
var path = require('path');

var prefixedArgument = '.' + process.argv[3];

fs.readdir(process.argv[2],function (err, files) {
    if(err) throw Error('Error listing directory');
    for(var i = 0, n = files.length;i<n;i++){
        var currentExtension = path.extname(files[i]);

        if(currentExtension == prefixedArgument)
            console.log(files[i]);
    }
});