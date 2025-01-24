import { Request, Response } from "express";

class ChatController {
  // Método para obter todos os chats
  static async getAllChats(req: Request, res: Response): Promise<Response> {
    try {
      // Substitua isso por lógica real (exemplo fictício)
      const chats = [
        { id: 1, name: "Chat 1" },
        { id: 2, name: "Chat 2" },
      ];

      return res
        .status(200)
        .json({ message: "Chats obtidos com sucesso", chats });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao buscar os chats" });
    }
  }

  // Método para criar um novo chat
  static async createChat(req: Request, res: Response): Promise<Response> {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({ message: "Nome do chat é obrigatório" });
      }

      // Substitua isso por lógica real (exemplo fictício)
      const newChat = { id: Date.now(), name };

      return res
        .status(201)
        .json({ message: "Chat criado com sucesso", chat: newChat });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao criar o chat" });
    }
  }
}

export default ChatController;
