/**
 * Created by aleksandar on 9.4.17..
 */

var sum = 0;
for(var i = 2, n = process.argv.length;i<n;i++)
	sum += Number(process.argv[i]);
console.log(sum);
