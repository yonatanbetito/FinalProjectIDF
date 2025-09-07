import { useState } from "react";
import HeaderPost from "./HeaderPost";

type postprops = {
  text: string;
  likes: number;
};

export default function Post(props: postprops) {
  const [likes, setLikes] = useState(props.likes);
  return (
    <>
      <div className="post">
        <HeaderPost />
        <img src="/IDF.png" alt="dfg" />
        <h3>{props.text}</h3>{" "}
        <div className="likes">
          <button
            className="like"
            onClick={() => {
              setLikes(likes + 1);
            }}
          >
            {likes}
          </button>
        </div>
      </div>
    </>
  );
}
