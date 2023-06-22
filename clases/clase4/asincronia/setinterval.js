const contador = ()=>{
    let count=0;
    let timer = setInterval(() => {
        count++;
        console.log("codigo ejecutado", count);
        if(count>=5){
            clearInterval(timer);
        }
    }, 1000);
}

contador();
console.log("operacion1")
console.log("operacion2")
