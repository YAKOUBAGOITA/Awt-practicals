// Import mongoose library
const mongoose = require('mongoose');

// Define the schema
const Schema = mongoose.Schema;
const exampleSchema = new Schema({
    name: String,
    age: Number,
    email: String
});

// Create a model from the schema
const ExampleModel = mongoose.model('Example', exampleSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Goita', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

// Create a new document
const newExample = new ExampleModel({
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
});

// Insert the document
newExample.save()
.then(savedDoc => {
    console.log("Document saved:", savedDoc);
})
.catch(err => {
    console.error("Error saving document:", err);
});

// Find documents
ExampleModel.find({ name: 'John Doe' })
.then(foundDocs => {
    console.log("Found documents:", foundDocs);
})
.catch(err => {
    console.error("Error finding documents:", err);
});

// Update document
ExampleModel.updateOne({ name: 'John Doe' }, { age: 31 })
.then(result => {
    console.log("Update result:", result);
})
.catch(err => {
    console.error("Error updating document:", err);
});

// Delete document
ExampleModel.deleteOne({ name: 'John Doe' })
.then(result => {
    console.log("Delete result:", result);
})
.catch(err => {
    console.error("Error deleting document:", err);
});
