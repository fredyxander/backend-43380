//scope global
let variableGlobal="juan";
console.log(variableGlobal);

//scope local
if(true){
    let variableLocal="Pedro";
    console.log("1",variableLocal);
    console.log(variableGlobal);
    var variableLocalVar="variable con var";
    if(true){
        const edad=20;
        console.log(edad);
        console.log(variableLocal);
        console.log(variableGlobal);
    }
    // console.log(edad);Error edad not defined
};
// console.log(variableLocalVar);
// console.log("2",variableLocal);//Error variable no definida

const sumar = (num1,num2)=>{

}
// console.log(num1);

const multiplicar = (num1,num2)=>{

}