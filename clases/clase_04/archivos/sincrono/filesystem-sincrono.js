//requerir o importar el modulo de filesystem
const fs = require("fs");

//escribir un archivo
fs.writeFileSync("./ejemplo1.txt","primer contenido");
// fs.writeFileSync("./ejemplo1.txt","segundo contenido");

//verificar que un archivo exista
const fileExist = fs.existsSync("./ejemplo1.txt");
console.log("fileExist",fileExist)
if(fileExist){
    //leer el contenido del archivo
    const contenido = fs.readFileSync("./ejemplo1.txt","utf-8");
    console.log("contenido: ", contenido);

    //eliminar el archivo
    try {
        fs.unlinkSync("./ejemplo2.txt");
    } catch (error) {
        console.log(error.message);
    }
} else {
    console.log("el archivo no existe");
}