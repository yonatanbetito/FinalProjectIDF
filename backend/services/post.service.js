import {
  getAllPostsDB,
  createpostDB,
  deletepostByIdDB,
  updatePostByIdDB,
  findPostIdDB,
} from "../DAL/post.dal.js";
import { addPostToUserByEmail } from "../DAL/user.dal.js";

// get all post
export async function getposts() {
  return await getAllPostsDB();
}

// create new post
export async function createPost(postData) {
  let post = postData;
  //add time post
  post.creatat = timepost();
  const createdPost = await createpostDB(post);
  //add post to user
  if (post.userEmail) {
    await addPostToUserByEmail(post.userEmail, createdPost);
  }
  return createdPost;
}

//get post
export async function findPostId(id) {
  return await findPostIdDB(id);
}
// delete post bu id
export async function deletePost(id) {
  return await deletepostByIdDB(id);
}
// update post by id
export async function updatePostById(id, updatedPost) {
  let post = updatedPost;
  //updte time also
  post.creatat = timepost();
  return updatePostByIdDB(id, post);
}

//add create at
export function timepost() {
  const date = new Date().toLocaleDateString();
  // const time = new Date().toLocaleTimeString()
  const postDate = `${date}`;
  return postDate;
}
