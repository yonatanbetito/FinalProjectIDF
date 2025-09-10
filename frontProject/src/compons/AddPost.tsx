import { useState } from "react";
import { Link } from "react-router";

export default function Addpost() {
  const [post, setPost] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
        <form className="card" onSubmit={handleSubmit}>
          <div className="header-title"><h1>new post</h1></div>
          <label>
            Post discribtion:
            <input
              type="text"
              placeholder="Enter your post..."
              value={post}
              onChange={(e) => setPost(e.target.value)}
              required
            />
          </label>
          <button className="btn" type="submit">
            Add post
          </button>
        </form>
        <div className="textpost">{message}</div>
      </main>
    </>
  );
}
