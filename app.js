import express from "express";
import userrouter from "./Routes/userRoutes.js";
import taskrouter from "./Routes/taskRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
export const app = express();
config({
    path : "./local.env"
})
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin : "https://to-do-app-frontend-0049-dcgz.vercel.app",
    methods : ["GET", "POST", "PATCH", "DELETE"],
    credentials : true
}));
app.use("/user", userrouter);
app.use("/task", taskrouter);
app.get("/", (req,res)=>{
    res.send("The server is working")
})