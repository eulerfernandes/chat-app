import express from "express";
import dotenv from "dotenv";
import routes from "./routes"; // Importa o index.ts da pasta routes
import sequelize from "./config/database"; // Configuração do banco de dados

dotenv.config(); // Carrega variáveis de ambiente do .env

const app = express();

// Middlewares
app.use(express.json());

// Rotas
app.use("/api", routes); // Todas as rotas passam pelo prefixo "/api"

// Inicialização do servidor e conexão com o banco de dados
const startServer = async () => {
  try {
    // Testa a conexão com o banco de dados
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");

    // Sincroniza modelos com o banco de dados
    await sequelize.sync({ alter: true }); // `alter: true` ajusta o esquema automaticamente

    // Inicia o servidor
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(`Servidor rodando em http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error(
      "Erro ao conectar ao banco de dados ou iniciar o servidor:",
      error
    );
    process.exit(1); // Sai do processo em caso de erro crítico
  }
};

startServer();
