const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MsgSchema = Schema({
  _id: Schema.Types.ObjectId,
  user_id: String,
  username: String,
  text: String,
  time: String
});

exports.Message = mongoose.model('messages', MsgSchema) 
// export default mongoose.model('messages', MsgSchema)