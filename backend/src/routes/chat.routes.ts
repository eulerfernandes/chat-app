import { Router } from "express";
import ChatController from "../controllers/ChatController";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    await ChatController.getAllChats(req, res);
  } catch (error) {
    next(error); // Passe o erro para o middleware de tratamento de erros
  }
});

router.post("/", async (req, res, next) => {
  try {
    await ChatController.createChat(req, res);
  } catch (error) {
    next(error); // Passe o erro para o middleware de tratamento de erros
  }
});

export default router;
