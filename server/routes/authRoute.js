const express = require("express");
//this allows us to use the express router in the route folder
const router = express.Router();
const { registerUser, loginUser, getprofile } = require("../controllers/authControllers");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get('/profile', getprofile)

module.exports = router;
