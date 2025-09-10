
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Post from "./Post";

type Postmodul = {
  id: string;
  text: string;
  creatat: string;
  likes: number;
};

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<Postmodul | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:3003/api/post/${id}`);
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <h2>laoding...</h2>;

  return (
    <main>
      <h1>Post {post.id}</h1>
        <div className="card">
      <Post
        id={post.id}
        imgurl={`${post.id}.png`}
        text={post.text}
        creatat={post.creatat}
        likes={post.likes}
      />
      </div>
    </main>
  );
}
