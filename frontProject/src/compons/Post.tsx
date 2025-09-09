import { useState } from "react";
import HeaderPost from "./HeaderPost";

type postprops = {
  id: string;
  text: string;
  imgurl: string;
  creatat: string;
  likes: number;
};

export default function Post(props: postprops) {
  const [likes, setLikes] = useState(Number(props.likes) || 0);
  const handleLike = async () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    try {
      await fetch(`http://localhost:3003/api/post/${props.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...props,
          likes: newLikes,
        }),
      });
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };
  return (
    <>
      <HeaderPost username="yonatan" creatat={props.creatat} />
      <img src={`http://localhost:3003/${props.id}.jpg`} alt="dfg" />
      <h3>{props.text}</h3>
      <div className="likes">
        <button className="like" onClick={handleLike}>
          {likes}
        </button>
      </div>
    </>
  );
}
