import Postim from "../compons/Postim";
import Login from "./Login";
export default function Home() {
  return (
    <div id="all">
      <main>
        {localStorage.getItem("isLoggedIn") === "true" ? (
          <Postim />
        ) : (
          <>
            <h2>Please log in to see posts</h2>
            <Login />
          </>
        )}
      </main>
      <footer>v 1.0</footer>
    </div>
  );
}
