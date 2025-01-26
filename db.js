const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres", // Usuário do PostgreSQL
  host: "localhost", // Host do servidor
  database: "chatdb", // Nome do banco de dados
  password: "sua_senha", // Senha do usuário
  port: 5432, // Porta padrão do PostgreSQL
});

async function connect() {
  try {
    const client = await pool.connect();
    console.log("Conexão bem-sucedida!");
    client.release();
  } catch (err) {
    console.error("Erro ao conectar ao banco:", err);
  }
}

connect();
