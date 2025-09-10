import express from "express";
import {
  allusers,
  createUser,
  userById,
  loginUser,
} from "../controller/user.controller.js";
import { addPostToUser } from "../controller/user.controller.js";

export const userrouter = express.Router();

//create new user
userrouter.post("/", createUser);
//get all users
userrouter.get("/", allusers);
//get user by id
userrouter.get("/:id", userById);
//check login
userrouter.post("/login", loginUser);
//register new user
userrouter.post("/register", createUser);
//add post to user by email
userrouter.post("/addpost", addPostToUser);

export default userrouter;
