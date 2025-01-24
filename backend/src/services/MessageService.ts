import MessageModel from "../models/Message"; // Classe que define o modelo
import { Message } from "../models/Message"; // Modelo instanciado pelo Sequelize

export default class MessageService {
  static async createMessage(content: string, userId: string, chatId: string) {
    return await Message.create({ content, userId, chatId });
  }

  static async getMessagesByChatId(chatId: string) {
    return await Message.findAll({ where: { chatId } });
  }
}
