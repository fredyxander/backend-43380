// console.log(process.argv);
const argumentos = process.argv.slice([2]);
console.log("Argumentos",argumentos);

// //Argumento para ejecutar mi aplicación en un modo especifico.
//Si ejecutamos node argumentos/index.js --mode development
console.log(process.argv.slice([2]));// ["--mode", development]