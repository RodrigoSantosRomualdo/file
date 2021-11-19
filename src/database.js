const { MongoClient } = require('mongodb');
require('dotenv').config()

let db;

MongoClient.connect(process.env.MONGODB_URI, {useUnifiedTopology: true}, (err, client) => {
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