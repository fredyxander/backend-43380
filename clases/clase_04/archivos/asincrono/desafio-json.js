const fs = require("fs");

const operaciones = async()=>{
    try {
        //leer archivo package.json
        const contenido = await fs.promises.readFile("./package.json","utf-8");
        // console.log("contenido",contenido);
        const info = {
            contenidoStr:contenido,//formato string
            contenidoJson:JSON.parse(contenido),//formato json => string->json
        }
        console.log("info",info)
        info.contenidoJson.author="Lucas";
        console.log("info",info);
        //guardar el objeto info en un archivo llamado info.json
        await fs.promises.writeFile("./info.json",JSON.stringify(info,null,'\t'));
        console.log("nuevo archivo creado");
    } catch (error) {
        console.log(error.message);
    }
}

operaciones();