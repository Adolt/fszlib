var fs = require('fs');
var zlib = require('zlib');

var EXTENSION = ['.rar', '.cab', '.arj', '.lzh', '.ace', '.7-zip', '.tar', '.gzip', '.uue', '.bz2', '.jar', '.iso', '.z'];
var extension = '.gz';

function FsZlib() {
    this.sourceFile = '';
    this.zipFile = '';
}

FsZlib.prototype.zip = function(source, func) {
    source = source ? source : this.sourceFile;
    if (!source) {
        console.log('Choose a source file first.');
        return;
    }
    fs.createReadStream(source)
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(source + extension));

    if (func && typeof func === 'function') func();
};

FsZlib.prototype.unzip = function(zipName, func) {
    zipName = zipName ? zipName : this.zipFile;

    var matched = EXTENSION.find(function(item){
		return item === ('.' + zipName.split('.').pop().toString());
	});
    if (!zipName || !matched) {
        console.log('Choose a zip file first.');
        return;
    }
    var destName = zipName.split('.');
    destName.pop();
    fs.createReadStream(zipName)
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream(destName.join('.')));

    if (func && typeof func === 'function') func();
}

FsZlib.prototype.setZipExtension = function(value) {
	var matched = EXTENSION.find(function(item){
		return item === value;
	});
	extension = matched ? matched : extension;
}

module.exports = FsZlib;