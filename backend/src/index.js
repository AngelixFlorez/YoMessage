import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";
import fs from 'node:fs';
import path from 'node:path';

const app = express();
const PORT = process.env.PORT || 3100;
const FRONTEND_URL = process.env.FRONTEND_URL;
const publicDir = path.join(process.cwd(), "public");

//debe estar en raw format 
app.use("/api/webhooks/clerk", express.raw({type: "application/json"}), clerkWebhook());

app.use(express.json());
app.use(cors({origin: FRONTEND_URL, credentials: true}));
app.use(clerkMiddleware());

app.get("/health", (req, res) => {
    res.status(200).json({ok:true});
});

if (fs.existsSync(publicDir)) {
   app.use(express.static(publicDir));
   app.get("/{*any}", (req, res) => res.sendFile(path.join(publicDir, "index.html")));
}

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});


