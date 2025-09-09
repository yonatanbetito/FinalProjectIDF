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
      imgUrl: req.body.imgUrl,
      text: req.body.text,
      creatat: "",
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
export async function updatePost(req, res) {
  try {
    const id = req.params.id;
    const post = {
      id: id,
      imgUrl: req.body.imgUrl,
      text: req.body.text,
      creatat: "",
    };

    const updated = await updatePostById(id, post);
    if (!updated || updated === -1) {
      return res.status(404).json({ error: "post id not found" });
    }

    return res.status(200).json(updated);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
