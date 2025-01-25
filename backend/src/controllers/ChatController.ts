import { Request, Response } from "express";
import ChatService from "../services/ChatService";

class ChatController {
  /**
   * Retorna todos os chats
   */
  static async getAllChats(req: Request, res: Response): Promise<Response> {
    try {
      const chats = await ChatService.getAllChats();
      return res.status(200).json(chats);
    } catch (error) {
      console.error("Erro ao buscar todos os chats:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido";
      return res.status(500).json({ message: errorMessage });
    }
  }

  /**
   * Cria um novo chat
   */
  static async createChat(req: Request, res: Response): Promise<Response> {
    try {
      const { name, isGroup } = req.body;

      // Validação de dados básicos
      if (!name) {
        return res
          .status(400)
          .json({ message: "O nome do chat é obrigatório." });
      }

      const chat = await ChatService.createChat(name, isGroup);
      return res.status(201).json(chat);
    } catch (error) {
      console.error("Erro ao criar o chat:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido";
      return res.status(400).json({ message: errorMessage });
    }
  }
}

export default ChatController;
