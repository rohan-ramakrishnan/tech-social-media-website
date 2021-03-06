const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "user"
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('post', postSchema);