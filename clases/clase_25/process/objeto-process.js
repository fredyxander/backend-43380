//simulación process.
// setTimeout(()=>{
//     console.log("Corriendo proceso");
// },10000);

//objeto process.
console.log("Objeto process", process);

//Elementos del proceso.
console.log("Directorio actual del proceso",process.cwd());
console.log("Id del proceso",process.pid);
console.log("Uso de memoria de la app",process.memoryUsage());