import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { models } from "../models";
import { env } from "../config/env";

class UserController {
  // Cadastro de usuário
  static async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const existingUser = await models.User.findOne({ where: { email } });

      if (existingUser) {
        return res.status(400).json({ message: "E-mail já cadastrado" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await models.User.create({
        name,
        email,
        password: hashedPassword,
      });

      return res.status(201).json(user);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao registrar usuário", error });
    }
  }

  // Login de usuário
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await models.User.findOne({ where: { email } });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Credenciais inválidas" });
      }

      const token = jwt.sign({ id: user.id }, env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.json({ user, token });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao fazer login", error });
    }
  }

  // Buscar perfil do usuário
  static async getProfile(req: Request, res: Response) {
    try {
      const userId = req.userId; // Obtido pelo middleware de autenticação
      const user = await models.User.findByPk(userId, {
        attributes: { exclude: ["password"] },
      });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar perfil", error });
    }
  }
}

export default UserController;
