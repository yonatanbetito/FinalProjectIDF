import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
id:Number,
urlimage:String,
discribtion:String,
postdate:String
});

const Post = mongoose.model("posts", postSchema);
export default Post;