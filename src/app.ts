import express, { json } from "express";
import { usersRouter } from "./routes/users.routes";
import { HandleErros } from "./erros/handleErros.middleware";
import "express-async-errors";

export const app = express();

app.use(json());

app.use("/users", usersRouter);

app.use(HandleErros.execute)