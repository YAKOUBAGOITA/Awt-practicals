// Import required modules
const express = require('express');
const cookieParser = require('cookie-parser');

// Create an Express app
const app = express();

// Middleware: Parse JSON bodies
app.use(express.json());

// Middleware: Parse cookies
app.use(cookieParser());

// Configurable Middleware: Logger
const logger = (options) => {
  return (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  };
};

// Use the logger middleware
app.use(logger());

// Route: GET /
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route: POST /data
app.post('/data', (req, res) => {
  console.log('Received data:', req.body);
  res.send('Data received successfully!');
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
