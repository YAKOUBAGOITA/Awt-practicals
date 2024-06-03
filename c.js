// Importing the URL module
const url = require('url');

// Parsing a URL string
const urlString = 'https://www.example.com:8080/path/to/resource?foo=bar';
const parsedUrl = new URL(urlString);

console.log('Host:', parsedUrl.host);
console.log('Path:', parsedUrl.pathname);
console.log('Query Parameters:', parsedUrl.searchParams.toString());
