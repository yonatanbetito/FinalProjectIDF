import { addPostToUserByEmail } from "../DAL/user.dal.js";
import {
  getusers,
  createUser as createUserService,
} from "../services/user.service.js";
import { findUserIdDB } from "../DAL/user.dal.js";

//all users
export async function allusers(req, res) {
  try {
    const users = await getusers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
//create user
export async function createUser(req, res) {
  try {
    if (!req.body) {
      console.error("neded body in request");
      return res.status(400).json({ message: "user data is required" });
    }
    if (!req.body.email || !req.body.password || !req.body.name) {
      console.error("Missing fields", req.body);
      return res.status(400).json({ message: "all fields are required" });
    }
    const { email, password, name } = req.body;
    const users = await getusers();
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      console.error("User already exists", email);
      return res.status(400).json({ message: "user already exists" });
    }
    const newUser = {
      id: users.length + 1,
      email,
      password,
      name,
      posts: [],
    };
    console.log("Creating user:", newUser);
    await createUserService(newUser);
    res.status(201).json({ message: "user created" });
  } catch (error) {
    console.error("Error createUser", error);
    res.status(500).json({ errorMessage: error.message, stack: error.stack });
  }
}

// get user by id
export async function userById(req, res) {
  const id = Number(req.params.id);
  try {
    const user = await findUserIdDB(id);
    if (!user) {
      return res.status(404).json({ error: "user id not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: "user id not found" });
  }
}

// Check email & password match
export async function loginUser(req, res) {
  const { email, password } = req.body;
  const users = await getusers();
  const user = users.find((u) => u.email === email && u.password === password);
  res.json({ success: !!user });
}

// Add post to user list by email
export async function addPostToUser(req, res) {
  const { email, post } = req.body;
  if (!email || !post) {
    return res.status(400).json({ message: "Email and post are required" });
  }
  const success = await addPostToUserByEmail(email, post);
  if (success) {
    return res.status(200).json({ message: "Post added to user" });
  } else {
    return res.status(404).json({ message: "User not found" });
  }
}
