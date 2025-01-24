import { Router } from "express";
import AuthController from "../controllers/AuthController";

const router = Router();

// Envolva os métodos do controlador com uma função anônima
router.post("/login", async (req, res, next) => {
  try {
    await AuthController.login(req, res);
  } catch (error) {
    next(error); // Passe o erro para o middleware de tratamento de erros
  }
});

router.post("/register", async (req, res, next) => {
  try {
    await AuthController.register(req, res);
  } catch (error) {
    next(error); // Passe o erro para o middleware de tratamento de erros
  }
});

export default router;
