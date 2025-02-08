import express, { json } from "express";
import { usersRouter } from "./routes/users.routes";

const app = express();

app.use(json());

app.use("/users", usersRouter);

const port = 5173;

app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`);
})