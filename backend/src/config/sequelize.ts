import { Sequelize } from "sequelize";
import { env } from "./env"; // Seu arquivo de configuração de ambiente

// Inicializa a conexão Sequelize
const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
  host: env.DB_HOST,
  port: parseInt(env.DB_PORT),
  dialect: "postgres",
  logging: false, // Opcional: desativa logs de SQL
});

// Teste de conexão
(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Conexão com o banco de dados (Sequelize) foi estabelecida com sucesso!"
    );
  } catch (error) {
    console.error("Erro ao conectar no banco de dados com o Sequelize:", error);
  }
})();

export default sequelize;
