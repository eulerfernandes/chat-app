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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const redis_1 = __importDefault(require("../config/redis"));
class MessageController {
    // Enviar mensagem
    static sendMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { content, chatId } = req.body;
                const userId = req.userId; // Middleware de autenticação
                const message = yield models_1.models.Message.create({ content, userId, chatId });
                // Cachear mensagem no Redis
                yield redis_1.default.set(`message:${message.id}`, JSON.stringify(message));
                return res.status(201).json(message);
            }
            catch (error) {
                return res
                    .status(500)
                    .json({ message: "Erro ao enviar mensagem", error });
            }
        });
    }
    // Listar mensagens de um chat
    static listMessages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { chatId } = req.params;
                const messages = yield models_1.models.Message.findAll({ where: { chatId } });
                return res.json(messages);
            }
            catch (error) {
                return res
                    .status(500)
                    .json({ message: "Erro ao buscar mensagens", error });
            }
        });
    }
}
exports.default = MessageController;
