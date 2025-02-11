import { Request, Response } from "express";
import { generateId, usersDatabase } from "../database/database";
import { UsersServices } from "../services/users.services";

export class UsersControllers{
    registerUser(req: Request, res: Response){
        const usersServices = new UsersServices()

        const response = usersServices.registerUser(req.body.name, req.body.email)

        console.log({menssage: "Novo Usuario Registrado", user: response})

        return res.status(201).json({ user: response, message: "Usuário cadastrado com sucesso."})
    }
    getUsers(req: Request, res: Response){
        const usersServices = new UsersServices()

        const response = usersServices.getUsers()

        return res.status(200).json(response)
    }
    updateUsers(req: Request, res: Response){
        const usersServices = new UsersServices()

        const response = usersServices.updateUsers(Number(req.params.id), req.body.name, req.body.email)

        return res.status(200).json(response)
    }
    deleteUser(req: Request, res: Response){
        const usersServices = new UsersServices()

        const response = usersServices.deleteUsers(Number(req.params.id))

        return res.status(200).json(response)
    }
}