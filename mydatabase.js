const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Goita';

async function main() {
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        console.log('Connected to the database');

        const database = client.db(dbName);

        // Perform operations such as insert, update, delete here
        // Example: Insert a document into a collection
        await database.collection('mycollection').insertOne({
            name:'Yakouba Goita',
            age:27,
           
        });

        console.log('Document inserted successfully');
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the connection
        await client.close();
    }
}

main().catch(console.error);
