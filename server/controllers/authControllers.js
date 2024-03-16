const express = require("express");
const User = require('../model/user.model');

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

module.exports = registerUser;
