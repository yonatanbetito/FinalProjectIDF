
import fs from "node:fs"
import { getposts ,createPost,deletePost,updatePostById} from "../services/post.service.js";

const Path= "/Users/yonatanbetito/Desktop/FinalProject/backend/DB/post.txt"
let posts = JSON.parse(fs.readFileSync(Path, "utf-8"));

//all posts
export async function allposts(req, res) {
  try {
    const posts = await getposts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//new post
export async function newPost(req, res) {
  let posts = await getposts()
  const post = {
    id: posts.length + 1,
    urlimage: req.body.urlimage,
    discribtion: req.body.discribtion,
    postat:"",
  };
  if (!post) {
    return res.status(400).send({ error: "post empty" });
  }  
  createPost(post)
  res.send(posts)
}

//delet post
export async function deletedPost(req,res){
let id = req.params.id;
  try {
    const result = await deletePost(id);
    if (result === -1) {
      return res.status(404).json({ error: "post id not found" });
    }
    res.send({ mssg: "post deleted" });
  } catch (error) {
    res.status(400).send({ error: "Failed to delete" });
  }
}

// updet post by id
function updatePost(req, res) {
  const id = req.params.id;
  const post = {
    id: id,
    urlimage: req.body.urlimage,
    discribtion: req.body.discribtion,
    postat:"",
  };
  if (!post) {
    return res.status(400).send({ error: "post empty" });
  }
  updatePostById(id,post)

}
