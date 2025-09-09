import { useState } from "react";
import { Link } from "react-router";

export default function Addpost() {
  const [post, setPost] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit() {
    const newPost = {
      text: post,
      creatat: "",
      likes: 0,
    };
    try {
      fetch("http://localhost:3003/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      setMessage("Post added successfully!");
    } catch (error) {
      setMessage("Error adding post.");
    }
  }
  return (
    <>
      <main>
        <Link to="/">
          <button className="home-but">Home</button>
        </Link>
        <form className="card" onSubmit={handleSubmit}>
          <div className="header-title">new post</div>
          <label>
            Post discribtion:
            <input
              type="text"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              required
            />
          </label>
          <button className="btn" type="submit">
            Add post
          </button>
        </form>
        <div>{message}</div>
      </main>
    </>
  );
}
