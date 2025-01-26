"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const sequelize_1 = __importDefault(require("./config/sequelize")); // Atualizado para usar o Sequelize
const dotenv_1 = __importDefault(require("dotenv"));
// Carregar variáveis de ambiente
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware para processar JSON
app.use(express_1.default.json());
// Rotas principais
app.use("/api", routes_1.default);
// Conectar ao banco de dados e sincronizar os models
(async () => {
  try {
    await sequelize_1.default.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
    // Sincronizar as tabelas com o banco de dados
    await sequelize_1.default.sync({ force: false }); // Alterar `force` para `true` se quiser recriar tabelas
    console.log("Tabelas sincronizadas com sucesso.");
  } catch (error) {
    console.error(
      "Erro ao conectar ou sincronizar com o banco de dados:",
      error
    );
  }
})();
// Porta definida no .env ou padrão 5000
const PORT = process.env.PORT || 5000;
// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
