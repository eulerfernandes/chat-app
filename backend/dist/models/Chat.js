"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Chat extends sequelize_1.Model {
}
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
            timestamps: true,
        });
        return Chat;
    }
}
exports.default = ChatModel;
