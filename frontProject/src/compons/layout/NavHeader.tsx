import { Link } from "react-router";
export default function NavHeader() {
  return (
    <>
      <div className="navheader">
        <h1 className="slogen">Linkodkod</h1>
        <Link to="/">
          <button className="home-but">Home</button>
        </Link>
        <Link to="/add">
          <button className="add-but">Add post</button>
        </Link>

        <img src="link.jpg" alt="logo" className="logo" />
      </div>
    </>
  );
}
