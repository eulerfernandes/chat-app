import sequelize from "../config/database";
import User from "./User";
import Message from "./Message";
import Chat from "./Chat";

// Inicializa os modelos
const models = {
  User: User.initModel(sequelize),
  Chat: Chat.initModel(sequelize),
  Message: Message.initModel(sequelize),
};

// Definir relacionamentos
models.User.hasMany(models.Message, { foreignKey: "userId" });
models.Chat.hasMany(models.Message, { foreignKey: "chatId" });
models.Message.belongsTo(models.User, { foreignKey: "userId" });
models.Message.belongsTo(models.Chat, { foreignKey: "chatId" });

// Sincroniza o banco de dados (somente para desenvolvimento)
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("📦 Banco de dados sincronizado");
  } catch (error) {
    console.error("Erro ao sincronizar o banco:", error);
  }
};

syncDatabase();

export { sequelize, models };
