const express = require("express");
const User = require("../model/user.model");
const { comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    if (!username || !password || !email) {
      return res.status(400).json({ message: "fill all fields" });
    }
    //checking if the user already exists in
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email is already registered." });
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    const user = await User.create(newUser);
    console.log(user);
    // await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "No user found" });
    }

    //check if password match
    const match = await comparePassword(password, user.password);
    if (match) {
      console.log("password match");

      //using the jwt web token
      jwt.sign(
        { email: user.email, id: user._id, username: user.username },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    } else {
      res.json({
        message: "password don't match",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const getprofile = (req, res) => {
  if (!req.cookies || !req.cookies.token) {
    res.json(null);
    return;
  }

  const { token } = req.cookies;

  // Verifying the token
  jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
    if (err) {
      // Handle the error when token verification fails
      console.error("Token verification failed:", err);
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    // Token verification successful, send the user data
    res.json(user);
  });
};

module.exports = { registerUser, loginUser, getprofile };
