/**
 * Created by Aleksandar Babic on 22.4.17..
 * Take a look at my portfolio at https://aleksandar.alfa-ing.com
 */

var fs = require('fs');
var path = require('path');

module.exports = function (dirName,ext,cb) {
    var resultDirs = [];
    var extFilter = new RegExp('\\.' + ext + '$')
    fs.readdir(dirName,function (err,data) {
        if(err) return cb(err);
        data.forEach(function (file) {
            if(extFilter.test(file))
                resultDirs.push(file)
        })
        return cb(null,resultDirs)
    })
}
