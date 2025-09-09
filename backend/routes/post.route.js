import express from "express";
import {
  newPost,
  allposts,
  deletedPost,
  updatePost,
} from "../controller/post.controller.js";

const router = express.Router();

//get all posts
router.get("/post", allposts);
//post new one
router.post("/post", newPost);
//delete post when you given id in parames
router.delete("/post/:id", deletedPost);
//update likes for post by id in parames
router.put("/post/:id", updatePost);

export default router;
