import { NextFunction, Request, Response } from "express";
import { usersDatabase } from "../database/database";
import { AppError } from "../erros/AppErros";

export class IsUserEmailUnique{
    static execute(req: Request, res: Response, next: NextFunction){
        if(usersDatabase.some(user => user.email === req.body.email)){
            throw new AppError(404, "Email already registered.")
        }

        next();
    }
}