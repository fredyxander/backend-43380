//map:crear un nuevo arreglo apartir de otro arreglo, donde los elemts del nuevo arreglo, van a ser los elemts del arreglo original procesados.

// const numeros = [1,2,3,4];
// const numerosDuplicados = numeros.map((elementoActual) => elementoActual*2);
// console.log("numerosDuplicados: ", numerosDuplicados);
// console.log("numeros: ", numeros);

// const personas = [
//     {name:"pepe", age:20},
//     {name:"laura", age:24},
//     {name:"juan", age:27},
// ];
// const nombres = personas.map((persona)=>{return persona.name});
// console.log("nombres: ", nombres);

//find: devuelve el primer elemento que cumpla una condicion dentro del arreglo
// const personas = [
//     {name:"pepe", age:20},
//     {name:"laura", age:24},
//     {name:"pedro", age:13},
//     {name:"juan", age:27},
//     {name:"tomas", age:17},
// ];
// const personaJoven = personas.find((persona)=>{return persona.age<=18});
// console.log("personaJoven: ", personaJoven);


//filter:devuelve todos los elementos que cumplan una condicion dentro del arreglo
//filter siempre devuelve un arreglo
// const personas = [
//     {name:"pepe", age:20},
//     {name:"laura", age:24},
//     {name:"pedro", age:13},
//     {name:"juan", age:27},
//     {name:"tomas", age:17},
// ];
// const personasJovenes = personas.filter((persona)=>{return persona.age<=18});
// console.log("personasJovenes: ", personasJovenes);

// const personasMayores25 = personas.filter((persona)=>{return persona.age>25});
// console.log("personasMayores25: ", personasMayores25);

//reduce:
// const numeros = [1,2,3,4,5];
// let result=0;
// for(let i=0;i<numeros.length;i++){
//     result = result + numeros[i];
// };
// console.log("result:",result);

// const result = numeros.reduce((accumulator,currentItem)=>{return accumulator+currentItem},0);
// console.log("result:",result);

//some:verfiica si alguno elemento dentro del arreglo cumple una condicion. devuleve un true
// si ninguno de los elementos dentro del arreglo cumple la condicion, devuelve false.
const personas = [
    {name:"pepe", age:20},
    {name:"laura", age:24},
    {name:"pedro", age:13},
    {name:"juan", age:27},
    {name:"tomas", age:17},
];
const existeTomas = personas.some((persona)=> persona.name === "tomas");
console.log("existeTomas:", existeTomas);
const existeLucas = personas.some((persona)=> persona.name === "lucas");
console.log("existeLucas:",existeLucas);