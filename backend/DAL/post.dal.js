import fs from "node:fs";
import dotenv from "dotenv";
dotenv.config();
const Path = process.env.PATH_FILE_P;

//get all post
export async function getAllPostsDB() {
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

//get post by id
export async function findPostIdDB(id) {
  const posts = await getAllPostsDB();
  let index = -1;
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === parseInt(id)) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    console.log("not found.");
    return;
  }
  return posts[index];
}

//create new post
export async function createpostDB(post) {
  try {
    const posts = await getAllPostsDB();
    posts.push(post);
    fs.writeFileSync(Path, JSON.stringify(posts, null, 2));
    console.log("post saved.");
    return post;
  } catch (err) {
    console.log("error:", err.message);
  }
}

//delete by id
export async function deletepostByIdDB(id) {
  try {
    const posts = await getAllPostsDB();
    let index = -1;
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === parseInt(id)) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      console.log("not found.");
      return -1;
    }
    posts.splice(index, 1);
    fs.writeFileSync(Path, JSON.stringify(posts, null, 2));
    console.log("post deleted.");
  } catch (err) {
    console.log("error:", err.message);
  }
}

//update by id
export async function updatePostByIdDB(id, updatedPost) {
  try {
    const posts = await getAllPostsDB();
    let index = -1;
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === parseInt(id)) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      console.log("not found post id to updae!");
      return;
    }

    posts[index] = updatedPost;
    fs.writeFileSync(Path, JSON.stringify(posts, null, 2));
    console.log("post is updated.");
    return posts[index];
  } catch (err) {
    console.log("error:", err.message);
  }
}
