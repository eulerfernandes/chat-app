"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = require("../models/Message"); // Modelo instanciado pelo Sequelize
class MessageService {
    static async createMessage(content, userId, chatId) {
        return await Message_1.Message.create({ content, userId, chatId });
    }
    static async getMessagesByChatId(chatId) {
        return await Message_1.Message.findAll({ where: { chatId } });
    }
}
exports.default = MessageService;
