const http = require('http');
const fs = require('fs');

http.createServer( (req, res) => {
	const readStream = fs.createReadStream('./static/example.jpg');
	
	// header - let client know what data is coming (status code, Content-type object)
	res.writeHead(200, {'Content-type': 'image/jpg'});
	
	readStream.pipe(res);
	
}).listen(3000);