const { MongoClient } = require("mongodb");
require("dotenv").config({ path: './config.env' });

async function main() {
  // Create a new Mongo client
  const Db = process.env.ATLAS_URI;

  // this will create a new client using our username and password to get us logged in
  const client = new MongoClient(Db);

  // this will create the connection
  try {
    await client.connect();;

    console.log("Connected successfully to server");
  } catch (e) {
    console.error(e);
  }
}

module.exports = main;
