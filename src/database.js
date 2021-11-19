const { MongoClient } = require('mongodb');

let db;

MongoClient.connect('mongodb+srv://teste:teste12345@cluster0.g21sq.mongodb.net/fluents-dev?retryWrites=true&w=majority', {useUnifiedTopology: true}, (err, client) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  db = client.db('trackstest');
  console.log('DB is connected')
});

const getConnection = () => {
  return db;
};

module.exports = {
  getConnection
};