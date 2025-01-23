import { Request, Response } from "express";
import { models } from "../models";
import redisClient from "../config/redis";

class MessageController {
  // Enviar mensagem
  static async sendMessage(req: Request, res: Response) {
    try {
      const { content, chatId } = req.body;
      const userId = req.userId; // Middleware de autenticação

      const message = await models.Message.create({ content, userId, chatId });

      // Cachear mensagem no Redis
      await redisClient.set(`message:${message.id}`, JSON.stringify(message));

      return res.status(201).json(message);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao enviar mensagem", error });
    }
  }

  // Listar mensagens de um chat
  static async listMessages(req: Request, res: Response) {
    try {
      const { chatId } = req.params;

      const messages = await models.Message.findAll({ where: { chatId } });

      return res.json(messages);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar mensagens", error });
    }
  }
}

export default MessageController;
