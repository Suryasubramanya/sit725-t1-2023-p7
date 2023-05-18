const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://suryasubu007:admin@cluster0.c80nqy3.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true});

client.connect(err => {
    if (!err) {
        console.log('Mongo DB connected');
    } else {
        console.log('Error: ', err);
        process.exit(1);
    }
});

module.exports = client;