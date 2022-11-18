const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: String },
    password: { type: String },
    name: { type: String, default: '' },
    avatar: { type: String, default: 'https://res.cloudinary.com/dj8ytkjbs/image/upload/v1664893578/avatar-default_vuwplf.png' }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
