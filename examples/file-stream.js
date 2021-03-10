const fs = require('fs');

const readStream = fs.createReadStream('./example.txt', 'utf8');

const writeStream = fs.createWriteStream('example2.txt');

readStream.on('data', (chunk) => {
	writeStream.write(chunk);
});


// Use file streams instead of fs.readFile due to output being chunks
// will not eat up memory
// large files will not read unless file stream is used