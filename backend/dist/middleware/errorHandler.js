"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Erro interno no servidor";
    // Aqui você pode registrar o erro em um serviço de logging, como Sentry ou LogRocket.
    res.status(statusCode).json({ message });
};
exports.default = errorHandler;
