/**
 * Created by aleksandar on 9.4.17..
 */

if(process.argv.length != 3)
	throw new Error('You have to pass an argument');

var fs = require('fs');

var read = fs.readFileSync(process.argv[2]).toString().split('\n').length;
console.log(read - 1);

