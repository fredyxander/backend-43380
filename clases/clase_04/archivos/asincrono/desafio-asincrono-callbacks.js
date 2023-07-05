const fs = require("fs");

const fechaActual = new Date().toLocaleDateString();
const horaActual = new Date().toLocaleTimeString();

const rutaArchivo = "./fechaYHora.txt";

fs.writeFile(rutaArchivo, `Fecha actual: ${fechaActual} y hora actual: ${horaActual}`, (err)=>{
    if(err) return console.log("Error al escribir el archivo");
    console.log("Archivo escrito");
    fs.readFile(rutaArchivo, "utf-8", (err,contenido)=>{
        if(err) return console.log("Error al leer el archivo")
        console.log("contenido:", contenido);
        console.log("fin del programa");
    });
});