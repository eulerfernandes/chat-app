"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Message extends sequelize_1.Model {
}
class MessageModel {
    static initModel(sequelize) {
        Message.init({
            id: {
                type: sequelize_1.DataTypes.UUID,
                defaultValue: sequelize_1.DataTypes.UUIDV4,
                primaryKey: true,
            },
            content: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false,
            },
            userId: {
                type: sequelize_1.DataTypes.UUID,
                allowNull: false,
            },
            chatId: {
                type: sequelize_1.DataTypes.UUID,
                allowNull: false,
            },
        }, {
            sequelize,
            tableName: "messages",
            timestamps: true,
        });
        return Message;
    }
}
exports.default = MessageModel;
