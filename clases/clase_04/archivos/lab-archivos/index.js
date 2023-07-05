const {UserManager} = require("./userManager");

const filePath = "./usuarios.json";

const manager = new UserManager(filePath);
console.log("manager",manager);

//funcion para utilizar los metodos asincronos del manager
const operaciones = async()=>{
    try {
        const exists = manager.fileExist();
        console.log("exists",exists);

        //lectura de archivo
        const resultado = await manager.getUsers();
        console.log("resultado",resultado)

        //agregar usuario
        await manager.creatUser({nombre:"pepe", edad:20});
        await manager.creatUser({nombre:"juan", edad:30});
    } catch (error) {
        console.log(error.message);
    }
}

operaciones();