"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const sequelize_1 = require("sequelize");
// Classe do modelo Sequelize
class Chat extends sequelize_1.Model {
}
exports.Chat = Chat;
// Classe para inicializar o modelo
class ChatModel {
    static initModel(sequelize) {
        Chat.init({
            id: {
                type: sequelize_1.DataTypes.UUID,
                defaultValue: sequelize_1.DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            isGroup: {
                type: sequelize_1.DataTypes.BOOLEAN,
                defaultValue: false,
            },
        }, {
            sequelize,
            tableName: "chats",
            timestamps: true, // Cria automaticamente createdAt e updatedAt
        });
        return Chat; // Retorna o modelo inicializado
    }
}
exports.default = ChatModel;
