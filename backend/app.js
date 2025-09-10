import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routsinit from "./routes/confing.routes.js";
import cors from "cors";

dotenv.config();

//import env fils
const PORT = process.env.PORT;
const app = express();
app.use(cors());



// Parse JSON
app.use(express.json());

//use static folder in express
app.use(express.static("public"));
    
//pass trow the routers
routsinit(app);

//connection to db and running server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });