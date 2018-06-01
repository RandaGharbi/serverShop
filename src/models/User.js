import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const User = new Schema({
  name: String,
  email: {
    lowercase: true,
    type: String,
    unique: true,
  },
  password: String,
  picture: String,
});

User.methods.setPassword = function setPassword(password) {
  this.password = bcrypt.hashSync(password, 10);
};
User.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.password);
};
User.methods.generateJWT = function generateJWT() {
  const { _id } = this;
  return jwt.sign({
    _id,
  }, process.env.JWT_SECRET);
};
User.methods.tokenUser = function tokenUser() {
  return {
    email: this.email,
    confirmed: this.confirmed,
    token: this.generateJWT(),
  };
};

export default mongoose.model('users', User);
