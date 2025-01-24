import { Request, Response } from "express";
import ChatService from "../services/ChatService";

class ChatController {
  static async getAllChats(req: Request, res: Response): Promise<Response> {
    try {
      const chats = await ChatService.getAllChats();
      return res.status(200).json(chats);
    } catch (error) {
      console.error(error);
      // Verifique ou converta o tipo do erro
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return res.status(500).json({ message: errorMessage });
    }
  }

  static async createChat(req: Request, res: Response): Promise<Response> {
    try {
      const { name, isGroup } = req.body;
      const chat = await ChatService.createChat(name, isGroup);
      return res.status(201).json(chat);
    } catch (error) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return res.status(400).json({ message: errorMessage });
    }
  }
}

export default ChatController;
