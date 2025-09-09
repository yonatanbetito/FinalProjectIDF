import {
  getposts,
  createPost,
  deletePost,
  updatePostById,
} from "../services/post.service.js";

const posts = await getposts();

//all posts
export async function allposts(req, res) {
  try {
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//new post
export async function newPost(req, res) {
  const post = {
    id: posts.length + 1,
    urlimage: req.body.urlimage,
    discribtion: req.body.discribtion,
    postat: "",
  };
  if (!post) {
    return res.status(400).send({ error: "post empty" });
  }
  const created = await createPost(post);
  res.status(201).json(post);
}

//delet post
export async function deletedPost(req, res) {
  let id = req.params.id;
  try {
    const result = await deletePost(id);
    if (result === -1) {
      return res.status(404).json({ error: "post id not found" });
    }
    res.status(200).json({ mssg: "post deleted" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete" });
  }
}

// updete post by id
export function updatePost(req, res) {
  const id = req.params.id;
  const post = {
    id: id,
    urlimage: req.body.urlimage,
    discribtion: req.body.discribtion,
    postat: "",
  };
  if (!post) {
    return res.status(400).send({ error: "post empty" });
  }
  updatePostById(id, post);
  res.status(200).json(post);
}
