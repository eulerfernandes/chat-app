"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = exports.sequelize = void 0;
const database_1 = __importDefault(require("../config/database"));
exports.sequelize = database_1.default;
const User_1 = __importDefault(require("./User"));
const Message_1 = __importDefault(require("./Message"));
const Chat_1 = __importDefault(require("./Chat"));
// Inicializa os modelos
const models = {
    User: User_1.default.initModel(database_1.default),
    Chat: Chat_1.default.initModel(database_1.default),
    Message: Message_1.default.initModel(database_1.default),
};
exports.models = models;
// Definir relacionamentos
models.User.hasMany(models.Message, { foreignKey: "userId" });
models.Chat.hasMany(models.Message, { foreignKey: "chatId" });
models.Message.belongsTo(models.User, { foreignKey: "userId" });
models.Message.belongsTo(models.Chat, { foreignKey: "chatId" });
// Sincroniza o banco de dados (somente para desenvolvimento)
const syncDatabase = async () => {
    try {
        await database_1.default.sync({ alter: true });
        console.log("📦 Banco de dados sincronizado");
    }
    catch (error) {
        console.error("Erro ao sincronizar o banco:", error);
    }
};
syncDatabase();
