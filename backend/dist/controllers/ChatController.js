"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class ChatController {
    // Criar um novo chat
    static createChat(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, isGroup } = req.body;
                const chat = yield models_1.models.Chat.create({ name, isGroup });
                return res.status(201).json(chat);
            }
            catch (error) {
                return res.status(500).json({ message: "Erro ao criar chat", error });
            }
        });
    }
    // Listar chats
    static listChats(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chats = yield models_1.models.Chat.findAll();
                return res.json(chats);
            }
            catch (error) {
                return res.status(500).json({ message: "Erro ao buscar chats", error });
            }
        });
    }
}
exports.default = ChatController;
