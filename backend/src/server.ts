import express from "express";
import routes from "./routes"; // Importa o index.ts da pasta routes

const app = express();

app.use(express.json());
app.use("/api", routes); // Todas as rotas passam pelo prefixo "/api"

app.listen(5000, () => console.log("Servidor rodando na porta 5000"));
