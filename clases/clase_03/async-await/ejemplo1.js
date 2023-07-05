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

const operaciones = async()=>{
    try{
        const resultado = await dividir(2,5);
        console.log("resultado", resultado);
        const resultado2 = await dividir(2,0);
        console.log("resultado2",resultado2);
    } catch(error){
        console.log(`Hubo un error ${error}`);
    }
};

operaciones();