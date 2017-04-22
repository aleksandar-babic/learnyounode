/**
 * Created by aleksandar on 9.4.17..
 */

if(process.argv.length != 3)
	throw new Error('You have to pass an argument');

var fs = require('fs');

fs.readFile(process.argv[2], function (err,data) {
	if (err) return console.error(err);
	else{
	    var result = data.toString().split('\n').length;
	    console.log(result-1);
    }
});

