//funcion declarada:
console.log(nombreDeLaFuncion(5,3));
function nombreDeLaFuncion(param1, param2){
    return param1+param2;
}
console.log(nombreDeLaFuncion(2,3));

//funciones expresadas:funciones que asignamos a una variable
const variable = function(num1,num2){
    return num1+num2;
};
console.log(variable(4,5));

const variable2 = (num1,num2)=>{
    return num1+num2;
};
console.log(variable2(7,6));