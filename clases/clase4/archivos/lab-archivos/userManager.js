const fs = require("fs");

class UserManager{
    constructor(path){
        this.path=path;
    };

    fileExist(){
        return fs.existsSync(this.path);
    }

    async creatUser(user){
        try {
            if(this.fileExist()){
                //leer el archivo
                const contenido = await fs.promises.readFile(this.path,"utf-8");
                const users = JSON.parse(contenido);
                users.push(user);
                //reescribimos el archivo con el nuevo contenido
                await fs.promises.writeFile(this.path,JSON.stringify(users,null,'\t'));
                console.log("usuario creado");
            } else {
                console.log("El archivo no existe");
                await fs.promises.writeFile(this.path,JSON.stringify([user],null,'\t'));
                console.log("usuario creado");
            }
        } catch (error) {
            console.log(error.message);
            return undefined;
        }
    };

    async getUsers(){
        try {
            if(this.fileExist()){
                const contenido = await fs.promises.readFile(this.path,"utf-8");
                const contenidoJson = JSON.parse(contenido);
                return contenidoJson;
            } else {
                return console.log("El archivo no existe");
            }
        } catch (error) {
            console.log(error.message);
            return undefined;
        }
    };
}

module.exports = { UserManager }