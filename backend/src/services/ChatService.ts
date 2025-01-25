import { Chat } from "../models/Chat"; // Importa o modelo instanciado pelo Sequelize

class ChatService {
  // Obtém todos os chats
  static async getAllChats() {
    try {
      return await Chat.findAll();
    } catch (error) {
      console.error("Erro ao buscar chats:", error);
      throw new Error("Erro ao buscar chats.");
    }
  }

  // Cria um novo chat
  static async createChat(name: string, isGroup: boolean) {
    try {
      return await Chat.create({ name, isGroup });
    } catch (error) {
      console.error("Erro ao criar chat:", error);
      throw new Error("Erro ao criar chat.");
    }
  }
}

export default ChatService;
