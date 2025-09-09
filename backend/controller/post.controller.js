import {
  getposts,
  createPost,
  deletePost,
  updatePostById,
} from "../services/post.service.js";

//all posts
export async function allposts(req, res) {
  try {
    const posts = await getposts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//new post
export async function newPost(req, res) {
  try {
    const posts = await getposts();
    const post = {
      id: posts.length + 1,
      text: req.body.text,
      creatat: "",
      likes: 0,
    };
    if (!post) {
      return res.status(400).send({ error: "post empty" });
    }
    const created = await createPost(post);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//delet post
export async function deletedPost(req, res) {
  const id = Number(req.params.id);
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
export async function updatePost(req, res) {
  try {
    const id = Number(req.params.id);
    console.log(id);
    const post = {
      id: id,
      text: req.body.text,
      creatat: "",
      likes: req.body.likes,
    };
    const updated = await updatePostById(id, post);
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
