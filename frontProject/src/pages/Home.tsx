import Postim from "../compons/Postim";
import { Link } from "react-router";
export default function Home() {
  return (
    <div>
      <main>
        <Link to="/add"><button className="add-but">Add post</button></Link>
        <Postim />
      </main>
      <footer>v 1.0</footer>
    </div>
  );
}
