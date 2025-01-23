import { Request, Response } from "express";
import { models } from "../models";

class ChatController {
  // Criar um novo chat
  static async createChat(req: Request, res: Response) {
    try {
      const { name, isGroup } = req.body;
      const chat = await models.Chat.create({ name, isGroup });

      return res.status(201).json(chat);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar chat", error });
    }
  }

  // Listar chats
  static async listChats(req: Request, res: Response) {
    try {
      const chats = await models.Chat.findAll();
      return res.json(chats);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar chats", error });
    }
  }
}

export default ChatController;
