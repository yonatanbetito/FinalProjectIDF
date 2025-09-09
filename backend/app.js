import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routsinit from "./routes/confing.routes.js";
import cors from "cors";

dotenv.config();

//import env fils
const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;
const app = express();
app.use(cors());

//coection to db and runig server
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });


//midlewares
//pars the body to json - importent for the DB req
app.use(bodyParser.json());

//use static folder in express
app.use(express.static("public"));

//pass trow the routers
routsinit(app);
