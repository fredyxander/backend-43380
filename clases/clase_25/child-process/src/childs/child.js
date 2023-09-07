const sumar = ()=>{
    let total=0;
    for(let i=0;i<7e9;i++){
        total += i;
    }
    return total;
};

//proceso hijo
process.on("message", ()=>{
    const result = sumar();
    process.send(result);
});