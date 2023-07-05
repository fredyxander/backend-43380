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

// console.log(dividir(2,5))
dividir(5,2).then((resultadoExitoso)=>{
    console.log(`La promesa se cumplio exitosamente ${resultadoExitoso}`)
}).catch((error)=>{
    console.log(`La promesa se rechazo ${error}`);
});

dividir(5,0).then((resultadoExitoso)=>{
    console.log(`La promesa se cumplio exitosamente ${resultadoExitoso}`)
}).catch((error)=>{
    console.log(`La promesa se rechazo ${error}`);
});