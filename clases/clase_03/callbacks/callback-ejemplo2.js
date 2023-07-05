//definicion de las funciones para operaciones matematicas
//funciones callbacks
const sumar=(num1,num2)=>num1+num2;
const restar=(num1,num2)=>num1-num2;
const multiplicar=(num1,num2)=>num1*num2;
const dividir=(num1,num2)=>num1/num2;

//funcion receptora
const operaciones = ( num1, num2 , callback)=>{
    const resultado = callback(num1,num2);
    // const resultado2= resultado*2;
    // const objeto = {
    //     edad:resultado2
    // }
    console.log("resultado: ", resultado);
};

operaciones(4,5,sumar);
operaciones(5,6,multiplicar);