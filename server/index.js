const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const main = require("./connect.cjs");
const mongoose = require("mongoose");
const authRoute = require("./routes/authRoute.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute)


main();


const port = 8000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
  