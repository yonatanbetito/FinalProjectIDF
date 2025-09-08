import { useEffect, useState } from "react";
import Post from "./Post";
import HeaderPost from "./HeaderPost";

type Post ={
  id:string,
  imgUrl:string,
  text:string,
  creatat:string
}
export default function Postim() {
  const [postim,setPostim]=useState<Post[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3003/api/post");
        const data = await res.json();
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
      {postim.map((p)=>(
        <Post text={p.text} likes={0} />
      ))}  

        
        <Post text="my first post" likes={0} />
        <Post text="my first post" likes={0} />
        <Post text="my first post" likes={0} />
        <Post text="my first post" likes={0} />
        <Post text="my firstdfkjsdnfjksndfksdf post" likes={0} />
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