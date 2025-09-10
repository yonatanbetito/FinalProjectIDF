import express from "express";
import { allusers } from "../controller/user.controller.js";
export const userrouter = express.Router();

// userrouter.post("/user", createUser);
userrouter.get("/", allusers);
// userrouter.patch("/user/score", updateUser);

export default userrouter;
