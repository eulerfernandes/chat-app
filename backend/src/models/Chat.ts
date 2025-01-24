import { DataTypes, Model, Sequelize } from "sequelize";

export class Chat extends Model {
  public id!: number;
  public name!: string;
  public isGroup!: boolean;
}

export default class ChatModel {
  static initModel(sequelize: Sequelize) {
    Chat.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        isGroup: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
      },
      {
        sequelize,
        tableName: "chats",
        timestamps: true,
      }
    );

    return Chat; // Exporta o modelo Sequelize
  }
}
