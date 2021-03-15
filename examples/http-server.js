const http = require('http');

const server = http.createServer( (req, res) => {
	if (req.url === '/') { // Root Directory
		res.write('Hello World from NodeJS');
		res.end();
	} else {
		res.write('404 page');
		res.end();
	}
});

server.listen('3000');