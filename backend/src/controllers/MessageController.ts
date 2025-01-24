import { DataTypes, Model, Sequelize } from "sequelize";

export class Message extends Model {
  public id!: number;
  public content!: string;
  public userId!: string;
  public chatId!: string;
}

export default class MessageModel {
  static initModel(sequelize: Sequelize) {
    Message.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        userId: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        chatId: {
          type: DataTypes.UUID,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "messages",
        timestamps: true,
      }
    );
    return Message; // Exporta o modelo instanciado
  }
}
