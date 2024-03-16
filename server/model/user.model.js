const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserDataSchema = new mongoose.Schema(
  {
    username: { type: "string", required: true },
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
  },
  {
    timestamps: true,
  }
);

UserDataSchema.pre("save", async function (next) {
  try {
    //hash the password if its new or modified
    if (!this.isModified("password")) {
      return next();
    }
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    //hash the password with the salt
    const hashedPassword = await bcrypt.hash(this.password, salt);
    //replace the normal password with the hashed password
    this.password = hashedPassword;
    next();
  } catch (err) {
    next(err);
  }
});

const UserModel = mongoose.model("User", UserDataSchema);

module.exports = UserModel;
