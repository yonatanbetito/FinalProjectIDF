import express from "express";
import {
  newPost,
  allposts,
  deletedPost,
  updatePost,
  postById
} from "../controller/post.controller.js";

const postrouter = express.Router();

//get all posts
postrouter.get("/", allposts);
// get post by id
postrouter.get("/:id" ,postById)
//post new one
postrouter.post("/", newPost);
//delete post when you given id in parames
postrouter.delete("/:id", deletedPost);
//update likes for post by id in parames
postrouter.put("/:id", updatePost);

export default postrouter;
