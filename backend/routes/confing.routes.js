import router from "./post.route.js";
const routsinit = (app) => {
  app.use("/api", router);
};

export default routsinit;
