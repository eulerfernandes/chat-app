"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chat_1 = require("../models/Chat"); // Importa o modelo instanciado pelo Sequelize
class ChatService {
    // Obtém todos os chats
    static async getAllChats() {
        try {
            return await Chat_1.Chat.findAll();
        }
        catch (error) {
            console.error("Erro ao buscar chats:", error);
            throw new Error("Erro ao buscar chats.");
        }
    }
    // Cria um novo chat
    static async createChat(name, isGroup) {
        try {
            return await Chat_1.Chat.create({ name, isGroup });
        }
        catch (error) {
            console.error("Erro ao criar chat:", error);
            throw new Error("Erro ao criar chat.");
        }
    }
}
exports.default = ChatService;
