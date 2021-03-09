const fs = require('fs');

/* **************************
Documentation:
https://nodejs.org/api/fs.html
************************** */

/* **************************
PART 1: 

//create a file
fs.writeFile('example.txt', "This is an example", (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('File Successfully Created \n');
		
		// read file
		// encoding type parameter is required if you do not want binary
		fs.readFile('example.txt', 'utf8', (err, file) => {
			if (err) {
				console.log(err);
			} else {
				console.log(file);
			}
		})
	}
});

//rename
fs.rename('example.txt', 'example2.txt', (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Succesfully renamed the file');
	}
});

//Add to end
fs.appendFile('example2.txt', '\nSome more datatata', (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Successful append');
	}
});



//delete file
fs.unlink('example2.txt', (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('File Deleted File');
	}
});
************************** */
