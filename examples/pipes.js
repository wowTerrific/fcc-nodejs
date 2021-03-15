const fs = require('fs');
const zlib = require('zlib');  // zlib is used for compressing files

const gzip = zlib.createGzip(); // transform stream
const gunzip = zlib.createGunzip(); // unzip

const readStream = fs.createReadStream('./example.txt', 'utf8');

const writeStream = fs.createWriteStream('example2.txt.gz'); //needs to be a gz file or compress to work

readStream.pipe(gzip).pipe(writeStream);

// takes readStream, compresses data, writes compressed data to writestream



// takes compressed and writes 
// readStream.pipe(gunzip).pipe(writeStream);


