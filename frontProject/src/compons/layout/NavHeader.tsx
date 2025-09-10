import { Link } from "react-router";
export default function NavHeader() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };
  return (
    <>
      <div className="navheader">
        <h1 className="slogen">Linkodkod</h1>
        <Link to="/">
          <button className="home-but">Home</button>
        </Link>
        {isLoggedIn ? (
          <>
            <Link to="/add">
              <button className="add-but">Add Post</button>
            </Link>
            <button className="logout-but" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register">
              <button className="add-but">Register</button>
            </Link>
            <Link to="/login">
              <button className="login-but">Login</button>
            </Link>
          </>
        )}
        <img src="link.jpg" alt="logo" className="logo" />
      </div>
    </>
  );
}
