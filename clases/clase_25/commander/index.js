import { Command } from "commander";

const program = new Command(); //inicializar un programa de commander

//especificamos las opciones de nuestro programa
program
//El primer parámetro es el nombre de la opción
//El 2do la descripción
//El 3ro el valor por defecto
.option("-p <port>","puerto del servidor",3000)
.option("--mode <mode>","mode trabajo del servidor","development")
//opción requerida
.requiredOption("-u <user>","usuario con permisos para ejecutar la aplicacion","No se ha indicado un usuario");

program.parse();
const argumentos = program.opts()
console.log("argumentos", argumentos);

if(argumentos.mode === "development"){
    console.log("Ejecutando app en modo desarrollo");
} else {
    console.log("Ejecutando app en modo producción");
}
