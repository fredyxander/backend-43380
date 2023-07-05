// const a = 1;
// const b = 2;
// const suma = a + b;
// console.log(suma);

// const c =5;
// const d =6;
// const suma2 = c + d;
// console.log(suma2);

//FUNCIONES
// function sumar(numero1,numero2){
//     const suma = numero1 + numero2;
//     console.log(suma);
// };

// sumar(5,8);
// sumar(6,8);

//funciones tipo flecha =>arrow function
//sintaxis: ()=>{}
// const multiplicar = (numero1, numero2)=>{
//     //instrucciones para la multiplicacion
//     const resultado = numero1 * numero2;
//     console.log(resultado);
// };

// multiplicar(6,9);

//si la funcion retorna un valor, podemos quitar las llaves.
// const dividir = (num1,num2)=>{
//     const resultado = num1/num2;
//     return resultado;
// }
// const cuentas = dividir(10,2);
// console.log(cuentas);

// const multiplicar = (num1,num2)=>num1*num2;
// const resultado = multiplicar(7,9);
// console.log(resultado);

const saludar = nombre => "hola " + nombre;
const saludo = saludar("juan");
console.log(saludo);