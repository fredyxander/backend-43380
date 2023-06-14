class TicketManager{
    #precioBaseDeGanancia;//añade un costo adicional al precio del evento
    constructor(){
        this.eventos = [];
    };

    getEventos(){
        return this.eventos;
    };

    // {
    //     id:1,
    //     nombre:"pelicula",
    //     lugar:"cinema el sol",

    // }
    agregarEvento(nombre,lugar,precio,capacidad=50,fecha=(new Date()).toLocaleString()){
        // console.log(nombre,lugar,precio,capacidad,fecha);
        let newId;
        if(!this.eventos.length){
            newId=1;
        } else {
            newId = this.eventos[this.eventos.length-1].id+1
        };
        const nuevoEvento = {
            id:newId,
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            participantes:[]
        };
        this.eventos.push(nuevoEvento);
        console.log("nuevo evento creado", nuevoEvento);
    };

    agregarUsuario(idEvento, idUsuario){
        //evaluar que el evento exista.
        const eventoExiste = this.eventos.some((evento)=>{return evento.id === idEvento});
        if(!eventoExiste){
            console.log("este evento no esta disponible")
        } else {
            const posicionEvento = this.eventos.findIndex((evento)=>{return evento.id === idEvento});
            // console.log("posicionEvento: ",posicionEvento);
            const participantesEvento = this.eventos[posicionEvento].participantes;
            const usuarioExiste = participantesEvento.some((elm)=>elm=== idUsuario);
            if(usuarioExiste){
                console.log("el usuario ya fue agregado")
            } else {
                this.eventos[posicionEvento].participantes.push(idUsuario);
            }
        }
    };
};

const juanManager = new TicketManager();
console.log("juanManager:",juanManager);
// const eventosJuan = juanManager.getEventos();
console.log("eventosJuan",juanManager.getEventos());
juanManager.agregarEvento("Pelicula transformers","cinema el sol",200,100, new Date("2023-06-25"));
juanManager.agregarEvento("Boleta parque de diversiones","universal studios",2000,1000, new Date("2023-08-25"));
console.log("eventosJuan",juanManager.getEventos());
juanManager.agregarUsuario(2,10);
juanManager.agregarUsuario(2,15);
console.log("eventosJuan",juanManager.getEventos());
juanManager.agregarUsuario(2,10);
console.log("eventosJuan",juanManager.getEventos());



// const nombres = ["pepe","juan","laura"];
// console.log(nombres[2]);