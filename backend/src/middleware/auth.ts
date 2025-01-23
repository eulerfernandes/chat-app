import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: any; // Aqui você vai armazenar as informações do usuário
}

const secretKey = process.env.JWT_SECRET_KEY || "your-secret-key";

const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1]; // Pega o token no formato "Bearer token"

  if (!token) {
    return res.status(401).json({ message: "Token não fornecido." });
  }

  try {
    // Verifica o token
    const decoded = jwt.verify(token, secretKey) as { userId: string };
    req.user = decoded; // Adiciona as informações do usuário na requisição
    next(); // Passa a requisição para o próximo middleware ou rota
  } catch (error) {
    return res.status(401).json({ message: "Token inválido." });
  }
};

export default authMiddleware;
