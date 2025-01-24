import { Model, DataTypes, Sequelize } from "sequelize";

// Interface para definir os atributos do usuário
interface UserAttributes {
  id?: number;
  email: string;
  password: string;
  name: string;
}

// Criamos a classe User com os tipos definidos
class User extends Model<UserAttributes> {
  public id!: number;
  public email!: string;
  public password!: string;
  public name!: string;

  // Método estático para inicializar o modelo
  static initModel(sequelize: Sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "users",
        timestamps: true, // Habilita createdAt e updatedAt
        defaultScope: {
          attributes: { exclude: ["password"] }, // Oculta a senha por padrão
        },
      }
    );
    return User; // Retorna a classe User
  }
}

export default User;
