const { Schema, model } = require("mongoose");
const postSchema = new Schema({
_id: String,
  title: String,
  quantity: Number,
  runningTime: Number,
  power: Number,
});

const Post = new model("User", postSchema);
module.exports = Post;
