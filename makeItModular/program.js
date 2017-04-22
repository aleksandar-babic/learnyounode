/**
 * Created by Aleksandar Babic on 22.4.17..
 * Take a look at my portfolio at https://aleksandar.alfa-ing.com
 */

var list = require('./filteredLSModule'),
    dir = process.argv[2],
    ext = process.argv[3];

list(dir,ext,function (err,data) {
    if(err) return console.error(err);

    data.forEach(function (file) {
        console.log(file);
    })
})

