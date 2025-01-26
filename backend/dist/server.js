"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes")); // Importa o index.ts da pasta routes
const database_1 = __importDefault(require("./config/database")); // Configuração do banco de dados
dotenv_1.default.config(); // Carrega variáveis de ambiente do .env
const app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.json());
// Rotas
app.use("/api", routes_1.default); // Todas as rotas passam pelo prefixo "/api"
// Inicialização do servidor e conexão com o banco de dados
const startServer = async () => {
    try {
        // Testa a conexão com o banco de dados
        await database_1.default.authenticate();
        console.log("Conexão com o banco de dados estabelecida com sucesso.");
        // Sincroniza modelos com o banco de dados
        await database_1.default.sync({ alter: true }); // `alter: true` ajusta o esquema automaticamente
        // Inicia o servidor
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
    }
    catch (error) {
        console.error("Erro ao conectar ao banco de dados ou iniciar o servidor:", error);
        process.exit(1); // Sai do processo em caso de erro crítico
    }
};
startServer();
