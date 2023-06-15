//crear un funcion, que va a retornar una promesa
// 4/8 4 dividendo, y 8 divisor
const dividir = (dividendo, divisor)=>{
    return new Promise((resolve,reject)=>{
        if(divisor === 0){
            //rechazamos la solicitud de la division
            reject("No es posible dividir por cero");
        } else {
            //podemos cumplir la promesa que es dividir los dos numeros, y entregar el resultado
            resolve(dividendo/divisor);
        }
    });
};

const sumar = (num1,num2)=>{
    return new Promise((resolve,reject)=>{
        if(num1 === 0 || num2 === 0){
            //rechazamos la solicitud de la division
            reject("No es posible sumar numeros con el valor cero");
        } else {
            //podemos cumplir la promesa que es dividir los dos numeros, y entregar el resultado
            resolve(num1+num2);
        }
    });
};

const multiplicar = (num1,num2)=>num1*num2;

const operaciones = async()=>{
    try{
        const resultado1 = await dividir(2,5);
        console.log("resultado1", resultado1);
        // const resultado2 = await dividir(2,0);
        // console.log("resultado2",resultado2);
        const resultado2 = await sumar(2,3);
        console.log("resultado2: ", resultado2);
        await sumar(0,1);
        const resultado3 = multiplicar(resultado1, resultado2);
        console.log("resultado3", resultado3);
    } catch(error){
        console.log(`Hubo un error: ${error}`);
    }
};

operaciones();