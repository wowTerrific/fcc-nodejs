const fs = require('fs');

// Files
/* **************************

Documentation:
https://nodejs.org/api/fs.html

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

// Folders
/*
fs.mkdir('tutorial', (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Folder created');
		
		fs.writeFile('./tutorial/example.txt', '123', (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('file created');
			}
		});
	}
});

fs.unlink('./tutorial/example.txt', (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('deleted file');
		
// remove folder
		fs.rmdir('tutorial', (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Folder removed');
			}
		});
	}
});
*/

// view files in directory
/* **************************
fs.readdir('./test', (err, files) => {
	if (err) {
		console.log(err);
	} else {
		console.log(files);
		for (let file of files) {
			fs.unlink('./test/' + file, (err) => {
				if (err) {
					console.log(err);
				} else {
					console.log('successful delete');
				}
			});
		}
	}
});

************************** */