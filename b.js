// Importing the Filesystem module
const fs = require('fs');

// Reading contents of a file
fs.readFile('proposal.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});
