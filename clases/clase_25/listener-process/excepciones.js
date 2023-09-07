process.on("uncaughtException",(error,origin)=>{
    console.log("Este evento captura errores de la aplicacion")
    console.log(error.message, "origin: ", origin)
});

funcionQueNoExiste();