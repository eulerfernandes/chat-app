"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.env = {
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
