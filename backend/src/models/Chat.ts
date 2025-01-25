import { DataTypes, Model, Sequelize, Optional } from "sequelize";

// Interface para os atributos do modelo
interface ChatAttributes {
  id: string;
  name: string;
  isGroup: boolean;
}

// Interface para os atributos opcionais na criação
interface ChatCreationAttributes
  extends Optional<ChatAttributes, "id" | "isGroup"> {}

// Classe do modelo Sequelize
export class Chat
  extends Model<ChatAttributes, ChatCreationAttributes>
  implements ChatAttributes
{
  public id!: string; // UUID gerado automaticamente
  public name!: string; // Nome do chat
  public isGroup!: boolean; // Indica se é um chat em grupo

  // Timestamps padrão (createdAt, updatedAt)
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Classe para inicializar o modelo
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
        timestamps: true, // Cria automaticamente createdAt e updatedAt
      }
    );

    return Chat; // Retorna o modelo inicializado
  }
}
