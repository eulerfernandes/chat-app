import { Router } from "express";
import authRoutes from "./auth.routes";
import chatRoutes from "./chat.routes";
import messageRoutes from "./message.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/chats", chatRoutes);
router.use("/messages", messageRoutes);

export default router;
