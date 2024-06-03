// Importing the Event module
const EventEmitter = require('events');

// Creating a custom event emitter
class MyEmitter extends EventEmitter {}

// Creating an instance of the custom event emitter
const myEmitter = new MyEmitter();

// Listening for a custom eventc
myEmitter.on('greet', () => {
  console.log('Hello, world!');
});

// Emitting the custom event
myEmitter.emit('greet');
