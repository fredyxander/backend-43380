process.on("exit", ()=>{
    console.log("Este codigo se ejecuta justo antes de terminar el proceso");
});

console.log("inicia programa");

setTimeout(() => {
    console.log("timeout finalizado");
}, 5000);