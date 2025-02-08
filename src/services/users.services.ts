import { generateId, usersDatabase } from "../database/database";
import { IUser } from "../interfaces/users.interfaces";

export class UsersServices {
    registerUser(name: string, email: string){
        const newUser: IUser = { id: generateId(), name, email};

        usersDatabase.push(newUser);

        return newUser
    }
    getUsers() {
        if(usersDatabase.length == 0){
            return {menssage:"A lista de usuarios está vazia", usersDatabase}
        }else{
            return usersDatabase
        }
    }
    updateUsers(id:number, name:string, email: string) {
        const index = usersDatabase.findIndex(element => element.id == id)
        const newUser: IUser = {id: id, name: name, email: email}

        if(index == -1){
            return {menssage:"Usuário não encontrado"}
        }else{
            usersDatabase.splice(index,1,newUser)
            return {menssage: "Usuario atualizado com Sucesso", user: newUser}
        }
    }
    deleteUsers(id: number) {
        const index = usersDatabase.findIndex(element => element.id == id)

        if(index == -1){
            return {menssage: "Usuário não encontrado"}
        }else{
            usersDatabase.splice(index,1)
            return {menssage: "Usuario excluido com Sucesso"}
        }
    }
}