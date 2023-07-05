//destructuracion para arreglos
const fruits = ["manzana","pera","naranja"];
// const fruta1 = fruits[0];
// const fruta2 = fruits[1];
// const fruta3 = fruits[2];
// console.log("fruta1:", fruta1);

// const [fruta1,fruta2] = fruits;
// console.log("fruta2: ", fruta2);

//destructuracion para objetos
const persona = {
    nombre:"pepe",
    edad:20,
    ciudad:"miami",
    curso:"javascript"
};
const edadPersona = persona.edad;
const cursoPersona = persona["curso"]; //persona.curso
console.log("edadPersona: ", edadPersona);
console.log(`cursoPersona: ${cursoPersona}`);

const {nombre, ciudad, curso, direccion} = persona;
console.log("ciudad: ", ciudad);
console.log("direccion: ", direccion);