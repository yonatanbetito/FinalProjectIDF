import { useState } from "react";

export default function Addpost() {
  const [post, setPost] = useState("");
  const [message, setMessage] = useState("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userEmail = localStorage.getItem("userEmail") || "";
    const newPost = {
      text: post,
      creatat: "",
      likes: 0,
      userEmail,
    };
    try {
      //add post to global postim
      await fetch("http://localhost:3003/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      //add post to user array
      await fetch("http://localhost:3003/api/user/addpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail, post: newPost }),
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
          <div className="header-title">
            <h1>new post</h1>
          </div>
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
