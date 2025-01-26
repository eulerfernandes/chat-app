"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User")); // Certifique-se de que o caminho está correto.
const secretKey = process.env.JWT_SECRET_KEY || "default-secret-key";
class AuthController {
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            // Procura o usuário pelo email
            const user = await User_1.default.findOne({ where: { email } });
            if (!user) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }
            // Verifica a senha
            const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Credenciais inválidas" });
            }
            // Gera o token
            const token = jsonwebtoken_1.default.sign({ userId: user.id }, secretKey, {
                expiresIn: "1h",
            });
            return res.status(200).json({ token });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Erro interno do servidor" });
        }
    }
    static async register(req, res) {
        try {
            const { email, password, name } = req.body;
            // Valida o email
            if (!email || !password || !name) {
                return res.status(400).json({ message: "Preencha todos os campos" });
            }
            const userExists = await User_1.default.findOne({ where: { email } });
            if (userExists) {
                return res.status(409).json({ message: "Usuário já existe" });
            }
            // Criptografa a senha
            const hashedPassword = await bcryptjs_1.default.hash(password, 10);
            // Cria o usuário
            const user = await User_1.default.create({ email, password: hashedPassword, name });
            // Gera o token
            const token = jsonwebtoken_1.default.sign({ userId: user.id }, secretKey, {
                expiresIn: "1h",
            });
            return res.status(201).json({ token });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Erro interno do servidor" });
        }
    }
}
exports.default = AuthController;
