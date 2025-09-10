import { useEffect, useState } from "react";
import Post from "./Post";
import { Link } from "react-router";

type Postmodul = {
  id: string;
  text: string;
  creatat: string;
  likes: number;
};
export default function Postim() {
  const [postim, setPostim] = useState<Postmodul[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3003/api/post");
        const data = await res.json();
        console.log(data);
        setPostim(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <div className="postim">
      {postim.map((p) => (
        <Link key={p.id} to={`/post/${p.id}`} style={{ textDecoration: "none" }}>
          <div className="post">
            <Post
              id={p.id}
              imgurl={`${p.id}.png`}
              text={p.text}
              creatat={p.creatat}
              likes={p.likes}
            />
          </div>
        </Link>
      ))}
    </div>
  );

    </>
  );
}
