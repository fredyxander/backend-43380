const zoologico = {
    leon: '🦁',
    mono: '🐒',
    elefante: '🐘'
};
//propiedades de un objeto son las mismas llaves, keys

//Object.entries:
const parLlaveValor = Object.entries(zoologico);
console.log("parLlaveValor", parLlaveValor);

// Object.keys: retorna una arreglo donde los elementos son las propiedades del objeto
const propiedades = Object.keys(zoologico);
console.log("propiedades",propiedades);

//Object.values: retornar un arreglo donde los elementos son los valores de las propiedades del objeto
const valores = Object.values(zoologico);
console.log("valores",valores);

//verificar si el mono existe en el zoologico
if(propiedades.includes("mono")){
    console.log("el mono esta en el zoologico")
} else {
    console.log('el mono ya se fue');
}