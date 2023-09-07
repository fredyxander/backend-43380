process.on("exit",()=>{
    console.log("la aplicacion finalizo");
});

for(let i=0;i<1000;i++){
    console.log(i)
    // if(i===500){
    //     process.exit();
    // }
}