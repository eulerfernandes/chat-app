"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Criamos a classe User com os tipos definidos
class User extends sequelize_1.Model {
    // Método estático para inicializar o modelo
    static initModel(sequelize) {
        User.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: "User",
            tableName: "users",
            timestamps: true, // Habilita createdAt e updatedAt
            defaultScope: {
                attributes: { exclude: ["password"] }, // Oculta a senha por padrão
            },
        });
        return User; // Retorna a classe User
    }
}
exports.default = User;
