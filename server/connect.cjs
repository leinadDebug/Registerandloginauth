const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

async function main() {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(process.env.ATLAS_URI, {
      serverSelectionTimeoutMS: 5000, // Example of setting server selection timeout
    });

    console.log("Connected successfully to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = main;
