const http = require('http');
const fs = require('fs');

http.createServer( (req, res) => {
	const readStream = fs.createReadStream('./static/example.jpg');
	
	// header - let client know what data is coming (status code, Content-type object)
	res.writeHead(200, {'Content-type': 'image/jpg'});
	
	
	// other files 
	//const readStream = fs.createReadStream('./static/example.json');
	//res.writeHead(200, {'Content-type': 'application/json'});
	
	//const readStream = fs.createReadStream('./static/index.html');
	//res.writeHead(200, {'Content-type': 'text/html'});
	
	readStream.pipe(res);
	
}).listen(3000);