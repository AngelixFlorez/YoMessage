import express from "express";
import httpp from "http";
import { Server } from "socket.io";

const app = express();
const server = httpp.createServer(app);

const allowedOrigin = process.env.FRONTEND_URL|| "http://localhost:5173";


const io = new Server(server,{cors:{origin:[allowedOrigin]}});

io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;

    if(userId){
        userSocketMap[userId] = socket.id;
    }

    //broadcast the updated list of online users
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        if(userId){
            delete userSocketMap[userId];
            io.emit("getOnlineUsers", Object.keys(userSocketMap));
        }
    });
});

export {app, server, io, getReceiverSocketId };
