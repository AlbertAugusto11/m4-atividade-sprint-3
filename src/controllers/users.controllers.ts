import { Request, Response } from "express";
import { generateId, usersDatabase } from "../database/database";
import { IUser } from "../interfaces/users.interfaces";

export class UsersControllers{
    registerUser(req: Request, res: Response){
        const { name, email } = req.body;

        const newUser = { id: generateId(), name, email};

        usersDatabase.push(newUser);

        return res.status(201).json({ user: newUser, message: "Usuário cadastrado com sucesso."})
    }
    getUsers(req: Request, res: Response){
        if(usersDatabase.length == 0){
            return res.status(200).json({menssage:"A lista de usuarios está vazia", usersDatabase})
        }else{
            return res.status(200).json(usersDatabase)
        }
    }
    updateUsers(req: Request, res: Response){
        const index = usersDatabase.findIndex(element => element.id == Number(req.params.id))
        const newUser: IUser = {id: Number(req.params.id), name: req.body.name, email: req.body.email}

        if(index == -1){
            return res.status(200).send("Usuário não encontrado")
        }else{
            usersDatabase.splice(index,1,newUser)
            return res.status(200).json({menssage: "Usuario atualizado com Sucesso", user: newUser})
        }
    }
    deleteUser(req: Request, res: Response){
        const index = usersDatabase.findIndex(element => element.id == Number(req.params.id))

        if(index == -1){
            return res.status(200).send("Usuário não encontrado")
        }else{
            usersDatabase.splice(index,1)
            return res.status(200).json({menssage: "Usuario excluido com Sucesso"})
        }
    }
}