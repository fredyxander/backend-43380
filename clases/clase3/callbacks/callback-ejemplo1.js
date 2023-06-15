//sugar sintax
// let edad=20;
// edad = edad + 1;
// edad++;

const arregloOriginal = [1,2,3,4];
const nuevoArreglo = arregloOriginal.map((elm)=>{return elm*elm});
console.log("nuevoArreglo",nuevoArreglo);

const duplicar = (elm)=>{
    return elm*elm;
};

const nuevoArreglo2 = arregloOriginal.map(duplicar);
console.log("nuevoArreglo2",nuevoArreglo2);