import express from "express";
import routes from "./routes";
import sequelize from "./config/sequelize"; // Atualizado para usar o Sequelize
import dotenv from "dotenv";

// Carregar variáveis de ambiente
dotenv.config();

const app = express();

// Middleware para processar JSON
app.use(express.json());

// Rotas principais
app.use("/api", routes);

// Conectar ao banco de dados e sincronizar os models
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");

    // Sincronizar as tabelas com o banco de dados
    await sequelize.sync({ force: false }); // Alterar `force` para `true` se quiser recriar tabelas
    console.log("Tabelas sincronizadas com sucesso.");
  } catch (error) {
    console.error(
      "Erro ao conectar ou sincronizar com o banco de dados:",
      error
    );
  }
})();

// Porta definida no .env ou padrão 5000
const PORT = process.env.PORT || 5000;

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
