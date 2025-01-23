import { Request, Response, NextFunction } from "express";

interface ErrorResponse extends Error {
  statusCode?: number;
}

const errorHandler = (
  err: ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Erro interno no servidor";

  // Aqui você pode registrar o erro em um serviço de logging, como Sentry ou LogRocket.

  res.status(statusCode).json({ message });
};

export default errorHandler;
