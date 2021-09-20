const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: String,
  lastName: String,
  isDialer: Boolean,
  isOvserver: Boolean,
  isPlayer: Boolean,
  job:String,
  avatar: String
});

module.exports = mongoose.model('users', UserSchema)