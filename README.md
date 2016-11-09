# fszlib #
compress and decompress plugin using zlib and fs moudles.

# Basic usage #
### you can simply use ###
`var FsZlib = require('./fszlib');`
### and ###
`var fszlib = new FsZlib();`
### to get a FsZlib instance. ###

# Attribute #
### use ###
`fszlib.sourceFile = 'your file';`
### or ###
`fszlib.zipFile = 'your zipped file';`
### to set file which is to be compressed, or compressed file which is to be decompress.  ###

# Methods #
### you can simply use ###
`fszlib.zip('your source file');`
### to compress a file, or###
`fszlib.unzip('your compressed file');`
### to uncompress a file ###
### default compress file format is 'gz', you can use###
`fszlib.setZipExtension('.rar')`
### to change default settings, and this will affect all FsZlib instance. ###
# Supported format #
### '.rar', '.cab', '.arj', '.lzh', '.ace', '.7-zip', '.tar', '.gzip', '.uue', '.bz2', '.jar', '.iso', '.z' ###
