const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: String,
  lastName: String,
  role: String,
  job:String,
  avatar: String
});

module.exports = mongoose.model('users', UserSchema)