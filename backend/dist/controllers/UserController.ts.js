"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../models");
const env_1 = require("../config/env");
class UserController {
    // Cadastro de usuário
    static async register(req, res) {
        try {
            const { name, email, password } = req.body;
            const existingUser = await models_1.models.User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ message: "E-mail já cadastrado" });
            }
            const hashedPassword = await bcryptjs_1.default.hash(password, 10);
            const user = await models_1.models.User.create({
                name,
                email,
                password: hashedPassword,
            });
            return res.status(201).json(user);
        }
        catch (error) {
            return res
                .status(500)
                .json({ message: "Erro ao registrar usuário", error });
        }
    }
    // Login de usuário
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await models_1.models.User.findOne({ where: { email } });
            if (!user || !(await bcryptjs_1.default.compare(password, user.password))) {
                return res.status(401).json({ message: "Credenciais inválidas" });
            }
            const token = jsonwebtoken_1.default.sign({ id: user.id }, env_1.env.JWT_SECRET, {
                expiresIn: "1h",
            });
            return res.json({ user, token });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao fazer login", error });
        }
    }
    // Buscar perfil do usuário
    static async getProfile(req, res) {
        try {
            const userId = req.userId; // Obtido pelo middleware de autenticação
            const user = await models_1.models.User.findByPk(userId, {
                attributes: { exclude: ["password"] },
            });
            if (!user) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }
            return res.json(user);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro ao buscar perfil", error });
        }
    }
}
exports.default = UserController;
