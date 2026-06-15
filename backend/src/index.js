import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import User from "./models/user.model.js";
import { clerkMiddleware, clerkRequest } from "@clerk/express";
import fs from 'fs';
import path from 'path';

app.use(express.json());

const PORT = process.env.PORT || 3100;
const app = express();
const FRONTEND_URL = process.env.FRONTEND_URL;
const publicDir = path.join(process.cwd(), "public");

if(!fs.existsSync(publicDir))  {
   app.use(express.static(publicDir));
   app.get("/{*any}", (req, res, next)=> res.sendFile(path.join(publicDir, "index.html")));
};


app.use(cors({origin: FRONTEND_URL, credentials: true}));
app.use(clerkMiddleware());

app.get("/health", (req, res) => {
    res.status(200).json({ok:true});
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
