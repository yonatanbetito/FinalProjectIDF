import { useState } from "react";
import NavHeader from "./NavHeader";

type postprops = {};

export default function Addpost() {
  const [post, setPost] = useState("");
  const [img, setImg] = useState("");

  function handleSubmit() {
    //i need to fill
  }

  return (
    <>
      <>
        <NavHeader />
        <main>
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
            <label>
              link for image:
              <input
                type="text"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                required
              />
            </label>
            <button className="btn" type="submit">
              Add post
            </button>
          </form>
        </main>
      </>
    </>
  );
}
