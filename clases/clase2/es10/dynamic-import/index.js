// import { cursos } from "./modulo.js";

console.log("otro codigo")
console.log("otro codigo")
console.log("otro codigo")
console.log("otro codigo")
console.log("otro codigo")
console.log("otro codigo")

const modo = "leerCursos";
if(modo === "leerCursos"){
    const {cursos} = await import("./modulo.js");
    console.log("cursos: ", cursos);
};