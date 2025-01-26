"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChatService_1 = __importDefault(require("../services/ChatService"));
class ChatController {
    /**
     * Retorna todos os chats
     */
    static async getAllChats(req, res) {
        try {
            const chats = await ChatService_1.default.getAllChats();
            return res.status(200).json(chats);
        }
        catch (error) {
            console.error("Erro ao buscar todos os chats:", error);
            const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
            return res.status(500).json({ message: errorMessage });
        }
    }
    /**
     * Cria um novo chat
     */
    static async createChat(req, res) {
        try {
            const { name, isGroup } = req.body;
            // Validação de dados básicos
            if (!name) {
                return res
                    .status(400)
                    .json({ message: "O nome do chat é obrigatório." });
            }
            const chat = await ChatService_1.default.createChat(name, isGroup);
            return res.status(201).json(chat);
        }
        catch (error) {
            console.error("Erro ao criar o chat:", error);
            const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
            return res.status(400).json({ message: errorMessage });
        }
    }
}
exports.default = ChatController;
