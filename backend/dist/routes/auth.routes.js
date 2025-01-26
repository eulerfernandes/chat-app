"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = __importDefault(require("../controllers/AuthController"));
const router = (0, express_1.Router)();
// Envolva os métodos do controlador com uma função anônima
router.post("/login", async (req, res, next) => {
    try {
        await AuthController_1.default.login(req, res);
    }
    catch (error) {
        next(error); // Passe o erro para o middleware de tratamento de erros
    }
});
router.post("/register", async (req, res, next) => {
    try {
        await AuthController_1.default.register(req, res);
    }
    catch (error) {
        next(error); // Passe o erro para o middleware de tratamento de erros
    }
});
exports.default = router;
