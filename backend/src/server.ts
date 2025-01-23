import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rota básica para testar se a API está rodando
app.get("/", (req, res) => {
  res.send("API funcionando!");
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
