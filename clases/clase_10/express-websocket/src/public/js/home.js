const socketClient = io();//instanciando socket del lado del cliente

//enviar un evento hacia el servidor
socketClient.emit("messageEvent", "Hola desde el cliente");

//recibir un evento del servidor
socketClient.on("eventoIndivual",(dataServer)=>{
    console.log(`datos recibidos del servidor ${dataServer}`);
});

socketClient.on("eventoTodosMenosActual",(data)=>{
    console.log(`datos para todos: ${data}`);
});

socketClient.on("eventoParaTodos",(data)=>{
    console.log(data);
});