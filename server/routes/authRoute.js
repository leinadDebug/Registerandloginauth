const express = require("express");
//this allows us to use the express router in the route folder
const router = express.Router();
const registerUser = require("../controllers/authControllers");

router.post("/register", registerUser);

module.exports = router;
