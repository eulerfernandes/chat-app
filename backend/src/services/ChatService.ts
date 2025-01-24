import { Chat } from "../models/Chat"; // Importa o modelo instanciado pelo Sequelize

class ChatService {
  static async getAllChats() {
    return await Chat.findAll();
  }

  static async createChat(name: string, isGroup: boolean) {
    return await Chat.create({ name, isGroup });
  }
}

export default ChatService;
