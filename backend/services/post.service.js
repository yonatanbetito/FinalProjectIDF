import {getAllPostsDB,createpostDB,deletepostByIdDB,updatePostByIdDB} from "../DAL/post.dal.js"


// get all post
export  async function getposts() {
  return await getAllPostsDB();
}

// create new post
export  async function createPost(postData) {
  let post = postData
  //add time post
  post.postat = timepost()
  return await createpostDB(post);
}
// delete post bu id
export async function deletePost(id){
  return await deletepostByIdDB(id)
}
// update post by id
export async function  updatePostById(id,updatedPost){
  let post = updatedPost
  //updte time also
  post.postat = timepost
  return updatePostByIdDB(id,post)
}

//add create at
export  function timepost(){
  const date = new Date().toLocaleDateString()
  const time = new Date().toLocaleTimeString()
  const postDate = `${date}  ${time}`
  return postDate
}
