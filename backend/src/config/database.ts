import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "password",
  database: process.env.DB_NAME || "chatdb",
  logging: false, // Desativa logs do Sequelize
});

export default sequelize;
