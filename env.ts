import dotenv from "dotenv";

// Carrega o arquivo .env
dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: process.env.DB_PORT || "5432",
  DB_USER: process.env.DB_USER || "postgres",
  DB_PASS: process.env.DB_PASS || "password",
  DB_NAME: process.env.DB_NAME || "chatdb",
  REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",
  ELASTICSEARCH_URL: process.env.ELASTICSEARCH_URL || "http://localhost:9200",
  JWT_SECRET: process.env.JWT_SECRET || "supersecret",
};
