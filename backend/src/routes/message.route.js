import express from "express";
import { getUsersForSidebar,
    getMessages,
    getConversationsForSidebar,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(protectRoute);

router.get("/users", getUsersForSidebar);
router.get("/conversations",protectRoute, getUsersForSidebar);
router.get("/:id",protectRoute, getMessages);
router.post("/send/:id",protectRoute,upload.single("media"),sendMessage)

export default router;