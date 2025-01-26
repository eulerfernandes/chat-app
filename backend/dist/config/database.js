"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const env_1 = require("./env");
const sequelize = new sequelize_1.Sequelize({
    dialect: "postgres",
    host: env_1.env.DB_HOST || "localhost",
    port: Number(env_1.env.DB_PORT) || 5432,
    username: env_1.env.DB_USER || "postgres",
    password: env_1.env.DB_PASS || "password",
    database: env_1.env.DB_NAME || "chatdb",
    logging: false, // Desativa logs do Sequelize
});
// Testa a conexão com o banco de dados
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexão com o banco de dados estabelecida com sucesso.");
    }
    catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
    }
};
testConnection(); // Chama a função para verificar a conexão
exports.default = sequelize;
