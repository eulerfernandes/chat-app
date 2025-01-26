"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ChatController_1 = __importDefault(require("../controllers/ChatController"));
const router = (0, express_1.Router)();
router.get("/", async (req, res, next) => {
    try {
        await ChatController_1.default.getAllChats(req, res);
    }
    catch (error) {
        next(error); // Passe o erro para o middleware de tratamento de erros
    }
});
router.post("/", async (req, res, next) => {
    try {
        await ChatController_1.default.createChat(req, res);
    }
    catch (error) {
        next(error); // Passe o erro para o middleware de tratamento de erros
    }
});
exports.default = router;
