import { Sequelize } from "sequelize";
import { env } from "./env";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: env.DB_HOST || "localhost",
  port: Number(env.DB_PORT) || 5432,
  username: env.DB_USER || "postgres",
  password: env.DB_PASS || "password",
  database: env.DB_NAME || "chatdb",
  logging: false, // Desativa logs do Sequelize
});

// Testa a conexão com o banco de dados
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
};

testConnection(); // Chama a função para verificar a conexão

export default sequelize;
