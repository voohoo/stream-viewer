const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Chat
let Chat = new Schema({
  username: {
    type: String
  },
  text: {
    type: String
  }
},{
    collection: 'chat'
});

module.exports = mongoose.model('Chat', Chat);