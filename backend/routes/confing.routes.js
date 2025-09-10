import postrouter from "./post.route.js";
import userrouter from "./user.route.js";
const routsinit = (app) => {
  app.use("/api/post", postrouter);
  app.use("/api/user", userrouter);

};

export default routsinit;
