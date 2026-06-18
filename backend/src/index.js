import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhookRouter from "./webhooks/clerk.webhook.js";
import fs from 'node:fs';
import path from 'node:path';
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

const PORT = process.env.PORT || 3100;
const publicDir = path.join(process.cwd(), "public");

app.use("/api/webhooks/clerk", express.raw({ type: "application/json" }), clerkWebhookRouter);

app.use(express.json());
app.use(cors({
    origin: (origin, cb) => {
        if (!origin) return cb(null, true);
        cb(null, origin);
    },
    credentials: true,
}));
app.use(clerkMiddleware({
    secretKey: process.env.CLERK_SECRET_KEY,
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
}));

app.get("/health", (req, res) => {
    res.status(200).json({ ok: true });
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (fs.existsSync(publicDir)) {
    app.use(express.static(publicDir));
    app.get("/{*any}", (req, res) => res.sendFile(path.join(publicDir, "index.html")));
}

server.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});


