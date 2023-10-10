import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import { AppError } from "./errors/appError";

const app = express(); // Iniciando instância do microframework Express
app.use(express.json()); // Habilitar o uso de formato JSON
app.use(router); // Funciona como Middleware para utilizar as rotas criadas

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
  // Se o erro vier do AppError
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      id: err.id,
      errorCode: err.errorCode,
      message: err.message,
    });
  }

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");
  response.setHeader("Accept", "k5-access-token, k5-user");

  // Caso seja outro erro
  return response.status(500).json({
    id: 500,
    errorCode: "Erro 500",
    message: "Internal server error { " + err.message + " }",
  });
});

export { app };
