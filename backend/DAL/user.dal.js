import fs from "node:fs";
import dotenv from "dotenv";
dotenv.config();
const Path = process.env.PATH_FILE_U;

//get all users
export async function getAllUsersDB() {
  try {
    const data = fs.readFileSync(Path, "utf-8");
    if (data) {
      return JSON.parse(data);
    }
    return [];
  } catch (err) {
    console.log("error:", err.message);
    return [];
  }
}
//create new user
export async function createUserDB(user) {
  try {
    const users = await getAllUsersDB();
    users.push(user);
    fs.writeFileSync(Path, JSON.stringify(users, null, 2));
    console.log("user saved.");
    return user;
  } catch (err) {
    console.log("error:", err.message);
  }
}

// Add post to user by email
export async function addPostToUserByEmail(email, post) {
  try {
    const users = await getAllUsersDB();
    const user = users.find((u) => u.email === email);
    if (!user) {
      console.log("user email not found:", email);
      return false;
    }
    if (!user.posts) user.posts = [];
    user.posts.push(post);
    fs.writeFileSync(Path, JSON.stringify(users, null, 2));
    console.log("Post added to user:", email);
    return true;
  } catch (err) {
    console.log("error adding post to user:", err.message);
    return false;
  }
}

//gat user by id
export async function findUserIdDB(id) {
  const users = await getAllUsersDB();
  let index = -1;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === parseInt(id)) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    console.log("not found.");
    return;
  }
  return users[index];
}
