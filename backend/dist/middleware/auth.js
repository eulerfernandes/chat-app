"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = process.env.JWT_SECRET_KEY || "your-secret-key";
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Pega o token no formato "Bearer token"
    if (!token) {
        return res.status(401).json({ message: "Token não fornecido." });
    }
    try {
        // Verifica o token
        const decoded = jsonwebtoken_1.default.verify(token, secretKey);
        req.user = decoded; // Adiciona as informações do usuário na requisição
        next(); // Passa a requisição para o próximo middleware ou rota
    }
    catch (error) {
        return res.status(401).json({ message: "Token inválido." });
    }
};
exports.default = authMiddleware;
