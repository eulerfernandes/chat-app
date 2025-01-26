"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const env_1 = require("./env"); // Seu arquivo de configuração de ambiente
// Inicializa a conexão Sequelize
const sequelize = new sequelize_1.Sequelize(env_1.env.DB_NAME, env_1.env.DB_USER, env_1.env.DB_PASS, {
    host: env_1.env.DB_HOST,
    port: parseInt(env_1.env.DB_PORT),
    dialect: "postgres",
    logging: false, // Opcional: desativa logs de SQL
});
// Teste de conexão
(async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexão com o banco de dados (Sequelize) foi estabelecida com sucesso!");
    }
    catch (error) {
        console.error("Erro ao conectar no banco de dados com o Sequelize:", error);
    }
})();
exports.default = sequelize;
