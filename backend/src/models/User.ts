import { DataTypes, Model, Sequelize } from "sequelize";

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
}

export default class UserModel {
  static initModel(sequelize: Sequelize) {
    User.init(
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
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: { isEmail: true },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "users",
        timestamps: true,
      }
    );
    return User;
  }
}
