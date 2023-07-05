const funcionReceptora = (nombre,callback)=>{
    console.log("linea codigo 1");
    console.log("linea codigo 2");
    console.log("linea codigo 3");
    console.log(`Nombre del usuario: ${nombre}`);
    callback();
};

const notificacion = ()=>{
    console.log("la operacion ya termino de ejecutarse");
};

funcionReceptora("pepe",notificacion);