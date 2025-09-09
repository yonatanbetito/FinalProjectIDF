import { useState } from "react";
import HeaderPost from "./HeaderPost";

type postprops = {
  text: string;
  imgurl: string;
  creatat: string;
  likes: number;
};

export default function Post(props: postprops) {
  const [likes, setLikes] = useState(props.likes);
  return (
    <>
      <HeaderPost username = "yuuu" creatat={props.creatat}/>
      <img src={`${props.imgurl}`} alt="dfg" />
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
    </>
  );
}
