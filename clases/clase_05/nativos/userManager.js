const fs = require("fs");
const crypto = require("crypto");

class UserManager{
    #secret="codigoSecreto";
    constructor(path){
        this.path=path;
    };

    async createUser(user){
        try {
            const newUser = {
                name:user.name,
                lastname: user.lastname,
                email: user.email,
                password:crypto.createHmac("sha256",this.#secret).update(user.password).digest('hex')
            }
            const users =  await fs.promises.readFile(this.path,"utf-8");
            const usersJson = JSON.parse(users);
            usersJson.push(newUser);
            await fs.promises.writeFile(this.path,JSON.stringify(usersJson,null,'\t'));
            console.log("usuario creado");
        } catch (error) {
            console.log("hubo un error", error.message);
        }
    };
}

const usermanager = new UserManager("./usuarios.json");
const operations = async()=>{
    try {
        await usermanager.createUser({name:"pepe",lastname:"perez", email:"pepe@gmail.com", password:"1234"});
    } catch (error) {
        console.log(error.message);
    }
}
operations();