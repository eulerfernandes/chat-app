import express from "express";
import routes from "./routes";
import sequelize from "./config/database";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware para processar JSON
app.use(express.json());

// Rotas principais
app.use("/api", routes);

// Conectar ao banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log("Banco de dados conectado com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });

// Porta definida no .env ou padrão 5000
const PORT = process.env.PORT || 5000;

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
