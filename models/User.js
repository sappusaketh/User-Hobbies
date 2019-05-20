const mongoose = require('mongoose');

const UserSchema = {
  username: {
    type: String,
    required: true
  },
  hobbies: {
    type: [String],
    required: true
  },
  avatar: {
    type: String
  },
  createdOn: {
    type: Date,
    default: Date.now()
  }
};

module.exports = User = mongoose.model('Users', UserSchema);
