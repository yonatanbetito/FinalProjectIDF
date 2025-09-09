import { useEffect, useState } from "react";
import Post from "./Post";

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
          <div key={p.id} className="post">
            <Post
              imgurl={`${p.id}.png`}
              text={p.text}
              creatat={p.creatat}
              likes={p.likes}
            />
          </div>
        ))}
      </div>
    </>
  );
}

//   return (
//     <div>
//       <h1>Riddles List</h1>
//       <ul>
//         {riddles.map((riddle) => (
//           <li key={riddle.id}>
//             <strong>{riddle.question}</strong>
//             <div>{riddle.answer}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
