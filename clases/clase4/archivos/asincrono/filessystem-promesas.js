const fs = require("fs");

const rutaArchivo = "./ejemploPromesas.txt";

const operacionesAsincronas = async()=>{
    try {
        //escritura de un archivo
        await fs.promises.writeFile(rutaArchivo,"contenido con promesas");

        //lectura archivo
        const contenido = await fs.promises.readFile(rutaArchivo,"utf-8");
        console.log("contenido: ", contenido);

        //lectura
        // const contenido2 = await fs.promises.readFile("noexiste.txt","utf-8");
        // console.log("contenido2", contenido2);

        //eliminacion de un archivo
        await fs.promises.unlink(rutaArchivo);
        console.log("archivo eliminado");
    } catch (error) {
        console.log(error.message);
    }
}

operacionesAsincronas();