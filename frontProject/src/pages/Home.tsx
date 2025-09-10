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
            <h1>Please log in to see posts</h1>
            <Login />
          </>
        )}
      </main>
      <footer><h2>v 1.0</h2></footer>
    </div>
  );
}
