import "./App.css";
import "./compons/NavHeader.css";
import "./compons/HeaderPost.css";
import "./compons/post.css";
import "./compons/Postim.css";
import "./compons/Post.css";
import Home from "./pages/Home";
import Addpost from "./compons/AddPost";
import NavHeader from "./compons/NavHeader";
import { Routes, Route} from "react-router";

function App() {
  return (
    <>
    <NavHeader/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add" element={<Addpost />}/>
      </Routes>
    </>
  );
}

export default App;
